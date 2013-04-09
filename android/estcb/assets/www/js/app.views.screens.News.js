$(function(app, undefined) {

    app.views.screens.News = Backbone.View.extend({
        initialize: function(options) {
            var self = this;
            
            this.on('open', function() {
                this.listenTo(app.data.news, 'add reset change remove', this.render, this);
            }, this);
            this.on('close', function() {
                this.stopListening(app.data.news);
            }, this);
        },
        className: 'news',
        templateEmpty: _.template('<div class="empty">Sem notícias para mostrar</div>'),
        templateNews: _.template('<div class="item"><h1><%= title %></h1><div class="content"><img src="<%= image %>" /><%= content %></div></div>'),
        render: function() {
            var self = this;
            this.$el.empty();
            if (app.data.news.length) {
                app.data.news.each(function(news) {
                    self.$el.append(self.templateNews({
                        title: news.get('title'),
                        image: news.get('image'),
                        content: news.get('content')
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