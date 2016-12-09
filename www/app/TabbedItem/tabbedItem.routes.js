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
            state: 'app.tabbed',
            config: {
                url: '/tabbed',
                abstract: true, 
                views: {
                    'menuContent': {
                        templateUrl: 'app/TabbedItem/tabbedItemView.html',
                        controller: 'TabbedItemCtrl'
                    }        
                }
            }
        }, 
        {
            state: 'app.tabbed.item',
            config: {
                url: '/item',
                views: {
                    'tab-item': {
                        templateUrl: 'app/TabChildItem/tabChildItemView.html',
                        controller: 'TabChildItemCtrl'
                    }        
                }
            }
        }, 
        {
            state: 'app.tabbed.list',
            config: {
                url: '/list',
                views: {
                    'tab-list': {
                        templateUrl: 'app/TabChildList/tabChildListView.html',
                        controller: 'TabChildListCtrl'
                    }        
                }
            }
        }
    ];
}
})();