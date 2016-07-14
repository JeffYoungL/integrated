/**
 * Created by Lyj on 2016/7/6.
 */
requirejs.config({
    baseUrl: ".",
    paths: {
        domReady: "lib/requirejs-domready/domReady",
        angular: "lib/angular/angular",
        uiRouter: "lib/angular-ui-router/angular-ui-router",

        controllerModule: "js/controller/module",
        directiveModule: "js/directive/module",
        routerModule: "js/router/module",
        filterModule: "js/filter/module",

        router: "js/router/router",

        boot2ng: "js/boot2ng",
        app: "js/app"

    },
    shim: {
        angular: { exports: "angular" },
        uiRouter: {
            deps:['angular'],
            exports: 'uiRouter'
        }
    },
    deps: ['boot2ng']
});