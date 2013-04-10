$(function(app, undefined) {

    app.views.screens.Jobs = Backbone.View.extend({
        initialize: function(options) {
            var self = this;
            
            this.on('open', function() {
                this.listenTo(app.data.jobs, 'add reset change remove', this.render, this);
            }, this);
            this.on('close', function() {
                this.stopListening(app.data.jobs);
            }, this);
        },
        events: {
            'swipe': 'switchScreen'
        },
        switchScreen: function(e) {
            if (e.direction == 'left') {
                app.screen.open({screen: new app.views.screens.Warnings()});
            }
            else if (e.direction == 'right') {
                app.screen.open({screen: new app.views.screens.News(), reverse: true});
            }
        },
        className: 'jobs',
        templateEmpty: _.template('<div class="empty">Sem anúncios para mostrar</div>'),
        templateJobs: _.template('<div class="item"><%= title %></div>'),
        render: function() {
            var self = this;
            this.$el.empty();
            if (app.data.jobs.length) {
                app.data.jobs.each(function(job) {
                    self.$el.append(self.templateJobs({
                        title: job.get('title')
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