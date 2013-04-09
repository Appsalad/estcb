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
        events: {
            'click .news:not(.selected)': 'openNews',
            'click .jobs:not(.selected)': 'openJobs',
            'click .meals:not(.selected)': 'openMeals',
            'click .warnings:not(.selected)': 'openWarnings'
        },
        openWarnings: function() {
            app.screen.open({screen: new app.views.screens.Warnings()});
        },
        openMeals: function() {
            app.screen.open({screen: new app.views.screens.Meals()});
        },
        openJobs: function() {
            app.screen.open({screen: new app.views.screens.Jobs()});
        },
        openNews: function() {
            app.screen.open({screen: new app.views.screens.News()});
        },
        className: 'menu',
        templateOption: _.template('<div class="option <%= className %>"><div class="label"><%= label %></div></div>'),
        render: function() {
            var self = this;
            this.$el.empty();
            _.each(this.options, function(option) {
                self.$el.append($(self.templateOption(option)));
            });
            try {
                this.$('.option').removeClass('selected');
                this.$('.' + app.screen.current.className).addClass('selected');
            }
            catch (e) {
            }

            return this;
        }

    });
}(window.app = window.app || {}));