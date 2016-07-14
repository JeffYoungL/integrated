require(['routerModule'], function(routerModule) {
    console.log('init router...');
    routerModule.config([
        '$logProvider',
        '$stateProvider',
        '$urlRouterProvider',
        function($logProvider, $stateProvider, $urlRouterProvider){
            //enable logger
            $logProvider.debugEnabled(true);

            $urlRouterProvider.otherwise('home');
            $stateProvider
                .state('home', {
                    url: '/',
                    //controller: 'homeController',
                    template: '<p>This is home page.</p>'
                })
                .state('local', {
                    url: '/local',
                    //controller: 'localController',
                    template: '<p>This is local page</p>'
                });
        }]);
});