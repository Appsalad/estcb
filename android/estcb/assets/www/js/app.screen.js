$(function(app, undefined) {

    app.screen = {
        // 
        // Current screen
        current: null,
        //
        // Open a screen
        open: function(options) {
            var oldScreen = app.screen.current;
            var newScreen = options.screen;
            var transition = {
                start: options.reverse ? 'left' : 'right',
                end: options.reverse ? 'right' : 'left'
            };
            
            app.screen.current = newScreen;

            // Position new screen on the DOM
            newScreen.render().$el
                    .removeClass('transition')
                    .addClass('screen')
                    .addClass(transition.start)
                    .appendTo('body');

            // Screen transition: started with a 0 timeout for separated thread
            setTimeout(function() {
                newScreen.$el.removeClass(transition.start);
                if (oldScreen)
                    oldScreen.$el.addClass(transition.end);
            }, 0);

            // Remove old screen after the transition (we are using css transitions, so no callbacks available
            setTimeout(function() {
                if (oldScreen) {
                    oldScreen.remove();
                    oldScreen.removeClass(transition.end);
                }
            }, 1000);
            
            this.trigger('open', newScreen);
        }
    };
    
    // add event support to screen object
    _.extend(app.screen, Backbone.Events);

}(window.app = window.app || {}));