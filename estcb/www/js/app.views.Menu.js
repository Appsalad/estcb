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
                    label: 'Avisos',
                    className: 'warnings'
                }, {
                    label: 'Mapa',
                    className: 'map'
                }
            ];
            app.screen.on('open', this.render, this);
        },
        events: {
            'tap .news:not(.selected)': 'openNews',
            'tap .jobs:not(.selected)': 'openJobs',
            'tap .warnings:not(.selected)': 'openWarnings',
            'tap .map:not(.selected)': 'openMap',
            'click .news:not(.selected)': 'openNews',
            'click .jobs:not(.selected)': 'openJobs',
            'click .warnings:not(.selected)': 'openWarnings',
            'click .map:not(.selected)': 'openMap'
        },
        openMap: function() {
            app.screen.open({screen: new app.views.screens.Map(),
                reverse: false});
        },
        openWarnings: function() {
            var c = app.screen.current.className;
            app.screen.open({screen: new app.views.screens.Warnings(),
                reverse: c == 'map'});
        },
        openJobs: function() {
            var c = app.screen.current.className;
            app.screen.open({screen: new app.views.screens.Jobs(),
                reverse: c == 'warnings' || c == 'map'
            });
        },
        openNews: function() {
            app.screen.open({screen: new app.views.screens.News(),
                reverse: true
            });
        },
        className: 'menu',
        templateOption: _.template('<div class="option <%= className %>"><div class="icon"></div><div class="label"><%= label %></div></div>'),
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