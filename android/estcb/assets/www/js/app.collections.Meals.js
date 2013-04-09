$(function(app, undefined) {

    app.collections.Meals = Backbone.Collection.extend({
        model: Backbone.Model,
        url: 'http://www.ipcb.pt/EST/index.php/ementa-da-cantina',
        parse: function(response) {
            var result = [];
            response = $(response);
            response.find('.tabs dd').eq(0).find('a').each(function(i, item) {
                item = $(item);
                result.push({
                    title: item.text().trim(),
                    url: 'http://www.ipcb.pt'+item.attr('href')
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