angular.module('blocks.email')

.service('EmailSvc', function($q, $cordovaEmailComposer, Pouch) {
    var self = this;    
    self.sendEmail = _sendEmail;    
    
    function _sendEmail(t, file) {
		return $cordovaEmailComposer.isAvailable().then(function() {
            var subj = t.title;
            subj += ": " + moment(t.startDate).format("M-D-YY");
            subj += (t.endDate)?" - " + moment(t.endDate).format("M-D-YY"):"";

            var b = 'Attached is a reimbursement report and associated receipt images.  Trip details are summarized in the pdf file.  All supporting receipt documentation is attached as a separate image file for each receipt.\n\n';
            b += "Purpose: " + t.purpose;
            
            var attachments = [ file ];
//            attachments = attachments.concat(_receiptArray(t));
//            var attachments = [];
            _receiptArray(t).then(function(imageArray) {
                attachments = attachments.concat(imageArray);
                return attachments;
            }).then(function(attachments) {
                var email = {
                    to: 'expensereport@athletics.ucla.edu', 
                    cc: 'akitagawa@athletics.ucla.edu',
                    subject: subj,
                    body: b, 
                    attachments: attachments
                };

                return $cordovaEmailComposer.open(email).catch(function(error) {
                    // user cancelled email
                    console.log('user canceled the email send');
                });                
            })            

		}).catch(function (error) {
		   // not available
			console.log('trouble with the email composer availability.');
		});
	}
    
    function _receiptArray(t) {
        var images = [];
        var chain = $q.when();
        if (t && t.receipts) {
            t.receipts.forEach(function(r) {
                chain = chain.then(function() {
                    return _getAttachmentBlob(r, t);
                }).then(function(blob) {
                    return _convertToBase64(blob);
                }).then(function(imageDataUrl) {
                    images.push(imageDataUrl);
                    return;
                });
            });
        }
        return chain.then(function() { return images; });
    }
    
    function _getAttachmentBlob(r, t) {
        return Pouch.db.getAttachment(t.receiptDocId, r.attachId)
            .then(function(imgBlob) {
                return imgBlob;
            }).catch(function(err) {
                console.error('Receipt_getImageUrl: ' + err);
                return;
            });        
    }
    
    function _convertToBase64(blob) {
        //wrap in $q ctor to convert from callback to promise design and get in angular scope
        return $q(function(resolve, reject) {
            var reader = new window.FileReader();
            reader.onload = function(e) {
                //process the fileReader base64 to be compatible w/ that expected by email composer
                base64data = reader.result.replace('data:image/jpeg;base64,', 'base64:image.jpg//');
                resolve( base64data );
            }
            reader.onerror = function(err) {
                console.error(err);
                reject(err);
            }
            reader.readAsDataURL(blob);
        });
    }
});