$(function(app, undefined) {

    app.views.screens.Map = Backbone.View.extend({
        initialize: function(options) {
            this.on('open', function() {

            }, this);
        },
        events: {
            'tap [name=findPath]': 'openGoogleMaps',
            'swipe': 'switchScreen'
        },
        switchScreen: function(e) {
            if (e.direction == 'right') {
                app.screen.open({screen: new app.views.screens.Warnings(), reverse: true});
            }
        },
        openGoogleMaps: function() {
            var self = this;
            // Get current location
            navigator.geolocation.getCurrentPosition(function(position) {
                // Open google maps site
                window.open(self.templateDirectionsURL(position.coords), '_blank');
            }, function() {
                // Error
                navigator.notification.alert('Impossível aceder à localização', function() {
                }, 'Erro', 'Ok');
            }, {
                enableHighAccuracy: true,
                timeout: 30000
            });

        },
        className: 'map',
        template: _.template('<img class="location" src="http://maps.googleapis.com/maps/api/staticmap?center=39.819505,-7.512344&markers=red|39.819505,-7.512344&size=800x480&zoom=16&sensor=false" /><button type="button" name="findPath">Obter direcções</button>'),
        templateDirectionsURL: _.template('http://maps.google.com?saddr=<%= latitude %>,<%= longitude %>&daddr=39.819505,-7.512344&directionsmode=driving'),
        render: function() {
            var self = this;

            this.$el.html(this.template());

            return this;
        }

    });

}(window.app = window.app || {}));