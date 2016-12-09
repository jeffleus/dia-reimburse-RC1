(function() {
'use strict';

var ctrl = 'TabChildListCtrl';
angular.module('starter.controllers')

.controller(ctrl, function($scope, $log, $state) {
	$scope.vm = {
		message: 'This is a child tab with a list view reached from the menu.',
		items: ['One', 'Two', 'Three', 'Four', 'Five']
	};
	$scope.gotoChild = _gotoChild;
	
	$scope.$on('$ionicView.enter', function() {
		$log.info(ctrl + '_enter');
	});
	$scope.$on('$ionicView.leave', function() {
		$log.info(ctrl + '_leave');
	});
	
	function _gotoChild(item) {
		$state.go('app.gchild');
	}
});
})();