/**
 * Created by Lyj on 2016/7/6.
 */

require(['angular', 'app'], function(angular) {
    'use strict';
    require(['domReady!'], function(document){
        console.log('boot 2 angular...');
        angular.bootstrap(document, ['app']);
    });
});
