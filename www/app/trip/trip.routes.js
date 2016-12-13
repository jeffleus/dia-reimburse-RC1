(function() {
'use strict';

// tabbedItem.routes.js
angular
    .module('starter.routes')
    .run(appRun);

/* @ngInject */
function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
}

function getStates() {
    return [
        {
            state: 'app.trip',
            config: {
                url: '/trip',
                abstract: true, 
                views: {
                    'menuContent': {
                        templateUrl: 'app/trip/trip.view.html',
                        controller: 'TabbedItemCtrl'
                    }        
                }
            }
        }//, 
//        {
//            state: 'app.trip.home',
//            config: {
//                url: '/home',
//                views: {
//                    'tab-home': {
//                        templateUrl: 'app/trip/home/home.view.html',
//                        controller: 'HomeCtrl'
//                    }        
//                }
//            }
//        }, 
//        {
//            state: 'app.trip.dates',
//            config: {
//                url: '/dates',
//                views: {
//                    'tab-dates': {
//                        templateUrl: 'app/trip/dates/dates.view.html',
//                        controller: 'DatesCtrl'
//                    }        
//                }
//            }
//        }, 
//        {
//            state: 'app.trip.expenses',
//            config: {
//                url: '/expenses',
//                views: {
//                    'tab-expenses': {
//                        templateUrl: 'app/trip/expenses/expenses.view.html',
//                        controller: 'ExpensesCtrl'
//                    }        
//                }
//            }
//        }, 
//        {
//            state: 'app.trip.receipts',
//            config: {
//                url: '/receipts',
//                views: {
//                    'tab-receipts': {
//                        templateUrl: 'app/trip/receipts/receipts.view.html',
//                        controller: 'ReceiptsCtrl'
//                    }        
//                }
//            }
//        }, 
//        {
//            state: 'app.trip.notes',
//            config: {
//                url: '/notes',
//                views: {
//                    'tab-notes': {
//                        templateUrl: 'app/trip/notes/notes.view.html',
//                        controller: 'NotesCtrl'
//                    }        
//                }
//            }
//        }
    ];
}
})();