(function() {
'use strict';

var ctrl = 'HomeCtrl';
angular.module('trip.home')

.controller(ctrl, function($scope, $log) {
	$scope.vm = {
		message: 'This is the home tab of a speecific trip view.'
	};
	
	$scope.$on('$ionicView.enter', function(event, data) {
		$log.info(ctrl + '_enter');
	});	
	$scope.$on('$ionicView.leave', function(event, data) {
		$log.info(ctrl + '_leave');
	});
});
})();