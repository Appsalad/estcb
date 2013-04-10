$(function(app, undefined) {

    app.collections.News = Backbone.Collection.extend({
        model: Backbone.Model,
        url: 'http://www.ipcb.pt/EST/',
        parse: function(response) {
            var result = [];
            response = $(response);
            response.find('.frontpage_main_noticias').each(function(i, item) {
                item = $(item);
                result.push({
                    title: item.find('h4').text().trim(),
                    image: item.find('img').attr('src'),
                    content: item.find('.frontpage_content_noticias').text().trim()
                });
            });
//            console.log(result);
            return result;
        },
        fetch: function(options) {
            options = _.extend(options || {}, {
                dataType: 'html'
            });
            return _.bind(Backbone.Collection.prototype.fetch, this)(options);
        }
    });

}(window.app = window.app || {})); 