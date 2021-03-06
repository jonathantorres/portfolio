(function(window) {

    var welcome,
        myName,
        myPortfolio,
        whomAmI,
        timeline;

    function Welcome() { }

    Welcome.prototype.init = function() {
        cacheSelectors();
        welcome.addClass('viewedSection');

        // My name is...
        myName = welcome.find('h2').first();
        var mynameChild = myName.children().remove();
        Utils.spanText(myName);
        myName.append(mynameChild);

        // And this is my...
        myPortfolio = welcome.find('h2').eq(1);
        var myPortfolioChild = myPortfolio.children().remove();
        Utils.spanText(myPortfolio);
        myPortfolio.append(myPortfolioChild);

        // Im a...
        whomAmI = welcome.find('h3');
        var whomAmIChild = whomAmI.children().detach();
        Utils.spanText(whomAmI);
        whomAmI.append(whomAmIChild);

        // animations
        timeline = new TimelineMax();
        timeline.staggerFrom(myName.find('span.a'), 0.3, { opacity : 0, ease : Expo.easeOut }, 0.05);
        timeline.from(myName.find('span.johnred'), 0.8, { opacity : 0, ease : Expo.easeOut }, '-=0.2');
        timeline.staggerFrom(myPortfolio.find('span.a'), 0.3, { opacity : 0, ease : Expo.easeOut }, 0.05, '-=0.8');
        timeline.from(myPortfolio.find('span.johnred'), 0.8, { opacity : 0, ease : Expo.easeOut }, '-=0.2');
        timeline.staggerFrom(whomAmI.find('span.a'), 0.3, { opacity : 0, ease : Expo.easeOut }, 0.03, '-=0.8');
        timeline.from(whomAmI.find('a.johnsquared'), 0.8, { opacity : 0, ease : Expo.easeOut }, '-=0.2');
    };

    /**
     * Selectors
     */
    var cacheSelectors = function() {
        welcome = $('#welcome');
    };

    window.Welcome = Welcome;

}(window));
