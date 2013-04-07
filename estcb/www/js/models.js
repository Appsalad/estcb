(function(app, $, undefined) {

    $.extend(app, {
        models: {
            News: Backbone.Model.extend({
            }),
            Menu: Backbone.Model.extend({
            }),
            JobOffer: Backbone.Model.extend({
            })
        }
    });
})(window.app = window.app || {}, $);