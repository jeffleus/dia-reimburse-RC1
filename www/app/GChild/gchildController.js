(function() {
'use strict';

var ctrl = 'GChildCtrl';
angular.module('starter.controllers')

.controller(ctrl, function($scope, $log) {
	$scope.vm = {
		message: 'This is a grand-child view reached from an item in a list view in a tabChildList view.'
	};
	
	$scope.$on('$ionicView.enter', function() {
		$log.info(ctrl + '_enter');
	});
	$scope.$on('$ionicView.leave', function() {
		$log.info(ctrl + '_leave');
	});
});
})();