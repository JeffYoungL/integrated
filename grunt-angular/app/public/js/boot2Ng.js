/**
 * Created by Lyj on 2016/7/6.
 */

define(['angular'], function(angular) {
    'use strict';
    require(['domReady!'], function(document){
        angular.bootstrap(document, ['app']);
    });
});
