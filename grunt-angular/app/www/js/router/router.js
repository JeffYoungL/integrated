require(['routerModule'], function(routerModule) {
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
                    url: '/(home)?',
                    'homeController',
                    template: '<p>This is home page.</p>',
                    resolve: function(){

                    }
                })
                .state('local', {
                    url: '/local',
                    'localController',
                    template: '<p>This is local page</p>'
                });
        }]);
});