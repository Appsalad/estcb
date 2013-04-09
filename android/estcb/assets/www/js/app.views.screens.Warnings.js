$(function(app, undefined) {

    app.views.screens.Warnings = Backbone.View.extend({
        initialize: function(options) {
            var self = this;
            
            this.on('open', function() {
                this.listenTo(app.data.warnings, 'add reset change remove', this.render, this);
            }, this);
            this.on('close', function() {
                this.stopListening(app.data.warnings);
            }, this);
        },
        className: 'warnings',
        templateEmpty: _.template('<div class="empty">Sem avisos para mostrar</div>'),
        templateNews: _.template('<div class="item"><h1><%= title %></h1></div>'),
        render: function() {
            var self = this;
            this.$el.empty();
            if (app.data.warnings.length) {
                app.data.warnings.each(function(warning) {
                    self.$el.append(self.templateNews({
                        title: warning.get('title'),
                    }));
                });
            }
            else {
                this.$el.html(this.templateEmpty());
            }
            return this;
        }

    });

}(window.app = window.app || {}));