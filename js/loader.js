requirejs.config({
    baseUrl: "lib",
    shim: {
        easel: {
            exports: "createjs"
        }
    },
    paths: {
        activity: "../js",
        easel: "../lib/easeljs",
        soundjs:"../lib/soundjs",
        handlebars: "../lib/handlebars",
    }
});

requirejs(["activity/activity"]);
