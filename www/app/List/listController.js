(function() {
'use strict';

var ctrl = 'ListCtrl';
angular.module('starter.controllers')

.controller(ctrl, function($scope, $log, $state) {

	$scope.vm = {
		message: 'This is a list view reached from the menu.',
		items: ['One', 'Two', 'Three']
	};
	$scope.gotoChild = _gotoChild;
	
	$scope.$on('$ionicView.enter', function() {
		$log.info(ctrl + '_enter');
	});
	$scope.$on('$ionicView.leave', function() {
		$log.info(ctrl + '_leave');
	});
	
	function _gotoChild(item) {
		$state.go('app.tabbed.item');
	}
});
})();