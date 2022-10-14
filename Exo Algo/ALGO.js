critics = {
        'Lisa Rose': {
            'Lady in the Water': 2.5,
            'Snakes on a Plane': 3.5,
            'Just My Luck': 3.0,
            'Superman Returns': 3.5,
            'You, Me and Dupree': 2.5,
            'The Night Listener': 3.0
        },
        'Gene Seymour': {
            'Lady in the Water': 3.0, 
            'Snakes on a Plane': 3.5,
            'Just My Luck': 1.5, 
            'Superman Returns': 5.0, 
            'The Night Listener': 3.0,
            'You, Me and Dupree': 3.5
        },
        'Michael Phillips': {
            'Lady in the Water': 2.5,
            'Snakes on a Plane': 3.0,
            'Superman Returns': 3.5,
            'The Night Listener': 4.0
        },
        'Claudia Puig': {
            'Snakes on a Plane': 3.5, 
            'Just My Luck': 3.0,
            'The Night Listener': 4.5,
            'Superman Returns': 4.0,
            'You, Me and Dupree': 2.5
        },
        'Mick LaSalle': {
            'Lady in the Water': 3.0,
             'Snakes on a Plane': 4.0,
            'Just My Luck': 2.0,
            'Superman Returns': 3.0,
            'The Night Listener': 3.0,
            'You, Me and Dupree': 2.0
        },
        'Jack Matthews': {
            'Lady in the Water': 3.0,
             'Snakes on a Plane': 4.0,
            'The Night Listener': 3.0,
            'Superman Returns': 5.0,
            'You, Me and Dupree': 3.5},
        'Toby': {
            'Snakes on a Plane':4.5,
            'You, Me and Dupree':1.0,
            'Superman Returns':4.0}
    };


function pearson_correlation (critictsFile, person1, person2) {
    communMovies = [];

    for (movie1 in critictsFile[person1]) {
        for(movie2 in critictsFile[person2]) {
            if(movie1 == movie2) {
                communMovies.push(movie1)
            }
        }
    }

    firstPersonRates = getRates(critictsFile, communMovies, person1);
    secondPersonRates = getRates(critictsFile, communMovies, person2);


    result =    (
                communMovies.length *
                getSum(getMul(firstPersonRates, secondPersonRates)) - 
                getSum(firstPersonRates) *
                getSum(secondPersonRates) 
                ) /
                Math.sqrt(
                    (
                        communMovies.length *
                        getSum(getSquared(firstPersonRates)) -
                        Math.pow(getSum(firstPersonRates), 2)
                    ) *
                    (
                        communMovies.length *
                        getSum(getSquared(secondPersonRates)) -
                        Math.pow(getSum(secondPersonRates), 2)
                    )
                );

    return result;
}

function getRates(critics, movies, person) {
    rates = []
    for ( let i = 0; i < movies.length; i++ ) {
        rates.push(critics[person][movies[i]])
    }
    return rates;
}

function getSum(ratesTab) {
    return ratesTab.reduce(function(acc, val) { return acc + val; }, 0)
}

function getMul(firstTab, secondTab){
    tab = []

    for( let i = 0; i < firstTab.length; i++) {
        tab.push(firstTab[i] * secondTab[i])
    }

    return tab;
}

function getSquared(tab) {
    tprTab = []
    for( let i = 0; i < tab.length; i++) {
        tprTab.push(Math.pow(tab[i], 2))
    }
    return tprTab;
}

pearson_correlation(critics, "Lisa Rose", "Gene Seymour")