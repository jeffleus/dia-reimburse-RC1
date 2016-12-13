(function() {
'use strict';

var ctrl = 'NotesCtrl';
angular.module('trip.notes')

.controller(ctrl, function($scope, $log) {
	$scope.vm = {
		message: 'This is the notes tab of a specific trip view.'
	};
	
	$scope.$on('$ionicView.enter', function(event, data) {
		$log.info(ctrl + '_enter');
	});	
	$scope.$on('$ionicView.leave', function(event, data) {
		$log.info(ctrl + '_leave');
	});
});
})();