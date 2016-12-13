(function() {
'use strict';

// expenses.routes.js
angular
    .module('trip.expenses')
    .run(appRun);

/* @ngInject */
function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
}

function getStates() {
    return [
        {
            state: 'app.single.expenses',
            config: {
                url: '/expenses',
                views: {
                    'tab-expenses': {
                        templateUrl: 'app/expense/expenses.view.html',
                        controller: 'ExpensesCtrl'
                    }        
                }
            }
        }
    ];
}
})();
