/**
 * Created by Lyj on 2016/7/6.
 */
define(['angular'], function (angular) {
    'use strict';
    return angular.module('app', [
        'app.controller',
        'app.router',
        'app.directive',
        'app.filter'
    ]);
});