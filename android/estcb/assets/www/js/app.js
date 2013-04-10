(function(app, undefined) {

    _.extend(app, {
        //
        // App domain structure
        data: {},
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

            // retrieve data
            app.data.news = new app.collections.News();
//            app.data.news.fetch();
            app.data.jobs = new app.collections.Jobs();
            app.data.jobs.fetch();
            app.data.warnings = new app.collections.Warnings();
            app.data.warnings.fetch();

            // Open first screen
            app.screen.open({screen: new app.views.screens.News()});
        },
        //
        // Your device is ready!
        ready: function() {
        }
    });

})(window.app = window.app || {});