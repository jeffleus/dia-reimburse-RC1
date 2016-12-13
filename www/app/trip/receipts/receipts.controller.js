(function() {
'use strict';

var ctrl = 'ReceiptsCtrl';
angular.module('trip.receipts')

.controller(ctrl, function($scope, $log) {
	$scope.vm = {
		message: 'This is the receipts tab of a specific trip view.'
	};
	
	$scope.$on('$ionicView.enter', function(event, data) {
		$log.info(ctrl + '_enter');
	});	
	$scope.$on('$ionicView.leave', function(event, data) {
		$log.info(ctrl + '_leave');
	});
});
})();