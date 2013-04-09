$(function(app, undefined) {

    app.views.screens.Meals = Backbone.View.extend({
        initialize: function(options) {
            var self = this;

            this.on('open', function() {
                this.listenTo(app.data.meals, 'add reset change remove', this.render, this);
            }, this);
            this.on('close', function() {
                this.stopListening(app.data.meals);
            }, this);
        },
        events: {
            'click .item': 'openItem'
        },
        openItem: function(e) {
            try {
                var id = $(e.currentTarget).attr('data-id');
                meal = app.data.meals.get(id);
                window.open(meal.get('url'), '_blank','location=no');
            }
            catch (e) {
            }
        },
        className: 'meals',
        templateEmpty: _.template('<div class="empty">Sem ementas disponíveis</div>'),
        templateNews: _.template('<div class="item" data-id="<%= id %>"><h1><%= title %></h1></div>'),
        render: function() {
            var self = this;
            this.$el.empty();
            if (app.data.meals.length) {
                app.data.meals.each(function(meal) {
                    self.$el.append(self.templateNews({
                        id: meal.cid,
                        title: meal.get('title')
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