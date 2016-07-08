/**
 * Created by Lyj on 2016/7/6.
 */
requirejs.config({
    baseUrl: ".",
    paths: {
        app: "js/app",
        domReady: 'lib/requirejs-domready/domReady',
        angular: "lib/angular/angular"

    },
    shim: {
        angular: { exports: "angular" }
    },
    deps: ['app']
});

requirejs([], function() {
    console.error('asdf');
});