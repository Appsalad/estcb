(function(parser, $, undefined) {

    parser.schoolNews = function() {
        var url = 'http://www.ipcb.pt/EST';
        $.get(url, function(response) {
            $(response).find('.frontpageipcb_noticias > a').each(function(index) {
                new app.models.News();
            });
        });
    };

    parser.studentNews = function() {

    };

    parser.cantinaMenu = function() {
        //new app.models.Menu();
    };

    parser.jobOffers = function() {
        //new app.models.JobOffer();
    };
})(window.app.parser = window.app.parser || {}, $);