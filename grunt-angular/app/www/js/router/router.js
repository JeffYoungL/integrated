require(['routerModule'], function(routerModule) {
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
                    controller: 'homeController',
                    template: '<p>This is home page.</p>',
                    resolve: {
                        loadCtrl: function () {
                            
                        }
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