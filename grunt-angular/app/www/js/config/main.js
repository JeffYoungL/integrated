/**
 * Created by Lyj on 2016/7/6.
 */
/**
 * ui-router v0.3.1 has some problems with angular v1.5.8-build,
 * so changed ui-router to v0.2.18, angular to v1.5.7
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