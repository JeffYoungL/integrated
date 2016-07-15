require(['routerModule', 'depsResolver'], function(routerModule, depsResolver) {
    console.log('start config router...');
    routerModule.config([
        '$logProvider',
        '$stateProvider',
        '$urlRouterProvider',
        function($logProvider, $stateProvider, $urlRouterProvider){
            //enable logger
            console.log('enable debug');
            $logProvider.debugEnabled(true);

            $urlRouterProvider.otherwise('home');
            $stateProvider
                .state('home', {
                    url: '/home',
                    controller: 'HomeController',
                    template: '<p>This is home page.</p>' +
                                '<form><label>{{userInfo.userName}}</label>' +
                                        '<label>{{userInfo.password}}</label></form>',
                    /*resolve: {
                        loadCtrl: ['$q', function ($q) {
                            console.log('lazy load controller...');
                            var defered = $q.defer();
                            require(['homeController'], function () {
                                defered.resolve();
                            });
                            return defered.promise;
                        }]
                    }*/
                    resolve: depsResolver(['homeController'])
                })
                .state('local', {
                    url: '/local',
                    controller: 'LocalController',
                    template: '<p>This is local page.</p>' +
                                '<form><label>{{userInfo.userName}}</label>' +
                                        '<label>{{userInfo.password}}</label></form>',
                    resolve: depsResolver(['localController'])
                });
            console.log('callback finised.');
        }]);

    console.log('config finished...');
});