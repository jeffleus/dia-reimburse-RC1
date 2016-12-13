(function() {
'use strict';

var ctrl = 'DatesCtrl';
angular.module('trip.dates')

.controller(ctrl, function($scope, $log) {
	$scope.vm = {
		message: 'This is the dates tab of a specific trip view.'
	};
	
	$scope.$on('$ionicView.enter', function(event, data) {
		$log.info(ctrl + '_enter');
	});	
	$scope.$on('$ionicView.leave', function(event, data) {
		$log.info(ctrl + '_leave');
	});
});
})();