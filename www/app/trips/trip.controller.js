angular.module('app.trips')

.controller('TripCtrl', function($scope, $state) {
    $scope.gotoTrips = _gotoTrips;

    
    
    function _gotoTrips() {
        $state.go('app.trips');
    };
});