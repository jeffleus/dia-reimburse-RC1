(function() {
'use strict';

// list.routes.js
angular
    .module('starter.routes', ['blocks.router'])
    .run(appRun);

/* @ngInject */
function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
}

function getStates() {
    return [
        {
            state: 'app.item',
            config: {
                url: '/item',
                views: {
                    'menuContent': {
                        templateUrl: 'app/Item/itemView.html',
                        controller: 'ItemCtrl'
                    }        
                }
            }
        }
    ];
}
})();