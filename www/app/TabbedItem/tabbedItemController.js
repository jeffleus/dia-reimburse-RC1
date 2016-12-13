(function() {
'use strict';

var ctrl = 'TabbedItemCtrl';
angular.module('starter.controllers')

.controller(ctrl, function($scope, $log) {
	$scope.vm = {
		message: 'This is an abstract TabbedItem controller from the menu.'
	};
	
	$scope.$on('$ionicView.enter', function() {
//		$log.info(ctrl + '_enter');
	});
	$scope.$on('$ionicView.leave', function() {
//		$log.info(ctrl + '_leave');
	});
});
})();
