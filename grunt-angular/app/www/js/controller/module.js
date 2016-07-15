/**
 * Created by Lyj on 2016/7/6.
 */
define(['angular'], function (angular) {
    'use strict';
    var controllerModule = angular.module('app.controller', []);
    controllerModule.config(function ($controllerProvider) {
        controllerModule.register = {
            controller: $controllerProvider.register
        };
    });

    return controllerModule;
});