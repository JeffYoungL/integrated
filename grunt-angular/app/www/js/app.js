/**
 * Created by Lyj on 2016/7/6.
 */
/**
 * define a global super module that holds all features.
 * it depends on a few of parent modules created for different purpose.
 */
define(['angular', 'routerModule', 'controllerModule', 'directiveModule', 'filterModule'], function (angular) {
    'use strict';
    return angular.module('TheOne', [
        'app.router',
        'app.controller',
        'app.directive',
        'app.filter'
    ]);
});