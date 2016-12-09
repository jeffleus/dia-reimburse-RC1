(function() {
'use strict';

// item.routes.js
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
            state: 'app.list',
            config: {
                url: '/list',
                views: {
                    'menuContent': {
                        templateUrl: 'app/List/listView.html',
                        controller: 'ListCtrl'
                    }        
                }
            }
        }
    ];
}
})();