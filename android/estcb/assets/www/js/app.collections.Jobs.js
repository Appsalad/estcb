$(function(app, undefined) {

    app.collections.Jobs = Backbone.Collection.extend({
        model: Backbone.Model,
        url: 'http://www.ipcb.pt/EST/index.php/ofertas-de-emprego-e-estagios',
        parse: function(response) {
            var result = [];
            response = $(response);
            response.find('.cat-list-row0').each(function(i, item) {
                item = $(item);
                result.push({
                    title: item.find('a').text().trim(),
                    url: item.find('a').attr('href')
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