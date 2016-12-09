(function() {
'use strict';

var ctrl = 'ChildCtrl';
angular.module('starter.controllers')

.controller(ctrl, function($scope, $log) {
	$scope.vm = {
		message: 'This is a child view reached from an item in a list view.'
	};
	
	$scope.$on('$ionicView.enter', function() {
		$log.info(ctrl + '_enter');
	});
	$scope.$on('$ionicView.leave', function() {
		$log.info(ctrl + '_leave');
	});
});
})();