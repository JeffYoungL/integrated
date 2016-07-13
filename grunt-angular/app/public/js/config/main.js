/**
 * Created by Lyj on 2016/7/6.
 */
requirejs.config({
    baseUrl: ".",
    paths: {
        domReady: 'lib/requirejs-domready/domReady',
        angular: "lib/angular/angular",
        "ui-router": "lib/angular-route/angular-route",

        controllerModule: "controller/module",
        directiveModule: "directive/module",
        routerModule: "router/module",

        boot2ng: "js/boot2ng",
        app: "js/app.js"

    },
    shim: {
        angular: { exports: "angular" },
        "ui-router": {
            deps:['angular'],
            exports: 'ui-router'
        }
    },
    deps: ['boot']
});