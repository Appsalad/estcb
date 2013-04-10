$(function(app, undefined) {

    app.views.Header = Backbone.View.extend({
        className: 'header',
        initialize: function() {
            app.screen.on('open', this.render, this);
        },
        template: _.template('<div class="icon"></div><div class="title"><%= title %></title>'),
        render: function() {
            var data;
            if (app.screen.current) {
                data = {
                    title: app.screen.title || 'ESTCB',
                };
            }
            else {
                data = {
                    title: 'ESTCB'
                };
            }
            this.$el.html(this.template(data));
            
            return this;
        }

    });

}(window.app = window.app || {}));