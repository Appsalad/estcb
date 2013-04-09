$(function(app, undefined) {

    app.collections.Warnings = Backbone.Collection.extend({
        model: Backbone.Model,
        url: 'http://www.ipcb.pt/EST/index.php/avisos-sa',
        parse: function(response) {
            var result = [];
            response = $(response);
            response.find('.quadro').each(function(i, item) {
                item = $(item);
                result.push({
                    title: item.find('.aviso').text().trim(),
                    data: item.html()
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