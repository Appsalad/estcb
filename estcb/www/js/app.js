(function(app, undefined) {
    app.initialize = function() {
        document.addEventListener('deviceready', app.ready, false);
    };

    app.ready = function() {

    };
})(app = window.app || {});