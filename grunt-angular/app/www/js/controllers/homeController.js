/**
 * Created by lyj on 7/14/16.
 */
define(['controllerModule'], function (controllerModule) {
    console.log('creating controller provider...');
    controllerModule.register.controller('HomeController', [
        '$scope',
        'pageService',
        function ($scope, pageService) {

            console.log('creating HomeController');
            $scope.userInfo = {
                userName: 'tom@lgd.com',
                password: pageService.pageTitle
            };
        }]);
});