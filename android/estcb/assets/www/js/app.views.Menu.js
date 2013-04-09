$(function(app, undefined) {

    app.views.Menu = Backbone.View.extend({
        initialize: function() {
            this.options = [
                {
                    label: 'Notícias',
                    className: 'news'
                }, {
                    label: 'Emprego',
                    className: 'jobs'
                }, {
                    label: 'Ementas',
                    className: 'meals'
                }, {
                    label: 'Avisos',
                    className: 'warnings'
                }
            ];
            
            app.screen.on('open', this.render, this);
        },
        className: 'menu',
        templateOption: _.template('<div class="option <%= className %>"><div class="label"><%= label %></div></div>'),
        render: function() {
            var self = this;
            this.$el.empty();

            _.each(this.options, function(option) {
                self.$el.append($(self.templateOption(option)));
            });

            return this;
        }

    });

}(window.app = window.app || {}));