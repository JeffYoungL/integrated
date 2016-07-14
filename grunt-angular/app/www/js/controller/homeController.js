/**
 * Created by lyj on 7/14/16.
 */
define(['controllerModule'], function(controllerModule) {
    controllerModule.controller('HomeController', [
        '$scope'
    ],
    function ($scope) {
        $scope.userInfo = {
            userName: 'tom@lgd.com',
            password: '****'
        };
    });
});