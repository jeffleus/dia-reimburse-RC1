(function() {
'use strict';

var ctrl = 'ItemCtrl';
angular.module('starter.controllers')

.controller(ctrl, function($scope, logger) {
	$scope.vm = {
		message: 'This is a single item view reached from the menu.'
	};
	
	$scope.$on('$ionicView.enter', function() {
		logger.info(ctrl + '_enter');
	});
	$scope.$on('$ionicView.leave', function() {
		logger.info(ctrl + '_leave');
	});
    
    $scope.showToast = function(msg) {
//        logger.error(msg);
        throw new Error('testing the new logger and exHandler')
    }
});
})();