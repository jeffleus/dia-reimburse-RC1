(function() {
'use strict';

var ctrl = 'TabChildItemCtrl';
angular.module('starter.controllers')

.controller(ctrl, function($scope, $log) {
	$scope.vm = {
		message: 'This is a basic item in a tab view reached from the menu.'
	};
	
	$scope.$on('$ionicView.enter', function() {
		$log.info(ctrl + '_enter');
	});	
	$scope.$on('$ionicView.leave', function() {
		$log.info(ctrl + '_leave');
	});
});
})();