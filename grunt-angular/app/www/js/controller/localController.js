/**
 * Created by lyj on 7/14/16.
 */
define(['controllerModule'], function (controllerModule) {
    console.log('creating controller provider...');
    controllerModule.register.controller('LocalController', ['$scope', function ($scope) {

            console.log('creating LocalController');
            $scope.userInfo = {
                userName: 'Jim@wcg.com',
                password: '****'
            };
        }]);
});