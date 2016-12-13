(function() {
'use strict';

var ctrl = 'TripCtrl';
angular.module('app.trips')

.controller(ctrl, function($scope, $state) {
    $scope.gotoTrips = _gotoTrips;
    
	$scope.$on('$ionicView.enter', function() {
		$log.info('Enter Controller: ' + ctrl);
	});
	$scope.$on('$ionicView.leave', function() {
		$log.info('Leave Controller: ' + ctrl);
	});
    
    function _gotoTrips() {
        $state.go('app.trips');
    };
});
})();