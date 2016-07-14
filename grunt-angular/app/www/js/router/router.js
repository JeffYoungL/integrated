require(['routerModule'], function(routerModule) {
    console.log('start config router...');
    routerModule.config(['', function () {

    }]).config([
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
                    template: '<p>This is home page.</p>',
                    resolve: {
                        loadCtrl: ['$q', function ($q) {
                            console.log('lazy load controller...');
                            var defered = $q.defer();
                            require(['homeController'], function () {
                                defered.resolve();
                            });
                            return defered.promise;
                        }]
                    }
                })
                .state('local', {
                    url: '/local',
                    //controller: 'localController',
                    template: '<p>This is local page</p>'
                });
            console.log('callback finised.');
        }]);

    console.log('config finished...');
});