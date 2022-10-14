// Le problème à résoudre lesVous devez organiser une conférence qui se tiendra à Londres du 28 juillet au 3 août 2010
// Les 9 participants viennent respectivement de:
// Berlin (BER)
// Paris (CDG)
// Marseille (MRS)
// Lyon (LYS)
// Manchester (MAN)
// Bilbao (BIO)
// New York (JFK)
// Tunis (TUN)
// Milan (MXP)


// La conférence Se déroule du
// Du 27 juillet à 18h00 au 3 août à 14h00
// Tout le monde doit être présent à ces heures
// Se tient à 50 kilomètres de Londres
// Le trajet prend une heure aller, une heure retour
// Un mini bus prend tout le monde à l’aller et au retour
// Les coûts sont de 
// 1 € par kilomètre
// 150 € si le véhicule est rendu avant 18h00, après 18h00, une pénalité de 100 € est appliquée.
// Le loueur est à l’aéroport


// Objectif :
// Trouver les meilleurs vols (allers et retours) afin que:
// Cela vous coûte le moins possible
// Les gens voyagent le moins de temps possible
// Le temps d’attente d’une personne soit le plus petit possible
// Une personne qui a beaucoup attendu à l’aller ne doit pas attendre beaucoup au retour
const fs = require('fs');
const person = { BER: {}, BIO: {}, CDG: {}, JFK: {}, LYS: {}, MAN: {}, MRS: {}, MXP: {}, TUN: {} }
let flightsJson = {};

const createBigJson = () => {
    const folder = fs.readdirSync('./json-2010');

    folder.forEach(subFolder => {
        if (subFolder.startsWith(".")) return;
        const subF = fs.readdirSync(`./json-2010/${subFolder}`);
        subF.forEach(jsonFile => {
            if (jsonFile.startsWith(".")) return;
            const json = require(`./json-2010/${subFolder}/${jsonFile}`)
            const flights = json.flights.flight
            const key = jsonFile.split('.')[0]

            flightsJson[key] = {...flightsJson[key], flights };

        })
    })
}

/*
Vous devez organiser une conférence qui se tiendra à Londres du 28 juillet au 3 août 2010
Les 9 participants viennent respectivement de:
Berlin (BER)
Paris (CDG)
Marseille (MRS)
Lyon (LYS)
Manchester (MAN)
Bilbao (BIO)
New York (JFK)
Tunis (TUN)
Milan (MXP)
*/
class Participant {
    constructor(dest) {
        this.dest = dest;
    }
}


const event_start = new Date("2010-07-27T17:00:00")
const event_end = new Date("2010-08-03T13:00:00")


//read json file
const flightsData = {
    "flights": {
        "flight": [
            {
                "price": [
                    "96"
                ],
                "stops": [
                    "0"
                ],
                "orig": [
                    "TXL"
                ],
                "dest": [
                    "LHR"
                ],
                "depart": [
                    "2010-07-26T16:40:00"
                ],
                "arrive": [
                    "2010-07-26T17:35:00"
                ],
                "airline_display": [
                    "British Airways"
                ]
            },
            {
                "price": [
                    "96"
                ],
                "stops": [
                    "0"
                ],
                "orig": [
                    "TXL"
                ],
                "dest": [
                    "LHR"
                ],
                "depart": [
                    "2010-07-26T19:55:00"
                ],
                "arrive": [
                    "2010-07-26T20:55:00"
                ],
                "airline_display": [
                    "British Airways"
                ]
            },
            {
                "price": [
                    "96"
                ],
                "stops": [
                    "0"
                ],
                "orig": [
                    "TXL"
                ],
                "dest": [
                    "LHR"
                ],
                "depart": [
                    "2010-07-26T07:20:00"
                ],
                "arrive": [
                    "2010-07-26T08:25:00"
                ],
                "airline_display": [
                    "British Airways"
                ]
            },
            {
                "price": [
                    "100"
                ],
                "stops": [
                    "0"
                ],
                "orig": [
                    "TXL"
                ],
                "dest": [
                    "LHR"
                ],
                "depart": [
                    "2010-07-26T18:10:00"
                ],
                "arrive": [
                    "2010-07-26T19:05:00"
                ],
                "airline_display": [
                    "bmi"
                ]
            },
            {
                "price": [
                    "100"
                ],
                "stops": [
                    "0"
                ],
                "orig": [
                    "TXL"
                ],
                "dest": [
                    "LHR"
                ],
                "depart": [
                    "2010-07-26T21:20:00"
                ],
                "arrive": [
                    "2010-07-26T22:15:00"
                ],
                "airline_display": [
                    "bmi"
                ]
            },
            {
                "price": [
                    "114"
                ],
                "stops": [
                    "0"
                ],
                "orig": [
                    "TXL"
                ],
                "dest": [
                    "LHR"
                ],
                "depart": [
                    "2010-07-26T11:05:00"
                ],
                "arrive": [
                    "2010-07-26T12:05:00"
                ],
                "airline_display": [
                    "British Airways"
                ]
            },
            {
                "price": [
                    "114"
                ],
                "stops": [
                    "0"
                ],
                "orig": [
                    "TXL"
                ],
                "dest": [
                    "LHR"
                ],
                "depart": [
                    "2010-07-26T14:25:00"
                ],
                "arrive": [
                    "2010-07-26T15:25:00"
                ],
                "airline_display": [
                    "British Airways"
                ]
            },
            {
                "price": [
                    "118"
                ],
                "stops": [
                    "0"
                ],
                "orig": [
                    "TXL"
                ],
                "dest": [
                    "LHR"
                ],
                "depart": [
                    "2010-07-26T13:10:00"
                ],
                "arrive": [
                    "2010-07-26T14:05:00"
                ],
                "airline_display": [
                    "bmi"
                ]
            },
            {
                "price": [
                    "137"
                ],
                "stops": [
                    "0"
                ],
                "orig": [
                    "TXL"
                ],
                "dest": [
                    "LHR"
                ],
                "depart": [
                    "2010-07-26T12:20:00"
                ],
                "arrive": [
                    "2010-07-26T13:15:00"
                ],
                "airline_display": [
                    "British Airways"
                ]
            },
            {
                "price": [
                    "140"
                ],
                "stops": [
                    "0"
                ],
                "orig": [
                    "TXL"
                ],
                "dest": [
                    "LHR"
                ],
                "depart": [
                    "2010-07-26T18:10:00"
                ],
                "arrive": [
                    "2010-07-26T19:05:00"
                ],
                "airline_display": [
                    "Lufthansa"
                ]
            },
            {
                "price": [
                    "140"
                ],
                "stops": [
                    "0"
                ],
                "orig": [
                    "TXL"
                ],
                "dest": [
                    "LHR"
                ],
                "depart": [
                    "2010-07-26T21:20:00"
                ],
                "arrive": [
                    "2010-07-26T22:15:00"
                ],
                "airline_display": [
                    "Lufthansa"
                ]
            },
            {
                "price": [
                    "144"
                ],
                "stops": [
                    "0"
                ],
                "orig": [
                    "TXL"
                ],
                "dest": [
                    "LHR"
                ],
                "depart": [
                    "2010-07-26T13:10:00"
                ],
                "arrive": [
                    "2010-07-26T14:05:00"
                ],
                "airline_display": [
                    "Lufthansa"
                ]
            },
            {
                "price": [
                    "159"
                ],
                "stops": [
                    "1"
                ],
                "orig": [
                    "TXL"
                ],
                "dest": [
                    "LHR"
                ],
                "depart": [
                    "2010-07-26T13:50:00"
                ],
                "arrive": [
                    "2010-07-26T16:55:00"
                ],
                "airline_display": [
                    "SAS"
                ]
            },
            {
                "price": [
                    "195"
                ],
                "stops": [
                    "1"
                ],
                "orig": [
                    "TXL"
                ],
                "dest": [
                    "LHR"
                ],
                "depart": [
                    "2010-07-26T15:45:00"
                ],
                "arrive": [
                    "2010-07-26T19:10:00"
                ],
                "airline_display": [
                    "SAS"
                ]
            },
            {
                "price": [
                    "217"
                ],
                "stops": [
                    "0"
                ],
                "orig": [
                    "TXL"
                ],
                "dest": [
                    "LHR"
                ],
                "depart": [
                    "2010-07-26T07:25:00"
                ],
                "arrive": [
                    "2010-07-26T08:25:00"
                ],
                "airline_display": [
                    "bmi"
                ]
            },
            {
                "price": [
                    "93"
                ],
                "stops": [
                    "0"
                ],
                "orig": [
                    "TXL"
                ],
                "dest": [
                    "LHR"
                ],
                "depart": [
                    "2010-07-26T16:40:00"
                ],
                "arrive": [
                    "2010-07-26T17:35:00"
                ],
                "airline_display": [
                    "British Airways"
                ]
            },
            {
                "price": [
                    "93"
                ],
                "stops": [
                    "0"
                ],
                "orig": [
                    "TXL"
                ],
                "dest": [
                    "LHR"
                ],
                "depart": [
                    "2010-07-26T19:55:00"
                ],
                "arrive": [
                    "2010-07-26T20:55:00"
                ],
                "airline_display": [
                    "British Airways"
                ]
            },
            {
                "price": [
                    "93"
                ],
                "stops": [
                    "0"
                ],
                "orig": [
                    "TXL"
                ],
                "dest": [
                    "LHR"
                ],
                "depart": [
                    "2010-07-26T07:20:00"
                ],
                "arrive": [
                    "2010-07-26T08:25:00"
                ],
                "airline_display": [
                    "British Airways"
                ]
            },
            {
                "price": [
                    "100"
                ],
                "stops": [
                    "0"
                ],
                "orig": [
                    "TXL"
                ],
                "dest": [
                    "LHR"
                ],
                "depart": [
                    "2010-07-26T18:10:00"
                ],
                "arrive": [
                    "2010-07-26T19:05:00"
                ],
                "airline_display": [
                    "bmi"
                ]
            }]
    }
}


function getPointsArrivalRandom(flightsData) {
    let placeOfEl, flight, departure, arrival, cpt = 0

    do {
        placeOfEl = Math.floor(Math.random() * flightsData.flights.flight.length);
        flight = flightsData.flights.flight[placeOfEl]
    
        departure = new Date(flight.depart[0])
        arrival = new Date(flight.arrive[0])
        cpt++    
        if (cpt == 10) return
    } while (event_start < arrival);


    var hoursOfTravel = Math.abs(departure - arrival) / 36e5;

    let busPoint = new Date(flight.arrive[0]).getHours() > 17 ? 150 : 0


    let hoursOfTravelPoints = hoursOfTravel * 50
    let pricePoint = parseInt(flight.price[0])
    let stopPoint = flight.stops[0] * 70
    let points = pricePoint + hoursOfTravelPoints + busPoint + stopPoint

    return { points, flight, placeOfEl }
}

function getPointsArrivalByPosition(flightsData, position) {
    let flight, departure, arrival
    flight = flightsData.flights.flight[position]

    departure = new Date(flight.depart[0])
    arrival = new Date(flight.arrive[0])
    if (event_start < arrival) return

    var hoursOfTravel = Math.abs(departure - arrival) / 36e5;

    let busPoint = new Date(flight.arrive[0]).getHours() > 17 ? 150 : 0

    let hoursOfTravelPoints = hoursOfTravel * 50
    let pricePoint = parseInt(flight.price[0])
    let stopPoint = flight.stops[0] * 70
    let points = pricePoint + hoursOfTravelPoints + busPoint + stopPoint

    return { points, flight, position}
}

function getPointsDepartByPosition(flightsData, position) {
    let flight, departure, arrival
    flight = flightsData.flights.flight[position]

    departure = new Date(flight.depart[0])
    arrival = new Date(flight.arrive[0])
    if (event_end > departure) return

    var hoursOfTravel = Math.abs(departure - arrival) / 36e5;

    let busPoint = new Date(flight.depart[0]).getHours() > 17 ? 100 : 0

    let hoursOfTravelPoints = hoursOfTravel * 50
    let pricePoint = parseInt(flight.price[0])
    let stopPoint = flight.stops[0] * 70
    let points = pricePoint + hoursOfTravelPoints + busPoint + stopPoint

    return { points, flight, position}
}





function getPointsDepartRandom(flightsData) {
    let placeOfEl, flight, departure, arrival, cpt = 0

    do {
        placeOfEl = Math.floor(Math.random() * flightsData.flights.flight.length);
        flight = flightsData.flights.flight[placeOfEl]
    
        departure = new Date(flight.depart[0])
        arrival = new Date(flight.arrive[0])
        cpt++    
        if (cpt == 10) return
    } while (event_end > departure);

    var hoursOfTravel = Math.abs(departure - arrival) / 36e5;

    let busPoint = new Date(flight.depart[0]).getHours() > 17 ? 100 : 0


    let hoursOfTravelPoints = hoursOfTravel * 50
    let pricePoint = parseInt(flight.price[0])
    let stopPoint = flight.stops[0] * 70
    let points = pricePoint + hoursOfTravelPoints + busPoint + stopPoint

    return { points, flight, placeOfEl}
}



createBigJson()

console.log("log", flightsJson)
console.log(getPointsArrivalRandom(flightsData));
console.log(getPointsDepartRandom(flightsData));

let bestCost = 1000000

for (let i = 0; i < 10; i++) {
  
    console.log("");
}
