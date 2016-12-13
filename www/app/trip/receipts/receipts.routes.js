(function() {
'use strict';

// receipts.routes.js
angular
    .module('trip.receipts')
    .run(appRun);

/* @ngInject */
function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
}

function getStates() {
    return [
        {
            state: 'app.trip.receipts',
            config: {
                url: '/receipts',
                views: {
                    'tab-receipts': {
                        templateUrl: 'app/trip/receipts/receipts.view.html',
                        controller: 'ReceiptsCtrl'
                    }        
                }
            }
        }
    ];
}
})();