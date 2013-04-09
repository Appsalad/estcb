(function(app, undefined) {

    _.extend(app, {
        //
        // App domain structure
        models: {},
        collections: {},
        views: {
            screens: {}
        },
        //
        // Initialization of structures
        initialize: function() {
            
            // Add header + menu
            new app.views.Header().render().$el.appendTo('body');
            new app.views.Menu().render().$el.appendTo('body');
            
            // Add a screen wrapper
//            $('body').append('<div id="wrapper"></div>');
            
            // Open first screen
            app.screen.open({screen: new app.views.screens.News()});
            
        },
        //
        // Open screen
        ready: function() {
        }
    });

})(window.app = window.app || {});