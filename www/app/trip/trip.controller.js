(function() {
'use strict';

var ctrl = 'TripCtrl';
angular.module('app.trip')

.controller(ctrl, function($scope, $log) {
	$scope.vm = {
		message: 'This is a tabbed trip controller from the menu.'
	};
	
	$scope.$on('$ionicView.enter', function() {
//		$log.info(ctrl + '_enter');
	});
	$scope.$on('$ionicView.leave', function() {
//		$log.info(ctrl + '_leave');
	});
});
})();