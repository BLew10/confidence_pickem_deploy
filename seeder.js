
const mongoose = require("mongoose")
const { Week } = require('./server/models/week.model')

mongoose.connect("mongodb://localhost/nfl2022schedule", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));

 

const seedWeeks = [
    {
        "_id": "6362fcd7a05a14afa1a59d0a",
        "weekNumber": 1,
        "games": [
            {
                "id": "bf60c8fc-35cd-4749-a29e-4f48d66da57c",
                "status": "closed",
                "scheduled": "2022-09-09T00:20:00+00:00",
                "attendance": 73846,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33622875",
                "game_type": "regular",
                "duration": "2:46",
                "venue": {
                    "id": "790c1f04-73c6-4f6f-8b1e-78a62260be90",
                    "name": "SoFi Stadium",
                    "city": "Inglewood",
                    "state": "CA",
                    "country": "USA",
                    "zip": "90301",
                    "address": "1000 S Prairie Ave",
                    "capacity": 70240,
                    "surface": "artificial",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:52183",
                    "location": {
                        "lat": "33.953536",
                        "lng": "-118.338734"
                    }
                },
                "home": {
                    "id": "2eff2a03-54d4-46ba-890e-2bc3925548f3",
                    "name": "Los Angeles Rams",
                    "alias": "LA",
                    "game_number": 1,
                    "sr_id": "sr:competitor:4387"
                },
                "away": {
                    "id": "768c92aa-75ff-4a43-bcc0-f2798c2e1724",
                    "name": "Buffalo Bills",
                    "alias": "BUF",
                    "game_number": 1,
                    "sr_id": "sr:competitor:4376"
                },
                "broadcast": {
                    "network": "NBC"
                },
                "weather": {
                    "condition": "Sunny",
                    "humidity": 47,
                    "temp": 88,
                    "wind": {
                        "speed": 8,
                        "direction": "WNW"
                    }
                },
                "scoring": {
                    "home_points": 10,
                    "away_points": 31,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "1ce4819a-9e77-47a9-8e96-d4824bc34271",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 0,
                            "away_points": 7
                        },
                        {
                            "period_type": "quarter",
                            "id": "66c7a87b-fc3a-43ff-a25b-aa3b805b5cd6",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 10,
                            "away_points": 3
                        },
                        {
                            "period_type": "quarter",
                            "id": "9481c977-fa30-4eb1-9d4a-a2cdbd425aeb",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 0,
                            "away_points": 7
                        },
                        {
                            "period_type": "quarter",
                            "id": "d3a5b44a-028e-479e-8d04-9cdc2cb8249a",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 0,
                            "away_points": 14
                        }
                    ]
                }
            },
            {
                "id": "138ba6ee-966d-40b6-8017-5b018c4a31d1",
                "status": "closed",
                "scheduled": "2022-09-11T17:00:00+00:00",
                "attendance": 70078,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33622877",
                "game_type": "regular",
                "duration": "3:07",
                "venue": {
                    "id": "1f2d393b-2291-4835-a412-0714966ea245",
                    "name": "Mercedes-Benz Stadium",
                    "city": "Atlanta",
                    "state": "GA",
                    "country": "USA",
                    "zip": "30313",
                    "address": "441 Martin Luther King Jr Drive NW",
                    "capacity": 71000,
                    "surface": "artificial",
                    "roof_type": "retractable_dome",
                    "sr_id": "sr:venue:20343",
                    "location": {
                        "lat": "33.757368",
                        "lng": "-84.401008"
                    }
                },
                "home": {
                    "id": "e6aa13a4-0055-48a9-bc41-be28dc106929",
                    "name": "Atlanta Falcons",
                    "alias": "ATL",
                    "game_number": 1,
                    "sr_id": "sr:competitor:4393"
                },
                "away": {
                    "id": "0d855753-ea21-4953-89f9-0e20aff9eb73",
                    "name": "New Orleans Saints",
                    "alias": "NO",
                    "game_number": 1,
                    "sr_id": "sr:competitor:4425"
                },
                "broadcast": {
                    "network": "FOX"
                },
                "weather": {
                    "condition": "Overcast",
                    "humidity": 79,
                    "temp": 77,
                    "wind": {
                        "speed": 8,
                        "direction": "S"
                    }
                },
                "scoring": {
                    "home_points": 26,
                    "away_points": 27,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "4077db79-6ab5-4641-8074-207b27eb06f3",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 3,
                            "away_points": 7
                        },
                        {
                            "period_type": "quarter",
                            "id": "f6ed859d-2add-4513-af76-284b649c2e2f",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 13,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "0a43b97c-6ef0-4826-a8d2-dd5046b95833",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 7,
                            "away_points": 3
                        },
                        {
                            "period_type": "quarter",
                            "id": "9da4620a-006f-4602-bf59-cefe629f0856",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 3,
                            "away_points": 17
                        }
                    ]
                }
            },
            {
                "id": "3a30461a-f6cc-493d-bff3-5c4a447ff812",
                "status": "closed",
                "scheduled": "2022-09-11T17:00:00+00:00",
                "attendance": 78827,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33622899",
                "game_type": "regular",
                "duration": "3:03",
                "venue": {
                    "id": "5d4c85c7-d84e-4e10-bd6a-8a15ebecca5c",
                    "name": "MetLife Stadium",
                    "city": "East Rutherford",
                    "state": "NJ",
                    "country": "USA",
                    "zip": "07073",
                    "address": "One MetLife Stadium Drive",
                    "capacity": 82500,
                    "surface": "artificial",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:1981",
                    "location": {
                        "lat": "40.813611",
                        "lng": "-74.074444"
                    }
                },
                "home": {
                    "id": "5fee86ae-74ab-4bdd-8416-42a9dd9964f3",
                    "name": "New York Jets",
                    "alias": "NYJ",
                    "game_number": 1,
                    "sr_id": "sr:competitor:4427"
                },
                "away": {
                    "id": "ebd87119-b331-4469-9ea6-d51fe3ce2f1c",
                    "name": "Baltimore Ravens",
                    "alias": "BAL",
                    "game_number": 1,
                    "sr_id": "sr:competitor:4413"
                },
                "broadcast": {
                    "network": "CBS"
                },
                "weather": {
                    "condition": "Light Rain, Mist",
                    "humidity": 87,
                    "temp": 69,
                    "wind": {
                        "speed": 2,
                        "direction": "N"
                    }
                },
                "scoring": {
                    "home_points": 9,
                    "away_points": 24,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "bb8bd481-2347-4e75-8963-8916edc2fd19",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 0,
                            "away_points": 3
                        },
                        {
                            "period_type": "quarter",
                            "id": "3482e659-4743-42fa-9e03-7565dfb20642",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 3,
                            "away_points": 7
                        },
                        {
                            "period_type": "quarter",
                            "id": "6a83b1c9-73f3-41fd-aa8f-93239e6e7128",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 0,
                            "away_points": 14
                        },
                        {
                            "period_type": "quarter",
                            "id": "419357af-0a5c-4a8b-8026-929d1070883a",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 6,
                            "away_points": 0
                        }
                    ]
                }
            },
            {
                "id": "5e90e42b-7203-4ae8-a506-43e5dc3140e9",
                "status": "closed",
                "scheduled": "2022-09-11T17:00:00+00:00",
                "attendance": 65841,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33622887",
                "game_type": "regular",
                "duration": "3:42",
                "venue": {
                    "id": "b87a1595-d3c8-48ea-8a53-0aab6378a64a",
                    "name": "Paycor Stadium",
                    "city": "Cincinnati",
                    "state": "OH",
                    "country": "USA",
                    "zip": "45202",
                    "address": "One Paul Brown Stadium",
                    "capacity": 65515,
                    "surface": "artificial",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8175",
                    "location": {
                        "lat": "39.095413",
                        "lng": "-84.516204"
                    }
                },
                "home": {
                    "id": "ad4ae08f-d808-42d5-a1e6-e9bc4e34d123",
                    "name": "Cincinnati Bengals",
                    "alias": "CIN",
                    "game_number": 1,
                    "sr_id": "sr:competitor:4416"
                },
                "away": {
                    "id": "cb2f9f1f-ac67-424e-9e72-1475cb0ed398",
                    "name": "Pittsburgh Steelers",
                    "alias": "PIT",
                    "game_number": 1,
                    "sr_id": "sr:competitor:4345"
                },
                "broadcast": {
                    "network": "CBS"
                },
                "weather": {
                    "condition": "Mist",
                    "humidity": 90,
                    "temp": 73,
                    "wind": {
                        "speed": 2,
                        "direction": "N"
                    }
                },
                "scoring": {
                    "home_points": 20,
                    "away_points": 23,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "3d724e28-a278-44ea-95fa-d88433d324e1",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 3,
                            "away_points": 10
                        },
                        {
                            "period_type": "quarter",
                            "id": "4eba4fdf-8a46-4c7f-960b-be00b6c4b1b9",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 3,
                            "away_points": 7
                        },
                        {
                            "period_type": "quarter",
                            "id": "c529338b-24e7-496b-a5c4-cbe0a373ee44",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 8,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "4d4d7b06-1044-4377-9270-8fc24dfc57ce",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 6,
                            "away_points": 3
                        },
                        {
                            "period_type": "overtime",
                            "id": "15851823-6997-4bca-be51-ff6f31ae6441",
                            "number": 1,
                            "sequence": 5,
                            "home_points": 0,
                            "away_points": 3
                        }
                    ]
                }
            },
            {
                "id": "7af18bf0-4be8-4532-bd9c-845b88e9f684",
                "status": "closed",
                "scheduled": "2022-09-11T17:00:00+00:00",
                "attendance": 65786,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33622895",
                "game_type": "regular",
                "duration": "2:50",
                "venue": {
                    "id": "50a5c833-1570-4c38-abc7-7914cf87dbde",
                    "name": "Hard Rock Stadium",
                    "city": "Miami Gardens",
                    "state": "FL",
                    "country": "USA",
                    "zip": "33056",
                    "address": "2269 Northwest 199th Street",
                    "capacity": 65326,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:21306",
                    "location": {
                        "lat": "25.958025",
                        "lng": "-80.238724"
                    }
                },
                "home": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Miami Dolphins",
                    "alias": "MIA",
                    "game_number": 1,
                    "sr_id": "sr:competitor:4287"
                },
                "away": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "New England Patriots",
                    "alias": "NE",
                    "game_number": 1,
                    "sr_id": "sr:competitor:4424"
                },
                "broadcast": {
                    "network": "CBS"
                },
                "weather": {
                    "condition": "Partly cloudy",
                    "humidity": 60,
                    "temp": 91,
                    "wind": {
                        "speed": 11,
                        "direction": "SE"
                    }
                },
                "scoring": {
                    "home_points": 20,
                    "away_points": 7,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "934bdd2e-f30f-4b02-b4a0-48ee7cb021e2",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 3,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "718853bb-f125-4b14-8206-c23a216421c1",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 14,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "ed989568-345e-443d-a9cc-6b5604bed0e5",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 3,
                            "away_points": 7
                        },
                        {
                            "period_type": "quarter",
                            "id": "9ace3015-099b-4d13-9b2d-9cee7ab6a449",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 0,
                            "away_points": 0
                        }
                    ]
                }
            },
            {
                "id": "b206fcec-b10d-4bc2-a7fe-3c69c532f8fc",
                "status": "closed",
                "scheduled": "2022-09-11T17:00:00+00:00",
                "attendance": 58192,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33622901",
                "game_type": "regular",
                "duration": "3:19",
                "venue": {
                    "id": "7c11bb2d-4a53-4842-b842-0f1c63ed78e9",
                    "name": "FedExField",
                    "city": "Landover",
                    "state": "MD",
                    "country": "USA",
                    "zip": "20785",
                    "address": "1600 FedEx Way",
                    "capacity": 82000,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:6652",
                    "location": {
                        "lat": "38.907724",
                        "lng": "-76.864613"
                    }
                },
                "home": {
                    "id": "22052ff7-c065-42ee-bc8f-c4691c50e624",
                    "name": "Washington Commanders",
                    "alias": "WAS",
                    "game_number": 1,
                    "sr_id": "sr:competitor:4432"
                },
                "away": {
                    "id": "f7ddd7fa-0bae-4f90-bc8e-669e4d6cf2de",
                    "name": "Jacksonville Jaguars",
                    "alias": "JAC",
                    "game_number": 1,
                    "sr_id": "sr:competitor:4386"
                },
                "broadcast": {
                    "network": "FOX"
                },
                "weather": {
                    "condition": "Overcast",
                    "humidity": 94,
                    "temp": 74,
                    "wind": {
                        "speed": 4,
                        "direction": "SSE"
                    }
                },
                "scoring": {
                    "home_points": 28,
                    "away_points": 22,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "e1c28f3e-6f1b-40e2-8ddb-259cab40ad47",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 7,
                            "away_points": 3
                        },
                        {
                            "period_type": "quarter",
                            "id": "ef5ad9eb-4b04-4370-a28f-3e0e9e75b766",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 7,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "13aa6b7c-dade-4a10-a620-57b0354ae485",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 0,
                            "away_points": 9
                        },
                        {
                            "period_type": "quarter",
                            "id": "e0966b95-e235-4ad8-902b-43cd000d7a09",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 14,
                            "away_points": 10
                        }
                    ]
                }
            },
            {
                "id": "b7bbcbe9-fa76-4175-8ced-b87b3076aca8",
                "status": "closed",
                "scheduled": "2022-09-11T17:00:00+00:00",
                "attendance": 62159,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33622883",
                "game_type": "regular",
                "duration": "3:01",
                "venue": {
                    "id": "d7866605-5ac6-4b3a-90e8-760cc5a26b75",
                    "name": "Soldier Field",
                    "city": "Chicago",
                    "state": "IL",
                    "country": "USA",
                    "zip": "60605",
                    "address": "1410 South Museum Campus Drive",
                    "capacity": 61500,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:2109",
                    "location": {
                        "lat": "41.862498",
                        "lng": "-87.616979"
                    }
                },
                "home": {
                    "id": "7b112545-38e6-483c-a55c-96cf6ee49cb8",
                    "name": "Chicago Bears",
                    "alias": "CHI",
                    "game_number": 1,
                    "sr_id": "sr:competitor:4391"
                },
                "away": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "San Francisco 49ers",
                    "alias": "SF",
                    "game_number": 1,
                    "sr_id": "sr:competitor:4389"
                },
                "broadcast": {
                    "network": "FOX"
                },
                "weather": {
                    "condition": "Light Rain",
                    "humidity": 84,
                    "temp": 67,
                    "wind": {
                        "speed": 7,
                        "direction": "NE"
                    }
                },
                "scoring": {
                    "home_points": 19,
                    "away_points": 10,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "155478e8-fc9b-4bda-864b-378c03d40734",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 0,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "f68c4ed8-9ef6-48f3-8c68-cf75a2f08fa2",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 0,
                            "away_points": 7
                        },
                        {
                            "period_type": "quarter",
                            "id": "4baafe5e-c4b2-40d7-be5c-4ae3acaad119",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 7,
                            "away_points": 3
                        },
                        {
                            "period_type": "quarter",
                            "id": "e47ba7ac-22a3-4d5c-83a2-4de150372b57",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 12,
                            "away_points": 0
                        }
                    ]
                }
            },
            {
                "id": "c4a110f2-847b-4710-9a54-7be66fdb3c99",
                "status": "closed",
                "scheduled": "2022-09-11T17:00:00+00:00",
                "attendance": 72205,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33622881",
                "game_type": "regular",
                "duration": "3:16",
                "venue": {
                    "id": "39be9ed4-3292-49ac-8699-a381de3a4969",
                    "name": "Bank of America Stadium",
                    "city": "Charlotte",
                    "state": "NC",
                    "country": "USA",
                    "zip": "28202",
                    "address": "800 South Mint Street",
                    "capacity": 75419,
                    "surface": "artificial",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8173",
                    "location": {
                        "lat": "35.225937",
                        "lng": "-80.853133"
                    }
                },
                "home": {
                    "id": "f14bf5cc-9a82-4a38-bc15-d39f75ed5314",
                    "name": "Carolina Panthers",
                    "alias": "CAR",
                    "game_number": 1,
                    "sr_id": "sr:competitor:4415"
                },
                "away": {
                    "id": "d5a2eb42-8065-4174-ab79-0a6fa820e35e",
                    "name": "Cleveland Browns",
                    "alias": "CLE",
                    "game_number": 1,
                    "sr_id": "sr:competitor:4417"
                },
                "broadcast": {
                    "network": "CBS"
                },
                "weather": {
                    "condition": "Partly cloudy",
                    "humidity": 79,
                    "temp": 79,
                    "wind": {
                        "speed": 6,
                        "direction": "SW"
                    }
                },
                "scoring": {
                    "home_points": 24,
                    "away_points": 26,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "9104d0fa-89c2-4361-aaae-224cfdc0277c",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 0,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "c5fdc3e7-29e6-433f-b477-3711df321944",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 7,
                            "away_points": 17
                        },
                        {
                            "period_type": "quarter",
                            "id": "e6dda424-a47f-48af-9c6c-86d4d6219460",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 0,
                            "away_points": 3
                        },
                        {
                            "period_type": "quarter",
                            "id": "7cb5cd1a-020a-4b10-a004-c5eb07e30d13",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 17,
                            "away_points": 6
                        }
                    ]
                }
            },
            {
                "id": "ce4b9426-af23-4681-8bf7-800c7e020d4e",
                "status": "closed",
                "scheduled": "2022-09-11T17:00:00+00:00",
                "attendance": 69415,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33622891",
                "game_type": "regular",
                "duration": "3:33",
                "venue": {
                    "id": "6a72e5ca-33d0-40af-8e6b-b32a4d3d9346",
                    "name": "NRG Stadium",
                    "city": "Houston",
                    "state": "TX",
                    "country": "USA",
                    "zip": "77054",
                    "address": "One Reliant Park",
                    "capacity": 72220,
                    "surface": "artificial",
                    "roof_type": "retractable_dome",
                    "sr_id": "sr:venue:2402",
                    "location": {
                        "lat": "29.684735",
                        "lng": "-95.410725"
                    }
                },
                "home": {
                    "id": "82d2d380-3834-4938-835f-aec541e5ece7",
                    "name": "Houston Texans",
                    "alias": "HOU",
                    "game_number": 1,
                    "sr_id": "sr:competitor:4324"
                },
                "away": {
                    "id": "82cf9565-6eb9-4f01-bdbd-5aa0d472fcd9",
                    "name": "Indianapolis Colts",
                    "alias": "IND",
                    "game_number": 1,
                    "sr_id": "sr:competitor:4421"
                },
                "broadcast": {
                    "network": "CBS"
                },
                "weather": {
                    "condition": "Partly cloudy",
                    "humidity": 52,
                    "temp": 88,
                    "wind": {
                        "speed": 9,
                        "direction": "NNW"
                    }
                },
                "scoring": {
                    "home_points": 20,
                    "away_points": 20,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "3d50816e-b186-497c-949e-d0cebd714103",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 0,
                            "away_points": 3
                        },
                        {
                            "period_type": "quarter",
                            "id": "6828b220-8e87-4e68-86c5-0e183637c613",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 10,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "2fb22f02-0fc6-48c2-9e0d-16bef13df051",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 10,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "3796894d-11b9-4db9-9b64-8d7d81bae93c",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 0,
                            "away_points": 17
                        },
                        {
                            "period_type": "overtime",
                            "id": "3abf50cc-0486-4ae5-95d1-70d0a9da8c32",
                            "number": 1,
                            "sequence": 5,
                            "home_points": 0,
                            "away_points": 0
                        }
                    ]
                }
            },
            {
                "id": "df15f570-b51c-4ece-a42b-aaa1e130290a",
                "status": "closed",
                "scheduled": "2022-09-11T17:00:00+00:00",
                "attendance": 64537,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33622889",
                "game_type": "regular",
                "duration": "3:15",
                "venue": {
                    "id": "6e3bcf22-277d-4c06-b019-62aded51654f",
                    "name": "Ford Field",
                    "city": "Detroit",
                    "state": "MI",
                    "country": "USA",
                    "zip": "48226",
                    "address": "2000 Brush Street",
                    "capacity": 65000,
                    "surface": "artificial",
                    "roof_type": "dome",
                    "sr_id": "sr:venue:8181",
                    "location": {
                        "lat": "42.339958",
                        "lng": "-83.045636"
                    }
                },
                "home": {
                    "id": "c5a59daa-53a7-4de0-851f-fb12be893e9e",
                    "name": "Detroit Lions",
                    "alias": "DET",
                    "game_number": 1,
                    "sr_id": "sr:competitor:4419"
                },
                "away": {
                    "id": "386bdbf9-9eea-4869-bb9a-274b0bc66e80",
                    "name": "Philadelphia Eagles",
                    "alias": "PHI",
                    "game_number": 1,
                    "sr_id": "sr:competitor:4428"
                },
                "broadcast": {
                    "network": "FOX"
                },
                "weather": {
                    "condition": "Overcast",
                    "humidity": 81,
                    "temp": 72,
                    "wind": {
                        "speed": 11,
                        "direction": "SSE"
                    }
                },
                "scoring": {
                    "home_points": 35,
                    "away_points": 38,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "ccfe04f2-d22e-4eaf-a282-ff414ef5f7ed",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 7,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "5123afa2-001a-4b96-b317-9fae64b3f3e3",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 7,
                            "away_points": 24
                        },
                        {
                            "period_type": "quarter",
                            "id": "de7d0c4e-3b4c-4272-bf84-1ccf633ec9f6",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 7,
                            "away_points": 14
                        },
                        {
                            "period_type": "quarter",
                            "id": "b6e445a6-6c99-4146-8e3f-b47e9d4ecace",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 14,
                            "away_points": 0
                        }
                    ]
                }
            },
            {
                "id": "39c07cba-900b-49dc-ade1-e34c815c202e",
                "status": "closed",
                "scheduled": "2022-09-11T20:25:00+00:00",
                "attendance": 70240,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33622905",
                "game_type": "regular",
                "duration": "2:54",
                "venue": {
                    "id": "790c1f04-73c6-4f6f-8b1e-78a62260be90",
                    "name": "SoFi Stadium",
                    "city": "Inglewood",
                    "state": "CA",
                    "country": "USA",
                    "zip": "90301",
                    "address": "1000 S Prairie Ave",
                    "capacity": 70240,
                    "surface": "artificial",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:52183",
                    "location": {
                        "lat": "33.953536",
                        "lng": "-118.338734"
                    }
                },
                "home": {
                    "id": "1f6dcffb-9823-43cd-9ff4-e7a8466749b5",
                    "name": "Los Angeles Chargers",
                    "alias": "LAC",
                    "game_number": 1,
                    "sr_id": "sr:competitor:4429"
                },
                "away": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Las Vegas Raiders",
                    "alias": "LV",
                    "game_number": 1,
                    "sr_id": "sr:competitor:4390"
                },
                "broadcast": {
                    "network": "CBS"
                },
                "weather": {
                    "condition": "Sunny",
                    "humidity": 57,
                    "temp": 85,
                    "wind": {
                        "speed": 12,
                        "direction": "WSW"
                    }
                },
                "scoring": {
                    "home_points": 24,
                    "away_points": 19,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "17a6cc6e-b0cc-4cf3-8cf5-4504e9b7cdad",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 3,
                            "away_points": 3
                        },
                        {
                            "period_type": "quarter",
                            "id": "4eb5c7ec-782b-409d-8087-2540cefe1afb",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 14,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "6362883a-285e-4abb-9f56-150669428ae5",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 7,
                            "away_points": 10
                        },
                        {
                            "period_type": "quarter",
                            "id": "7bce873b-ff1d-45dd-89c5-3642a0e50ed5",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 0,
                            "away_points": 6
                        }
                    ]
                }
            },
            {
                "id": "5d7038d9-82cc-4464-a20a-04952454f928",
                "status": "closed",
                "scheduled": "2022-09-11T20:25:00+00:00",
                "attendance": 66959,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33622907",
                "game_type": "regular",
                "duration": "3:03",
                "venue": {
                    "id": "f5ff00d4-1ed8-4918-bf73-13d66d510f98",
                    "name": "U.S. Bank Stadium",
                    "city": "Minneapolis",
                    "state": "MN",
                    "country": "USA",
                    "zip": "55415",
                    "address": "900 S 5th Street",
                    "capacity": 66655,
                    "surface": "artificial",
                    "roof_type": "dome",
                    "sr_id": "sr:venue:18423",
                    "location": {
                        "lat": "44.973686",
                        "lng": "-93.257458"
                    }
                },
                "home": {
                    "id": "33405046-04ee-4058-a950-d606f8c30852",
                    "name": "Minnesota Vikings",
                    "alias": "MIN",
                    "game_number": 1,
                    "sr_id": "sr:competitor:4423"
                },
                "away": {
                    "id": "a20471b4-a8d9-40c7-95ad-90cc30e46932",
                    "name": "Green Bay Packers",
                    "alias": "GB",
                    "game_number": 1,
                    "sr_id": "sr:competitor:4420"
                },
                "broadcast": {
                    "network": "FOX"
                },
                "weather": {
                    "condition": "Partly cloudy",
                    "humidity": 35,
                    "temp": 72,
                    "wind": {
                        "speed": 4,
                        "direction": "NNW"
                    }
                },
                "scoring": {
                    "home_points": 23,
                    "away_points": 7,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "5214c422-33f9-4224-9172-559535a09788",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 7,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "42b45cc4-00d8-4aa7-8213-ed9d77c0a8d6",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 10,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "4ed3a394-d768-42b4-a3c4-6f73813cf94b",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 3,
                            "away_points": 7
                        },
                        {
                            "period_type": "quarter",
                            "id": "57190434-8103-41b6-b760-270c0d9868e7",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 3,
                            "away_points": 0
                        }
                    ]
                }
            },
            {
                "id": "71ce533f-3932-4927-85af-2f0d01f5686d",
                "status": "closed",
                "scheduled": "2022-09-11T20:25:00+00:00",
                "attendance": 67805,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33622909",
                "game_type": "regular",
                "duration": "3:00",
                "venue": {
                    "id": "5295c1b7-c85c-49cb-9569-1707c65324e5",
                    "name": "Nissan Stadium",
                    "city": "Nashville",
                    "state": "TN",
                    "country": "USA",
                    "zip": "37213",
                    "address": "One Titans Way",
                    "capacity": 69143,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8207",
                    "location": {
                        "lat": "36.166367",
                        "lng": "-86.771223"
                    }
                },
                "home": {
                    "id": "d26a1ca5-722d-4274-8f97-c92e49c96315",
                    "name": "Tennessee Titans",
                    "alias": "TEN",
                    "game_number": 1,
                    "sr_id": "sr:competitor:367364"
                },
                "away": {
                    "id": "04aa1c9d-66da-489d-b16a-1dee3f2eec4d",
                    "name": "New York Giants",
                    "alias": "NYG",
                    "game_number": 1,
                    "sr_id": "sr:competitor:4426"
                },
                "broadcast": {
                    "network": "FOX"
                },
                "weather": {
                    "condition": "Light Rain",
                    "humidity": 90,
                    "temp": 77,
                    "wind": {
                        "speed": 14,
                        "direction": "WNW"
                    }
                },
                "scoring": {
                    "home_points": 20,
                    "away_points": 21,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "6afdbb31-ac1f-41b9-9eaa-7afc031b09d3",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 7,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "3585c0f3-c658-433d-9cdc-84aeb538d9f5",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 6,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "73c41c7e-b15c-4cf5-9d9d-e865267b1f4c",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 7,
                            "away_points": 13
                        },
                        {
                            "period_type": "quarter",
                            "id": "f6ce23d8-98c0-46c2-8b27-620af198aaa5",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 0,
                            "away_points": 8
                        }
                    ]
                }
            },
            {
                "id": "ab13a972-6ea4-4059-ab5c-51ead63d9abd",
                "status": "closed",
                "scheduled": "2022-09-11T20:25:00+00:00",
                "attendance": 63697,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33622903",
                "game_type": "regular",
                "duration": "3:00",
                "venue": {
                    "id": "f8e4d2ab-53f9-4e9f-8c4a-9bc278094a84",
                    "name": "State Farm Stadium",
                    "city": "Glendale",
                    "state": "AZ",
                    "country": "USA",
                    "zip": "85305",
                    "address": "One Cardinals Drive",
                    "capacity": 63400,
                    "surface": "turf",
                    "roof_type": "retractable_dome",
                    "sr_id": "sr:venue:8165",
                    "location": {
                        "lat": "33.527765",
                        "lng": "-112.262090"
                    }
                },
                "home": {
                    "id": "de760528-1dc0-416a-a978-b510d20692ff",
                    "name": "Arizona Cardinals",
                    "alias": "ARI",
                    "game_number": 1,
                    "sr_id": "sr:competitor:4412"
                },
                "away": {
                    "id": "6680d28d-d4d2-49f6-aace-5292d3ec02c2",
                    "name": "Kansas City Chiefs",
                    "alias": "KC",
                    "game_number": 1,
                    "sr_id": "sr:competitor:4422"
                },
                "broadcast": {
                    "network": "CBS"
                },
                "weather": {
                    "condition": "Partly cloudy",
                    "humidity": 28,
                    "temp": 99,
                    "wind": {
                        "speed": 12,
                        "direction": "SE"
                    }
                },
                "scoring": {
                    "home_points": 21,
                    "away_points": 44,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "536bcaba-add0-41f9-bb80-65df136dc059",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 0,
                            "away_points": 14
                        },
                        {
                            "period_type": "quarter",
                            "id": "27724bc3-8e84-46c5-ab2b-a96c7d54e8b5",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 7,
                            "away_points": 9
                        },
                        {
                            "period_type": "quarter",
                            "id": "a582ece6-e3d1-4a61-8651-3360bf440786",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 0,
                            "away_points": 14
                        },
                        {
                            "period_type": "quarter",
                            "id": "e83cd433-0052-4e05-bca2-e23a3cb2c490",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 14,
                            "away_points": 7
                        }
                    ]
                }
            },
            {
                "id": "c60eb416-db18-42aa-b936-f25fe21e65e0",
                "status": "closed",
                "scheduled": "2022-09-12T00:20:00+00:00",
                "attendance": 93797,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33622947",
                "game_type": "regular",
                "duration": "2:57",
                "venue": {
                    "id": "1e84213a-ff1f-4c9d-a003-8ee782b25a40",
                    "name": "AT&T Stadium",
                    "city": "Arlington",
                    "state": "TX",
                    "country": "USA",
                    "zip": "76011",
                    "address": "One Legends Way",
                    "capacity": 80000,
                    "surface": "artificial",
                    "roof_type": "retractable_dome",
                    "sr_id": "sr:venue:6650",
                    "location": {
                        "lat": "32.747778",
                        "lng": "-97.092778"
                    }
                },
                "home": {
                    "id": "e627eec7-bbae-4fa4-8e73-8e1d6bc5c060",
                    "name": "Dallas Cowboys",
                    "alias": "DAL",
                    "game_number": 1,
                    "sr_id": "sr:competitor:4392"
                },
                "away": {
                    "id": "4254d319-1bc7-4f81-b4ab-b5e6f3402b69",
                    "name": "Tampa Bay Buccaneers",
                    "alias": "TB",
                    "game_number": 1,
                    "sr_id": "sr:competitor:4388"
                },
                "broadcast": {
                    "network": "NBC"
                },
                "weather": {
                    "condition": "Partly cloudy",
                    "humidity": 44,
                    "temp": 81,
                    "wind": {
                        "speed": 9,
                        "direction": "NNE"
                    }
                },
                "scoring": {
                    "home_points": 3,
                    "away_points": 19,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "c6304ae0-672f-400d-9191-7c8410ce3913",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 3,
                            "away_points": 6
                        },
                        {
                            "period_type": "quarter",
                            "id": "76826ec9-7492-45c5-9612-af78913aef8f",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 0,
                            "away_points": 6
                        },
                        {
                            "period_type": "quarter",
                            "id": "e81b92da-9c65-4f38-a30e-5ea0f3b9ba8c",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 0,
                            "away_points": 7
                        },
                        {
                            "period_type": "quarter",
                            "id": "d7b3f6ca-89c5-4a48-b647-7df34f13a91c",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 0,
                            "away_points": 0
                        }
                    ]
                }
            },
            {
                "id": "d981ce4e-3139-44d4-b6a5-f16fd3e8ca6e",
                "status": "closed",
                "scheduled": "2022-09-13T00:15:00+00:00",
                "attendance": 68965,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33622951",
                "game_type": "regular",
                "duration": "2:57",
                "venue": {
                    "id": "c6b9e5df-c9e4-434c-b3e6-83928f11cbda",
                    "name": "Lumen Field",
                    "city": "Seattle",
                    "state": "WA",
                    "country": "USA",
                    "zip": "98134",
                    "address": "800 Occidental Avenue South",
                    "capacity": 68000,
                    "surface": "artificial",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:2291",
                    "location": {
                        "lat": "47.595165",
                        "lng": "-122.331650"
                    }
                },
                "home": {
                    "id": "3d08af9e-c767-4f88-a7dc-b920c6d2b4a8",
                    "name": "Seattle Seahawks",
                    "alias": "SEA",
                    "game_number": 1,
                    "sr_id": "sr:competitor:4430"
                },
                "away": {
                    "id": "ce92bd47-93d5-4fe9-ada4-0fc681e6caa0",
                    "name": "Denver Broncos",
                    "alias": "DEN",
                    "game_number": 1,
                    "sr_id": "sr:competitor:4418"
                },
                "broadcast": {
                    "network": "ESPN",
                    "satellite": "206"
                },
                "weather": {
                    "condition": "Smoke",
                    "humidity": 55,
                    "temp": 73,
                    "wind": {
                        "speed": 4,
                        "direction": "S"
                    }
                },
                "scoring": {
                    "home_points": 17,
                    "away_points": 16,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "a5c33089-d27c-4630-8f6e-faa54da395aa",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 7,
                            "away_points": 3
                        },
                        {
                            "period_type": "quarter",
                            "id": "a297fd21-0194-473b-a38e-dcb175fe19f4",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 10,
                            "away_points": 10
                        },
                        {
                            "period_type": "quarter",
                            "id": "91c073c8-5b0c-4e7c-a04e-dc03d82ecce3",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 0,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "a743c495-4fef-4faa-9224-1f9f6e7206d9",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 0,
                            "away_points": 3
                        }
                    ]
                }
            }
        ],
        "createdAt": "2022-11-02T23:27:19.757Z",
        "updatedAt": "2022-11-02T23:27:19.757Z",
        "__v": 0
    },
    {
        "_id": "6362fcd7a05a14afa1a59d10",
        "weekNumber": 7,
        "games": [
            {
                "id": "780f2605-5066-4cb2-98cd-75d5634ad77a",
                "status": "closed",
                "scheduled": "2022-10-21T00:15:00+00:00",
                "attendance": 63290,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623355",
                "game_type": "regular",
                "duration": "3:17",
                "venue": {
                    "id": "f8e4d2ab-53f9-4e9f-8c4a-9bc278094a84",
                    "name": "State Farm Stadium",
                    "city": "Glendale",
                    "state": "AZ",
                    "country": "USA",
                    "zip": "85305",
                    "address": "One Cardinals Drive",
                    "capacity": 63400,
                    "surface": "turf",
                    "roof_type": "retractable_dome",
                    "sr_id": "sr:venue:8165",
                    "location": {
                        "lat": "33.527765",
                        "lng": "-112.262090"
                    }
                },
                "home": {
                    "id": "de760528-1dc0-416a-a978-b510d20692ff",
                    "name": "Arizona Cardinals",
                    "alias": "ARI",
                    "game_number": 7,
                    "sr_id": "sr:competitor:4412"
                },
                "away": {
                    "id": "0d855753-ea21-4953-89f9-0e20aff9eb73",
                    "name": "New Orleans Saints",
                    "alias": "NO",
                    "game_number": 7,
                    "sr_id": "sr:competitor:4425"
                },
                "broadcast": {
                    "network": "Amazon Prime Video"
                },
                "weather": {
                    "condition": "Partly cloudy",
                    "humidity": 17,
                    "temp": 90,
                    "wind": {
                        "speed": 2,
                        "direction": "SE"
                    }
                },
                "scoring": {
                    "home_points": 42,
                    "away_points": 34,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "65d0b2af-f33a-407c-a448-c2ab1d9d050d",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 3,
                            "away_points": 7
                        },
                        {
                            "period_type": "quarter",
                            "id": "c6555546-a0f3-4d83-aa0a-daecd2f14a70",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 25,
                            "away_points": 7
                        },
                        {
                            "period_type": "quarter",
                            "id": "a7e2a960-7ed3-47fb-bef8-a6fe0bde7bd6",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 7,
                            "away_points": 3
                        },
                        {
                            "period_type": "quarter",
                            "id": "611279c6-f5c7-4c53-b254-588b99547418",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 7,
                            "away_points": 17
                        }
                    ]
                }
            },
            {
                "id": "4ec0c067-e9a7-4fb0-ab34-8ae97db6a646",
                "status": "closed",
                "scheduled": "2022-10-23T17:00:00+00:00",
                "attendance": 70461,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623357",
                "game_type": "regular",
                "duration": "2:55",
                "venue": {
                    "id": "d54faae0-0314-484f-8604-9d8dd08e1149",
                    "name": "M&T Bank Stadium",
                    "city": "Baltimore",
                    "state": "MD",
                    "country": "USA",
                    "zip": "21230",
                    "address": "1101 Russell Street",
                    "capacity": 71008,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8169",
                    "location": {
                        "lat": "39.277995",
                        "lng": "-76.622592"
                    }
                },
                "home": {
                    "id": "ebd87119-b331-4469-9ea6-d51fe3ce2f1c",
                    "name": "Baltimore Ravens",
                    "alias": "BAL",
                    "game_number": 7,
                    "sr_id": "sr:competitor:4413"
                },
                "away": {
                    "id": "d5a2eb42-8065-4174-ab79-0a6fa820e35e",
                    "name": "Cleveland Browns",
                    "alias": "CLE",
                    "game_number": 7,
                    "sr_id": "sr:competitor:4417"
                },
                "broadcast": {
                    "network": "CBS"
                },
                "weather": {
                    "condition": "Sunny",
                    "humidity": 63,
                    "temp": 63,
                    "wind": {
                        "speed": 4,
                        "direction": "NE"
                    }
                },
                "scoring": {
                    "home_points": 23,
                    "away_points": 20,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "cd27327d-a346-4854-9630-bb6c63176f26",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 3,
                            "away_points": 10
                        },
                        {
                            "period_type": "quarter",
                            "id": "bc9f6030-a0c3-4f47-8fdb-4b26b54c0871",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 10,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "e92f4116-946b-4fcb-8863-093f27171d60",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 7,
                            "away_points": 3
                        },
                        {
                            "period_type": "quarter",
                            "id": "8daad37b-f35f-477d-aa8d-56c2b59615be",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 3,
                            "away_points": 7
                        }
                    ]
                }
            },
            {
                "id": "50c5b405-8f86-427f-a338-a8f2f4c5a629",
                "status": "closed",
                "scheduled": "2022-10-23T17:00:00+00:00",
                "attendance": 66158,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623361",
                "game_type": "regular",
                "duration": "2:49",
                "venue": {
                    "id": "b87a1595-d3c8-48ea-8a53-0aab6378a64a",
                    "name": "Paycor Stadium",
                    "city": "Cincinnati",
                    "state": "OH",
                    "country": "USA",
                    "zip": "45202",
                    "address": "One Paul Brown Stadium",
                    "capacity": 65515,
                    "surface": "artificial",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8175",
                    "location": {
                        "lat": "39.095413",
                        "lng": "-84.516204"
                    }
                },
                "home": {
                    "id": "ad4ae08f-d808-42d5-a1e6-e9bc4e34d123",
                    "name": "Cincinnati Bengals",
                    "alias": "CIN",
                    "game_number": 7,
                    "sr_id": "sr:competitor:4416"
                },
                "away": {
                    "id": "e6aa13a4-0055-48a9-bc41-be28dc106929",
                    "name": "Atlanta Falcons",
                    "alias": "ATL",
                    "game_number": 7,
                    "sr_id": "sr:competitor:4393"
                },
                "broadcast": {
                    "network": "FOX"
                },
                "weather": {
                    "condition": "Sunny",
                    "humidity": 46,
                    "temp": 72,
                    "wind": {
                        "speed": 11,
                        "direction": "S"
                    }
                },
                "scoring": {
                    "home_points": 35,
                    "away_points": 17,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "6d2ea7aa-8595-4d9c-be68-43a847563264",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 14,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "e4784605-db5f-40dc-9373-a90f39131bc2",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 14,
                            "away_points": 17
                        },
                        {
                            "period_type": "quarter",
                            "id": "e7219e02-ed1e-417a-880e-f328701b241d",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 7,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "29463227-761b-4c32-84d8-2feacfefc527",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 0,
                            "away_points": 0
                        }
                    ]
                }
            },
            {
                "id": "77fe4f5c-7dea-4d79-ae8f-6fdc1a34b205",
                "status": "closed",
                "scheduled": "2022-10-23T17:00:00+00:00",
                "attendance": 93487,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623363",
                "game_type": "regular",
                "duration": "2:48",
                "venue": {
                    "id": "1e84213a-ff1f-4c9d-a003-8ee782b25a40",
                    "name": "AT&T Stadium",
                    "city": "Arlington",
                    "state": "TX",
                    "country": "USA",
                    "zip": "76011",
                    "address": "One Legends Way",
                    "capacity": 80000,
                    "surface": "artificial",
                    "roof_type": "retractable_dome",
                    "sr_id": "sr:venue:6650",
                    "location": {
                        "lat": "32.747778",
                        "lng": "-97.092778"
                    }
                },
                "home": {
                    "id": "e627eec7-bbae-4fa4-8e73-8e1d6bc5c060",
                    "name": "Dallas Cowboys",
                    "alias": "DAL",
                    "game_number": 7,
                    "sr_id": "sr:competitor:4392"
                },
                "away": {
                    "id": "c5a59daa-53a7-4de0-851f-fb12be893e9e",
                    "name": "Detroit Lions",
                    "alias": "DET",
                    "game_number": 6,
                    "sr_id": "sr:competitor:4419"
                },
                "broadcast": {
                    "network": "CBS"
                },
                "weather": {
                    "condition": "Partly cloudy",
                    "humidity": 69,
                    "temp": 75,
                    "wind": {
                        "speed": 22,
                        "direction": "S"
                    }
                },
                "scoring": {
                    "home_points": 24,
                    "away_points": 6,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "a8d7aaea-1264-4fb6-af93-80b6ab17bc30",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 0,
                            "away_points": 3
                        },
                        {
                            "period_type": "quarter",
                            "id": "b4772609-4c8a-44a3-8daa-15f25687af35",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 3,
                            "away_points": 3
                        },
                        {
                            "period_type": "quarter",
                            "id": "fa53d5eb-8c32-49c9-9a7a-79cbfd727369",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 7,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "9c14f65d-3984-4685-9e5a-f4cffaf64054",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 14,
                            "away_points": 0
                        }
                    ]
                }
            },
            {
                "id": "897b13fd-bf0a-4744-b2a5-424a09a6b37c",
                "status": "closed",
                "scheduled": "2022-10-23T17:00:00+00:00",
                "attendance": 60427,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623369",
                "game_type": "regular",
                "duration": "3:21",
                "venue": {
                    "id": "7c11bb2d-4a53-4842-b842-0f1c63ed78e9",
                    "name": "FedExField",
                    "city": "Landover",
                    "state": "MD",
                    "country": "USA",
                    "zip": "20785",
                    "address": "1600 FedEx Way",
                    "capacity": 82000,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:6652",
                    "location": {
                        "lat": "38.907724",
                        "lng": "-76.864613"
                    }
                },
                "home": {
                    "id": "22052ff7-c065-42ee-bc8f-c4691c50e624",
                    "name": "Washington Commanders",
                    "alias": "WAS",
                    "game_number": 7,
                    "sr_id": "sr:competitor:4432"
                },
                "away": {
                    "id": "a20471b4-a8d9-40c7-95ad-90cc30e46932",
                    "name": "Green Bay Packers",
                    "alias": "GB",
                    "game_number": 7,
                    "sr_id": "sr:competitor:4420"
                },
                "broadcast": {
                    "network": "FOX"
                },
                "weather": {
                    "condition": "Overcast",
                    "humidity": 83,
                    "temp": 59,
                    "wind": {
                        "speed": 9,
                        "direction": "NNW"
                    }
                },
                "scoring": {
                    "home_points": 23,
                    "away_points": 21,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "a9b689ff-f38d-48e8-8355-4e29be68f258",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 3,
                            "away_points": 7
                        },
                        {
                            "period_type": "quarter",
                            "id": "9ba53a09-5e2f-491d-bbd0-b644ad9eb133",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 7,
                            "away_points": 7
                        },
                        {
                            "period_type": "quarter",
                            "id": "f6b5ff3b-4a7e-40fb-af90-ad83e56ed4eb",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 10,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "82bfc84e-0663-45d7-b92c-9462d9cc838e",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 3,
                            "away_points": 7
                        }
                    ]
                }
            },
            {
                "id": "a7501f59-9d2e-4f94-96c6-8b4d9ab97408",
                "status": "closed",
                "scheduled": "2022-10-23T17:00:00+00:00",
                "attendance": 71941,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623359",
                "game_type": "regular",
                "duration": "2:44",
                "venue": {
                    "id": "39be9ed4-3292-49ac-8699-a381de3a4969",
                    "name": "Bank of America Stadium",
                    "city": "Charlotte",
                    "state": "NC",
                    "country": "USA",
                    "zip": "28202",
                    "address": "800 South Mint Street",
                    "capacity": 75419,
                    "surface": "artificial",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8173",
                    "location": {
                        "lat": "35.225937",
                        "lng": "-80.853133"
                    }
                },
                "home": {
                    "id": "f14bf5cc-9a82-4a38-bc15-d39f75ed5314",
                    "name": "Carolina Panthers",
                    "alias": "CAR",
                    "game_number": 7,
                    "sr_id": "sr:competitor:4415"
                },
                "away": {
                    "id": "4254d319-1bc7-4f81-b4ab-b5e6f3402b69",
                    "name": "Tampa Bay Buccaneers",
                    "alias": "TB",
                    "game_number": 7,
                    "sr_id": "sr:competitor:4388"
                },
                "broadcast": {
                    "network": "FOX"
                },
                "weather": {
                    "condition": "Sunny",
                    "humidity": 46,
                    "temp": 66,
                    "wind": {
                        "speed": 6,
                        "direction": "NNW"
                    }
                },
                "scoring": {
                    "home_points": 21,
                    "away_points": 3,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "b00e1280-ad01-4c0f-b285-d9928b411ca8",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 0,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "260b77a7-81a2-46c3-9417-d69fbf63eb47",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 7,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "deed5741-3112-455a-807b-561936af9ccb",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 7,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "f566fa51-f1b8-492e-bd56-cbfc858743b7",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 7,
                            "away_points": 3
                        }
                    ]
                }
            },
            {
                "id": "bafd2523-3b0a-49c7-92a6-4c83b2a85dc1",
                "status": "closed",
                "scheduled": "2022-10-23T17:00:00+00:00",
                "attendance": 65664,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623365",
                "game_type": "regular",
                "duration": "3:29",
                "venue": {
                    "id": "4c5c036d-dd3d-4183-b595-71a43a97560f",
                    "name": "TIAA Bank Field",
                    "city": "Jacksonville",
                    "state": "FL",
                    "country": "USA",
                    "zip": "32202",
                    "address": "One EverBank Field Drive",
                    "capacity": 69132,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8187",
                    "location": {
                        "lat": "30.324027",
                        "lng": "-81.637239"
                    }
                },
                "home": {
                    "id": "f7ddd7fa-0bae-4f90-bc8e-669e4d6cf2de",
                    "name": "Jacksonville Jaguars",
                    "alias": "JAC",
                    "game_number": 7,
                    "sr_id": "sr:competitor:4386"
                },
                "away": {
                    "id": "04aa1c9d-66da-489d-b16a-1dee3f2eec4d",
                    "name": "New York Giants",
                    "alias": "NYG",
                    "game_number": 7,
                    "sr_id": "sr:competitor:4426"
                },
                "broadcast": {
                    "network": "FOX"
                },
                "weather": {
                    "condition": "Partly cloudy",
                    "humidity": 62,
                    "temp": 74,
                    "wind": {
                        "speed": 7,
                        "direction": "NNW"
                    }
                },
                "scoring": {
                    "home_points": 17,
                    "away_points": 23,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "a24b7691-8f93-446f-9df3-8a9c3d3c0531",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 8,
                            "away_points": 7
                        },
                        {
                            "period_type": "quarter",
                            "id": "cfcb1283-33d3-41ff-b835-a5a5c195e4a8",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 3,
                            "away_points": 6
                        },
                        {
                            "period_type": "quarter",
                            "id": "8a410c2a-d1fe-4522-bec3-114d6b8926ef",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 6,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "4c2820d9-e8d1-4ccf-9886-a2e46a7f71bf",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 0,
                            "away_points": 10
                        }
                    ]
                }
            },
            {
                "id": "e4f775bf-9908-45dd-bd65-871cc37ca375",
                "status": "closed",
                "scheduled": "2022-10-23T17:00:00+00:00",
                "attendance": 69459,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623367",
                "game_type": "regular",
                "duration": "2:51",
                "venue": {
                    "id": "5295c1b7-c85c-49cb-9569-1707c65324e5",
                    "name": "Nissan Stadium",
                    "city": "Nashville",
                    "state": "TN",
                    "country": "USA",
                    "zip": "37213",
                    "address": "One Titans Way",
                    "capacity": 69143,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8207",
                    "location": {
                        "lat": "36.166367",
                        "lng": "-86.771223"
                    }
                },
                "home": {
                    "id": "d26a1ca5-722d-4274-8f97-c92e49c96315",
                    "name": "Tennessee Titans",
                    "alias": "TEN",
                    "game_number": 6,
                    "sr_id": "sr:competitor:367364"
                },
                "away": {
                    "id": "82cf9565-6eb9-4f01-bdbd-5aa0d472fcd9",
                    "name": "Indianapolis Colts",
                    "alias": "IND",
                    "game_number": 7,
                    "sr_id": "sr:competitor:4421"
                },
                "broadcast": {
                    "network": "CBS"
                },
                "weather": {
                    "condition": "Partly cloudy",
                    "humidity": 34,
                    "temp": 73,
                    "wind": {
                        "speed": 13,
                        "direction": "S"
                    }
                },
                "scoring": {
                    "home_points": 19,
                    "away_points": 10,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "e6b5de7f-6f61-4ae2-b642-ef799e914520",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 3,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "9ffce7a4-6e74-44a7-a0d3-fb55c27f6b50",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 10,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "d860b596-a9d6-4205-bd77-3ad01071d5bd",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 0,
                            "away_points": 7
                        },
                        {
                            "period_type": "quarter",
                            "id": "fe47cf1f-4269-401f-8ae9-6143d3db0417",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 6,
                            "away_points": 3
                        }
                    ]
                }
            },
            {
                "id": "3baa86f1-4618-4e06-939a-4e741a7ab8ec",
                "status": "closed",
                "scheduled": "2022-10-23T20:05:00+00:00",
                "attendance": 61228,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623373",
                "game_type": "regular",
                "duration": "2:50",
                "venue": {
                    "id": "53d42601-5dfb-40a7-bd94-da2c1d3a75e4",
                    "name": "Allegiant Stadium",
                    "city": "Las Vegas",
                    "state": "NV",
                    "country": "USA",
                    "zip": "89118",
                    "address": "3333 Al Davis Way",
                    "capacity": 65000,
                    "surface": "turf",
                    "roof_type": "dome",
                    "sr_id": "sr:venue:51543",
                    "location": {
                        "lat": "36.090852",
                        "lng": "-115.183339"
                    }
                },
                "home": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Las Vegas Raiders",
                    "alias": "LV",
                    "game_number": 6,
                    "sr_id": "sr:competitor:4390"
                },
                "away": {
                    "id": "82d2d380-3834-4938-835f-aec541e5ece7",
                    "name": "Houston Texans",
                    "alias": "HOU",
                    "game_number": 6,
                    "sr_id": "sr:competitor:4324"
                },
                "broadcast": {
                    "network": "CBS"
                },
                "weather": {
                    "condition": "Sunny",
                    "humidity": 19,
                    "temp": 65,
                    "wind": {
                        "speed": 6,
                        "direction": "NNE"
                    }
                },
                "scoring": {
                    "home_points": 38,
                    "away_points": 20,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "f01c2621-00df-43f5-8080-eedd663681f5",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 3,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "5b144cd3-3db8-470b-a3e3-5c896385c9e5",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 7,
                            "away_points": 10
                        },
                        {
                            "period_type": "quarter",
                            "id": "80097907-431e-41ac-be0d-4ff6e639dd23",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 7,
                            "away_points": 10
                        },
                        {
                            "period_type": "quarter",
                            "id": "5d142ac3-3960-4680-8e34-114d59114810",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 21,
                            "away_points": 0
                        }
                    ]
                }
            },
            {
                "id": "ad106c3a-0f28-4de4-8594-324d22b25bae",
                "status": "closed",
                "scheduled": "2022-10-23T20:05:00+00:00",
                "attendance": 76624,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623371",
                "game_type": "regular",
                "duration": "3:18",
                "venue": {
                    "id": "6589e61d-ef1e-4e30-91b5-9acd2072b8a0",
                    "name": "Empower Field at Mile High",
                    "city": "Denver",
                    "state": "CO",
                    "country": "USA",
                    "zip": "80204",
                    "address": "1701 Mile High Stadium Circle",
                    "capacity": 76125,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8179",
                    "location": {
                        "lat": "39.743865",
                        "lng": "-105.020158"
                    }
                },
                "home": {
                    "id": "ce92bd47-93d5-4fe9-ada4-0fc681e6caa0",
                    "name": "Denver Broncos",
                    "alias": "DEN",
                    "game_number": 7,
                    "sr_id": "sr:competitor:4418"
                },
                "away": {
                    "id": "5fee86ae-74ab-4bdd-8416-42a9dd9964f3",
                    "name": "New York Jets",
                    "alias": "NYJ",
                    "game_number": 7,
                    "sr_id": "sr:competitor:4427"
                },
                "broadcast": {
                    "network": "CBS"
                },
                "weather": {
                    "condition": "Partly cloudy",
                    "humidity": 27,
                    "temp": 63,
                    "wind": {
                        "speed": 29,
                        "direction": "WSW"
                    }
                },
                "scoring": {
                    "home_points": 9,
                    "away_points": 16,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "a22afc66-56c4-4fe5-8734-c58a6450691c",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 6,
                            "away_points": 7
                        },
                        {
                            "period_type": "quarter",
                            "id": "2bf741e5-9248-46b6-994e-40676eaff68e",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 3,
                            "away_points": 3
                        },
                        {
                            "period_type": "quarter",
                            "id": "5f321c1b-4105-436a-b502-18af950b94b8",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 0,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "cfe2ece8-e591-4219-add7-e9a48fa3011e",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 0,
                            "away_points": 6
                        }
                    ]
                }
            },
            {
                "id": "553ad2a4-48be-4ff7-92ce-8e5dc7a7329b",
                "status": "closed",
                "scheduled": "2022-10-23T20:25:00+00:00",
                "attendance": 71746,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623377",
                "game_type": "regular",
                "duration": "3:05",
                "venue": {
                    "id": "24c71dbf-6469-46f1-8165-22005c295c8f",
                    "name": "Levi's Stadium",
                    "city": "Santa Clara",
                    "state": "CA",
                    "country": "USA",
                    "zip": "95054",
                    "address": "4900 Marie P DeBartolo Way",
                    "capacity": 68500,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:15672",
                    "location": {
                        "lat": "37.403000",
                        "lng": "-121.970000"
                    }
                },
                "home": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "San Francisco 49ers",
                    "alias": "SF",
                    "game_number": 7,
                    "sr_id": "sr:competitor:4389"
                },
                "away": {
                    "id": "6680d28d-d4d2-49f6-aace-5292d3ec02c2",
                    "name": "Kansas City Chiefs",
                    "alias": "KC",
                    "game_number": 7,
                    "sr_id": "sr:competitor:4422"
                },
                "broadcast": {
                    "network": "FOX"
                },
                "weather": {
                    "condition": "Sunny",
                    "humidity": 32,
                    "temp": 66,
                    "wind": {
                        "speed": 12,
                        "direction": "NNW"
                    }
                },
                "scoring": {
                    "home_points": 23,
                    "away_points": 44,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "75b01b41-9704-4b36-934e-796ba7b2fb11",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 10,
                            "away_points": 7
                        },
                        {
                            "period_type": "quarter",
                            "id": "e9616014-98f7-4de5-965a-77f565495e70",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 3,
                            "away_points": 7
                        },
                        {
                            "period_type": "quarter",
                            "id": "6b0bd34f-4d66-4118-9bac-c73d6f5353f1",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 3,
                            "away_points": 14
                        },
                        {
                            "period_type": "quarter",
                            "id": "36c9661e-09b7-4862-85f5-1c89e21db806",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 7,
                            "away_points": 16
                        }
                    ]
                }
            },
            {
                "id": "69102143-6d12-450e-aaa5-8ca26c4e5c9f",
                "status": "closed",
                "scheduled": "2022-10-23T20:25:00+00:00",
                "attendance": 70240,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623375",
                "game_type": "regular",
                "duration": "3:19",
                "venue": {
                    "id": "790c1f04-73c6-4f6f-8b1e-78a62260be90",
                    "name": "SoFi Stadium",
                    "city": "Inglewood",
                    "state": "CA",
                    "country": "USA",
                    "zip": "90301",
                    "address": "1000 S Prairie Ave",
                    "capacity": 70240,
                    "surface": "artificial",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:52183",
                    "location": {
                        "lat": "33.953536",
                        "lng": "-118.338734"
                    }
                },
                "home": {
                    "id": "1f6dcffb-9823-43cd-9ff4-e7a8466749b5",
                    "name": "Los Angeles Chargers",
                    "alias": "LAC",
                    "game_number": 7,
                    "sr_id": "sr:competitor:4429"
                },
                "away": {
                    "id": "3d08af9e-c767-4f88-a7dc-b920c6d2b4a8",
                    "name": "Seattle Seahawks",
                    "alias": "SEA",
                    "game_number": 7,
                    "sr_id": "sr:competitor:4430"
                },
                "broadcast": {
                    "network": "FOX"
                },
                "weather": {
                    "condition": "Partly cloudy",
                    "humidity": 47,
                    "temp": 73,
                    "wind": {
                        "speed": 12,
                        "direction": "SE"
                    }
                },
                "scoring": {
                    "home_points": 23,
                    "away_points": 37,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "2b8e606b-9f25-4eb6-b837-4ddb692ebfdb",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 0,
                            "away_points": 17
                        },
                        {
                            "period_type": "quarter",
                            "id": "3b0db25d-6c7b-4a8f-8ae2-b80a324744bb",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 14,
                            "away_points": 7
                        },
                        {
                            "period_type": "quarter",
                            "id": "f89dd2a0-c270-46bc-b7b2-4c3274d5f33d",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 0,
                            "away_points": 3
                        },
                        {
                            "period_type": "quarter",
                            "id": "6133c80c-313c-4ec7-a4fc-92464c8621ba",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 9,
                            "away_points": 10
                        }
                    ]
                }
            },
            {
                "id": "056b4eb7-64ce-4858-bae7-f3701d8eb753",
                "status": "closed",
                "scheduled": "2022-10-24T00:20:00+00:00",
                "attendance": 66224,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623379",
                "game_type": "regular",
                "duration": "3:00",
                "venue": {
                    "id": "50a5c833-1570-4c38-abc7-7914cf87dbde",
                    "name": "Hard Rock Stadium",
                    "city": "Miami Gardens",
                    "state": "FL",
                    "country": "USA",
                    "zip": "33056",
                    "address": "2269 Northwest 199th Street",
                    "capacity": 65326,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:21306",
                    "location": {
                        "lat": "25.958025",
                        "lng": "-80.238724"
                    }
                },
                "home": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Miami Dolphins",
                    "alias": "MIA",
                    "game_number": 7,
                    "sr_id": "sr:competitor:4287"
                },
                "away": {
                    "id": "cb2f9f1f-ac67-424e-9e72-1475cb0ed398",
                    "name": "Pittsburgh Steelers",
                    "alias": "PIT",
                    "game_number": 7,
                    "sr_id": "sr:competitor:4345"
                },
                "broadcast": {
                    "network": "NBC"
                },
                "weather": {
                    "condition": "Clear",
                    "humidity": 69,
                    "temp": 78,
                    "wind": {
                        "speed": 7,
                        "direction": "N"
                    }
                },
                "scoring": {
                    "home_points": 16,
                    "away_points": 10,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "c8dce3b0-d9fd-4310-b248-92609de0d003",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 13,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "eddcfe5c-f59d-4243-973a-a7476e9879d3",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 3,
                            "away_points": 10
                        },
                        {
                            "period_type": "quarter",
                            "id": "a3c1f80c-649b-406d-83e7-90409ed20563",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 0,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "02e37d50-5097-41f0-b3cc-28dcc01e8428",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 0,
                            "away_points": 0
                        }
                    ]
                }
            },
            {
                "id": "20ef56e1-8c82-4f96-84b0-3ce79f1a1a31",
                "status": "closed",
                "scheduled": "2022-10-25T00:15:00+00:00",
                "attendance": 65878,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623381",
                "game_type": "regular",
                "duration": "2:55",
                "venue": {
                    "id": "e43310b1-cb82-4df9-8be5-e9b39637031b",
                    "name": "Gillette Stadium",
                    "city": "Foxborough",
                    "state": "MA",
                    "country": "USA",
                    "zip": "02035",
                    "address": "One Patriot Place",
                    "capacity": 66829,
                    "surface": "artificial",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:2379",
                    "location": {
                        "lat": "42.090944",
                        "lng": "-71.264344"
                    }
                },
                "home": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "New England Patriots",
                    "alias": "NE",
                    "game_number": 7,
                    "sr_id": "sr:competitor:4424"
                },
                "away": {
                    "id": "7b112545-38e6-483c-a55c-96cf6ee49cb8",
                    "name": "Chicago Bears",
                    "alias": "CHI",
                    "game_number": 7,
                    "sr_id": "sr:competitor:4391"
                },
                "broadcast": {
                    "network": "ESPN",
                    "satellite": "206"
                },
                "weather": {
                    "condition": "Mist",
                    "humidity": 93,
                    "temp": 56,
                    "wind": {
                        "speed": 11,
                        "direction": "NNE"
                    }
                },
                "scoring": {
                    "home_points": 14,
                    "away_points": 33,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "68a94a6c-8330-447e-8464-e1870adf3a3e",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 0,
                            "away_points": 10
                        },
                        {
                            "period_type": "quarter",
                            "id": "0918108e-0525-4106-b97a-a5289ef5a9e5",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 14,
                            "away_points": 10
                        },
                        {
                            "period_type": "quarter",
                            "id": "4f3272a1-f5a1-48dc-b56b-f26c88ec859c",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 0,
                            "away_points": 6
                        },
                        {
                            "period_type": "quarter",
                            "id": "194ef97f-c8ac-44ee-b4d4-dff67dfb90a3",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 0,
                            "away_points": 7
                        }
                    ]
                }
            }
        ],
        "createdAt": "2022-11-02T23:27:19.866Z",
        "updatedAt": "2022-11-02T23:27:19.866Z",
        "__v": 0
    },
    {
        "_id": "6362fcd7a05a14afa1a59d12",
        "weekNumber": 12,
        "games": [
            {
                "id": "d762d5d8-927b-49c8-9701-3dae3caa210e",
                "status": "scheduled",
                "scheduled": "2022-11-24T17:30:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623487",
                "game_type": "regular",
                "venue": {
                    "id": "6e3bcf22-277d-4c06-b019-62aded51654f",
                    "name": "Ford Field",
                    "city": "Detroit",
                    "state": "MI",
                    "country": "USA",
                    "zip": "48226",
                    "address": "2000 Brush Street",
                    "capacity": 65000,
                    "surface": "artificial",
                    "roof_type": "dome",
                    "sr_id": "sr:venue:8181",
                    "location": {
                        "lat": "42.339958",
                        "lng": "-83.045636"
                    }
                },
                "home": {
                    "id": "c5a59daa-53a7-4de0-851f-fb12be893e9e",
                    "name": "Detroit Lions",
                    "alias": "DET",
                    "game_number": 11,
                    "sr_id": "sr:competitor:4419"
                },
                "away": {
                    "id": "768c92aa-75ff-4a43-bcc0-f2798c2e1724",
                    "name": "Buffalo Bills",
                    "alias": "BUF",
                    "game_number": 11,
                    "sr_id": "sr:competitor:4376"
                },
                "broadcast": {
                    "network": "CBS"
                }
            },
            {
                "id": "0570e6ae-b774-45d7-92ff-254de62e70ba",
                "status": "scheduled",
                "scheduled": "2022-11-24T21:30:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623489",
                "game_type": "regular",
                "venue": {
                    "id": "1e84213a-ff1f-4c9d-a003-8ee782b25a40",
                    "name": "AT&T Stadium",
                    "city": "Arlington",
                    "state": "TX",
                    "country": "USA",
                    "zip": "76011",
                    "address": "One Legends Way",
                    "capacity": 80000,
                    "surface": "artificial",
                    "roof_type": "retractable_dome",
                    "sr_id": "sr:venue:6650",
                    "location": {
                        "lat": "32.747778",
                        "lng": "-97.092778"
                    }
                },
                "home": {
                    "id": "e627eec7-bbae-4fa4-8e73-8e1d6bc5c060",
                    "name": "Dallas Cowboys",
                    "alias": "DAL",
                    "game_number": 11,
                    "sr_id": "sr:competitor:4392"
                },
                "away": {
                    "id": "04aa1c9d-66da-489d-b16a-1dee3f2eec4d",
                    "name": "New York Giants",
                    "alias": "NYG",
                    "game_number": 11,
                    "sr_id": "sr:competitor:4426"
                },
                "broadcast": {
                    "network": "FOX"
                }
            },
            {
                "id": "20e9e73e-9e8c-40cd-9b5c-471fcd224441",
                "status": "scheduled",
                "scheduled": "2022-11-25T01:20:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623491",
                "game_type": "regular",
                "venue": {
                    "id": "f5ff00d4-1ed8-4918-bf73-13d66d510f98",
                    "name": "U.S. Bank Stadium",
                    "city": "Minneapolis",
                    "state": "MN",
                    "country": "USA",
                    "zip": "55415",
                    "address": "900 S 5th Street",
                    "capacity": 66655,
                    "surface": "artificial",
                    "roof_type": "dome",
                    "sr_id": "sr:venue:18423",
                    "location": {
                        "lat": "44.973686",
                        "lng": "-93.257458"
                    }
                },
                "home": {
                    "id": "33405046-04ee-4058-a950-d606f8c30852",
                    "name": "Minnesota Vikings",
                    "alias": "MIN",
                    "game_number": 11,
                    "sr_id": "sr:competitor:4423"
                },
                "away": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "New England Patriots",
                    "alias": "NE",
                    "game_number": 11,
                    "sr_id": "sr:competitor:4424"
                },
                "broadcast": {
                    "network": "NBC"
                }
            },
            {
                "id": "0e8c04c3-b9b9-4a17-ae21-b4572407ba50",
                "status": "scheduled",
                "scheduled": "2022-11-27T18:00:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623493",
                "game_type": "regular",
                "venue": {
                    "id": "39be9ed4-3292-49ac-8699-a381de3a4969",
                    "name": "Bank of America Stadium",
                    "city": "Charlotte",
                    "state": "NC",
                    "country": "USA",
                    "zip": "28202",
                    "address": "800 South Mint Street",
                    "capacity": 75419,
                    "surface": "artificial",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8173",
                    "location": {
                        "lat": "35.225937",
                        "lng": "-80.853133"
                    }
                },
                "home": {
                    "id": "f14bf5cc-9a82-4a38-bc15-d39f75ed5314",
                    "name": "Carolina Panthers",
                    "alias": "CAR",
                    "game_number": 12,
                    "sr_id": "sr:competitor:4415"
                },
                "away": {
                    "id": "ce92bd47-93d5-4fe9-ada4-0fc681e6caa0",
                    "name": "Denver Broncos",
                    "alias": "DEN",
                    "game_number": 11,
                    "sr_id": "sr:competitor:4418"
                },
                "broadcast": {
                    "network": "FOX"
                }
            },
            {
                "id": "37c0ea8c-bd70-428c-a8b6-fa9a58eca788",
                "status": "scheduled",
                "scheduled": "2022-11-27T18:00:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623505",
                "game_type": "regular",
                "venue": {
                    "id": "7c11bb2d-4a53-4842-b842-0f1c63ed78e9",
                    "name": "FedExField",
                    "city": "Landover",
                    "state": "MD",
                    "country": "USA",
                    "zip": "20785",
                    "address": "1600 FedEx Way",
                    "capacity": 82000,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:6652",
                    "location": {
                        "lat": "38.907724",
                        "lng": "-76.864613"
                    }
                },
                "home": {
                    "id": "22052ff7-c065-42ee-bc8f-c4691c50e624",
                    "name": "Washington Commanders",
                    "alias": "WAS",
                    "game_number": 12,
                    "sr_id": "sr:competitor:4432"
                },
                "away": {
                    "id": "e6aa13a4-0055-48a9-bc41-be28dc106929",
                    "name": "Atlanta Falcons",
                    "alias": "ATL",
                    "game_number": 12,
                    "sr_id": "sr:competitor:4393"
                },
                "broadcast": {
                    "network": "FOX"
                }
            },
            {
                "id": "3eb4c32d-482d-44ab-92a3-88bdf1d50850",
                "status": "scheduled",
                "scheduled": "2022-11-27T18:00:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623499",
                "game_type": "regular",
                "venue": {
                    "id": "50a5c833-1570-4c38-abc7-7914cf87dbde",
                    "name": "Hard Rock Stadium",
                    "city": "Miami Gardens",
                    "state": "FL",
                    "country": "USA",
                    "zip": "33056",
                    "address": "2269 Northwest 199th Street",
                    "capacity": 65326,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:21306",
                    "location": {
                        "lat": "25.958025",
                        "lng": "-80.238724"
                    }
                },
                "home": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Miami Dolphins",
                    "alias": "MIA",
                    "game_number": 11,
                    "sr_id": "sr:competitor:4287"
                },
                "away": {
                    "id": "82d2d380-3834-4938-835f-aec541e5ece7",
                    "name": "Houston Texans",
                    "alias": "HOU",
                    "game_number": 11,
                    "sr_id": "sr:competitor:4324"
                },
                "broadcast": {
                    "network": "CBS"
                }
            },
            {
                "id": "6e4ce9b2-f7ea-400a-89b1-17fcc078048e",
                "status": "scheduled",
                "scheduled": "2022-11-27T18:00:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623503",
                "game_type": "regular",
                "venue": {
                    "id": "5295c1b7-c85c-49cb-9569-1707c65324e5",
                    "name": "Nissan Stadium",
                    "city": "Nashville",
                    "state": "TN",
                    "country": "USA",
                    "zip": "37213",
                    "address": "One Titans Way",
                    "capacity": 69143,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8207",
                    "location": {
                        "lat": "36.166367",
                        "lng": "-86.771223"
                    }
                },
                "home": {
                    "id": "d26a1ca5-722d-4274-8f97-c92e49c96315",
                    "name": "Tennessee Titans",
                    "alias": "TEN",
                    "game_number": 11,
                    "sr_id": "sr:competitor:367364"
                },
                "away": {
                    "id": "ad4ae08f-d808-42d5-a1e6-e9bc4e34d123",
                    "name": "Cincinnati Bengals",
                    "alias": "CIN",
                    "game_number": 11,
                    "sr_id": "sr:competitor:4416"
                },
                "broadcast": {
                    "network": "CBS"
                }
            },
            {
                "id": "76aba25a-91f2-4d85-8c74-e7a211def3fa",
                "status": "scheduled",
                "scheduled": "2022-11-27T18:00:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623501",
                "game_type": "regular",
                "venue": {
                    "id": "5d4c85c7-d84e-4e10-bd6a-8a15ebecca5c",
                    "name": "MetLife Stadium",
                    "city": "East Rutherford",
                    "state": "NJ",
                    "country": "USA",
                    "zip": "07073",
                    "address": "One MetLife Stadium Drive",
                    "capacity": 82500,
                    "surface": "artificial",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:1981",
                    "location": {
                        "lat": "40.813611",
                        "lng": "-74.074444"
                    }
                },
                "home": {
                    "id": "5fee86ae-74ab-4bdd-8416-42a9dd9964f3",
                    "name": "New York Jets",
                    "alias": "NYJ",
                    "game_number": 11,
                    "sr_id": "sr:competitor:4427"
                },
                "away": {
                    "id": "7b112545-38e6-483c-a55c-96cf6ee49cb8",
                    "name": "Chicago Bears",
                    "alias": "CHI",
                    "game_number": 12,
                    "sr_id": "sr:competitor:4391"
                },
                "broadcast": {
                    "network": "FOX"
                }
            },
            {
                "id": "b37b5ed5-d66d-41ae-b680-6ae2e6103486",
                "status": "scheduled",
                "scheduled": "2022-11-27T18:00:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623495",
                "game_type": "regular",
                "venue": {
                    "id": "90c38d91-3774-4f5d-82ca-1c806828219f",
                    "name": "FirstEnergy Stadium",
                    "city": "Cleveland",
                    "state": "OH",
                    "country": "USA",
                    "zip": "44114",
                    "address": "100 Alfred Lerner Way",
                    "capacity": 67895,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8177",
                    "location": {
                        "lat": "41.506054",
                        "lng": "-81.700004"
                    }
                },
                "home": {
                    "id": "d5a2eb42-8065-4174-ab79-0a6fa820e35e",
                    "name": "Cleveland Browns",
                    "alias": "CLE",
                    "game_number": 11,
                    "sr_id": "sr:competitor:4417"
                },
                "away": {
                    "id": "4254d319-1bc7-4f81-b4ab-b5e6f3402b69",
                    "name": "Tampa Bay Buccaneers",
                    "alias": "TB",
                    "game_number": 11,
                    "sr_id": "sr:competitor:4388"
                },
                "broadcast": {
                    "network": "FOX"
                }
            },
            {
                "id": "bf00aa76-84ce-4553-ba58-f2303f003af4",
                "status": "scheduled",
                "scheduled": "2022-11-27T18:00:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623497",
                "game_type": "regular",
                "venue": {
                    "id": "4c5c036d-dd3d-4183-b595-71a43a97560f",
                    "name": "TIAA Bank Field",
                    "city": "Jacksonville",
                    "state": "FL",
                    "country": "USA",
                    "zip": "32202",
                    "address": "One EverBank Field Drive",
                    "capacity": 69132,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8187",
                    "location": {
                        "lat": "30.324027",
                        "lng": "-81.637239"
                    }
                },
                "home": {
                    "id": "f7ddd7fa-0bae-4f90-bc8e-669e4d6cf2de",
                    "name": "Jacksonville Jaguars",
                    "alias": "JAC",
                    "game_number": 11,
                    "sr_id": "sr:competitor:4386"
                },
                "away": {
                    "id": "ebd87119-b331-4469-9ea6-d51fe3ce2f1c",
                    "name": "Baltimore Ravens",
                    "alias": "BAL",
                    "game_number": 11,
                    "sr_id": "sr:competitor:4413"
                },
                "broadcast": {
                    "network": "CBS"
                }
            },
            {
                "id": "379bbe84-0685-4965-af48-73920a50f4bb",
                "status": "scheduled",
                "scheduled": "2022-11-27T21:05:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623507",
                "game_type": "regular",
                "venue": {
                    "id": "f8e4d2ab-53f9-4e9f-8c4a-9bc278094a84",
                    "name": "State Farm Stadium",
                    "city": "Glendale",
                    "state": "AZ",
                    "country": "USA",
                    "zip": "85305",
                    "address": "One Cardinals Drive",
                    "capacity": 63400,
                    "surface": "turf",
                    "roof_type": "retractable_dome",
                    "sr_id": "sr:venue:8165",
                    "location": {
                        "lat": "33.527765",
                        "lng": "-112.262090"
                    }
                },
                "home": {
                    "id": "de760528-1dc0-416a-a978-b510d20692ff",
                    "name": "Arizona Cardinals",
                    "alias": "ARI",
                    "game_number": 12,
                    "sr_id": "sr:competitor:4412"
                },
                "away": {
                    "id": "1f6dcffb-9823-43cd-9ff4-e7a8466749b5",
                    "name": "Los Angeles Chargers",
                    "alias": "LAC",
                    "game_number": 11,
                    "sr_id": "sr:competitor:4429"
                },
                "broadcast": {
                    "network": "CBS"
                }
            },
            {
                "id": "759d9794-2ea4-4c71-aa91-3ea9efbc9284",
                "status": "scheduled",
                "scheduled": "2022-11-27T21:05:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623509",
                "game_type": "regular",
                "venue": {
                    "id": "c6b9e5df-c9e4-434c-b3e6-83928f11cbda",
                    "name": "Lumen Field",
                    "city": "Seattle",
                    "state": "WA",
                    "country": "USA",
                    "zip": "98134",
                    "address": "800 Occidental Avenue South",
                    "capacity": 68000,
                    "surface": "artificial",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:2291",
                    "location": {
                        "lat": "47.595165",
                        "lng": "-122.331650"
                    }
                },
                "home": {
                    "id": "3d08af9e-c767-4f88-a7dc-b920c6d2b4a8",
                    "name": "Seattle Seahawks",
                    "alias": "SEA",
                    "game_number": 11,
                    "sr_id": "sr:competitor:4430"
                },
                "away": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Las Vegas Raiders",
                    "alias": "LV",
                    "game_number": 11,
                    "sr_id": "sr:competitor:4390"
                },
                "broadcast": {
                    "network": "CBS"
                }
            },
            {
                "id": "17494e1a-01ce-4b63-8835-24824bf5dd48",
                "status": "scheduled",
                "scheduled": "2022-11-27T21:25:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623513",
                "game_type": "regular",
                "venue": {
                    "id": "24c71dbf-6469-46f1-8165-22005c295c8f",
                    "name": "Levi's Stadium",
                    "city": "Santa Clara",
                    "state": "CA",
                    "country": "USA",
                    "zip": "95054",
                    "address": "4900 Marie P DeBartolo Way",
                    "capacity": 68500,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:15672",
                    "location": {
                        "lat": "37.403000",
                        "lng": "-121.970000"
                    }
                },
                "home": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "San Francisco 49ers",
                    "alias": "SF",
                    "game_number": 11,
                    "sr_id": "sr:competitor:4389"
                },
                "away": {
                    "id": "0d855753-ea21-4953-89f9-0e20aff9eb73",
                    "name": "New Orleans Saints",
                    "alias": "NO",
                    "game_number": 12,
                    "sr_id": "sr:competitor:4425"
                },
                "broadcast": {
                    "network": "FOX"
                }
            },
            {
                "id": "afb0e513-ab69-4ca1-b1ae-a8ab3fc490a5",
                "status": "scheduled",
                "scheduled": "2022-11-27T21:25:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623511",
                "game_type": "regular",
                "venue": {
                    "id": "2ec4c411-dac2-403d-b091-6b6aa4a0a914",
                    "name": "GEHA Field at Arrowhead Stadium",
                    "city": "Kansas City",
                    "state": "MO",
                    "country": "USA",
                    "zip": "64129",
                    "address": "One Arrowhead Drive",
                    "capacity": 76416,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8189",
                    "location": {
                        "lat": "39.049019",
                        "lng": "-94.484140"
                    }
                },
                "home": {
                    "id": "6680d28d-d4d2-49f6-aace-5292d3ec02c2",
                    "name": "Kansas City Chiefs",
                    "alias": "KC",
                    "game_number": 11,
                    "sr_id": "sr:competitor:4422"
                },
                "away": {
                    "id": "2eff2a03-54d4-46ba-890e-2bc3925548f3",
                    "name": "Los Angeles Rams",
                    "alias": "LA",
                    "game_number": 11,
                    "sr_id": "sr:competitor:4387"
                },
                "broadcast": {
                    "network": "FOX"
                }
            },
            {
                "id": "d954b72e-c480-4776-b64b-75a0a781a50e",
                "status": "scheduled",
                "scheduled": "2022-11-28T01:20:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623515",
                "game_type": "regular",
                "venue": {
                    "id": "4fa8c29c-6626-464c-8540-314ed7535e1b",
                    "name": "Lincoln Financial Field",
                    "city": "Philadelphia",
                    "state": "PA",
                    "country": "USA",
                    "zip": "19148",
                    "address": "1020 Pattison Avenue",
                    "capacity": 69596,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:1833",
                    "location": {
                        "lat": "39.900872",
                        "lng": "-75.167311"
                    }
                },
                "home": {
                    "id": "386bdbf9-9eea-4869-bb9a-274b0bc66e80",
                    "name": "Philadelphia Eagles",
                    "alias": "PHI",
                    "game_number": 11,
                    "sr_id": "sr:competitor:4428"
                },
                "away": {
                    "id": "a20471b4-a8d9-40c7-95ad-90cc30e46932",
                    "name": "Green Bay Packers",
                    "alias": "GB",
                    "game_number": 12,
                    "sr_id": "sr:competitor:4420"
                },
                "broadcast": {
                    "network": "NBC"
                }
            },
            {
                "id": "ec9e43b0-c1d0-4ff8-aab6-9195721e39d3",
                "status": "scheduled",
                "scheduled": "2022-11-29T01:15:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623517",
                "game_type": "regular",
                "venue": {
                    "id": "6ed18563-53e0-46c2-a91d-12d73a16456d",
                    "name": "Lucas Oil Stadium",
                    "city": "Indianapolis",
                    "state": "IN",
                    "country": "USA",
                    "zip": "46225",
                    "address": "500 South Capitol Avenue",
                    "capacity": 67000,
                    "surface": "artificial",
                    "roof_type": "retractable_dome",
                    "sr_id": "sr:venue:8185",
                    "location": {
                        "lat": "39.760008",
                        "lng": "-86.163906"
                    }
                },
                "home": {
                    "id": "82cf9565-6eb9-4f01-bdbd-5aa0d472fcd9",
                    "name": "Indianapolis Colts",
                    "alias": "IND",
                    "game_number": 12,
                    "sr_id": "sr:competitor:4421"
                },
                "away": {
                    "id": "cb2f9f1f-ac67-424e-9e72-1475cb0ed398",
                    "name": "Pittsburgh Steelers",
                    "alias": "PIT",
                    "game_number": 11,
                    "sr_id": "sr:competitor:4345"
                },
                "broadcast": {
                    "network": "ESPN",
                    "satellite": "206"
                }
            }
        ],
        "createdAt": "2022-11-02T23:27:19.892Z",
        "updatedAt": "2022-11-02T23:27:19.892Z",
        "__v": 0
    },
    {
        "_id": "6362fcd7a05a14afa1a59d14",
        "weekNumber": 2,
        "games": [
            {
                "id": "de17900b-51bc-4280-8f09-d143bf6cdeb1",
                "status": "closed",
                "scheduled": "2022-09-16T00:15:00+00:00",
                "attendance": 73461,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33471853",
                "game_type": "regular",
                "duration": "2:58",
                "venue": {
                    "id": "2ec4c411-dac2-403d-b091-6b6aa4a0a914",
                    "name": "GEHA Field at Arrowhead Stadium",
                    "city": "Kansas City",
                    "state": "MO",
                    "country": "USA",
                    "zip": "64129",
                    "address": "One Arrowhead Drive",
                    "capacity": 76416,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8189",
                    "location": {
                        "lat": "39.049019",
                        "lng": "-94.484140"
                    }
                },
                "home": {
                    "id": "6680d28d-d4d2-49f6-aace-5292d3ec02c2",
                    "name": "Kansas City Chiefs",
                    "alias": "KC",
                    "game_number": 2,
                    "sr_id": "sr:competitor:4422"
                },
                "away": {
                    "id": "1f6dcffb-9823-43cd-9ff4-e7a8466749b5",
                    "name": "Los Angeles Chargers",
                    "alias": "LAC",
                    "game_number": 2,
                    "sr_id": "sr:competitor:4429"
                },
                "broadcast": {
                    "network": "Amazon Prime Video"
                },
                "weather": {
                    "condition": "Sunny",
                    "humidity": 41,
                    "temp": 82,
                    "wind": {
                        "speed": 13,
                        "direction": "SSE"
                    }
                },
                "scoring": {
                    "home_points": 27,
                    "away_points": 24,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "229af2ea-fb8c-452e-9cbb-3a1283b1399b",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 0,
                            "away_points": 3
                        },
                        {
                            "period_type": "quarter",
                            "id": "1659551c-50a6-494e-88d4-c3d8ba926786",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 7,
                            "away_points": 7
                        },
                        {
                            "period_type": "quarter",
                            "id": "e3aa2083-c48a-44ae-b6e9-e61a3fe22823",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 7,
                            "away_points": 7
                        },
                        {
                            "period_type": "quarter",
                            "id": "bc803fed-ce6b-4b38-840e-6bd17e0c56c0",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 13,
                            "away_points": 7
                        }
                    ]
                }
            },
            {
                "id": "3db2a367-2c28-4c98-9edc-87c3a711952b",
                "status": "closed",
                "scheduled": "2022-09-18T17:00:00+00:00",
                "attendance": 73843,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623219",
                "game_type": "regular",
                "duration": "3:00",
                "venue": {
                    "id": "5d4c85c7-d84e-4e10-bd6a-8a15ebecca5c",
                    "name": "MetLife Stadium",
                    "city": "East Rutherford",
                    "state": "NJ",
                    "country": "USA",
                    "zip": "07073",
                    "address": "One MetLife Stadium Drive",
                    "capacity": 82500,
                    "surface": "artificial",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:1981",
                    "location": {
                        "lat": "40.813611",
                        "lng": "-74.074444"
                    }
                },
                "home": {
                    "id": "04aa1c9d-66da-489d-b16a-1dee3f2eec4d",
                    "name": "New York Giants",
                    "alias": "NYG",
                    "game_number": 2,
                    "sr_id": "sr:competitor:4426"
                },
                "away": {
                    "id": "f14bf5cc-9a82-4a38-bc15-d39f75ed5314",
                    "name": "Carolina Panthers",
                    "alias": "CAR",
                    "game_number": 2,
                    "sr_id": "sr:competitor:4415"
                },
                "broadcast": {
                    "network": "FOX"
                },
                "weather": {
                    "condition": "Sunny",
                    "humidity": 56,
                    "temp": 77,
                    "wind": {
                        "speed": 7,
                        "direction": "WSW"
                    }
                },
                "scoring": {
                    "home_points": 19,
                    "away_points": 16,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "2be83aab-6b35-43b6-a439-678470e47b5a",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 6,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "e01d0d1b-6829-4523-adb8-4200a53aaf99",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 0,
                            "away_points": 6
                        },
                        {
                            "period_type": "quarter",
                            "id": "a93a00a0-989c-4b6f-b5e4-d0a9c887656c",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 7,
                            "away_points": 7
                        },
                        {
                            "period_type": "quarter",
                            "id": "9fe41dec-8b20-457f-b475-6e0836005b57",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 6,
                            "away_points": 3
                        }
                    ]
                }
            },
            {
                "id": "4fe9b8f1-09a9-49a0-a4c7-812aac3d8c21",
                "status": "closed",
                "scheduled": "2022-09-18T17:00:00+00:00",
                "attendance": 67307,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623221",
                "game_type": "regular",
                "duration": "2:58",
                "venue": {
                    "id": "7349a2e6-0ac9-410b-8bd2-ca58c9f7aa34",
                    "name": "Acrisure Stadium",
                    "city": "Pittsburgh",
                    "state": "PA",
                    "country": "USA",
                    "zip": "15212",
                    "address": "100 Art Rooney Avenue",
                    "capacity": 68400,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8197",
                    "location": {
                        "lat": "40.446653",
                        "lng": "-80.015844"
                    }
                },
                "home": {
                    "id": "cb2f9f1f-ac67-424e-9e72-1475cb0ed398",
                    "name": "Pittsburgh Steelers",
                    "alias": "PIT",
                    "game_number": 2,
                    "sr_id": "sr:competitor:4345"
                },
                "away": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "New England Patriots",
                    "alias": "NE",
                    "game_number": 2,
                    "sr_id": "sr:competitor:4424"
                },
                "broadcast": {
                    "network": "CBS"
                },
                "weather": {
                    "condition": "Partly cloudy",
                    "humidity": 64,
                    "temp": 75,
                    "wind": {
                        "speed": 8,
                        "direction": "WSW"
                    }
                },
                "scoring": {
                    "home_points": 14,
                    "away_points": 17,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "d7d28542-3180-4624-bc17-68d08fd2f8d0",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 0,
                            "away_points": 3
                        },
                        {
                            "period_type": "quarter",
                            "id": "3d3468a4-e6ec-4e49-9095-0003416d370b",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 3,
                            "away_points": 7
                        },
                        {
                            "period_type": "quarter",
                            "id": "d5c51c84-247d-4e49-9cda-63b0dec2216b",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 3,
                            "away_points": 7
                        },
                        {
                            "period_type": "quarter",
                            "id": "f7c76dac-297f-41fa-ac79-9ea6d9892d8e",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 8,
                            "away_points": 0
                        }
                    ]
                }
            },
            {
                "id": "7ffcc5a2-e9a5-413d-b692-e46818eb840a",
                "status": "closed",
                "scheduled": "2022-09-18T17:00:00+00:00",
                "attendance": 70400,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623217",
                "game_type": "regular",
                "duration": "3:11",
                "venue": {
                    "id": "3c85d89a-ec66-4983-acd5-1381d6c8673a",
                    "name": "Caesars Superdome",
                    "city": "New Orleans",
                    "state": "LA",
                    "country": "USA",
                    "zip": "70112",
                    "address": "1500 Sugar Bowl Drive",
                    "capacity": 73208,
                    "surface": "artificial",
                    "roof_type": "dome",
                    "sr_id": "sr:venue:8195",
                    "location": {
                        "lat": "29.950928",
                        "lng": "-90.080876"
                    }
                },
                "home": {
                    "id": "0d855753-ea21-4953-89f9-0e20aff9eb73",
                    "name": "New Orleans Saints",
                    "alias": "NO",
                    "game_number": 2,
                    "sr_id": "sr:competitor:4425"
                },
                "away": {
                    "id": "4254d319-1bc7-4f81-b4ab-b5e6f3402b69",
                    "name": "Tampa Bay Buccaneers",
                    "alias": "TB",
                    "game_number": 2,
                    "sr_id": "sr:competitor:4388"
                },
                "broadcast": {
                    "network": "FOX"
                },
                "weather": {
                    "condition": "Partly cloudy",
                    "humidity": 77,
                    "temp": 85,
                    "wind": {
                        "speed": 12,
                        "direction": "NE"
                    }
                },
                "scoring": {
                    "home_points": 10,
                    "away_points": 20,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "efb36804-7d8f-438f-93ea-2dc74d3789d4",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 3,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "ec9c6464-7558-4497-9d25-5180f5d77ad8",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 0,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "951d73b0-84ce-4b84-91db-402bb31304ce",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 0,
                            "away_points": 3
                        },
                        {
                            "period_type": "quarter",
                            "id": "ffff384a-a7f0-4734-a67a-63b034fdccd9",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 7,
                            "away_points": 17
                        }
                    ]
                }
            },
            {
                "id": "8024a131-2d3d-4ee1-bc56-816a55f248e0",
                "status": "closed",
                "scheduled": "2022-09-18T17:00:00+00:00",
                "attendance": 67431,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623211",
                "game_type": "regular",
                "duration": "3:09",
                "venue": {
                    "id": "90c38d91-3774-4f5d-82ca-1c806828219f",
                    "name": "FirstEnergy Stadium",
                    "city": "Cleveland",
                    "state": "OH",
                    "country": "USA",
                    "zip": "44114",
                    "address": "100 Alfred Lerner Way",
                    "capacity": 67895,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8177",
                    "location": {
                        "lat": "41.506054",
                        "lng": "-81.700004"
                    }
                },
                "home": {
                    "id": "d5a2eb42-8065-4174-ab79-0a6fa820e35e",
                    "name": "Cleveland Browns",
                    "alias": "CLE",
                    "game_number": 2,
                    "sr_id": "sr:competitor:4417"
                },
                "away": {
                    "id": "5fee86ae-74ab-4bdd-8416-42a9dd9964f3",
                    "name": "New York Jets",
                    "alias": "NYJ",
                    "game_number": 2,
                    "sr_id": "sr:competitor:4427"
                },
                "broadcast": {
                    "network": "CBS"
                },
                "weather": {
                    "condition": "Partly cloudy",
                    "humidity": 58,
                    "temp": 79,
                    "wind": {
                        "speed": 12,
                        "direction": "SW"
                    }
                },
                "scoring": {
                    "home_points": 30,
                    "away_points": 31,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "26dc9f04-9153-44a9-8d2d-19fd11d09445",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 7,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "54d5079c-12bf-404c-b9a7-11c8855d904d",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 7,
                            "away_points": 14
                        },
                        {
                            "period_type": "quarter",
                            "id": "77ae4451-effe-4367-b369-da074ab22d6c",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 3,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "1bbf9aca-df95-4b76-bd28-b90d621a9800",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 13,
                            "away_points": 17
                        }
                    ]
                }
            },
            {
                "id": "90622f34-5635-42ed-bc72-ba3b5aeb98a1",
                "status": "closed",
                "scheduled": "2022-09-18T17:00:00+00:00",
                "attendance": 70582,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623209",
                "game_type": "regular",
                "duration": "3:20",
                "venue": {
                    "id": "d54faae0-0314-484f-8604-9d8dd08e1149",
                    "name": "M&T Bank Stadium",
                    "city": "Baltimore",
                    "state": "MD",
                    "country": "USA",
                    "zip": "21230",
                    "address": "1101 Russell Street",
                    "capacity": 71008,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8169",
                    "location": {
                        "lat": "39.277995",
                        "lng": "-76.622592"
                    }
                },
                "home": {
                    "id": "ebd87119-b331-4469-9ea6-d51fe3ce2f1c",
                    "name": "Baltimore Ravens",
                    "alias": "BAL",
                    "game_number": 2,
                    "sr_id": "sr:competitor:4413"
                },
                "away": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Miami Dolphins",
                    "alias": "MIA",
                    "game_number": 2,
                    "sr_id": "sr:competitor:4287"
                },
                "broadcast": {
                    "network": "CBS"
                },
                "weather": {
                    "condition": "Sunny",
                    "humidity": 69,
                    "temp": 77,
                    "wind": {
                        "speed": 6,
                        "direction": "ESE"
                    }
                },
                "scoring": {
                    "home_points": 38,
                    "away_points": 42,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "5ae665e6-dbc3-47b3-8173-4b7ab97777ae",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 7,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "92d70157-d2d7-44d4-bc2b-2f928ac4c20b",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 21,
                            "away_points": 7
                        },
                        {
                            "period_type": "quarter",
                            "id": "b8af9c0d-8e41-4068-9fdb-630ab37e8950",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 7,
                            "away_points": 7
                        },
                        {
                            "period_type": "quarter",
                            "id": "fce97d1f-e2a5-40ee-aa10-3435241a88c0",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 3,
                            "away_points": 28
                        }
                    ]
                }
            },
            {
                "id": "b1429091-b0af-406e-9f09-5968c049e0ae",
                "status": "closed",
                "scheduled": "2022-09-18T17:00:00+00:00",
                "attendance": 57687,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623213",
                "game_type": "regular",
                "duration": "3:07",
                "venue": {
                    "id": "6e3bcf22-277d-4c06-b019-62aded51654f",
                    "name": "Ford Field",
                    "city": "Detroit",
                    "state": "MI",
                    "country": "USA",
                    "zip": "48226",
                    "address": "2000 Brush Street",
                    "capacity": 65000,
                    "surface": "artificial",
                    "roof_type": "dome",
                    "sr_id": "sr:venue:8181",
                    "location": {
                        "lat": "42.339958",
                        "lng": "-83.045636"
                    }
                },
                "home": {
                    "id": "c5a59daa-53a7-4de0-851f-fb12be893e9e",
                    "name": "Detroit Lions",
                    "alias": "DET",
                    "game_number": 2,
                    "sr_id": "sr:competitor:4419"
                },
                "away": {
                    "id": "22052ff7-c065-42ee-bc8f-c4691c50e624",
                    "name": "Washington Commanders",
                    "alias": "WAS",
                    "game_number": 2,
                    "sr_id": "sr:competitor:4432"
                },
                "broadcast": {
                    "network": "FOX"
                },
                "weather": {
                    "condition": "Partly cloudy",
                    "humidity": 35,
                    "temp": 82,
                    "wind": {
                        "speed": 13,
                        "direction": "WSW"
                    }
                },
                "scoring": {
                    "home_points": 36,
                    "away_points": 27,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "6b37ebbb-d4fb-403b-ba8b-52618fd4a7ff",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 12,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "6cbf8030-ca93-4b64-b5cb-0f833ee61e03",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 10,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "bd879bf9-9ec5-4f86-b092-6f4ff407fa9c",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 7,
                            "away_points": 15
                        },
                        {
                            "period_type": "quarter",
                            "id": "2c9102aa-8eca-40f7-b7ef-36eaa7be8ce0",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 7,
                            "away_points": 12
                        }
                    ]
                }
            },
            {
                "id": "d5119ada-211c-4cf5-bc2a-aeb3589e3fd5",
                "status": "closed",
                "scheduled": "2022-09-18T17:00:00+00:00",
                "attendance": 58360,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623215",
                "game_type": "regular",
                "duration": "2:45",
                "venue": {
                    "id": "4c5c036d-dd3d-4183-b595-71a43a97560f",
                    "name": "TIAA Bank Field",
                    "city": "Jacksonville",
                    "state": "FL",
                    "country": "USA",
                    "zip": "32202",
                    "address": "One EverBank Field Drive",
                    "capacity": 69132,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8187",
                    "location": {
                        "lat": "30.324027",
                        "lng": "-81.637239"
                    }
                },
                "home": {
                    "id": "f7ddd7fa-0bae-4f90-bc8e-669e4d6cf2de",
                    "name": "Jacksonville Jaguars",
                    "alias": "JAC",
                    "game_number": 2,
                    "sr_id": "sr:competitor:4386"
                },
                "away": {
                    "id": "82cf9565-6eb9-4f01-bdbd-5aa0d472fcd9",
                    "name": "Indianapolis Colts",
                    "alias": "IND",
                    "game_number": 2,
                    "sr_id": "sr:competitor:4421"
                },
                "broadcast": {
                    "network": "CBS"
                },
                "weather": {
                    "condition": "Partly cloudy",
                    "humidity": 79,
                    "temp": 81,
                    "wind": {
                        "speed": 6,
                        "direction": "SE"
                    }
                },
                "scoring": {
                    "home_points": 24,
                    "away_points": 0,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "57b650cc-fc36-452f-a9fb-c1480266bdc5",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 7,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "86219237-f5b2-4944-a1fd-b9e630d68e39",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 10,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "4d9393a1-767c-4f78-90fe-7447ac43ab98",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 7,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "ac4eaea7-9db9-44f0-bb77-fd8b7a3a081c",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 0,
                            "away_points": 0
                        }
                    ]
                }
            },
            {
                "id": "3f1d5b42-2e10-4cb1-8db9-41a6bb2ab21f",
                "status": "closed",
                "scheduled": "2022-09-18T20:05:00+00:00",
                "attendance": 71802,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623223",
                "game_type": "regular",
                "duration": "2:56",
                "venue": {
                    "id": "790c1f04-73c6-4f6f-8b1e-78a62260be90",
                    "name": "SoFi Stadium",
                    "city": "Inglewood",
                    "state": "CA",
                    "country": "USA",
                    "zip": "90301",
                    "address": "1000 S Prairie Ave",
                    "capacity": 70240,
                    "surface": "artificial",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:52183",
                    "location": {
                        "lat": "33.953536",
                        "lng": "-118.338734"
                    }
                },
                "home": {
                    "id": "2eff2a03-54d4-46ba-890e-2bc3925548f3",
                    "name": "Los Angeles Rams",
                    "alias": "LA",
                    "game_number": 2,
                    "sr_id": "sr:competitor:4387"
                },
                "away": {
                    "id": "e6aa13a4-0055-48a9-bc41-be28dc106929",
                    "name": "Atlanta Falcons",
                    "alias": "ATL",
                    "game_number": 2,
                    "sr_id": "sr:competitor:4393"
                },
                "broadcast": {
                    "network": "FOX"
                },
                "weather": {
                    "condition": "Overcast",
                    "humidity": 61,
                    "temp": 73,
                    "wind": {
                        "speed": 11,
                        "direction": "SW"
                    }
                },
                "scoring": {
                    "home_points": 31,
                    "away_points": 27,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "39d05db1-508c-4ec9-9dae-f460972a0852",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 7,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "ec172237-b030-42d4-98af-50a3c1f81023",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 14,
                            "away_points": 3
                        },
                        {
                            "period_type": "quarter",
                            "id": "bcfe8378-0858-4604-ad39-dd55085285f3",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 7,
                            "away_points": 7
                        },
                        {
                            "period_type": "quarter",
                            "id": "a4d44b89-2439-4565-a7d7-55f65bc5af44",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 3,
                            "away_points": 17
                        }
                    ]
                }
            },
            {
                "id": "f3d27d24-7b63-4314-aec7-c65405c82724",
                "status": "closed",
                "scheduled": "2022-09-18T20:05:00+00:00",
                "attendance": 71597,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623225",
                "game_type": "regular",
                "duration": "2:51",
                "venue": {
                    "id": "24c71dbf-6469-46f1-8165-22005c295c8f",
                    "name": "Levi's Stadium",
                    "city": "Santa Clara",
                    "state": "CA",
                    "country": "USA",
                    "zip": "95054",
                    "address": "4900 Marie P DeBartolo Way",
                    "capacity": 68500,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:15672",
                    "location": {
                        "lat": "37.403000",
                        "lng": "-121.970000"
                    }
                },
                "home": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "San Francisco 49ers",
                    "alias": "SF",
                    "game_number": 2,
                    "sr_id": "sr:competitor:4389"
                },
                "away": {
                    "id": "3d08af9e-c767-4f88-a7dc-b920c6d2b4a8",
                    "name": "Seattle Seahawks",
                    "alias": "SEA",
                    "game_number": 2,
                    "sr_id": "sr:competitor:4430"
                },
                "broadcast": {
                    "network": "FOX"
                },
                "weather": {
                    "condition": "Mist",
                    "humidity": 83,
                    "temp": 64,
                    "wind": {
                        "speed": 12,
                        "direction": "SSE"
                    }
                },
                "scoring": {
                    "home_points": 27,
                    "away_points": 7,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "2b0aa626-b38b-41dd-86da-92c59989b4b1",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 6,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "c5519861-83a7-43ae-8076-1211d1198da0",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 14,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "0adf96e7-843c-41dd-998f-043515fd6bff",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 0,
                            "away_points": 7
                        },
                        {
                            "period_type": "quarter",
                            "id": "03dcdbc9-a5e1-4157-9e36-86949c125415",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 7,
                            "away_points": 0
                        }
                    ]
                }
            },
            {
                "id": "d144122e-0963-42f5-85c5-651cb8c1b123",
                "status": "closed",
                "scheduled": "2022-09-18T20:25:00+00:00",
                "attendance": 76191,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623229",
                "game_type": "regular",
                "duration": "3:04",
                "venue": {
                    "id": "6589e61d-ef1e-4e30-91b5-9acd2072b8a0",
                    "name": "Empower Field at Mile High",
                    "city": "Denver",
                    "state": "CO",
                    "country": "USA",
                    "zip": "80204",
                    "address": "1701 Mile High Stadium Circle",
                    "capacity": 76125,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8179",
                    "location": {
                        "lat": "39.743865",
                        "lng": "-105.020158"
                    }
                },
                "home": {
                    "id": "ce92bd47-93d5-4fe9-ada4-0fc681e6caa0",
                    "name": "Denver Broncos",
                    "alias": "DEN",
                    "game_number": 2,
                    "sr_id": "sr:competitor:4418"
                },
                "away": {
                    "id": "82d2d380-3834-4938-835f-aec541e5ece7",
                    "name": "Houston Texans",
                    "alias": "HOU",
                    "game_number": 2,
                    "sr_id": "sr:competitor:4324"
                },
                "broadcast": {
                    "network": "CBS"
                },
                "weather": {
                    "condition": "Partly cloudy",
                    "humidity": 30,
                    "temp": 79,
                    "wind": {
                        "speed": 7,
                        "direction": "NE"
                    }
                },
                "scoring": {
                    "home_points": 16,
                    "away_points": 9,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "3d8869a5-22ec-4631-8c49-d96267d5c0e0",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 3,
                            "away_points": 3
                        },
                        {
                            "period_type": "quarter",
                            "id": "49e1cad0-d15c-4ebe-9e40-d78805120967",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 3,
                            "away_points": 3
                        },
                        {
                            "period_type": "quarter",
                            "id": "32bc4b96-d191-4d83-9138-ac7b63b1aea9",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 0,
                            "away_points": 3
                        },
                        {
                            "period_type": "quarter",
                            "id": "4e435c6d-a5a9-4228-a095-ee5cc01bca99",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 10,
                            "away_points": 0
                        }
                    ]
                }
            },
            {
                "id": "e27da541-573a-4c86-bf53-a25a6d85c73b",
                "status": "closed",
                "scheduled": "2022-09-18T20:25:00+00:00",
                "attendance": 61707,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623231",
                "game_type": "regular",
                "duration": "3:31",
                "venue": {
                    "id": "53d42601-5dfb-40a7-bd94-da2c1d3a75e4",
                    "name": "Allegiant Stadium",
                    "city": "Las Vegas",
                    "state": "NV",
                    "country": "USA",
                    "zip": "89118",
                    "address": "3333 Al Davis Way",
                    "capacity": 65000,
                    "surface": "turf",
                    "roof_type": "dome",
                    "sr_id": "sr:venue:51543",
                    "location": {
                        "lat": "36.090852",
                        "lng": "-115.183339"
                    }
                },
                "home": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Las Vegas Raiders",
                    "alias": "LV",
                    "game_number": 2,
                    "sr_id": "sr:competitor:4390"
                },
                "away": {
                    "id": "de760528-1dc0-416a-a978-b510d20692ff",
                    "name": "Arizona Cardinals",
                    "alias": "ARI",
                    "game_number": 2,
                    "sr_id": "sr:competitor:4412"
                },
                "broadcast": {
                    "network": "CBS"
                },
                "weather": {
                    "condition": "Sunny",
                    "humidity": 12,
                    "temp": 90,
                    "wind": {
                        "speed": 9,
                        "direction": "SSE"
                    }
                },
                "scoring": {
                    "home_points": 23,
                    "away_points": 29,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "92e5ef11-5eb4-4b24-9b9e-7009e450ba25",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 7,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "1aa34a51-cd09-4489-9c39-f744c6dcd846",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 13,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "a7ff2988-c780-4961-8d5a-021df64e601c",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 3,
                            "away_points": 7
                        },
                        {
                            "period_type": "quarter",
                            "id": "0a302673-c8f0-4005-8590-bd169a208041",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 0,
                            "away_points": 16
                        },
                        {
                            "period_type": "overtime",
                            "id": "22ef0ade-1180-4832-aa72-65d15f1434d5",
                            "number": 1,
                            "sequence": 5,
                            "home_points": 0,
                            "away_points": 6
                        }
                    ]
                }
            },
            {
                "id": "e6e9bd0b-6803-492a-ba93-5d6dfb38c199",
                "status": "closed",
                "scheduled": "2022-09-18T20:25:00+00:00",
                "attendance": 92944,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623227",
                "game_type": "regular",
                "duration": "3:00",
                "venue": {
                    "id": "1e84213a-ff1f-4c9d-a003-8ee782b25a40",
                    "name": "AT&T Stadium",
                    "city": "Arlington",
                    "state": "TX",
                    "country": "USA",
                    "zip": "76011",
                    "address": "One Legends Way",
                    "capacity": 80000,
                    "surface": "artificial",
                    "roof_type": "retractable_dome",
                    "sr_id": "sr:venue:6650",
                    "location": {
                        "lat": "32.747778",
                        "lng": "-97.092778"
                    }
                },
                "home": {
                    "id": "e627eec7-bbae-4fa4-8e73-8e1d6bc5c060",
                    "name": "Dallas Cowboys",
                    "alias": "DAL",
                    "game_number": 2,
                    "sr_id": "sr:competitor:4392"
                },
                "away": {
                    "id": "ad4ae08f-d808-42d5-a1e6-e9bc4e34d123",
                    "name": "Cincinnati Bengals",
                    "alias": "CIN",
                    "game_number": 2,
                    "sr_id": "sr:competitor:4416"
                },
                "broadcast": {
                    "network": "CBS"
                },
                "weather": {
                    "condition": "Partly cloudy",
                    "humidity": 35,
                    "temp": 93,
                    "wind": {
                        "speed": 11,
                        "direction": "S"
                    }
                },
                "scoring": {
                    "home_points": 20,
                    "away_points": 17,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "f687d1f5-02fa-44ba-922a-80a4133433fe",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 14,
                            "away_points": 3
                        },
                        {
                            "period_type": "quarter",
                            "id": "c81dcee3-7ec6-454f-8fce-2997011b785c",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 3,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "8409148f-13e3-450a-963f-65a5666a78c6",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 0,
                            "away_points": 6
                        },
                        {
                            "period_type": "quarter",
                            "id": "b45677d6-b3a5-4093-9680-708d6f1cae4a",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 3,
                            "away_points": 8
                        }
                    ]
                }
            },
            {
                "id": "a1cfb866-3432-46f6-a354-385db0a6e7fb",
                "status": "closed",
                "scheduled": "2022-09-19T00:20:00+00:00",
                "attendance": 78350,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623233",
                "game_type": "regular",
                "duration": "2:46",
                "venue": {
                    "id": "5a60dd3a-302c-41c6-ab0f-dd335c1103c2",
                    "name": "Lambeau Field",
                    "city": "Green Bay",
                    "state": "WI",
                    "country": "USA",
                    "zip": "54304",
                    "address": "1265 Lombardi Avenue",
                    "capacity": 81435,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8183",
                    "location": {
                        "lat": "44.501357",
                        "lng": "-88.062440"
                    }
                },
                "home": {
                    "id": "a20471b4-a8d9-40c7-95ad-90cc30e46932",
                    "name": "Green Bay Packers",
                    "alias": "GB",
                    "game_number": 2,
                    "sr_id": "sr:competitor:4420"
                },
                "away": {
                    "id": "7b112545-38e6-483c-a55c-96cf6ee49cb8",
                    "name": "Chicago Bears",
                    "alias": "CHI",
                    "game_number": 2,
                    "sr_id": "sr:competitor:4391"
                },
                "broadcast": {
                    "network": "NBC"
                },
                "weather": {
                    "condition": "Partly cloudy",
                    "humidity": 76,
                    "temp": 73,
                    "wind": {
                        "speed": 6,
                        "direction": "SW"
                    }
                },
                "scoring": {
                    "home_points": 27,
                    "away_points": 10,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "619c905c-0c0d-41ff-a374-8d1059b2d28b",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 3,
                            "away_points": 7
                        },
                        {
                            "period_type": "quarter",
                            "id": "106fe25c-4824-4f15-bd1e-871bcfa31f2c",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 21,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "fc896fb9-49b7-4a62-bb73-c4d1eb4fdf26",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 0,
                            "away_points": 3
                        },
                        {
                            "period_type": "quarter",
                            "id": "e3d6eb55-98c4-4d6e-accb-4051cb0e0e02",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 3,
                            "away_points": 0
                        }
                    ]
                }
            },
            {
                "id": "feac652a-72a3-4c1e-a43f-7e2a1035c1dc",
                "status": "closed",
                "scheduled": "2022-09-19T23:15:00+00:00",
                "attendance": 70683,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33573969",
                "game_type": "regular",
                "duration": "3:15",
                "venue": {
                    "id": "e9e0828e-37fc-4238-a317-49037577dd55",
                    "name": "Highmark Stadium",
                    "city": "Orchard Park",
                    "state": "NY",
                    "country": "USA",
                    "zip": "14127",
                    "address": "One Bills Drive",
                    "capacity": 71608,
                    "surface": "artificial",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8171",
                    "location": {
                        "lat": "42.773826",
                        "lng": "-78.786589"
                    }
                },
                "home": {
                    "id": "768c92aa-75ff-4a43-bcc0-f2798c2e1724",
                    "name": "Buffalo Bills",
                    "alias": "BUF",
                    "game_number": 2,
                    "sr_id": "sr:competitor:4376"
                },
                "away": {
                    "id": "d26a1ca5-722d-4274-8f97-c92e49c96315",
                    "name": "Tennessee Titans",
                    "alias": "TEN",
                    "game_number": 2,
                    "sr_id": "sr:competitor:367364"
                },
                "broadcast": {
                    "network": "ESPN",
                    "satellite": "206"
                },
                "weather": {
                    "condition": "Rain With Thunderstorm",
                    "humidity": 83,
                    "temp": 68,
                    "wind": {
                        "speed": 4,
                        "direction": "N"
                    }
                },
                "scoring": {
                    "home_points": 41,
                    "away_points": 7,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "d001d09f-e327-42a5-8f02-70078e612e59",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 7,
                            "away_points": 7
                        },
                        {
                            "period_type": "quarter",
                            "id": "d82206c0-c533-4fc2-a6c6-35f4f7bbbb1e",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 10,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "bb1ae895-ca00-45cd-862d-3e7e0427df42",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 24,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "5ca15fb2-a524-42e1-9566-be0915a3b69d",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 0,
                            "away_points": 0
                        }
                    ]
                }
            },
            {
                "id": "4dc9220a-bc27-4e0a-838e-4860f4bc4da8",
                "status": "closed",
                "scheduled": "2022-09-20T00:30:00+00:00",
                "attendance": 69879,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33574019",
                "game_type": "regular",
                "duration": "2:48",
                "venue": {
                    "id": "4fa8c29c-6626-464c-8540-314ed7535e1b",
                    "name": "Lincoln Financial Field",
                    "city": "Philadelphia",
                    "state": "PA",
                    "country": "USA",
                    "zip": "19148",
                    "address": "1020 Pattison Avenue",
                    "capacity": 69596,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:1833",
                    "location": {
                        "lat": "39.900872",
                        "lng": "-75.167311"
                    }
                },
                "home": {
                    "id": "386bdbf9-9eea-4869-bb9a-274b0bc66e80",
                    "name": "Philadelphia Eagles",
                    "alias": "PHI",
                    "game_number": 2,
                    "sr_id": "sr:competitor:4428"
                },
                "away": {
                    "id": "33405046-04ee-4058-a950-d606f8c30852",
                    "name": "Minnesota Vikings",
                    "alias": "MIN",
                    "game_number": 2,
                    "sr_id": "sr:competitor:4423"
                },
                "broadcast": {
                    "network": "ABC"
                },
                "weather": {
                    "condition": "Partly cloudy",
                    "humidity": 58,
                    "temp": 79,
                    "wind": {
                        "speed": 4,
                        "direction": "WNW"
                    }
                },
                "scoring": {
                    "home_points": 24,
                    "away_points": 7,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "4a922a57-85fb-4532-9ce8-99f723f78026",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 7,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "66d0fe96-d268-4244-b23f-879aeec9355f",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 17,
                            "away_points": 7
                        },
                        {
                            "period_type": "quarter",
                            "id": "ae4c5f44-ec4b-4f00-8ccc-b127a99102d5",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 0,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "123ba288-8c80-43b3-ab4a-3ac75e9bb6ec",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 0,
                            "away_points": 0
                        }
                    ]
                }
            }
        ],
        "createdAt": "2022-11-02T23:27:19.926Z",
        "updatedAt": "2022-11-02T23:27:19.926Z",
        "__v": 0
    },
    {
        "_id": "6362fcd7a05a14afa1a59d16",
        "weekNumber": 13,
        "games": [
            {
                "id": "b9a405a3-d53d-483d-8f38-9f10263a0492",
                "status": "scheduled",
                "scheduled": "2022-12-02T01:15:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623519",
                "game_type": "regular",
                "venue": {
                    "id": "e43310b1-cb82-4df9-8be5-e9b39637031b",
                    "name": "Gillette Stadium",
                    "city": "Foxborough",
                    "state": "MA",
                    "country": "USA",
                    "zip": "02035",
                    "address": "One Patriot Place",
                    "capacity": 66829,
                    "surface": "artificial",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:2379",
                    "location": {
                        "lat": "42.090944",
                        "lng": "-71.264344"
                    }
                },
                "home": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "New England Patriots",
                    "alias": "NE",
                    "game_number": 12,
                    "sr_id": "sr:competitor:4424"
                },
                "away": {
                    "id": "768c92aa-75ff-4a43-bcc0-f2798c2e1724",
                    "name": "Buffalo Bills",
                    "alias": "BUF",
                    "game_number": 12,
                    "sr_id": "sr:competitor:4376"
                },
                "broadcast": {
                    "network": "Amazon Prime Video"
                }
            },
            {
                "id": "29723007-8261-470a-a7c7-5713075ab27f",
                "status": "scheduled",
                "scheduled": "2022-12-04T18:00:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623533",
                "game_type": "regular",
                "venue": {
                    "id": "5d4c85c7-d84e-4e10-bd6a-8a15ebecca5c",
                    "name": "MetLife Stadium",
                    "city": "East Rutherford",
                    "state": "NJ",
                    "country": "USA",
                    "zip": "07073",
                    "address": "One MetLife Stadium Drive",
                    "capacity": 82500,
                    "surface": "artificial",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:1981",
                    "location": {
                        "lat": "40.813611",
                        "lng": "-74.074444"
                    }
                },
                "home": {
                    "id": "04aa1c9d-66da-489d-b16a-1dee3f2eec4d",
                    "name": "New York Giants",
                    "alias": "NYG",
                    "game_number": 12,
                    "sr_id": "sr:competitor:4426"
                },
                "away": {
                    "id": "22052ff7-c065-42ee-bc8f-c4691c50e624",
                    "name": "Washington Commanders",
                    "alias": "WAS",
                    "game_number": 13,
                    "sr_id": "sr:competitor:4432"
                },
                "broadcast": {
                    "network": "FOX"
                }
            },
            {
                "id": "49fe6388-f9bf-4974-be9b-5a18fbcc0d57",
                "status": "scheduled",
                "scheduled": "2022-12-04T18:00:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623523",
                "game_type": "regular",
                "venue": {
                    "id": "d54faae0-0314-484f-8604-9d8dd08e1149",
                    "name": "M&T Bank Stadium",
                    "city": "Baltimore",
                    "state": "MD",
                    "country": "USA",
                    "zip": "21230",
                    "address": "1101 Russell Street",
                    "capacity": 71008,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8169",
                    "location": {
                        "lat": "39.277995",
                        "lng": "-76.622592"
                    }
                },
                "home": {
                    "id": "ebd87119-b331-4469-9ea6-d51fe3ce2f1c",
                    "name": "Baltimore Ravens",
                    "alias": "BAL",
                    "game_number": 12,
                    "sr_id": "sr:competitor:4413"
                },
                "away": {
                    "id": "ce92bd47-93d5-4fe9-ada4-0fc681e6caa0",
                    "name": "Denver Broncos",
                    "alias": "DEN",
                    "game_number": 12,
                    "sr_id": "sr:competitor:4418"
                },
                "broadcast": {
                    "network": "CBS"
                }
            },
            {
                "id": "4a17d98f-a876-4214-b7d1-ab987578c562",
                "status": "scheduled",
                "scheduled": "2022-12-04T18:00:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623521",
                "game_type": "regular",
                "venue": {
                    "id": "1f2d393b-2291-4835-a412-0714966ea245",
                    "name": "Mercedes-Benz Stadium",
                    "city": "Atlanta",
                    "state": "GA",
                    "country": "USA",
                    "zip": "30313",
                    "address": "441 Martin Luther King Jr Drive NW",
                    "capacity": 71000,
                    "surface": "artificial",
                    "roof_type": "retractable_dome",
                    "sr_id": "sr:venue:20343",
                    "location": {
                        "lat": "33.757368",
                        "lng": "-84.401008"
                    }
                },
                "home": {
                    "id": "e6aa13a4-0055-48a9-bc41-be28dc106929",
                    "name": "Atlanta Falcons",
                    "alias": "ATL",
                    "game_number": 13,
                    "sr_id": "sr:competitor:4393"
                },
                "away": {
                    "id": "cb2f9f1f-ac67-424e-9e72-1475cb0ed398",
                    "name": "Pittsburgh Steelers",
                    "alias": "PIT",
                    "game_number": 12,
                    "sr_id": "sr:competitor:4345"
                },
                "broadcast": {
                    "network": "CBS"
                }
            },
            {
                "id": "72687ef0-fd87-4e79-a590-82332bff157f",
                "status": "scheduled",
                "scheduled": "2022-12-04T18:00:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623531",
                "game_type": "regular",
                "venue": {
                    "id": "f5ff00d4-1ed8-4918-bf73-13d66d510f98",
                    "name": "U.S. Bank Stadium",
                    "city": "Minneapolis",
                    "state": "MN",
                    "country": "USA",
                    "zip": "55415",
                    "address": "900 S 5th Street",
                    "capacity": 66655,
                    "surface": "artificial",
                    "roof_type": "dome",
                    "sr_id": "sr:venue:18423",
                    "location": {
                        "lat": "44.973686",
                        "lng": "-93.257458"
                    }
                },
                "home": {
                    "id": "33405046-04ee-4058-a950-d606f8c30852",
                    "name": "Minnesota Vikings",
                    "alias": "MIN",
                    "game_number": 12,
                    "sr_id": "sr:competitor:4423"
                },
                "away": {
                    "id": "5fee86ae-74ab-4bdd-8416-42a9dd9964f3",
                    "name": "New York Jets",
                    "alias": "NYJ",
                    "game_number": 12,
                    "sr_id": "sr:competitor:4427"
                },
                "broadcast": {
                    "network": "CBS"
                }
            },
            {
                "id": "7673d7a8-151c-493a-9975-25a9d1573f3a",
                "status": "scheduled",
                "scheduled": "2022-12-04T18:00:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623529",
                "game_type": "regular",
                "venue": {
                    "id": "6a72e5ca-33d0-40af-8e6b-b32a4d3d9346",
                    "name": "NRG Stadium",
                    "city": "Houston",
                    "state": "TX",
                    "country": "USA",
                    "zip": "77054",
                    "address": "One Reliant Park",
                    "capacity": 72220,
                    "surface": "artificial",
                    "roof_type": "retractable_dome",
                    "sr_id": "sr:venue:2402",
                    "location": {
                        "lat": "29.684735",
                        "lng": "-95.410725"
                    }
                },
                "home": {
                    "id": "82d2d380-3834-4938-835f-aec541e5ece7",
                    "name": "Houston Texans",
                    "alias": "HOU",
                    "game_number": 12,
                    "sr_id": "sr:competitor:4324"
                },
                "away": {
                    "id": "d5a2eb42-8065-4174-ab79-0a6fa820e35e",
                    "name": "Cleveland Browns",
                    "alias": "CLE",
                    "game_number": 12,
                    "sr_id": "sr:competitor:4417"
                },
                "broadcast": {
                    "network": "CBS"
                }
            },
            {
                "id": "bd0eed55-b5b7-4e35-a20f-9cbff8c323eb",
                "status": "scheduled",
                "scheduled": "2022-12-04T18:00:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623527",
                "game_type": "regular",
                "venue": {
                    "id": "6e3bcf22-277d-4c06-b019-62aded51654f",
                    "name": "Ford Field",
                    "city": "Detroit",
                    "state": "MI",
                    "country": "USA",
                    "zip": "48226",
                    "address": "2000 Brush Street",
                    "capacity": 65000,
                    "surface": "artificial",
                    "roof_type": "dome",
                    "sr_id": "sr:venue:8181",
                    "location": {
                        "lat": "42.339958",
                        "lng": "-83.045636"
                    }
                },
                "home": {
                    "id": "c5a59daa-53a7-4de0-851f-fb12be893e9e",
                    "name": "Detroit Lions",
                    "alias": "DET",
                    "game_number": 12,
                    "sr_id": "sr:competitor:4419"
                },
                "away": {
                    "id": "f7ddd7fa-0bae-4f90-bc8e-669e4d6cf2de",
                    "name": "Jacksonville Jaguars",
                    "alias": "JAC",
                    "game_number": 12,
                    "sr_id": "sr:competitor:4386"
                },
                "broadcast": {
                    "network": "FOX"
                }
            },
            {
                "id": "ceba190d-a811-4b74-a3a3-4bfd4daa3a6a",
                "status": "scheduled",
                "scheduled": "2022-12-04T18:00:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623525",
                "game_type": "regular",
                "venue": {
                    "id": "d7866605-5ac6-4b3a-90e8-760cc5a26b75",
                    "name": "Soldier Field",
                    "city": "Chicago",
                    "state": "IL",
                    "country": "USA",
                    "zip": "60605",
                    "address": "1410 South Museum Campus Drive",
                    "capacity": 61500,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:2109",
                    "location": {
                        "lat": "41.862498",
                        "lng": "-87.616979"
                    }
                },
                "home": {
                    "id": "7b112545-38e6-483c-a55c-96cf6ee49cb8",
                    "name": "Chicago Bears",
                    "alias": "CHI",
                    "game_number": 13,
                    "sr_id": "sr:competitor:4391"
                },
                "away": {
                    "id": "a20471b4-a8d9-40c7-95ad-90cc30e46932",
                    "name": "Green Bay Packers",
                    "alias": "GB",
                    "game_number": 13,
                    "sr_id": "sr:competitor:4420"
                },
                "broadcast": {
                    "network": "FOX"
                }
            },
            {
                "id": "de11a0bc-5f2a-4c6c-b2ac-ead3971c4345",
                "status": "scheduled",
                "scheduled": "2022-12-04T18:00:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623535",
                "game_type": "regular",
                "venue": {
                    "id": "4fa8c29c-6626-464c-8540-314ed7535e1b",
                    "name": "Lincoln Financial Field",
                    "city": "Philadelphia",
                    "state": "PA",
                    "country": "USA",
                    "zip": "19148",
                    "address": "1020 Pattison Avenue",
                    "capacity": 69596,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:1833",
                    "location": {
                        "lat": "39.900872",
                        "lng": "-75.167311"
                    }
                },
                "home": {
                    "id": "386bdbf9-9eea-4869-bb9a-274b0bc66e80",
                    "name": "Philadelphia Eagles",
                    "alias": "PHI",
                    "game_number": 12,
                    "sr_id": "sr:competitor:4428"
                },
                "away": {
                    "id": "d26a1ca5-722d-4274-8f97-c92e49c96315",
                    "name": "Tennessee Titans",
                    "alias": "TEN",
                    "game_number": 12,
                    "sr_id": "sr:competitor:367364"
                },
                "broadcast": {
                    "network": "FOX"
                }
            },
            {
                "id": "17d283c8-bc55-4f8c-891b-3827137a1166",
                "status": "scheduled",
                "scheduled": "2022-12-04T21:05:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623537",
                "game_type": "regular",
                "venue": {
                    "id": "790c1f04-73c6-4f6f-8b1e-78a62260be90",
                    "name": "SoFi Stadium",
                    "city": "Inglewood",
                    "state": "CA",
                    "country": "USA",
                    "zip": "90301",
                    "address": "1000 S Prairie Ave",
                    "capacity": 70240,
                    "surface": "artificial",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:52183",
                    "location": {
                        "lat": "33.953536",
                        "lng": "-118.338734"
                    }
                },
                "home": {
                    "id": "2eff2a03-54d4-46ba-890e-2bc3925548f3",
                    "name": "Los Angeles Rams",
                    "alias": "LA",
                    "game_number": 12,
                    "sr_id": "sr:competitor:4387"
                },
                "away": {
                    "id": "3d08af9e-c767-4f88-a7dc-b920c6d2b4a8",
                    "name": "Seattle Seahawks",
                    "alias": "SEA",
                    "game_number": 12,
                    "sr_id": "sr:competitor:4430"
                },
                "broadcast": {
                    "network": "FOX"
                }
            },
            {
                "id": "dbfb3d69-d093-4456-89dc-64e487d2f57a",
                "status": "scheduled",
                "scheduled": "2022-12-04T21:05:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623539",
                "game_type": "regular",
                "venue": {
                    "id": "24c71dbf-6469-46f1-8165-22005c295c8f",
                    "name": "Levi's Stadium",
                    "city": "Santa Clara",
                    "state": "CA",
                    "country": "USA",
                    "zip": "95054",
                    "address": "4900 Marie P DeBartolo Way",
                    "capacity": 68500,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:15672",
                    "location": {
                        "lat": "37.403000",
                        "lng": "-121.970000"
                    }
                },
                "home": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "San Francisco 49ers",
                    "alias": "SF",
                    "game_number": 12,
                    "sr_id": "sr:competitor:4389"
                },
                "away": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Miami Dolphins",
                    "alias": "MIA",
                    "game_number": 12,
                    "sr_id": "sr:competitor:4287"
                },
                "broadcast": {
                    "network": "FOX"
                }
            },
            {
                "id": "61a7ad62-a168-4279-8077-93ffc53e2656",
                "status": "scheduled",
                "scheduled": "2022-12-04T21:25:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623541",
                "game_type": "regular",
                "venue": {
                    "id": "b87a1595-d3c8-48ea-8a53-0aab6378a64a",
                    "name": "Paycor Stadium",
                    "city": "Cincinnati",
                    "state": "OH",
                    "country": "USA",
                    "zip": "45202",
                    "address": "One Paul Brown Stadium",
                    "capacity": 65515,
                    "surface": "artificial",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8175",
                    "location": {
                        "lat": "39.095413",
                        "lng": "-84.516204"
                    }
                },
                "home": {
                    "id": "ad4ae08f-d808-42d5-a1e6-e9bc4e34d123",
                    "name": "Cincinnati Bengals",
                    "alias": "CIN",
                    "game_number": 12,
                    "sr_id": "sr:competitor:4416"
                },
                "away": {
                    "id": "6680d28d-d4d2-49f6-aace-5292d3ec02c2",
                    "name": "Kansas City Chiefs",
                    "alias": "KC",
                    "game_number": 12,
                    "sr_id": "sr:competitor:4422"
                },
                "broadcast": {
                    "network": "CBS"
                }
            },
            {
                "id": "7fb75b32-9705-43ca-b7f8-68edf0a093e7",
                "status": "scheduled",
                "scheduled": "2022-12-04T21:25:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623543",
                "game_type": "regular",
                "venue": {
                    "id": "53d42601-5dfb-40a7-bd94-da2c1d3a75e4",
                    "name": "Allegiant Stadium",
                    "city": "Las Vegas",
                    "state": "NV",
                    "country": "USA",
                    "zip": "89118",
                    "address": "3333 Al Davis Way",
                    "capacity": 65000,
                    "surface": "turf",
                    "roof_type": "dome",
                    "sr_id": "sr:venue:51543",
                    "location": {
                        "lat": "36.090852",
                        "lng": "-115.183339"
                    }
                },
                "home": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Las Vegas Raiders",
                    "alias": "LV",
                    "game_number": 12,
                    "sr_id": "sr:competitor:4390"
                },
                "away": {
                    "id": "1f6dcffb-9823-43cd-9ff4-e7a8466749b5",
                    "name": "Los Angeles Chargers",
                    "alias": "LAC",
                    "game_number": 12,
                    "sr_id": "sr:competitor:4429"
                },
                "broadcast": {
                    "network": "CBS"
                }
            },
            {
                "id": "d844b5a7-6fb5-42c3-9ded-db10817c477f",
                "status": "scheduled",
                "scheduled": "2022-12-05T01:20:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623545",
                "game_type": "regular",
                "venue": {
                    "id": "1e84213a-ff1f-4c9d-a003-8ee782b25a40",
                    "name": "AT&T Stadium",
                    "city": "Arlington",
                    "state": "TX",
                    "country": "USA",
                    "zip": "76011",
                    "address": "One Legends Way",
                    "capacity": 80000,
                    "surface": "artificial",
                    "roof_type": "retractable_dome",
                    "sr_id": "sr:venue:6650",
                    "location": {
                        "lat": "32.747778",
                        "lng": "-97.092778"
                    }
                },
                "home": {
                    "id": "e627eec7-bbae-4fa4-8e73-8e1d6bc5c060",
                    "name": "Dallas Cowboys",
                    "alias": "DAL",
                    "game_number": 12,
                    "sr_id": "sr:competitor:4392"
                },
                "away": {
                    "id": "82cf9565-6eb9-4f01-bdbd-5aa0d472fcd9",
                    "name": "Indianapolis Colts",
                    "alias": "IND",
                    "game_number": 13,
                    "sr_id": "sr:competitor:4421"
                },
                "broadcast": {
                    "network": "NBC"
                }
            },
            {
                "id": "0f58f1bf-21aa-48e4-aaa0-351234764612",
                "status": "scheduled",
                "scheduled": "2022-12-06T01:15:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623547",
                "game_type": "regular",
                "venue": {
                    "id": "6fccc39c-80bc-4c81-83d9-2d5a848c8c09",
                    "name": "Raymond James Stadium",
                    "city": "Tampa",
                    "state": "FL",
                    "country": "USA",
                    "zip": "33607",
                    "address": "4201 North Dale Mabry Highway",
                    "capacity": 65890,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8205",
                    "location": {
                        "lat": "27.976211",
                        "lng": "-82.503625"
                    }
                },
                "home": {
                    "id": "4254d319-1bc7-4f81-b4ab-b5e6f3402b69",
                    "name": "Tampa Bay Buccaneers",
                    "alias": "TB",
                    "game_number": 12,
                    "sr_id": "sr:competitor:4388"
                },
                "away": {
                    "id": "0d855753-ea21-4953-89f9-0e20aff9eb73",
                    "name": "New Orleans Saints",
                    "alias": "NO",
                    "game_number": 13,
                    "sr_id": "sr:competitor:4425"
                },
                "broadcast": {
                    "network": "ESPN",
                    "satellite": "206"
                }
            }
        ],
        "createdAt": "2022-11-02T23:27:19.976Z",
        "updatedAt": "2022-11-02T23:27:19.976Z",
        "__v": 0
    },
    {
        "_id": "6362fcd7a05a14afa1a59d0c",
        "weekNumber": 10,
        "games": [
            {
                "id": "f7db0b50-cd05-436a-8214-a52969d21462",
                "status": "scheduled",
                "scheduled": "2022-11-11T01:15:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623437",
                "game_type": "regular",
                "venue": {
                    "id": "39be9ed4-3292-49ac-8699-a381de3a4969",
                    "name": "Bank of America Stadium",
                    "city": "Charlotte",
                    "state": "NC",
                    "country": "USA",
                    "zip": "28202",
                    "address": "800 South Mint Street",
                    "capacity": 75419,
                    "surface": "artificial",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8173",
                    "location": {
                        "lat": "35.225937",
                        "lng": "-80.853133"
                    }
                },
                "home": {
                    "id": "f14bf5cc-9a82-4a38-bc15-d39f75ed5314",
                    "name": "Carolina Panthers",
                    "alias": "CAR",
                    "game_number": 10,
                    "sr_id": "sr:competitor:4415"
                },
                "away": {
                    "id": "e6aa13a4-0055-48a9-bc41-be28dc106929",
                    "name": "Atlanta Falcons",
                    "alias": "ATL",
                    "game_number": 10,
                    "sr_id": "sr:competitor:4393"
                },
                "broadcast": {
                    "network": "Amazon Prime Video"
                }
            },
            {
                "id": "44cdfc9a-758f-43b5-8925-8ca783edf65e",
                "status": "scheduled",
                "scheduled": "2022-11-13T14:30:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33498791",
                "game_type": "regular",
                "venue": {
                    "id": "012541b0-c1ab-11ec-b263-0924e20373c5",
                    "name": "Allianz Arena",
                    "city": "Munich",
                    "country": "DEU",
                    "address": "Allianz Arena",
                    "capacity": 75000,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:574"
                },
                "home": {
                    "id": "4254d319-1bc7-4f81-b4ab-b5e6f3402b69",
                    "name": "Tampa Bay Buccaneers",
                    "alias": "TB",
                    "game_number": 10,
                    "sr_id": "sr:competitor:4388"
                },
                "away": {
                    "id": "3d08af9e-c767-4f88-a7dc-b920c6d2b4a8",
                    "name": "Seattle Seahawks",
                    "alias": "SEA",
                    "game_number": 10,
                    "sr_id": "sr:competitor:4430"
                },
                "broadcast": {
                    "network": "NFL Network",
                    "satellite": "212"
                }
            },
            {
                "id": "1653b8ff-7a81-4a38-b992-93c4bfd1b3d9",
                "status": "scheduled",
                "scheduled": "2022-11-13T18:00:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623451",
                "game_type": "regular",
                "venue": {
                    "id": "5295c1b7-c85c-49cb-9569-1707c65324e5",
                    "name": "Nissan Stadium",
                    "city": "Nashville",
                    "state": "TN",
                    "country": "USA",
                    "zip": "37213",
                    "address": "One Titans Way",
                    "capacity": 69143,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8207",
                    "location": {
                        "lat": "36.166367",
                        "lng": "-86.771223"
                    }
                },
                "home": {
                    "id": "d26a1ca5-722d-4274-8f97-c92e49c96315",
                    "name": "Tennessee Titans",
                    "alias": "TEN",
                    "game_number": 9,
                    "sr_id": "sr:competitor:367364"
                },
                "away": {
                    "id": "ce92bd47-93d5-4fe9-ada4-0fc681e6caa0",
                    "name": "Denver Broncos",
                    "alias": "DEN",
                    "game_number": 9,
                    "sr_id": "sr:competitor:4418"
                },
                "broadcast": {
                    "network": "CBS"
                }
            },
            {
                "id": "3e54518d-23f3-4a70-a78a-bf5911bffbe5",
                "status": "scheduled",
                "scheduled": "2022-11-13T18:00:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623445",
                "game_type": "regular",
                "venue": {
                    "id": "50a5c833-1570-4c38-abc7-7914cf87dbde",
                    "name": "Hard Rock Stadium",
                    "city": "Miami Gardens",
                    "state": "FL",
                    "country": "USA",
                    "zip": "33056",
                    "address": "2269 Northwest 199th Street",
                    "capacity": 65326,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:21306",
                    "location": {
                        "lat": "25.958025",
                        "lng": "-80.238724"
                    }
                },
                "home": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Miami Dolphins",
                    "alias": "MIA",
                    "game_number": 10,
                    "sr_id": "sr:competitor:4287"
                },
                "away": {
                    "id": "d5a2eb42-8065-4174-ab79-0a6fa820e35e",
                    "name": "Cleveland Browns",
                    "alias": "CLE",
                    "game_number": 9,
                    "sr_id": "sr:competitor:4417"
                },
                "broadcast": {
                    "network": "CBS"
                }
            },
            {
                "id": "9384d4ea-e36d-4055-ac1d-6936d963030f",
                "status": "scheduled",
                "scheduled": "2022-11-13T18:00:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623449",
                "game_type": "regular",
                "venue": {
                    "id": "7349a2e6-0ac9-410b-8bd2-ca58c9f7aa34",
                    "name": "Acrisure Stadium",
                    "city": "Pittsburgh",
                    "state": "PA",
                    "country": "USA",
                    "zip": "15212",
                    "address": "100 Art Rooney Avenue",
                    "capacity": 68400,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8197",
                    "location": {
                        "lat": "40.446653",
                        "lng": "-80.015844"
                    }
                },
                "home": {
                    "id": "cb2f9f1f-ac67-424e-9e72-1475cb0ed398",
                    "name": "Pittsburgh Steelers",
                    "alias": "PIT",
                    "game_number": 9,
                    "sr_id": "sr:competitor:4345"
                },
                "away": {
                    "id": "0d855753-ea21-4953-89f9-0e20aff9eb73",
                    "name": "New Orleans Saints",
                    "alias": "NO",
                    "game_number": 10,
                    "sr_id": "sr:competitor:4425"
                },
                "broadcast": {
                    "network": "FOX"
                }
            },
            {
                "id": "97f8be0f-64b0-4658-b2f4-c7302a49bdb0",
                "status": "scheduled",
                "scheduled": "2022-11-13T18:00:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623441",
                "game_type": "regular",
                "venue": {
                    "id": "d7866605-5ac6-4b3a-90e8-760cc5a26b75",
                    "name": "Soldier Field",
                    "city": "Chicago",
                    "state": "IL",
                    "country": "USA",
                    "zip": "60605",
                    "address": "1410 South Museum Campus Drive",
                    "capacity": 61500,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:2109",
                    "location": {
                        "lat": "41.862498",
                        "lng": "-87.616979"
                    }
                },
                "home": {
                    "id": "7b112545-38e6-483c-a55c-96cf6ee49cb8",
                    "name": "Chicago Bears",
                    "alias": "CHI",
                    "game_number": 10,
                    "sr_id": "sr:competitor:4391"
                },
                "away": {
                    "id": "c5a59daa-53a7-4de0-851f-fb12be893e9e",
                    "name": "Detroit Lions",
                    "alias": "DET",
                    "game_number": 9,
                    "sr_id": "sr:competitor:4419"
                },
                "broadcast": {
                    "network": "FOX"
                }
            },
            {
                "id": "ce6ea983-ad12-4d89-be0a-a0c87d37717b",
                "status": "scheduled",
                "scheduled": "2022-11-13T18:00:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623439",
                "game_type": "regular",
                "venue": {
                    "id": "e9e0828e-37fc-4238-a317-49037577dd55",
                    "name": "Highmark Stadium",
                    "city": "Orchard Park",
                    "state": "NY",
                    "country": "USA",
                    "zip": "14127",
                    "address": "One Bills Drive",
                    "capacity": 71608,
                    "surface": "artificial",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8171",
                    "location": {
                        "lat": "42.773826",
                        "lng": "-78.786589"
                    }
                },
                "home": {
                    "id": "768c92aa-75ff-4a43-bcc0-f2798c2e1724",
                    "name": "Buffalo Bills",
                    "alias": "BUF",
                    "game_number": 9,
                    "sr_id": "sr:competitor:4376"
                },
                "away": {
                    "id": "33405046-04ee-4058-a950-d606f8c30852",
                    "name": "Minnesota Vikings",
                    "alias": "MIN",
                    "game_number": 9,
                    "sr_id": "sr:competitor:4423"
                },
                "broadcast": {
                    "network": "FOX"
                }
            },
            {
                "id": "d3500c07-dfce-4893-834d-d54be6ff0767",
                "status": "scheduled",
                "scheduled": "2022-11-13T18:00:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623447",
                "game_type": "regular",
                "venue": {
                    "id": "5d4c85c7-d84e-4e10-bd6a-8a15ebecca5c",
                    "name": "MetLife Stadium",
                    "city": "East Rutherford",
                    "state": "NJ",
                    "country": "USA",
                    "zip": "07073",
                    "address": "One MetLife Stadium Drive",
                    "capacity": 82500,
                    "surface": "artificial",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:1981",
                    "location": {
                        "lat": "40.813611",
                        "lng": "-74.074444"
                    }
                },
                "home": {
                    "id": "04aa1c9d-66da-489d-b16a-1dee3f2eec4d",
                    "name": "New York Giants",
                    "alias": "NYG",
                    "game_number": 9,
                    "sr_id": "sr:competitor:4426"
                },
                "away": {
                    "id": "82d2d380-3834-4938-835f-aec541e5ece7",
                    "name": "Houston Texans",
                    "alias": "HOU",
                    "game_number": 9,
                    "sr_id": "sr:competitor:4324"
                },
                "broadcast": {
                    "network": "CBS"
                }
            },
            {
                "id": "f1aae2b9-8ecd-431a-ab18-20e1ed251b27",
                "status": "scheduled",
                "scheduled": "2022-11-13T18:00:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623443",
                "game_type": "regular",
                "venue": {
                    "id": "2ec4c411-dac2-403d-b091-6b6aa4a0a914",
                    "name": "GEHA Field at Arrowhead Stadium",
                    "city": "Kansas City",
                    "state": "MO",
                    "country": "USA",
                    "zip": "64129",
                    "address": "One Arrowhead Drive",
                    "capacity": 76416,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8189",
                    "location": {
                        "lat": "39.049019",
                        "lng": "-94.484140"
                    }
                },
                "home": {
                    "id": "6680d28d-d4d2-49f6-aace-5292d3ec02c2",
                    "name": "Kansas City Chiefs",
                    "alias": "KC",
                    "game_number": 9,
                    "sr_id": "sr:competitor:4422"
                },
                "away": {
                    "id": "f7ddd7fa-0bae-4f90-bc8e-669e4d6cf2de",
                    "name": "Jacksonville Jaguars",
                    "alias": "JAC",
                    "game_number": 10,
                    "sr_id": "sr:competitor:4386"
                },
                "broadcast": {
                    "network": "CBS"
                }
            },
            {
                "id": "2c2ded8a-a51a-4a92-b238-6d97092c2d7a",
                "status": "scheduled",
                "scheduled": "2022-11-13T21:05:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623453",
                "game_type": "regular",
                "venue": {
                    "id": "53d42601-5dfb-40a7-bd94-da2c1d3a75e4",
                    "name": "Allegiant Stadium",
                    "city": "Las Vegas",
                    "state": "NV",
                    "country": "USA",
                    "zip": "89118",
                    "address": "3333 Al Davis Way",
                    "capacity": 65000,
                    "surface": "turf",
                    "roof_type": "dome",
                    "sr_id": "sr:venue:51543",
                    "location": {
                        "lat": "36.090852",
                        "lng": "-115.183339"
                    }
                },
                "home": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Las Vegas Raiders",
                    "alias": "LV",
                    "game_number": 9,
                    "sr_id": "sr:competitor:4390"
                },
                "away": {
                    "id": "82cf9565-6eb9-4f01-bdbd-5aa0d472fcd9",
                    "name": "Indianapolis Colts",
                    "alias": "IND",
                    "game_number": 10,
                    "sr_id": "sr:competitor:4421"
                },
                "broadcast": {
                    "network": "CBS"
                }
            },
            {
                "id": "9e63e019-88a3-49ca-9c78-e50488651085",
                "status": "scheduled",
                "scheduled": "2022-11-13T21:25:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33602639",
                "game_type": "regular",
                "venue": {
                    "id": "5a60dd3a-302c-41c6-ab0f-dd335c1103c2",
                    "name": "Lambeau Field",
                    "city": "Green Bay",
                    "state": "WI",
                    "country": "USA",
                    "zip": "54304",
                    "address": "1265 Lombardi Avenue",
                    "capacity": 81435,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8183",
                    "location": {
                        "lat": "44.501357",
                        "lng": "-88.062440"
                    }
                },
                "home": {
                    "id": "a20471b4-a8d9-40c7-95ad-90cc30e46932",
                    "name": "Green Bay Packers",
                    "alias": "GB",
                    "game_number": 10,
                    "sr_id": "sr:competitor:4420"
                },
                "away": {
                    "id": "e627eec7-bbae-4fa4-8e73-8e1d6bc5c060",
                    "name": "Dallas Cowboys",
                    "alias": "DAL",
                    "game_number": 9,
                    "sr_id": "sr:competitor:4392"
                },
                "broadcast": {
                    "network": "FOX"
                }
            },
            {
                "id": "e496f932-62b9-4a68-bdb5-a05456e0dd83",
                "status": "scheduled",
                "scheduled": "2022-11-13T21:25:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623455",
                "game_type": "regular",
                "venue": {
                    "id": "790c1f04-73c6-4f6f-8b1e-78a62260be90",
                    "name": "SoFi Stadium",
                    "city": "Inglewood",
                    "state": "CA",
                    "country": "USA",
                    "zip": "90301",
                    "address": "1000 S Prairie Ave",
                    "capacity": 70240,
                    "surface": "artificial",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:52183",
                    "location": {
                        "lat": "33.953536",
                        "lng": "-118.338734"
                    }
                },
                "home": {
                    "id": "2eff2a03-54d4-46ba-890e-2bc3925548f3",
                    "name": "Los Angeles Rams",
                    "alias": "LA",
                    "game_number": 9,
                    "sr_id": "sr:competitor:4387"
                },
                "away": {
                    "id": "de760528-1dc0-416a-a978-b510d20692ff",
                    "name": "Arizona Cardinals",
                    "alias": "ARI",
                    "game_number": 10,
                    "sr_id": "sr:competitor:4412"
                },
                "broadcast": {
                    "network": "FOX"
                }
            },
            {
                "id": "acb5d131-4758-4593-86cf-13b761f29040",
                "status": "scheduled",
                "scheduled": "2022-11-14T01:20:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623457",
                "game_type": "regular",
                "venue": {
                    "id": "24c71dbf-6469-46f1-8165-22005c295c8f",
                    "name": "Levi's Stadium",
                    "city": "Santa Clara",
                    "state": "CA",
                    "country": "USA",
                    "zip": "95054",
                    "address": "4900 Marie P DeBartolo Way",
                    "capacity": 68500,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:15672",
                    "location": {
                        "lat": "37.403000",
                        "lng": "-121.970000"
                    }
                },
                "home": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "San Francisco 49ers",
                    "alias": "SF",
                    "game_number": 9,
                    "sr_id": "sr:competitor:4389"
                },
                "away": {
                    "id": "1f6dcffb-9823-43cd-9ff4-e7a8466749b5",
                    "name": "Los Angeles Chargers",
                    "alias": "LAC",
                    "game_number": 9,
                    "sr_id": "sr:competitor:4429"
                },
                "broadcast": {
                    "network": "NBC"
                }
            },
            {
                "id": "e20c1ab3-e723-4156-a9de-a14b7ffbe317",
                "status": "scheduled",
                "scheduled": "2022-11-15T01:15:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623459",
                "game_type": "regular",
                "venue": {
                    "id": "4fa8c29c-6626-464c-8540-314ed7535e1b",
                    "name": "Lincoln Financial Field",
                    "city": "Philadelphia",
                    "state": "PA",
                    "country": "USA",
                    "zip": "19148",
                    "address": "1020 Pattison Avenue",
                    "capacity": 69596,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:1833",
                    "location": {
                        "lat": "39.900872",
                        "lng": "-75.167311"
                    }
                },
                "home": {
                    "id": "386bdbf9-9eea-4869-bb9a-274b0bc66e80",
                    "name": "Philadelphia Eagles",
                    "alias": "PHI",
                    "game_number": 9,
                    "sr_id": "sr:competitor:4428"
                },
                "away": {
                    "id": "22052ff7-c065-42ee-bc8f-c4691c50e624",
                    "name": "Washington Commanders",
                    "alias": "WAS",
                    "game_number": 10,
                    "sr_id": "sr:competitor:4432"
                },
                "broadcast": {
                    "network": "ESPN",
                    "satellite": "206"
                }
            }
        ],
        "createdAt": "2022-11-02T23:27:19.788Z",
        "updatedAt": "2022-11-02T23:27:19.788Z",
        "__v": 0
    },
    {
        "_id": "6362fcd8a05a14afa1a59d1a",
        "weekNumber": 4,
        "games": [
            {
                "id": "1530637b-1218-4c7a-8cfe-5a9655a450ef",
                "status": "closed",
                "scheduled": "2022-09-30T00:15:00+00:00",
                "attendance": 67260,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623267",
                "game_type": "regular",
                "duration": "3:06",
                "venue": {
                    "id": "b87a1595-d3c8-48ea-8a53-0aab6378a64a",
                    "name": "Paycor Stadium",
                    "city": "Cincinnati",
                    "state": "OH",
                    "country": "USA",
                    "zip": "45202",
                    "address": "One Paul Brown Stadium",
                    "capacity": 65515,
                    "surface": "artificial",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8175",
                    "location": {
                        "lat": "39.095413",
                        "lng": "-84.516204"
                    }
                },
                "home": {
                    "id": "ad4ae08f-d808-42d5-a1e6-e9bc4e34d123",
                    "name": "Cincinnati Bengals",
                    "alias": "CIN",
                    "game_number": 4,
                    "sr_id": "sr:competitor:4416"
                },
                "away": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Miami Dolphins",
                    "alias": "MIA",
                    "game_number": 4,
                    "sr_id": "sr:competitor:4287"
                },
                "broadcast": {
                    "network": "Amazon Prime Video"
                },
                "weather": {
                    "condition": "Clear",
                    "humidity": 54,
                    "temp": 63,
                    "wind": {
                        "speed": 12,
                        "direction": "ENE"
                    }
                },
                "scoring": {
                    "home_points": 27,
                    "away_points": 15,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "516195fd-eaa8-4286-8a20-85e22214bbf6",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 7,
                            "away_points": 3
                        },
                        {
                            "period_type": "quarter",
                            "id": "59889d32-2ed7-418f-92a8-91956fe341a8",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 7,
                            "away_points": 9
                        },
                        {
                            "period_type": "quarter",
                            "id": "2bb15598-e317-4374-8a8b-d8ed4eb01919",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 0,
                            "away_points": 3
                        },
                        {
                            "period_type": "quarter",
                            "id": "3e27bd8d-9078-4fbf-b96a-6b04430e122e",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 13,
                            "away_points": 0
                        }
                    ]
                }
            },
            {
                "id": "33a593a0-9bc5-49ca-837d-475bc7c90cec",
                "status": "closed",
                "scheduled": "2022-10-02T13:30:00+00:00",
                "attendance": 60639,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33498781",
                "game_type": "regular",
                "duration": "3:02",
                "venue": {
                    "id": "4829986d-66a3-48da-8c82-aafe8b32ab19",
                    "name": "Tottenham Hotspur Stadium",
                    "city": "London",
                    "country": "GBR",
                    "address": "Tottenham Stadium",
                    "capacity": 60463,
                    "surface": "artificial",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:28762"
                },
                "home": {
                    "id": "0d855753-ea21-4953-89f9-0e20aff9eb73",
                    "name": "New Orleans Saints",
                    "alias": "NO",
                    "game_number": 4,
                    "sr_id": "sr:competitor:4425"
                },
                "away": {
                    "id": "33405046-04ee-4058-a950-d606f8c30852",
                    "name": "Minnesota Vikings",
                    "alias": "MIN",
                    "game_number": 4,
                    "sr_id": "sr:competitor:4423"
                },
                "broadcast": {
                    "network": "NFL Network",
                    "satellite": "212"
                },
                "weather": {
                    "condition": "Partly cloudy",
                    "humidity": 49,
                    "temp": 64,
                    "wind": {
                        "speed": 8,
                        "direction": "NW"
                    }
                },
                "scoring": {
                    "home_points": 25,
                    "away_points": 28,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "cd44a15d-e678-49a8-85b5-470b0a33231c",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 0,
                            "away_points": 7
                        },
                        {
                            "period_type": "quarter",
                            "id": "f64b66bb-8f02-4e27-891b-95fa1c6c5cd2",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 7,
                            "away_points": 6
                        },
                        {
                            "period_type": "quarter",
                            "id": "0dcc46a6-4b01-4bca-b1db-ebb1bcc6e225",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 7,
                            "away_points": 3
                        },
                        {
                            "period_type": "quarter",
                            "id": "50a71a67-5d06-4671-924c-e6a9320f9425",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 11,
                            "away_points": 12
                        }
                    ]
                }
            },
            {
                "id": "04d1dfe9-f1d1-430c-b3d2-a440d8d6a59b",
                "status": "closed",
                "scheduled": "2022-10-02T17:00:00+00:00",
                "attendance": 69071,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623277",
                "game_type": "regular",
                "duration": "3:00",
                "venue": {
                    "id": "6a72e5ca-33d0-40af-8e6b-b32a4d3d9346",
                    "name": "NRG Stadium",
                    "city": "Houston",
                    "state": "TX",
                    "country": "USA",
                    "zip": "77054",
                    "address": "One Reliant Park",
                    "capacity": 72220,
                    "surface": "artificial",
                    "roof_type": "retractable_dome",
                    "sr_id": "sr:venue:2402",
                    "location": {
                        "lat": "29.684735",
                        "lng": "-95.410725"
                    }
                },
                "home": {
                    "id": "82d2d380-3834-4938-835f-aec541e5ece7",
                    "name": "Houston Texans",
                    "alias": "HOU",
                    "game_number": 4,
                    "sr_id": "sr:competitor:4324"
                },
                "away": {
                    "id": "1f6dcffb-9823-43cd-9ff4-e7a8466749b5",
                    "name": "Los Angeles Chargers",
                    "alias": "LAC",
                    "game_number": 4,
                    "sr_id": "sr:competitor:4429"
                },
                "broadcast": {
                    "network": "CBS"
                },
                "weather": {
                    "condition": "Partly cloudy",
                    "humidity": 33,
                    "temp": 78,
                    "wind": {
                        "speed": 7,
                        "direction": "ENE"
                    }
                },
                "scoring": {
                    "home_points": 24,
                    "away_points": 34,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "c06e5fec-a173-45e9-bb37-e15e9ba64216",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 0,
                            "away_points": 7
                        },
                        {
                            "period_type": "quarter",
                            "id": "db1e5ebd-9ad6-4277-8ffe-2b9081ec8d78",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 7,
                            "away_points": 20
                        },
                        {
                            "period_type": "quarter",
                            "id": "91371d17-c79e-4b77-a930-96258a5121d7",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 7,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "c5d53677-eed8-4091-97cf-47c40dd6f35d",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 10,
                            "away_points": 7
                        }
                    ]
                }
            },
            {
                "id": "1fd76dfe-636c-46d5-92ca-630da9b25556",
                "status": "closed",
                "scheduled": "2022-10-02T17:00:00+00:00",
                "attendance": 74044,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623281",
                "game_type": "regular",
                "duration": "2:59",
                "venue": {
                    "id": "5d4c85c7-d84e-4e10-bd6a-8a15ebecca5c",
                    "name": "MetLife Stadium",
                    "city": "East Rutherford",
                    "state": "NJ",
                    "country": "USA",
                    "zip": "07073",
                    "address": "One MetLife Stadium Drive",
                    "capacity": 82500,
                    "surface": "artificial",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:1981",
                    "location": {
                        "lat": "40.813611",
                        "lng": "-74.074444"
                    }
                },
                "home": {
                    "id": "04aa1c9d-66da-489d-b16a-1dee3f2eec4d",
                    "name": "New York Giants",
                    "alias": "NYG",
                    "game_number": 4,
                    "sr_id": "sr:competitor:4426"
                },
                "away": {
                    "id": "7b112545-38e6-483c-a55c-96cf6ee49cb8",
                    "name": "Chicago Bears",
                    "alias": "CHI",
                    "game_number": 4,
                    "sr_id": "sr:competitor:4391"
                },
                "broadcast": {
                    "network": "FOX"
                },
                "weather": {
                    "condition": "Overcast",
                    "humidity": 63,
                    "temp": 59,
                    "wind": {
                        "speed": 15,
                        "direction": "NE"
                    }
                },
                "scoring": {
                    "home_points": 20,
                    "away_points": 12,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "73667ceb-45c2-4728-a83e-934994c12c50",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 7,
                            "away_points": 6
                        },
                        {
                            "period_type": "quarter",
                            "id": "2427c3d7-92e6-4bb9-87df-f1b4a22cedb9",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 7,
                            "away_points": 3
                        },
                        {
                            "period_type": "quarter",
                            "id": "6e5e12d9-a0da-4a84-b8a4-8f6cc124d530",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 3,
                            "away_points": 3
                        },
                        {
                            "period_type": "quarter",
                            "id": "2af21aa1-9ec5-47bb-8f1f-8964fd42a20f",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 3,
                            "away_points": 0
                        }
                    ]
                }
            },
            {
                "id": "2014bd73-669f-46ca-a507-6f64a47228cc",
                "status": "closed",
                "scheduled": "2022-10-02T17:00:00+00:00",
                "attendance": 63920,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623275",
                "game_type": "regular",
                "duration": "3:29",
                "venue": {
                    "id": "6e3bcf22-277d-4c06-b019-62aded51654f",
                    "name": "Ford Field",
                    "city": "Detroit",
                    "state": "MI",
                    "country": "USA",
                    "zip": "48226",
                    "address": "2000 Brush Street",
                    "capacity": 65000,
                    "surface": "artificial",
                    "roof_type": "dome",
                    "sr_id": "sr:venue:8181",
                    "location": {
                        "lat": "42.339958",
                        "lng": "-83.045636"
                    }
                },
                "home": {
                    "id": "c5a59daa-53a7-4de0-851f-fb12be893e9e",
                    "name": "Detroit Lions",
                    "alias": "DET",
                    "game_number": 4,
                    "sr_id": "sr:competitor:4419"
                },
                "away": {
                    "id": "3d08af9e-c767-4f88-a7dc-b920c6d2b4a8",
                    "name": "Seattle Seahawks",
                    "alias": "SEA",
                    "game_number": 4,
                    "sr_id": "sr:competitor:4430"
                },
                "broadcast": {
                    "network": "FOX"
                },
                "weather": {
                    "condition": "Sunny",
                    "humidity": 50,
                    "temp": 62,
                    "wind": {
                        "speed": 11,
                        "direction": "N"
                    }
                },
                "scoring": {
                    "home_points": 45,
                    "away_points": 48,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "4ac301cf-eae4-4d2f-b188-03e5815a7f60",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 6,
                            "away_points": 14
                        },
                        {
                            "period_type": "quarter",
                            "id": "70b8495f-d098-4025-98ff-fcb245b83afd",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 9,
                            "away_points": 10
                        },
                        {
                            "period_type": "quarter",
                            "id": "36d4b302-8ef6-4a6f-bdc9-ab33a345544a",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 8,
                            "away_points": 14
                        },
                        {
                            "period_type": "quarter",
                            "id": "b60b1500-f93f-4653-acd1-3399d4f4d35e",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 22,
                            "away_points": 10
                        }
                    ]
                }
            },
            {
                "id": "43339bf6-5c08-4551-886b-25b5578be23b",
                "status": "closed",
                "scheduled": "2022-10-02T17:00:00+00:00",
                "attendance": 69879,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623283",
                "game_type": "regular",
                "duration": "2:56",
                "venue": {
                    "id": "4fa8c29c-6626-464c-8540-314ed7535e1b",
                    "name": "Lincoln Financial Field",
                    "city": "Philadelphia",
                    "state": "PA",
                    "country": "USA",
                    "zip": "19148",
                    "address": "1020 Pattison Avenue",
                    "capacity": 69596,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:1833",
                    "location": {
                        "lat": "39.900872",
                        "lng": "-75.167311"
                    }
                },
                "home": {
                    "id": "386bdbf9-9eea-4869-bb9a-274b0bc66e80",
                    "name": "Philadelphia Eagles",
                    "alias": "PHI",
                    "game_number": 4,
                    "sr_id": "sr:competitor:4428"
                },
                "away": {
                    "id": "f7ddd7fa-0bae-4f90-bc8e-669e4d6cf2de",
                    "name": "Jacksonville Jaguars",
                    "alias": "JAC",
                    "game_number": 4,
                    "sr_id": "sr:competitor:4386"
                },
                "broadcast": {
                    "network": "CBS"
                },
                "weather": {
                    "condition": "Rain, Mist",
                    "humidity": 93,
                    "temp": 57,
                    "wind": {
                        "speed": 11,
                        "direction": "NNE"
                    }
                },
                "scoring": {
                    "home_points": 29,
                    "away_points": 21,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "165cac4a-cc3f-4392-a3ca-2342054e43b2",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 0,
                            "away_points": 14
                        },
                        {
                            "period_type": "quarter",
                            "id": "d1bf2416-0caf-49a3-a220-5519293a11c6",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 20,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "44a8b9b1-caa0-4e3c-a0b2-4c36f6fde82f",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 0,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "9c2666c9-cca9-4119-b29a-9ee391281904",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 9,
                            "away_points": 7
                        }
                    ]
                }
            },
            {
                "id": "5425a946-fbf7-4735-be0a-dea6b9500bdf",
                "status": "closed",
                "scheduled": "2022-10-02T17:00:00+00:00",
                "attendance": 66578,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623285",
                "game_type": "regular",
                "duration": "3:13",
                "venue": {
                    "id": "7349a2e6-0ac9-410b-8bd2-ca58c9f7aa34",
                    "name": "Acrisure Stadium",
                    "city": "Pittsburgh",
                    "state": "PA",
                    "country": "USA",
                    "zip": "15212",
                    "address": "100 Art Rooney Avenue",
                    "capacity": 68400,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8197",
                    "location": {
                        "lat": "40.446653",
                        "lng": "-80.015844"
                    }
                },
                "home": {
                    "id": "cb2f9f1f-ac67-424e-9e72-1475cb0ed398",
                    "name": "Pittsburgh Steelers",
                    "alias": "PIT",
                    "game_number": 4,
                    "sr_id": "sr:competitor:4345"
                },
                "away": {
                    "id": "5fee86ae-74ab-4bdd-8416-42a9dd9964f3",
                    "name": "New York Jets",
                    "alias": "NYJ",
                    "game_number": 4,
                    "sr_id": "sr:competitor:4427"
                },
                "broadcast": {
                    "network": "CBS"
                },
                "weather": {
                    "condition": "Overcast",
                    "humidity": 77,
                    "temp": 57,
                    "wind": {
                        "speed": 7,
                        "direction": "NNE"
                    }
                },
                "scoring": {
                    "home_points": 20,
                    "away_points": 24,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "a017f9f4-34f3-4151-bbac-b16472345d08",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 0,
                            "away_points": 3
                        },
                        {
                            "period_type": "quarter",
                            "id": "9d3b64ac-8ce6-481b-a338-a324f1002abe",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 6,
                            "away_points": 7
                        },
                        {
                            "period_type": "quarter",
                            "id": "414c22d9-e16c-40db-81f4-ee6d3873ddd4",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 7,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "f78bbd68-4421-464e-b62d-e5332d8dbabe",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 7,
                            "away_points": 14
                        }
                    ]
                }
            },
            {
                "id": "57727ff1-a524-4323-8e8b-1d7d6f3dc633",
                "status": "closed",
                "scheduled": "2022-10-02T17:00:00+00:00",
                "attendance": 69435,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623269",
                "game_type": "regular",
                "duration": "2:47",
                "venue": {
                    "id": "1f2d393b-2291-4835-a412-0714966ea245",
                    "name": "Mercedes-Benz Stadium",
                    "city": "Atlanta",
                    "state": "GA",
                    "country": "USA",
                    "zip": "30313",
                    "address": "441 Martin Luther King Jr Drive NW",
                    "capacity": 71000,
                    "surface": "artificial",
                    "roof_type": "retractable_dome",
                    "sr_id": "sr:venue:20343",
                    "location": {
                        "lat": "33.757368",
                        "lng": "-84.401008"
                    }
                },
                "home": {
                    "id": "e6aa13a4-0055-48a9-bc41-be28dc106929",
                    "name": "Atlanta Falcons",
                    "alias": "ATL",
                    "game_number": 4,
                    "sr_id": "sr:competitor:4393"
                },
                "away": {
                    "id": "d5a2eb42-8065-4174-ab79-0a6fa820e35e",
                    "name": "Cleveland Browns",
                    "alias": "CLE",
                    "game_number": 4,
                    "sr_id": "sr:competitor:4417"
                },
                "broadcast": {
                    "network": "CBS"
                },
                "weather": {
                    "condition": "Sunny",
                    "humidity": 53,
                    "temp": 68,
                    "wind": {
                        "speed": 11,
                        "direction": "NW"
                    }
                },
                "scoring": {
                    "home_points": 23,
                    "away_points": 20,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "18e3d9a4-4ef3-4de3-9b67-4efd0d6fea28",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 10,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "bcfe4390-b10a-4f81-8e49-39043360cebc",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 0,
                            "away_points": 10
                        },
                        {
                            "period_type": "quarter",
                            "id": "ff933605-da01-45e0-bd50-5f874033a494",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 0,
                            "away_points": 3
                        },
                        {
                            "period_type": "quarter",
                            "id": "5cf31d0e-c13d-4441-a4df-be50c7ceb944",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 13,
                            "away_points": 7
                        }
                    ]
                }
            },
            {
                "id": "67c5b2b3-02fe-49ce-9e63-c1f606ed2c06",
                "status": "closed",
                "scheduled": "2022-10-02T17:00:00+00:00",
                "attendance": 65781,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623279",
                "game_type": "regular",
                "duration": "2:49",
                "venue": {
                    "id": "6ed18563-53e0-46c2-a91d-12d73a16456d",
                    "name": "Lucas Oil Stadium",
                    "city": "Indianapolis",
                    "state": "IN",
                    "country": "USA",
                    "zip": "46225",
                    "address": "500 South Capitol Avenue",
                    "capacity": 67000,
                    "surface": "artificial",
                    "roof_type": "retractable_dome",
                    "sr_id": "sr:venue:8185",
                    "location": {
                        "lat": "39.760008",
                        "lng": "-86.163906"
                    }
                },
                "home": {
                    "id": "82cf9565-6eb9-4f01-bdbd-5aa0d472fcd9",
                    "name": "Indianapolis Colts",
                    "alias": "IND",
                    "game_number": 4,
                    "sr_id": "sr:competitor:4421"
                },
                "away": {
                    "id": "d26a1ca5-722d-4274-8f97-c92e49c96315",
                    "name": "Tennessee Titans",
                    "alias": "TEN",
                    "game_number": 4,
                    "sr_id": "sr:competitor:367364"
                },
                "broadcast": {
                    "network": "FOX"
                },
                "weather": {
                    "condition": "Partly cloudy",
                    "humidity": 65,
                    "temp": 62,
                    "wind": {
                        "speed": 14,
                        "direction": "NNE"
                    }
                },
                "scoring": {
                    "home_points": 17,
                    "away_points": 24,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "23f46b36-96a2-450a-99b2-3d8c742f9b8d",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 0,
                            "away_points": 14
                        },
                        {
                            "period_type": "quarter",
                            "id": "c7d0b659-a34b-4a97-be9b-8c5fb94b15fb",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 10,
                            "away_points": 10
                        },
                        {
                            "period_type": "quarter",
                            "id": "c62ef046-0f16-4bfb-b933-d601209aa129",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 7,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "df9f08da-4280-4de3-bed7-e34e8a67ab53",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 0,
                            "away_points": 0
                        }
                    ]
                }
            },
            {
                "id": "c051a5cd-d887-49f8-8f5a-b0bebd794f88",
                "status": "closed",
                "scheduled": "2022-10-02T17:00:00+00:00",
                "attendance": 92946,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623273",
                "game_type": "regular",
                "duration": "3:08",
                "venue": {
                    "id": "1e84213a-ff1f-4c9d-a003-8ee782b25a40",
                    "name": "AT&T Stadium",
                    "city": "Arlington",
                    "state": "TX",
                    "country": "USA",
                    "zip": "76011",
                    "address": "One Legends Way",
                    "capacity": 80000,
                    "surface": "artificial",
                    "roof_type": "retractable_dome",
                    "sr_id": "sr:venue:6650",
                    "location": {
                        "lat": "32.747778",
                        "lng": "-97.092778"
                    }
                },
                "home": {
                    "id": "e627eec7-bbae-4fa4-8e73-8e1d6bc5c060",
                    "name": "Dallas Cowboys",
                    "alias": "DAL",
                    "game_number": 4,
                    "sr_id": "sr:competitor:4392"
                },
                "away": {
                    "id": "22052ff7-c065-42ee-bc8f-c4691c50e624",
                    "name": "Washington Commanders",
                    "alias": "WAS",
                    "game_number": 4,
                    "sr_id": "sr:competitor:4432"
                },
                "broadcast": {
                    "network": "FOX"
                },
                "weather": {
                    "condition": "Sunny",
                    "humidity": 40,
                    "temp": 74,
                    "wind": {
                        "speed": 4,
                        "direction": "E"
                    }
                },
                "scoring": {
                    "home_points": 25,
                    "away_points": 10,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "2706b0bd-e607-442f-a9cc-5c96d03d7664",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 3,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "73686b51-31ba-4677-aec9-36d699386c0c",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 9,
                            "away_points": 7
                        },
                        {
                            "period_type": "quarter",
                            "id": "09b9ed29-e0ab-4e21-a276-3954872e0444",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 3,
                            "away_points": 3
                        },
                        {
                            "period_type": "quarter",
                            "id": "6b5e6a52-8f26-45e7-b7cc-8fcd471fb7b8",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 10,
                            "away_points": 0
                        }
                    ]
                }
            },
            {
                "id": "f88ed995-0a58-42c7-8b57-89c5c4640e4f",
                "status": "closed",
                "scheduled": "2022-10-02T17:00:00+00:00",
                "attendance": 70494,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623271",
                "game_type": "regular",
                "duration": "3:02",
                "venue": {
                    "id": "d54faae0-0314-484f-8604-9d8dd08e1149",
                    "name": "M&T Bank Stadium",
                    "city": "Baltimore",
                    "state": "MD",
                    "country": "USA",
                    "zip": "21230",
                    "address": "1101 Russell Street",
                    "capacity": 71008,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8169",
                    "location": {
                        "lat": "39.277995",
                        "lng": "-76.622592"
                    }
                },
                "home": {
                    "id": "ebd87119-b331-4469-9ea6-d51fe3ce2f1c",
                    "name": "Baltimore Ravens",
                    "alias": "BAL",
                    "game_number": 4,
                    "sr_id": "sr:competitor:4413"
                },
                "away": {
                    "id": "768c92aa-75ff-4a43-bcc0-f2798c2e1724",
                    "name": "Buffalo Bills",
                    "alias": "BUF",
                    "game_number": 4,
                    "sr_id": "sr:competitor:4376"
                },
                "broadcast": {
                    "network": "CBS"
                },
                "weather": {
                    "condition": "Sunny",
                    "humidity": 78,
                    "temp": 58,
                    "wind": {
                        "speed": 2,
                        "direction": "NNE"
                    }
                },
                "scoring": {
                    "home_points": 20,
                    "away_points": 23,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "bdfccbfa-1f08-410d-b4e7-a7ebfa0a2ddb",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 14,
                            "away_points": 3
                        },
                        {
                            "period_type": "quarter",
                            "id": "706d0bcc-bd06-4e30-bea1-94d227a2d953",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 6,
                            "away_points": 7
                        },
                        {
                            "period_type": "quarter",
                            "id": "14dd0be4-ed20-4e0d-9b83-cb4fab1f9871",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 0,
                            "away_points": 10
                        },
                        {
                            "period_type": "quarter",
                            "id": "522fc60f-2bc0-4f46-8b29-b456f41b49f4",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 0,
                            "away_points": 3
                        }
                    ]
                }
            },
            {
                "id": "6fb3effa-3ec0-42fd-bedf-64e969cdfca8",
                "status": "closed",
                "scheduled": "2022-10-02T20:05:00+00:00",
                "attendance": 69810,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623287",
                "game_type": "regular",
                "duration": "3:07",
                "venue": {
                    "id": "39be9ed4-3292-49ac-8699-a381de3a4969",
                    "name": "Bank of America Stadium",
                    "city": "Charlotte",
                    "state": "NC",
                    "country": "USA",
                    "zip": "28202",
                    "address": "800 South Mint Street",
                    "capacity": 75419,
                    "surface": "artificial",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8173",
                    "location": {
                        "lat": "35.225937",
                        "lng": "-80.853133"
                    }
                },
                "home": {
                    "id": "f14bf5cc-9a82-4a38-bc15-d39f75ed5314",
                    "name": "Carolina Panthers",
                    "alias": "CAR",
                    "game_number": 4,
                    "sr_id": "sr:competitor:4415"
                },
                "away": {
                    "id": "de760528-1dc0-416a-a978-b510d20692ff",
                    "name": "Arizona Cardinals",
                    "alias": "ARI",
                    "game_number": 4,
                    "sr_id": "sr:competitor:4412"
                },
                "broadcast": {
                    "network": "FOX"
                },
                "weather": {
                    "condition": "Partly cloudy",
                    "humidity": 59,
                    "temp": 66,
                    "wind": {
                        "speed": 15,
                        "direction": "NNW"
                    }
                },
                "scoring": {
                    "home_points": 16,
                    "away_points": 26,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "c31e86f3-1664-4719-9a4f-b269c92875b9",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 0,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "48a3b50d-821a-4b69-b75d-e608be230948",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 10,
                            "away_points": 3
                        },
                        {
                            "period_type": "quarter",
                            "id": "51e720ec-53de-4ed0-bfa9-702b1c5aca9f",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 0,
                            "away_points": 7
                        },
                        {
                            "period_type": "quarter",
                            "id": "0e8ccf31-cf77-44fc-b5fd-dc861e46d514",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 6,
                            "away_points": 16
                        }
                    ]
                }
            },
            {
                "id": "347e3fc0-bd45-458d-a5ff-b978e360b63b",
                "status": "closed",
                "scheduled": "2022-10-02T20:25:00+00:00",
                "attendance": 62332,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623291",
                "game_type": "regular",
                "duration": "3:09",
                "venue": {
                    "id": "53d42601-5dfb-40a7-bd94-da2c1d3a75e4",
                    "name": "Allegiant Stadium",
                    "city": "Las Vegas",
                    "state": "NV",
                    "country": "USA",
                    "zip": "89118",
                    "address": "3333 Al Davis Way",
                    "capacity": 65000,
                    "surface": "turf",
                    "roof_type": "dome",
                    "sr_id": "sr:venue:51543",
                    "location": {
                        "lat": "36.090852",
                        "lng": "-115.183339"
                    }
                },
                "home": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Las Vegas Raiders",
                    "alias": "LV",
                    "game_number": 4,
                    "sr_id": "sr:competitor:4390"
                },
                "away": {
                    "id": "ce92bd47-93d5-4fe9-ada4-0fc681e6caa0",
                    "name": "Denver Broncos",
                    "alias": "DEN",
                    "game_number": 4,
                    "sr_id": "sr:competitor:4418"
                },
                "broadcast": {
                    "network": "CBS"
                },
                "weather": {
                    "condition": "Partly cloudy",
                    "humidity": 22,
                    "temp": 91,
                    "wind": {
                        "speed": 6,
                        "direction": "SW"
                    }
                },
                "scoring": {
                    "home_points": 32,
                    "away_points": 23,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "dcb21b17-82fc-4b3f-b1b7-77719c09f41e",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 3,
                            "away_points": 7
                        },
                        {
                            "period_type": "quarter",
                            "id": "a8261ba0-5754-40f8-a1f7-834b92d82162",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 16,
                            "away_points": 9
                        },
                        {
                            "period_type": "quarter",
                            "id": "fb3bb02e-2111-4574-9422-103d55242821",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 3,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "e6c3f3ab-435d-411c-a684-dee902556b79",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 10,
                            "away_points": 7
                        }
                    ]
                }
            },
            {
                "id": "9d2b7cff-f479-48b4-abd6-df2f0e23a5f4",
                "status": "closed",
                "scheduled": "2022-10-02T20:25:00+00:00",
                "attendance": 78317,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623289",
                "game_type": "regular",
                "duration": "3:21",
                "venue": {
                    "id": "5a60dd3a-302c-41c6-ab0f-dd335c1103c2",
                    "name": "Lambeau Field",
                    "city": "Green Bay",
                    "state": "WI",
                    "country": "USA",
                    "zip": "54304",
                    "address": "1265 Lombardi Avenue",
                    "capacity": 81435,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8183",
                    "location": {
                        "lat": "44.501357",
                        "lng": "-88.062440"
                    }
                },
                "home": {
                    "id": "a20471b4-a8d9-40c7-95ad-90cc30e46932",
                    "name": "Green Bay Packers",
                    "alias": "GB",
                    "game_number": 4,
                    "sr_id": "sr:competitor:4420"
                },
                "away": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "New England Patriots",
                    "alias": "NE",
                    "game_number": 4,
                    "sr_id": "sr:competitor:4424"
                },
                "broadcast": {
                    "network": "CBS"
                },
                "weather": {
                    "condition": "Sunny",
                    "humidity": 59,
                    "temp": 66,
                    "wind": {
                        "speed": 9,
                        "direction": "ENE"
                    }
                },
                "scoring": {
                    "home_points": 27,
                    "away_points": 24,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "010cfc30-84f8-4fd9-99ed-52b26a5eab80",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 0,
                            "away_points": 3
                        },
                        {
                            "period_type": "quarter",
                            "id": "e857eb15-e631-4ece-8138-3294cc1cbd75",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 7,
                            "away_points": 7
                        },
                        {
                            "period_type": "quarter",
                            "id": "6de06adb-928c-40de-a75e-3b3cc68aa857",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 10,
                            "away_points": 7
                        },
                        {
                            "period_type": "quarter",
                            "id": "a3f5058c-b200-4fa4-b768-377dd3d1cf2e",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 7,
                            "away_points": 7
                        },
                        {
                            "period_type": "overtime",
                            "id": "386b12a2-2329-41d8-b14a-f958ca6edfa2",
                            "number": 1,
                            "sequence": 5,
                            "home_points": 3,
                            "away_points": 0
                        }
                    ]
                }
            },
            {
                "id": "75225665-e0f5-4449-ad9c-e8cefb3d1b07",
                "status": "closed",
                "scheduled": "2022-10-03T00:20:00+00:00",
                "attendance": 68348,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623293",
                "game_type": "regular",
                "duration": "3:09",
                "venue": {
                    "id": "6fccc39c-80bc-4c81-83d9-2d5a848c8c09",
                    "name": "Raymond James Stadium",
                    "city": "Tampa",
                    "state": "FL",
                    "country": "USA",
                    "zip": "33607",
                    "address": "4201 North Dale Mabry Highway",
                    "capacity": 65890,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8205",
                    "location": {
                        "lat": "27.976211",
                        "lng": "-82.503625"
                    }
                },
                "home": {
                    "id": "4254d319-1bc7-4f81-b4ab-b5e6f3402b69",
                    "name": "Tampa Bay Buccaneers",
                    "alias": "TB",
                    "game_number": 4,
                    "sr_id": "sr:competitor:4388"
                },
                "away": {
                    "id": "6680d28d-d4d2-49f6-aace-5292d3ec02c2",
                    "name": "Kansas City Chiefs",
                    "alias": "KC",
                    "game_number": 4,
                    "sr_id": "sr:competitor:4422"
                },
                "broadcast": {
                    "network": "NBC"
                },
                "weather": {
                    "condition": "Clear",
                    "humidity": 64,
                    "temp": 75,
                    "wind": {
                        "speed": 2,
                        "direction": "NW"
                    }
                },
                "scoring": {
                    "home_points": 31,
                    "away_points": 41,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "f49267ff-43a2-4eb7-ab1d-364964f3f37c",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 3,
                            "away_points": 14
                        },
                        {
                            "period_type": "quarter",
                            "id": "02c3808f-6018-4130-907a-588919a7888b",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 14,
                            "away_points": 14
                        },
                        {
                            "period_type": "quarter",
                            "id": "7fa90243-c3b9-488b-9fc3-a3e51b47d511",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 7,
                            "away_points": 10
                        },
                        {
                            "period_type": "quarter",
                            "id": "c12c3a2f-a17f-4a95-a9e4-bcad2457e76f",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 7,
                            "away_points": 3
                        }
                    ]
                }
            },
            {
                "id": "b295c097-316e-493f-b8a6-ed82346e8dff",
                "status": "closed",
                "scheduled": "2022-10-04T00:15:00+00:00",
                "attendance": 71597,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623295",
                "game_type": "regular",
                "duration": "2:47",
                "venue": {
                    "id": "24c71dbf-6469-46f1-8165-22005c295c8f",
                    "name": "Levi's Stadium",
                    "city": "Santa Clara",
                    "state": "CA",
                    "country": "USA",
                    "zip": "95054",
                    "address": "4900 Marie P DeBartolo Way",
                    "capacity": 68500,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:15672",
                    "location": {
                        "lat": "37.403000",
                        "lng": "-121.970000"
                    }
                },
                "home": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "San Francisco 49ers",
                    "alias": "SF",
                    "game_number": 4,
                    "sr_id": "sr:competitor:4389"
                },
                "away": {
                    "id": "2eff2a03-54d4-46ba-890e-2bc3925548f3",
                    "name": "Los Angeles Rams",
                    "alias": "LA",
                    "game_number": 4,
                    "sr_id": "sr:competitor:4387"
                },
                "broadcast": {
                    "network": "ESPN",
                    "satellite": "206"
                },
                "weather": {
                    "condition": "Sunny",
                    "humidity": 53,
                    "temp": 73,
                    "wind": {
                        "speed": 13,
                        "direction": "WNW"
                    }
                },
                "scoring": {
                    "home_points": 24,
                    "away_points": 9,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "9affb9f9-0505-4d06-b3bf-f88a2891c77b",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 7,
                            "away_points": 3
                        },
                        {
                            "period_type": "quarter",
                            "id": "4457fa3a-27cf-4cfb-a756-dd7334cacda1",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 7,
                            "away_points": 3
                        },
                        {
                            "period_type": "quarter",
                            "id": "784996e1-647f-4398-adf6-66a3c3f069d3",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 0,
                            "away_points": 3
                        },
                        {
                            "period_type": "quarter",
                            "id": "021510b9-f2d4-4c87-8d1f-835f0ae71043",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 10,
                            "away_points": 0
                        }
                    ]
                }
            }
        ],
        "createdAt": "2022-11-02T23:27:20.057Z",
        "updatedAt": "2022-11-02T23:27:20.057Z",
        "__v": 0
    },
    {
        "_id": "6362fcd7a05a14afa1a59d0e",
        "weekNumber": 11,
        "games": [
            {
                "id": "b7796b52-a95f-456c-9f8a-e5b9826770eb",
                "status": "scheduled",
                "scheduled": "2022-11-18T01:15:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623461",
                "game_type": "regular",
                "venue": {
                    "id": "5a60dd3a-302c-41c6-ab0f-dd335c1103c2",
                    "name": "Lambeau Field",
                    "city": "Green Bay",
                    "state": "WI",
                    "country": "USA",
                    "zip": "54304",
                    "address": "1265 Lombardi Avenue",
                    "capacity": 81435,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8183",
                    "location": {
                        "lat": "44.501357",
                        "lng": "-88.062440"
                    }
                },
                "home": {
                    "id": "a20471b4-a8d9-40c7-95ad-90cc30e46932",
                    "name": "Green Bay Packers",
                    "alias": "GB",
                    "game_number": 11,
                    "sr_id": "sr:competitor:4420"
                },
                "away": {
                    "id": "d26a1ca5-722d-4274-8f97-c92e49c96315",
                    "name": "Tennessee Titans",
                    "alias": "TEN",
                    "game_number": 10,
                    "sr_id": "sr:competitor:367364"
                },
                "broadcast": {
                    "network": "Amazon Prime Video"
                }
            },
            {
                "id": "5b67e186-7af6-4380-99b7-d4f6aa289ded",
                "status": "scheduled",
                "scheduled": "2022-11-20T18:00:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623467",
                "game_type": "regular",
                "venue": {
                    "id": "e9e0828e-37fc-4238-a317-49037577dd55",
                    "name": "Highmark Stadium",
                    "city": "Orchard Park",
                    "state": "NY",
                    "country": "USA",
                    "zip": "14127",
                    "address": "One Bills Drive",
                    "capacity": 71608,
                    "surface": "artificial",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8171",
                    "location": {
                        "lat": "42.773826",
                        "lng": "-78.786589"
                    }
                },
                "home": {
                    "id": "768c92aa-75ff-4a43-bcc0-f2798c2e1724",
                    "name": "Buffalo Bills",
                    "alias": "BUF",
                    "game_number": 10,
                    "sr_id": "sr:competitor:4376"
                },
                "away": {
                    "id": "d5a2eb42-8065-4174-ab79-0a6fa820e35e",
                    "name": "Cleveland Browns",
                    "alias": "CLE",
                    "game_number": 10,
                    "sr_id": "sr:competitor:4417"
                },
                "broadcast": {
                    "network": "CBS"
                }
            },
            {
                "id": "61787d91-5ad7-438d-9b44-bfb4acecaefa",
                "status": "scheduled",
                "scheduled": "2022-11-20T18:00:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623465",
                "game_type": "regular",
                "venue": {
                    "id": "d54faae0-0314-484f-8604-9d8dd08e1149",
                    "name": "M&T Bank Stadium",
                    "city": "Baltimore",
                    "state": "MD",
                    "country": "USA",
                    "zip": "21230",
                    "address": "1101 Russell Street",
                    "capacity": 71008,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8169",
                    "location": {
                        "lat": "39.277995",
                        "lng": "-76.622592"
                    }
                },
                "home": {
                    "id": "ebd87119-b331-4469-9ea6-d51fe3ce2f1c",
                    "name": "Baltimore Ravens",
                    "alias": "BAL",
                    "game_number": 10,
                    "sr_id": "sr:competitor:4413"
                },
                "away": {
                    "id": "f14bf5cc-9a82-4a38-bc15-d39f75ed5314",
                    "name": "Carolina Panthers",
                    "alias": "CAR",
                    "game_number": 11,
                    "sr_id": "sr:competitor:4415"
                },
                "broadcast": {
                    "network": "FOX"
                }
            },
            {
                "id": "72fc63d4-6c4d-4ea2-8559-ca5e15f6a129",
                "status": "scheduled",
                "scheduled": "2022-11-20T18:00:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623477",
                "game_type": "regular",
                "venue": {
                    "id": "5d4c85c7-d84e-4e10-bd6a-8a15ebecca5c",
                    "name": "MetLife Stadium",
                    "city": "East Rutherford",
                    "state": "NJ",
                    "country": "USA",
                    "zip": "07073",
                    "address": "One MetLife Stadium Drive",
                    "capacity": 82500,
                    "surface": "artificial",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:1981",
                    "location": {
                        "lat": "40.813611",
                        "lng": "-74.074444"
                    }
                },
                "home": {
                    "id": "04aa1c9d-66da-489d-b16a-1dee3f2eec4d",
                    "name": "New York Giants",
                    "alias": "NYG",
                    "game_number": 10,
                    "sr_id": "sr:competitor:4426"
                },
                "away": {
                    "id": "c5a59daa-53a7-4de0-851f-fb12be893e9e",
                    "name": "Detroit Lions",
                    "alias": "DET",
                    "game_number": 10,
                    "sr_id": "sr:competitor:4419"
                },
                "broadcast": {
                    "network": "FOX"
                }
            },
            {
                "id": "89f6dd2d-aa44-4ad1-adff-643bf9d69c55",
                "status": "scheduled",
                "scheduled": "2022-11-20T18:00:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623473",
                "game_type": "regular",
                "venue": {
                    "id": "e43310b1-cb82-4df9-8be5-e9b39637031b",
                    "name": "Gillette Stadium",
                    "city": "Foxborough",
                    "state": "MA",
                    "country": "USA",
                    "zip": "02035",
                    "address": "One Patriot Place",
                    "capacity": 66829,
                    "surface": "artificial",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:2379",
                    "location": {
                        "lat": "42.090944",
                        "lng": "-71.264344"
                    }
                },
                "home": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "New England Patriots",
                    "alias": "NE",
                    "game_number": 10,
                    "sr_id": "sr:competitor:4424"
                },
                "away": {
                    "id": "5fee86ae-74ab-4bdd-8416-42a9dd9964f3",
                    "name": "New York Jets",
                    "alias": "NYJ",
                    "game_number": 10,
                    "sr_id": "sr:competitor:4427"
                },
                "broadcast": {
                    "network": "CBS"
                }
            },
            {
                "id": "9330ff2e-d460-445e-a708-c999830425ae",
                "status": "scheduled",
                "scheduled": "2022-11-20T18:00:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623469",
                "game_type": "regular",
                "venue": {
                    "id": "6a72e5ca-33d0-40af-8e6b-b32a4d3d9346",
                    "name": "NRG Stadium",
                    "city": "Houston",
                    "state": "TX",
                    "country": "USA",
                    "zip": "77054",
                    "address": "One Reliant Park",
                    "capacity": 72220,
                    "surface": "artificial",
                    "roof_type": "retractable_dome",
                    "sr_id": "sr:venue:2402",
                    "location": {
                        "lat": "29.684735",
                        "lng": "-95.410725"
                    }
                },
                "home": {
                    "id": "82d2d380-3834-4938-835f-aec541e5ece7",
                    "name": "Houston Texans",
                    "alias": "HOU",
                    "game_number": 10,
                    "sr_id": "sr:competitor:4324"
                },
                "away": {
                    "id": "22052ff7-c065-42ee-bc8f-c4691c50e624",
                    "name": "Washington Commanders",
                    "alias": "WAS",
                    "game_number": 11,
                    "sr_id": "sr:competitor:4432"
                },
                "broadcast": {
                    "network": "FOX"
                }
            },
            {
                "id": "c7659740-7f30-4a07-a8a3-2dcfddec8be2",
                "status": "scheduled",
                "scheduled": "2022-11-20T18:00:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623463",
                "game_type": "regular",
                "venue": {
                    "id": "1f2d393b-2291-4835-a412-0714966ea245",
                    "name": "Mercedes-Benz Stadium",
                    "city": "Atlanta",
                    "state": "GA",
                    "country": "USA",
                    "zip": "30313",
                    "address": "441 Martin Luther King Jr Drive NW",
                    "capacity": 71000,
                    "surface": "artificial",
                    "roof_type": "retractable_dome",
                    "sr_id": "sr:venue:20343",
                    "location": {
                        "lat": "33.757368",
                        "lng": "-84.401008"
                    }
                },
                "home": {
                    "id": "e6aa13a4-0055-48a9-bc41-be28dc106929",
                    "name": "Atlanta Falcons",
                    "alias": "ATL",
                    "game_number": 11,
                    "sr_id": "sr:competitor:4393"
                },
                "away": {
                    "id": "7b112545-38e6-483c-a55c-96cf6ee49cb8",
                    "name": "Chicago Bears",
                    "alias": "CHI",
                    "game_number": 11,
                    "sr_id": "sr:competitor:4391"
                },
                "broadcast": {
                    "network": "FOX"
                }
            },
            {
                "id": "d01d35c3-ad0b-4687-9e0d-23edb7475ac3",
                "status": "scheduled",
                "scheduled": "2022-11-20T18:00:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623475",
                "game_type": "regular",
                "venue": {
                    "id": "3c85d89a-ec66-4983-acd5-1381d6c8673a",
                    "name": "Caesars Superdome",
                    "city": "New Orleans",
                    "state": "LA",
                    "country": "USA",
                    "zip": "70112",
                    "address": "1500 Sugar Bowl Drive",
                    "capacity": 73208,
                    "surface": "artificial",
                    "roof_type": "dome",
                    "sr_id": "sr:venue:8195",
                    "location": {
                        "lat": "29.950928",
                        "lng": "-90.080876"
                    }
                },
                "home": {
                    "id": "0d855753-ea21-4953-89f9-0e20aff9eb73",
                    "name": "New Orleans Saints",
                    "alias": "NO",
                    "game_number": 11,
                    "sr_id": "sr:competitor:4425"
                },
                "away": {
                    "id": "2eff2a03-54d4-46ba-890e-2bc3925548f3",
                    "name": "Los Angeles Rams",
                    "alias": "LA",
                    "game_number": 10,
                    "sr_id": "sr:competitor:4387"
                },
                "broadcast": {
                    "network": "FOX"
                }
            },
            {
                "id": "e452c2fa-1975-4236-b0c0-bb09c6793a79",
                "status": "scheduled",
                "scheduled": "2022-11-20T18:00:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623471",
                "game_type": "regular",
                "venue": {
                    "id": "6ed18563-53e0-46c2-a91d-12d73a16456d",
                    "name": "Lucas Oil Stadium",
                    "city": "Indianapolis",
                    "state": "IN",
                    "country": "USA",
                    "zip": "46225",
                    "address": "500 South Capitol Avenue",
                    "capacity": 67000,
                    "surface": "artificial",
                    "roof_type": "retractable_dome",
                    "sr_id": "sr:venue:8185",
                    "location": {
                        "lat": "39.760008",
                        "lng": "-86.163906"
                    }
                },
                "home": {
                    "id": "82cf9565-6eb9-4f01-bdbd-5aa0d472fcd9",
                    "name": "Indianapolis Colts",
                    "alias": "IND",
                    "game_number": 11,
                    "sr_id": "sr:competitor:4421"
                },
                "away": {
                    "id": "386bdbf9-9eea-4869-bb9a-274b0bc66e80",
                    "name": "Philadelphia Eagles",
                    "alias": "PHI",
                    "game_number": 10,
                    "sr_id": "sr:competitor:4428"
                },
                "broadcast": {
                    "network": "CBS"
                }
            },
            {
                "id": "80854172-e672-4cf5-817d-75f326ef93c1",
                "status": "scheduled",
                "scheduled": "2022-11-20T21:05:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623479",
                "game_type": "regular",
                "venue": {
                    "id": "6589e61d-ef1e-4e30-91b5-9acd2072b8a0",
                    "name": "Empower Field at Mile High",
                    "city": "Denver",
                    "state": "CO",
                    "country": "USA",
                    "zip": "80204",
                    "address": "1701 Mile High Stadium Circle",
                    "capacity": 76125,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8179",
                    "location": {
                        "lat": "39.743865",
                        "lng": "-105.020158"
                    }
                },
                "home": {
                    "id": "ce92bd47-93d5-4fe9-ada4-0fc681e6caa0",
                    "name": "Denver Broncos",
                    "alias": "DEN",
                    "game_number": 10,
                    "sr_id": "sr:competitor:4418"
                },
                "away": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Las Vegas Raiders",
                    "alias": "LV",
                    "game_number": 10,
                    "sr_id": "sr:competitor:4390"
                },
                "broadcast": {
                    "network": "FOX"
                }
            },
            {
                "id": "ab83b7bf-6353-4b3f-b687-393f25f03959",
                "status": "scheduled",
                "scheduled": "2022-11-20T21:25:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623483",
                "game_type": "regular",
                "venue": {
                    "id": "f5ff00d4-1ed8-4918-bf73-13d66d510f98",
                    "name": "U.S. Bank Stadium",
                    "city": "Minneapolis",
                    "state": "MN",
                    "country": "USA",
                    "zip": "55415",
                    "address": "900 S 5th Street",
                    "capacity": 66655,
                    "surface": "artificial",
                    "roof_type": "dome",
                    "sr_id": "sr:venue:18423",
                    "location": {
                        "lat": "44.973686",
                        "lng": "-93.257458"
                    }
                },
                "home": {
                    "id": "33405046-04ee-4058-a950-d606f8c30852",
                    "name": "Minnesota Vikings",
                    "alias": "MIN",
                    "game_number": 10,
                    "sr_id": "sr:competitor:4423"
                },
                "away": {
                    "id": "e627eec7-bbae-4fa4-8e73-8e1d6bc5c060",
                    "name": "Dallas Cowboys",
                    "alias": "DAL",
                    "game_number": 10,
                    "sr_id": "sr:competitor:4392"
                },
                "broadcast": {
                    "network": "CBS"
                }
            },
            {
                "id": "b587f407-d807-4367-af81-ca0d03741b7c",
                "status": "scheduled",
                "scheduled": "2022-11-20T21:25:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623481",
                "game_type": "regular",
                "venue": {
                    "id": "790c1f04-73c6-4f6f-8b1e-78a62260be90",
                    "name": "SoFi Stadium",
                    "city": "Inglewood",
                    "state": "CA",
                    "country": "USA",
                    "zip": "90301",
                    "address": "1000 S Prairie Ave",
                    "capacity": 70240,
                    "surface": "artificial",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:52183",
                    "location": {
                        "lat": "33.953536",
                        "lng": "-118.338734"
                    }
                },
                "home": {
                    "id": "1f6dcffb-9823-43cd-9ff4-e7a8466749b5",
                    "name": "Los Angeles Chargers",
                    "alias": "LAC",
                    "game_number": 10,
                    "sr_id": "sr:competitor:4429"
                },
                "away": {
                    "id": "6680d28d-d4d2-49f6-aace-5292d3ec02c2",
                    "name": "Kansas City Chiefs",
                    "alias": "KC",
                    "game_number": 10,
                    "sr_id": "sr:competitor:4422"
                },
                "broadcast": {
                    "network": "CBS"
                }
            },
            {
                "id": "833598fd-1eb5-4f57-a041-5505da5d943d",
                "status": "scheduled",
                "scheduled": "2022-11-21T01:20:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623485",
                "game_type": "regular",
                "venue": {
                    "id": "7349a2e6-0ac9-410b-8bd2-ca58c9f7aa34",
                    "name": "Acrisure Stadium",
                    "city": "Pittsburgh",
                    "state": "PA",
                    "country": "USA",
                    "zip": "15212",
                    "address": "100 Art Rooney Avenue",
                    "capacity": 68400,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8197",
                    "location": {
                        "lat": "40.446653",
                        "lng": "-80.015844"
                    }
                },
                "home": {
                    "id": "cb2f9f1f-ac67-424e-9e72-1475cb0ed398",
                    "name": "Pittsburgh Steelers",
                    "alias": "PIT",
                    "game_number": 10,
                    "sr_id": "sr:competitor:4345"
                },
                "away": {
                    "id": "ad4ae08f-d808-42d5-a1e6-e9bc4e34d123",
                    "name": "Cincinnati Bengals",
                    "alias": "CIN",
                    "game_number": 10,
                    "sr_id": "sr:competitor:4416"
                },
                "broadcast": {
                    "network": "NBC"
                }
            },
            {
                "id": "5988c183-f838-4ff1-80a0-8563d48b51a4",
                "status": "scheduled",
                "scheduled": "2022-11-22T01:15:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33498793",
                "game_type": "regular",
                "venue": {
                    "id": "949cb43e-531e-4d33-9ef5-85b54ef52f52",
                    "name": "Estadio Azteca",
                    "city": "Mexico City",
                    "country": "MEX",
                    "address": "Calzada de Tlalpan, 3465",
                    "capacity": 87000,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:1004"
                },
                "home": {
                    "id": "de760528-1dc0-416a-a978-b510d20692ff",
                    "name": "Arizona Cardinals",
                    "alias": "ARI",
                    "game_number": 11,
                    "sr_id": "sr:competitor:4412"
                },
                "away": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "San Francisco 49ers",
                    "alias": "SF",
                    "game_number": 10,
                    "sr_id": "sr:competitor:4389"
                },
                "broadcast": {
                    "network": "ESPN",
                    "satellite": "206"
                }
            }
        ],
        "createdAt": "2022-11-02T23:27:19.812Z",
        "updatedAt": "2022-11-02T23:27:19.812Z",
        "__v": 0
    },
    {
        "_id": "6362fcd8a05a14afa1a59d1c",
        "weekNumber": 14,
        "games": [
            {
                "id": "c6573861-4766-48ed-aae3-53c0aca6e9ea",
                "status": "scheduled",
                "scheduled": "2022-12-09T01:15:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623549",
                "game_type": "regular",
                "venue": {
                    "id": "790c1f04-73c6-4f6f-8b1e-78a62260be90",
                    "name": "SoFi Stadium",
                    "city": "Inglewood",
                    "state": "CA",
                    "country": "USA",
                    "zip": "90301",
                    "address": "1000 S Prairie Ave",
                    "capacity": 70240,
                    "surface": "artificial",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:52183",
                    "location": {
                        "lat": "33.953536",
                        "lng": "-118.338734"
                    }
                },
                "home": {
                    "id": "2eff2a03-54d4-46ba-890e-2bc3925548f3",
                    "name": "Los Angeles Rams",
                    "alias": "LA",
                    "game_number": 13,
                    "sr_id": "sr:competitor:4387"
                },
                "away": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Las Vegas Raiders",
                    "alias": "LV",
                    "game_number": 13,
                    "sr_id": "sr:competitor:4390"
                },
                "broadcast": {
                    "network": "Amazon Prime Video"
                }
            },
            {
                "id": "178083b4-c7e3-4754-9d53-a7cf5689932e",
                "status": "scheduled",
                "scheduled": "2022-12-11T18:00:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623561",
                "game_type": "regular",
                "venue": {
                    "id": "7349a2e6-0ac9-410b-8bd2-ca58c9f7aa34",
                    "name": "Acrisure Stadium",
                    "city": "Pittsburgh",
                    "state": "PA",
                    "country": "USA",
                    "zip": "15212",
                    "address": "100 Art Rooney Avenue",
                    "capacity": 68400,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8197",
                    "location": {
                        "lat": "40.446653",
                        "lng": "-80.015844"
                    }
                },
                "home": {
                    "id": "cb2f9f1f-ac67-424e-9e72-1475cb0ed398",
                    "name": "Pittsburgh Steelers",
                    "alias": "PIT",
                    "game_number": 13,
                    "sr_id": "sr:competitor:4345"
                },
                "away": {
                    "id": "ebd87119-b331-4469-9ea6-d51fe3ce2f1c",
                    "name": "Baltimore Ravens",
                    "alias": "BAL",
                    "game_number": 13,
                    "sr_id": "sr:competitor:4413"
                },
                "broadcast": {
                    "network": "CBS"
                }
            },
            {
                "id": "3e067ff5-2a99-4171-a33d-27ab8aec59ae",
                "status": "scheduled",
                "scheduled": "2022-12-11T18:00:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623557",
                "game_type": "regular",
                "venue": {
                    "id": "6e3bcf22-277d-4c06-b019-62aded51654f",
                    "name": "Ford Field",
                    "city": "Detroit",
                    "state": "MI",
                    "country": "USA",
                    "zip": "48226",
                    "address": "2000 Brush Street",
                    "capacity": 65000,
                    "surface": "artificial",
                    "roof_type": "dome",
                    "sr_id": "sr:venue:8181",
                    "location": {
                        "lat": "42.339958",
                        "lng": "-83.045636"
                    }
                },
                "home": {
                    "id": "c5a59daa-53a7-4de0-851f-fb12be893e9e",
                    "name": "Detroit Lions",
                    "alias": "DET",
                    "game_number": 13,
                    "sr_id": "sr:competitor:4419"
                },
                "away": {
                    "id": "33405046-04ee-4058-a950-d606f8c30852",
                    "name": "Minnesota Vikings",
                    "alias": "MIN",
                    "game_number": 13,
                    "sr_id": "sr:competitor:4423"
                },
                "broadcast": {
                    "network": "FOX"
                }
            },
            {
                "id": "439090e4-7429-464e-bd9e-d2fc20f6ba6d",
                "status": "scheduled",
                "scheduled": "2022-12-11T18:00:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623563",
                "game_type": "regular",
                "venue": {
                    "id": "5295c1b7-c85c-49cb-9569-1707c65324e5",
                    "name": "Nissan Stadium",
                    "city": "Nashville",
                    "state": "TN",
                    "country": "USA",
                    "zip": "37213",
                    "address": "One Titans Way",
                    "capacity": 69143,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8207",
                    "location": {
                        "lat": "36.166367",
                        "lng": "-86.771223"
                    }
                },
                "home": {
                    "id": "d26a1ca5-722d-4274-8f97-c92e49c96315",
                    "name": "Tennessee Titans",
                    "alias": "TEN",
                    "game_number": 13,
                    "sr_id": "sr:competitor:367364"
                },
                "away": {
                    "id": "f7ddd7fa-0bae-4f90-bc8e-669e4d6cf2de",
                    "name": "Jacksonville Jaguars",
                    "alias": "JAC",
                    "game_number": 13,
                    "sr_id": "sr:competitor:4386"
                },
                "broadcast": {
                    "network": "CBS"
                }
            },
            {
                "id": "6e51ac72-a8cd-40d6-b638-6f12536ed243",
                "status": "scheduled",
                "scheduled": "2022-12-11T18:00:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623559",
                "game_type": "regular",
                "venue": {
                    "id": "5d4c85c7-d84e-4e10-bd6a-8a15ebecca5c",
                    "name": "MetLife Stadium",
                    "city": "East Rutherford",
                    "state": "NJ",
                    "country": "USA",
                    "zip": "07073",
                    "address": "One MetLife Stadium Drive",
                    "capacity": 82500,
                    "surface": "artificial",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:1981",
                    "location": {
                        "lat": "40.813611",
                        "lng": "-74.074444"
                    }
                },
                "home": {
                    "id": "04aa1c9d-66da-489d-b16a-1dee3f2eec4d",
                    "name": "New York Giants",
                    "alias": "NYG",
                    "game_number": 13,
                    "sr_id": "sr:competitor:4426"
                },
                "away": {
                    "id": "386bdbf9-9eea-4869-bb9a-274b0bc66e80",
                    "name": "Philadelphia Eagles",
                    "alias": "PHI",
                    "game_number": 13,
                    "sr_id": "sr:competitor:4428"
                },
                "broadcast": {
                    "network": "FOX"
                }
            },
            {
                "id": "9cc461c7-4cc9-4eb5-86db-1a9f6bb9f9aa",
                "status": "scheduled",
                "scheduled": "2022-12-11T18:00:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623551",
                "game_type": "regular",
                "venue": {
                    "id": "e9e0828e-37fc-4238-a317-49037577dd55",
                    "name": "Highmark Stadium",
                    "city": "Orchard Park",
                    "state": "NY",
                    "country": "USA",
                    "zip": "14127",
                    "address": "One Bills Drive",
                    "capacity": 71608,
                    "surface": "artificial",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8171",
                    "location": {
                        "lat": "42.773826",
                        "lng": "-78.786589"
                    }
                },
                "home": {
                    "id": "768c92aa-75ff-4a43-bcc0-f2798c2e1724",
                    "name": "Buffalo Bills",
                    "alias": "BUF",
                    "game_number": 13,
                    "sr_id": "sr:competitor:4376"
                },
                "away": {
                    "id": "5fee86ae-74ab-4bdd-8416-42a9dd9964f3",
                    "name": "New York Jets",
                    "alias": "NYJ",
                    "game_number": 13,
                    "sr_id": "sr:competitor:4427"
                },
                "broadcast": {
                    "network": "CBS"
                }
            },
            {
                "id": "9d2e248e-a120-4ddb-9bbe-4428c2663ebe",
                "status": "scheduled",
                "scheduled": "2022-12-11T18:00:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623553",
                "game_type": "regular",
                "venue": {
                    "id": "b87a1595-d3c8-48ea-8a53-0aab6378a64a",
                    "name": "Paycor Stadium",
                    "city": "Cincinnati",
                    "state": "OH",
                    "country": "USA",
                    "zip": "45202",
                    "address": "One Paul Brown Stadium",
                    "capacity": 65515,
                    "surface": "artificial",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8175",
                    "location": {
                        "lat": "39.095413",
                        "lng": "-84.516204"
                    }
                },
                "home": {
                    "id": "ad4ae08f-d808-42d5-a1e6-e9bc4e34d123",
                    "name": "Cincinnati Bengals",
                    "alias": "CIN",
                    "game_number": 13,
                    "sr_id": "sr:competitor:4416"
                },
                "away": {
                    "id": "d5a2eb42-8065-4174-ab79-0a6fa820e35e",
                    "name": "Cleveland Browns",
                    "alias": "CLE",
                    "game_number": 13,
                    "sr_id": "sr:competitor:4417"
                },
                "broadcast": {
                    "network": "CBS"
                }
            },
            {
                "id": "c6e031ee-56f7-43bb-bd8f-fc92b1cc0b62",
                "status": "scheduled",
                "scheduled": "2022-12-11T18:00:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623555",
                "game_type": "regular",
                "venue": {
                    "id": "1e84213a-ff1f-4c9d-a003-8ee782b25a40",
                    "name": "AT&T Stadium",
                    "city": "Arlington",
                    "state": "TX",
                    "country": "USA",
                    "zip": "76011",
                    "address": "One Legends Way",
                    "capacity": 80000,
                    "surface": "artificial",
                    "roof_type": "retractable_dome",
                    "sr_id": "sr:venue:6650",
                    "location": {
                        "lat": "32.747778",
                        "lng": "-97.092778"
                    }
                },
                "home": {
                    "id": "e627eec7-bbae-4fa4-8e73-8e1d6bc5c060",
                    "name": "Dallas Cowboys",
                    "alias": "DAL",
                    "game_number": 13,
                    "sr_id": "sr:competitor:4392"
                },
                "away": {
                    "id": "82d2d380-3834-4938-835f-aec541e5ece7",
                    "name": "Houston Texans",
                    "alias": "HOU",
                    "game_number": 13,
                    "sr_id": "sr:competitor:4324"
                },
                "broadcast": {
                    "network": "FOX"
                }
            },
            {
                "id": "906eeb30-3279-4467-93be-55ec1f32fa36",
                "status": "scheduled",
                "scheduled": "2022-12-11T21:05:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623565",
                "game_type": "regular",
                "venue": {
                    "id": "790c1f04-73c6-4f6f-8b1e-78a62260be90",
                    "name": "SoFi Stadium",
                    "city": "Inglewood",
                    "state": "CA",
                    "country": "USA",
                    "zip": "90301",
                    "address": "1000 S Prairie Ave",
                    "capacity": 70240,
                    "surface": "artificial",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:52183",
                    "location": {
                        "lat": "33.953536",
                        "lng": "-118.338734"
                    }
                },
                "home": {
                    "id": "1f6dcffb-9823-43cd-9ff4-e7a8466749b5",
                    "name": "Los Angeles Chargers",
                    "alias": "LAC",
                    "game_number": 13,
                    "sr_id": "sr:competitor:4429"
                },
                "away": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Miami Dolphins",
                    "alias": "MIA",
                    "game_number": 13,
                    "sr_id": "sr:competitor:4287"
                },
                "broadcast": {
                    "network": "CBS"
                }
            },
            {
                "id": "6157d7ea-159a-42e1-83d5-17f3e2c95928",
                "status": "scheduled",
                "scheduled": "2022-12-11T21:25:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623569",
                "game_type": "regular",
                "venue": {
                    "id": "24c71dbf-6469-46f1-8165-22005c295c8f",
                    "name": "Levi's Stadium",
                    "city": "Santa Clara",
                    "state": "CA",
                    "country": "USA",
                    "zip": "95054",
                    "address": "4900 Marie P DeBartolo Way",
                    "capacity": 68500,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:15672",
                    "location": {
                        "lat": "37.403000",
                        "lng": "-121.970000"
                    }
                },
                "home": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "San Francisco 49ers",
                    "alias": "SF",
                    "game_number": 13,
                    "sr_id": "sr:competitor:4389"
                },
                "away": {
                    "id": "4254d319-1bc7-4f81-b4ab-b5e6f3402b69",
                    "name": "Tampa Bay Buccaneers",
                    "alias": "TB",
                    "game_number": 13,
                    "sr_id": "sr:competitor:4388"
                },
                "broadcast": {
                    "network": "FOX"
                }
            },
            {
                "id": "7a1bf5cb-3a14-49bf-b7e8-8aee0ae5e20d",
                "status": "scheduled",
                "scheduled": "2022-12-11T21:25:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623567",
                "game_type": "regular",
                "venue": {
                    "id": "c6b9e5df-c9e4-434c-b3e6-83928f11cbda",
                    "name": "Lumen Field",
                    "city": "Seattle",
                    "state": "WA",
                    "country": "USA",
                    "zip": "98134",
                    "address": "800 Occidental Avenue South",
                    "capacity": 68000,
                    "surface": "artificial",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:2291",
                    "location": {
                        "lat": "47.595165",
                        "lng": "-122.331650"
                    }
                },
                "home": {
                    "id": "3d08af9e-c767-4f88-a7dc-b920c6d2b4a8",
                    "name": "Seattle Seahawks",
                    "alias": "SEA",
                    "game_number": 13,
                    "sr_id": "sr:competitor:4430"
                },
                "away": {
                    "id": "f14bf5cc-9a82-4a38-bc15-d39f75ed5314",
                    "name": "Carolina Panthers",
                    "alias": "CAR",
                    "game_number": 13,
                    "sr_id": "sr:competitor:4415"
                },
                "broadcast": {
                    "network": "FOX"
                }
            },
            {
                "id": "5fb5d3b5-fac3-496e-b686-d6c8d33dfb7d",
                "status": "scheduled",
                "scheduled": "2022-12-12T01:20:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623571",
                "game_type": "regular",
                "venue": {
                    "id": "6589e61d-ef1e-4e30-91b5-9acd2072b8a0",
                    "name": "Empower Field at Mile High",
                    "city": "Denver",
                    "state": "CO",
                    "country": "USA",
                    "zip": "80204",
                    "address": "1701 Mile High Stadium Circle",
                    "capacity": 76125,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8179",
                    "location": {
                        "lat": "39.743865",
                        "lng": "-105.020158"
                    }
                },
                "home": {
                    "id": "ce92bd47-93d5-4fe9-ada4-0fc681e6caa0",
                    "name": "Denver Broncos",
                    "alias": "DEN",
                    "game_number": 13,
                    "sr_id": "sr:competitor:4418"
                },
                "away": {
                    "id": "6680d28d-d4d2-49f6-aace-5292d3ec02c2",
                    "name": "Kansas City Chiefs",
                    "alias": "KC",
                    "game_number": 13,
                    "sr_id": "sr:competitor:4422"
                },
                "broadcast": {
                    "network": "NBC"
                }
            },
            {
                "id": "440180d8-8dc2-4481-b4a1-dc5dfae8f764",
                "status": "scheduled",
                "scheduled": "2022-12-13T01:15:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623573",
                "game_type": "regular",
                "venue": {
                    "id": "f8e4d2ab-53f9-4e9f-8c4a-9bc278094a84",
                    "name": "State Farm Stadium",
                    "city": "Glendale",
                    "state": "AZ",
                    "country": "USA",
                    "zip": "85305",
                    "address": "One Cardinals Drive",
                    "capacity": 63400,
                    "surface": "turf",
                    "roof_type": "retractable_dome",
                    "sr_id": "sr:venue:8165",
                    "location": {
                        "lat": "33.527765",
                        "lng": "-112.262090"
                    }
                },
                "home": {
                    "id": "de760528-1dc0-416a-a978-b510d20692ff",
                    "name": "Arizona Cardinals",
                    "alias": "ARI",
                    "game_number": 13,
                    "sr_id": "sr:competitor:4412"
                },
                "away": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "New England Patriots",
                    "alias": "NE",
                    "game_number": 13,
                    "sr_id": "sr:competitor:4424"
                },
                "broadcast": {
                    "network": "ESPN",
                    "satellite": "206"
                }
            }
        ],
        "createdAt": "2022-11-02T23:27:20.096Z",
        "updatedAt": "2022-11-02T23:27:20.096Z",
        "__v": 0
    },
    {
        "_id": "6362fcd8a05a14afa1a59d1e",
        "weekNumber": 15,
        "games": [
            {
                "id": "b32abb73-8268-4f40-aeba-3acf3448bbf1",
                "status": "scheduled",
                "scheduled": "2022-12-16T01:15:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623575",
                "game_type": "regular",
                "venue": {
                    "id": "c6b9e5df-c9e4-434c-b3e6-83928f11cbda",
                    "name": "Lumen Field",
                    "city": "Seattle",
                    "state": "WA",
                    "country": "USA",
                    "zip": "98134",
                    "address": "800 Occidental Avenue South",
                    "capacity": 68000,
                    "surface": "artificial",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:2291",
                    "location": {
                        "lat": "47.595165",
                        "lng": "-122.331650"
                    }
                },
                "home": {
                    "id": "3d08af9e-c767-4f88-a7dc-b920c6d2b4a8",
                    "name": "Seattle Seahawks",
                    "alias": "SEA",
                    "game_number": 14,
                    "sr_id": "sr:competitor:4430"
                },
                "away": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "San Francisco 49ers",
                    "alias": "SF",
                    "game_number": 14,
                    "sr_id": "sr:competitor:4389"
                },
                "broadcast": {
                    "network": "Amazon Prime Video"
                }
            },
            {
                "id": "3ca6a8c4-9865-4fcf-a95d-e8c98904272d",
                "status": "scheduled",
                "scheduled": "2022-12-18T18:00:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623581",
                "game_type": "regular",
                "venue": {
                    "id": "6a72e5ca-33d0-40af-8e6b-b32a4d3d9346",
                    "name": "NRG Stadium",
                    "city": "Houston",
                    "state": "TX",
                    "country": "USA",
                    "zip": "77054",
                    "address": "One Reliant Park",
                    "capacity": 72220,
                    "surface": "artificial",
                    "roof_type": "retractable_dome",
                    "sr_id": "sr:venue:2402",
                    "location": {
                        "lat": "29.684735",
                        "lng": "-95.410725"
                    }
                },
                "home": {
                    "id": "82d2d380-3834-4938-835f-aec541e5ece7",
                    "name": "Houston Texans",
                    "alias": "HOU",
                    "game_number": 14,
                    "sr_id": "sr:competitor:4324"
                },
                "away": {
                    "id": "6680d28d-d4d2-49f6-aace-5292d3ec02c2",
                    "name": "Kansas City Chiefs",
                    "alias": "KC",
                    "game_number": 14,
                    "sr_id": "sr:competitor:4422"
                },
                "broadcast": {
                    "network": "CBS"
                }
            },
            {
                "id": "3d3fafda-7d7c-4ecd-b39a-bebd15511465",
                "status": "flex-schedule",
                "scheduled": "2022-12-18T18:00:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623173",
                "game_type": "regular",
                "venue": {
                    "id": "90c38d91-3774-4f5d-82ca-1c806828219f",
                    "name": "FirstEnergy Stadium",
                    "city": "Cleveland",
                    "state": "OH",
                    "country": "USA",
                    "zip": "44114",
                    "address": "100 Alfred Lerner Way",
                    "capacity": 67895,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8177",
                    "location": {
                        "lat": "41.506054",
                        "lng": "-81.700004"
                    }
                },
                "home": {
                    "id": "d5a2eb42-8065-4174-ab79-0a6fa820e35e",
                    "name": "Cleveland Browns",
                    "alias": "CLE",
                    "game_number": 14,
                    "sr_id": "sr:competitor:4417"
                },
                "away": {
                    "id": "ebd87119-b331-4469-9ea6-d51fe3ce2f1c",
                    "name": "Baltimore Ravens",
                    "alias": "BAL",
                    "game_number": 14,
                    "sr_id": "sr:competitor:4413"
                }
            },
            {
                "id": "5fcb929c-7e70-48a8-a5a6-78498eea2f6b",
                "status": "scheduled",
                "scheduled": "2022-12-18T18:00:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623577",
                "game_type": "regular",
                "venue": {
                    "id": "39be9ed4-3292-49ac-8699-a381de3a4969",
                    "name": "Bank of America Stadium",
                    "city": "Charlotte",
                    "state": "NC",
                    "country": "USA",
                    "zip": "28202",
                    "address": "800 South Mint Street",
                    "capacity": 75419,
                    "surface": "artificial",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8173",
                    "location": {
                        "lat": "35.225937",
                        "lng": "-80.853133"
                    }
                },
                "home": {
                    "id": "f14bf5cc-9a82-4a38-bc15-d39f75ed5314",
                    "name": "Carolina Panthers",
                    "alias": "CAR",
                    "game_number": 14,
                    "sr_id": "sr:competitor:4415"
                },
                "away": {
                    "id": "cb2f9f1f-ac67-424e-9e72-1475cb0ed398",
                    "name": "Pittsburgh Steelers",
                    "alias": "PIT",
                    "game_number": 14,
                    "sr_id": "sr:competitor:4345"
                },
                "broadcast": {
                    "network": "CBS"
                }
            },
            {
                "id": "7c39576e-a060-40d8-8a32-e1a86b5ee7c0",
                "status": "flex-schedule",
                "scheduled": "2022-12-18T18:00:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623179",
                "game_type": "regular",
                "venue": {
                    "id": "7c11bb2d-4a53-4842-b842-0f1c63ed78e9",
                    "name": "FedExField",
                    "city": "Landover",
                    "state": "MD",
                    "country": "USA",
                    "zip": "20785",
                    "address": "1600 FedEx Way",
                    "capacity": 82000,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:6652",
                    "location": {
                        "lat": "38.907724",
                        "lng": "-76.864613"
                    }
                },
                "home": {
                    "id": "22052ff7-c065-42ee-bc8f-c4691c50e624",
                    "name": "Washington Commanders",
                    "alias": "WAS",
                    "game_number": 14,
                    "sr_id": "sr:competitor:4432"
                },
                "away": {
                    "id": "04aa1c9d-66da-489d-b16a-1dee3f2eec4d",
                    "name": "New York Giants",
                    "alias": "NYG",
                    "game_number": 14,
                    "sr_id": "sr:competitor:4426"
                }
            },
            {
                "id": "9256a55f-7380-4adf-b546-8cc730553d7b",
                "status": "scheduled",
                "scheduled": "2022-12-18T18:00:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623585",
                "game_type": "regular",
                "venue": {
                    "id": "5d4c85c7-d84e-4e10-bd6a-8a15ebecca5c",
                    "name": "MetLife Stadium",
                    "city": "East Rutherford",
                    "state": "NJ",
                    "country": "USA",
                    "zip": "07073",
                    "address": "One MetLife Stadium Drive",
                    "capacity": 82500,
                    "surface": "artificial",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:1981",
                    "location": {
                        "lat": "40.813611",
                        "lng": "-74.074444"
                    }
                },
                "home": {
                    "id": "5fee86ae-74ab-4bdd-8416-42a9dd9964f3",
                    "name": "New York Jets",
                    "alias": "NYJ",
                    "game_number": 14,
                    "sr_id": "sr:competitor:4427"
                },
                "away": {
                    "id": "c5a59daa-53a7-4de0-851f-fb12be893e9e",
                    "name": "Detroit Lions",
                    "alias": "DET",
                    "game_number": 14,
                    "sr_id": "sr:competitor:4419"
                },
                "broadcast": {
                    "network": "FOX"
                }
            },
            {
                "id": "931c22e0-7c1b-405b-a1b5-42b5c718c457",
                "status": "flex-schedule",
                "scheduled": "2022-12-18T18:00:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623171",
                "game_type": "regular",
                "venue": {
                    "id": "e9e0828e-37fc-4238-a317-49037577dd55",
                    "name": "Highmark Stadium",
                    "city": "Orchard Park",
                    "state": "NY",
                    "country": "USA",
                    "zip": "14127",
                    "address": "One Bills Drive",
                    "capacity": 71608,
                    "surface": "artificial",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8171",
                    "location": {
                        "lat": "42.773826",
                        "lng": "-78.786589"
                    }
                },
                "home": {
                    "id": "768c92aa-75ff-4a43-bcc0-f2798c2e1724",
                    "name": "Buffalo Bills",
                    "alias": "BUF",
                    "game_number": 14,
                    "sr_id": "sr:competitor:4376"
                },
                "away": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Miami Dolphins",
                    "alias": "MIA",
                    "game_number": 14,
                    "sr_id": "sr:competitor:4287"
                }
            },
            {
                "id": "9b309a87-6279-450f-852c-fae053566b4c",
                "status": "flex-schedule",
                "scheduled": "2022-12-18T18:00:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623175",
                "game_type": "regular",
                "venue": {
                    "id": "f5ff00d4-1ed8-4918-bf73-13d66d510f98",
                    "name": "U.S. Bank Stadium",
                    "city": "Minneapolis",
                    "state": "MN",
                    "country": "USA",
                    "zip": "55415",
                    "address": "900 S 5th Street",
                    "capacity": 66655,
                    "surface": "artificial",
                    "roof_type": "dome",
                    "sr_id": "sr:venue:18423",
                    "location": {
                        "lat": "44.973686",
                        "lng": "-93.257458"
                    }
                },
                "home": {
                    "id": "33405046-04ee-4058-a950-d606f8c30852",
                    "name": "Minnesota Vikings",
                    "alias": "MIN",
                    "game_number": 14,
                    "sr_id": "sr:competitor:4423"
                },
                "away": {
                    "id": "82cf9565-6eb9-4f01-bdbd-5aa0d472fcd9",
                    "name": "Indianapolis Colts",
                    "alias": "IND",
                    "game_number": 14,
                    "sr_id": "sr:competitor:4421"
                }
            },
            {
                "id": "b5d4cc73-6cf6-4257-a3c2-a0fc122f9075",
                "status": "scheduled",
                "scheduled": "2022-12-18T18:00:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623583",
                "game_type": "regular",
                "venue": {
                    "id": "4c5c036d-dd3d-4183-b595-71a43a97560f",
                    "name": "TIAA Bank Field",
                    "city": "Jacksonville",
                    "state": "FL",
                    "country": "USA",
                    "zip": "32202",
                    "address": "One EverBank Field Drive",
                    "capacity": 69132,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8187",
                    "location": {
                        "lat": "30.324027",
                        "lng": "-81.637239"
                    }
                },
                "home": {
                    "id": "f7ddd7fa-0bae-4f90-bc8e-669e4d6cf2de",
                    "name": "Jacksonville Jaguars",
                    "alias": "JAC",
                    "game_number": 14,
                    "sr_id": "sr:competitor:4386"
                },
                "away": {
                    "id": "e627eec7-bbae-4fa4-8e73-8e1d6bc5c060",
                    "name": "Dallas Cowboys",
                    "alias": "DAL",
                    "game_number": 14,
                    "sr_id": "sr:competitor:4392"
                },
                "broadcast": {
                    "network": "FOX"
                }
            },
            {
                "id": "de98e9c5-c5e8-4a25-b8d5-ed2051c452f1",
                "status": "scheduled",
                "scheduled": "2022-12-18T18:00:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623579",
                "game_type": "regular",
                "venue": {
                    "id": "d7866605-5ac6-4b3a-90e8-760cc5a26b75",
                    "name": "Soldier Field",
                    "city": "Chicago",
                    "state": "IL",
                    "country": "USA",
                    "zip": "60605",
                    "address": "1410 South Museum Campus Drive",
                    "capacity": 61500,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:2109",
                    "location": {
                        "lat": "41.862498",
                        "lng": "-87.616979"
                    }
                },
                "home": {
                    "id": "7b112545-38e6-483c-a55c-96cf6ee49cb8",
                    "name": "Chicago Bears",
                    "alias": "CHI",
                    "game_number": 14,
                    "sr_id": "sr:competitor:4391"
                },
                "away": {
                    "id": "386bdbf9-9eea-4869-bb9a-274b0bc66e80",
                    "name": "Philadelphia Eagles",
                    "alias": "PHI",
                    "game_number": 14,
                    "sr_id": "sr:competitor:4428"
                },
                "broadcast": {
                    "network": "FOX"
                }
            },
            {
                "id": "ea517d29-5b31-49b5-8dcb-ab65db0d2b7b",
                "status": "flex-schedule",
                "scheduled": "2022-12-18T18:00:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623177",
                "game_type": "regular",
                "venue": {
                    "id": "3c85d89a-ec66-4983-acd5-1381d6c8673a",
                    "name": "Caesars Superdome",
                    "city": "New Orleans",
                    "state": "LA",
                    "country": "USA",
                    "zip": "70112",
                    "address": "1500 Sugar Bowl Drive",
                    "capacity": 73208,
                    "surface": "artificial",
                    "roof_type": "dome",
                    "sr_id": "sr:venue:8195",
                    "location": {
                        "lat": "29.950928",
                        "lng": "-90.080876"
                    }
                },
                "home": {
                    "id": "0d855753-ea21-4953-89f9-0e20aff9eb73",
                    "name": "New Orleans Saints",
                    "alias": "NO",
                    "game_number": 14,
                    "sr_id": "sr:competitor:4425"
                },
                "away": {
                    "id": "e6aa13a4-0055-48a9-bc41-be28dc106929",
                    "name": "Atlanta Falcons",
                    "alias": "ATL",
                    "game_number": 14,
                    "sr_id": "sr:competitor:4393"
                }
            },
            {
                "id": "ea189422-afff-4730-98d1-e791dd3122b9",
                "status": "scheduled",
                "scheduled": "2022-12-18T21:05:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623587",
                "game_type": "regular",
                "venue": {
                    "id": "6589e61d-ef1e-4e30-91b5-9acd2072b8a0",
                    "name": "Empower Field at Mile High",
                    "city": "Denver",
                    "state": "CO",
                    "country": "USA",
                    "zip": "80204",
                    "address": "1701 Mile High Stadium Circle",
                    "capacity": 76125,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8179",
                    "location": {
                        "lat": "39.743865",
                        "lng": "-105.020158"
                    }
                },
                "home": {
                    "id": "ce92bd47-93d5-4fe9-ada4-0fc681e6caa0",
                    "name": "Denver Broncos",
                    "alias": "DEN",
                    "game_number": 14,
                    "sr_id": "sr:competitor:4418"
                },
                "away": {
                    "id": "de760528-1dc0-416a-a978-b510d20692ff",
                    "name": "Arizona Cardinals",
                    "alias": "ARI",
                    "game_number": 14,
                    "sr_id": "sr:competitor:4412"
                },
                "broadcast": {
                    "network": "FOX"
                }
            },
            {
                "id": "52414295-a998-4b66-80a5-2fdd5c66b264",
                "status": "scheduled",
                "scheduled": "2022-12-18T21:25:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623591",
                "game_type": "regular",
                "venue": {
                    "id": "6fccc39c-80bc-4c81-83d9-2d5a848c8c09",
                    "name": "Raymond James Stadium",
                    "city": "Tampa",
                    "state": "FL",
                    "country": "USA",
                    "zip": "33607",
                    "address": "4201 North Dale Mabry Highway",
                    "capacity": 65890,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8205",
                    "location": {
                        "lat": "27.976211",
                        "lng": "-82.503625"
                    }
                },
                "home": {
                    "id": "4254d319-1bc7-4f81-b4ab-b5e6f3402b69",
                    "name": "Tampa Bay Buccaneers",
                    "alias": "TB",
                    "game_number": 14,
                    "sr_id": "sr:competitor:4388"
                },
                "away": {
                    "id": "ad4ae08f-d808-42d5-a1e6-e9bc4e34d123",
                    "name": "Cincinnati Bengals",
                    "alias": "CIN",
                    "game_number": 14,
                    "sr_id": "sr:competitor:4416"
                },
                "broadcast": {
                    "network": "CBS"
                }
            },
            {
                "id": "96df77c4-50bd-4a7a-a74a-0cca534cd12e",
                "status": "scheduled",
                "scheduled": "2022-12-18T21:25:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623589",
                "game_type": "regular",
                "venue": {
                    "id": "790c1f04-73c6-4f6f-8b1e-78a62260be90",
                    "name": "SoFi Stadium",
                    "city": "Inglewood",
                    "state": "CA",
                    "country": "USA",
                    "zip": "90301",
                    "address": "1000 S Prairie Ave",
                    "capacity": 70240,
                    "surface": "artificial",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:52183",
                    "location": {
                        "lat": "33.953536",
                        "lng": "-118.338734"
                    }
                },
                "home": {
                    "id": "1f6dcffb-9823-43cd-9ff4-e7a8466749b5",
                    "name": "Los Angeles Chargers",
                    "alias": "LAC",
                    "game_number": 14,
                    "sr_id": "sr:competitor:4429"
                },
                "away": {
                    "id": "d26a1ca5-722d-4274-8f97-c92e49c96315",
                    "name": "Tennessee Titans",
                    "alias": "TEN",
                    "game_number": 14,
                    "sr_id": "sr:competitor:367364"
                },
                "broadcast": {
                    "network": "CBS"
                }
            },
            {
                "id": "7d1ec13f-44e5-4525-9a18-586d0f4f5396",
                "status": "scheduled",
                "scheduled": "2022-12-19T01:20:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623593",
                "game_type": "regular",
                "venue": {
                    "id": "53d42601-5dfb-40a7-bd94-da2c1d3a75e4",
                    "name": "Allegiant Stadium",
                    "city": "Las Vegas",
                    "state": "NV",
                    "country": "USA",
                    "zip": "89118",
                    "address": "3333 Al Davis Way",
                    "capacity": 65000,
                    "surface": "turf",
                    "roof_type": "dome",
                    "sr_id": "sr:venue:51543",
                    "location": {
                        "lat": "36.090852",
                        "lng": "-115.183339"
                    }
                },
                "home": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Las Vegas Raiders",
                    "alias": "LV",
                    "game_number": 14,
                    "sr_id": "sr:competitor:4390"
                },
                "away": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "New England Patriots",
                    "alias": "NE",
                    "game_number": 14,
                    "sr_id": "sr:competitor:4424"
                },
                "broadcast": {
                    "network": "NBC"
                }
            },
            {
                "id": "09d5ac59-8fe4-4239-8bcf-3d77284fa471",
                "status": "scheduled",
                "scheduled": "2022-12-20T01:15:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623595",
                "game_type": "regular",
                "venue": {
                    "id": "5a60dd3a-302c-41c6-ab0f-dd335c1103c2",
                    "name": "Lambeau Field",
                    "city": "Green Bay",
                    "state": "WI",
                    "country": "USA",
                    "zip": "54304",
                    "address": "1265 Lombardi Avenue",
                    "capacity": 81435,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8183",
                    "location": {
                        "lat": "44.501357",
                        "lng": "-88.062440"
                    }
                },
                "home": {
                    "id": "a20471b4-a8d9-40c7-95ad-90cc30e46932",
                    "name": "Green Bay Packers",
                    "alias": "GB",
                    "game_number": 14,
                    "sr_id": "sr:competitor:4420"
                },
                "away": {
                    "id": "2eff2a03-54d4-46ba-890e-2bc3925548f3",
                    "name": "Los Angeles Rams",
                    "alias": "LA",
                    "game_number": 14,
                    "sr_id": "sr:competitor:4387"
                },
                "broadcast": {
                    "network": "ESPN",
                    "satellite": "206"
                }
            }
        ],
        "createdAt": "2022-11-02T23:27:20.120Z",
        "updatedAt": "2022-11-02T23:27:20.120Z",
        "__v": 0
    },
    {
        "_id": "6362fcd8a05a14afa1a59d22",
        "weekNumber": 6,
        "games": [
            {
                "id": "b18e5b30-2ced-4697-b86c-398965fb44ad",
                "status": "closed",
                "scheduled": "2022-10-14T00:15:00+00:00",
                "attendance": 61873,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623327",
                "game_type": "regular",
                "duration": "2:51",
                "venue": {
                    "id": "d7866605-5ac6-4b3a-90e8-760cc5a26b75",
                    "name": "Soldier Field",
                    "city": "Chicago",
                    "state": "IL",
                    "country": "USA",
                    "zip": "60605",
                    "address": "1410 South Museum Campus Drive",
                    "capacity": 61500,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:2109",
                    "location": {
                        "lat": "41.862498",
                        "lng": "-87.616979"
                    }
                },
                "home": {
                    "id": "7b112545-38e6-483c-a55c-96cf6ee49cb8",
                    "name": "Chicago Bears",
                    "alias": "CHI",
                    "game_number": 6,
                    "sr_id": "sr:competitor:4391"
                },
                "away": {
                    "id": "22052ff7-c065-42ee-bc8f-c4691c50e624",
                    "name": "Washington Commanders",
                    "alias": "WAS",
                    "game_number": 6,
                    "sr_id": "sr:competitor:4432"
                },
                "broadcast": {
                    "network": "Amazon Prime Video"
                },
                "weather": {
                    "condition": "Partly cloudy",
                    "humidity": 46,
                    "temp": 48,
                    "wind": {
                        "speed": 11,
                        "direction": "W"
                    }
                },
                "scoring": {
                    "home_points": 7,
                    "away_points": 12,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "9a7defcb-7c58-4e2e-a51c-410de038ef20",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 0,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "9341acf7-9137-4033-9056-6ade75b1b933",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 0,
                            "away_points": 3
                        },
                        {
                            "period_type": "quarter",
                            "id": "4fa7ffe4-28d1-44e5-af48-87d02a8e7856",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 7,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "dfb8a4f9-6fd7-4fd9-847a-5a1e65cd2f61",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 0,
                            "away_points": 9
                        }
                    ]
                }
            },
            {
                "id": "0005ea17-2fc9-4b63-9a52-8bc893b4b481",
                "status": "closed",
                "scheduled": "2022-10-16T17:00:00+00:00",
                "attendance": 66100,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623337",
                "game_type": "regular",
                "duration": "3:07",
                "venue": {
                    "id": "50a5c833-1570-4c38-abc7-7914cf87dbde",
                    "name": "Hard Rock Stadium",
                    "city": "Miami Gardens",
                    "state": "FL",
                    "country": "USA",
                    "zip": "33056",
                    "address": "2269 Northwest 199th Street",
                    "capacity": 65326,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:21306",
                    "location": {
                        "lat": "25.958025",
                        "lng": "-80.238724"
                    }
                },
                "home": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Miami Dolphins",
                    "alias": "MIA",
                    "game_number": 6,
                    "sr_id": "sr:competitor:4287"
                },
                "away": {
                    "id": "33405046-04ee-4058-a950-d606f8c30852",
                    "name": "Minnesota Vikings",
                    "alias": "MIN",
                    "game_number": 6,
                    "sr_id": "sr:competitor:4423"
                },
                "broadcast": {
                    "network": "FOX"
                },
                "weather": {
                    "condition": "Partly cloudy",
                    "humidity": 65,
                    "temp": 85,
                    "wind": {
                        "speed": 13,
                        "direction": "E"
                    }
                },
                "scoring": {
                    "home_points": 16,
                    "away_points": 24,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "7966396d-320b-47f7-80dc-26ad00c70149",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 0,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "2e6db88c-7568-4f6e-9088-0ed6bf08e5b8",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 3,
                            "away_points": 10
                        },
                        {
                            "period_type": "quarter",
                            "id": "402d742e-2248-4dd5-9551-58d8d6fb542b",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 0,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "cf35f35b-70ea-4b4f-b6d6-718ce3a5be28",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 13,
                            "away_points": 14
                        }
                    ]
                }
            },
            {
                "id": "28026bf8-209d-470c-98c3-dce2a16141b5",
                "status": "closed",
                "scheduled": "2022-10-16T17:00:00+00:00",
                "attendance": 67431,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623331",
                "game_type": "regular",
                "duration": "3:22",
                "venue": {
                    "id": "90c38d91-3774-4f5d-82ca-1c806828219f",
                    "name": "FirstEnergy Stadium",
                    "city": "Cleveland",
                    "state": "OH",
                    "country": "USA",
                    "zip": "44114",
                    "address": "100 Alfred Lerner Way",
                    "capacity": 67895,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8177",
                    "location": {
                        "lat": "41.506054",
                        "lng": "-81.700004"
                    }
                },
                "home": {
                    "id": "d5a2eb42-8065-4174-ab79-0a6fa820e35e",
                    "name": "Cleveland Browns",
                    "alias": "CLE",
                    "game_number": 6,
                    "sr_id": "sr:competitor:4417"
                },
                "away": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "New England Patriots",
                    "alias": "NE",
                    "game_number": 6,
                    "sr_id": "sr:competitor:4424"
                },
                "broadcast": {
                    "network": "CBS"
                },
                "weather": {
                    "condition": "Sunny",
                    "humidity": 47,
                    "temp": 57,
                    "wind": {
                        "speed": 7,
                        "direction": "SW"
                    }
                },
                "scoring": {
                    "home_points": 15,
                    "away_points": 38,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "a1d24789-65a0-46fb-bea1-1df19e116665",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 3,
                            "away_points": 3
                        },
                        {
                            "period_type": "quarter",
                            "id": "94522b31-2272-4819-8e94-64a019651bb8",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 3,
                            "away_points": 7
                        },
                        {
                            "period_type": "quarter",
                            "id": "e5656fbf-a2a8-4435-9ec8-7ec67ad2fc46",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 0,
                            "away_points": 14
                        },
                        {
                            "period_type": "quarter",
                            "id": "7a0fda1e-f8bb-4f08-be62-900747232927",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 9,
                            "away_points": 14
                        }
                    ]
                }
            },
            {
                "id": "5d16b9f5-4e23-43f2-8803-4929046b3128",
                "status": "closed",
                "scheduled": "2022-10-16T17:00:00+00:00",
                "attendance": 69813,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623329",
                "game_type": "regular",
                "duration": "2:51",
                "venue": {
                    "id": "1f2d393b-2291-4835-a412-0714966ea245",
                    "name": "Mercedes-Benz Stadium",
                    "city": "Atlanta",
                    "state": "GA",
                    "country": "USA",
                    "zip": "30313",
                    "address": "441 Martin Luther King Jr Drive NW",
                    "capacity": 71000,
                    "surface": "artificial",
                    "roof_type": "retractable_dome",
                    "sr_id": "sr:venue:20343",
                    "location": {
                        "lat": "33.757368",
                        "lng": "-84.401008"
                    }
                },
                "home": {
                    "id": "e6aa13a4-0055-48a9-bc41-be28dc106929",
                    "name": "Atlanta Falcons",
                    "alias": "ATL",
                    "game_number": 6,
                    "sr_id": "sr:competitor:4393"
                },
                "away": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "San Francisco 49ers",
                    "alias": "SF",
                    "game_number": 6,
                    "sr_id": "sr:competitor:4389"
                },
                "broadcast": {
                    "network": "FOX"
                },
                "weather": {
                    "condition": "Partly cloudy",
                    "humidity": 35,
                    "temp": 76,
                    "wind": {
                        "speed": 11,
                        "direction": "WSW"
                    }
                },
                "scoring": {
                    "home_points": 28,
                    "away_points": 14,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "381a8ba4-b021-4b74-8e18-eff67828ffd1",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 14,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "bcb9025f-a33b-4965-aaa1-519e15239b54",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 7,
                            "away_points": 14
                        },
                        {
                            "period_type": "quarter",
                            "id": "fd95a50a-7c94-4485-a659-920060046064",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 7,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "864282e2-8e7b-414c-b6f1-2eaed3ee9aa2",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 0,
                            "away_points": 0
                        }
                    ]
                }
            },
            {
                "id": "72f82240-0035-4f1f-8854-68f5b7498c79",
                "status": "closed",
                "scheduled": "2022-10-16T17:00:00+00:00",
                "attendance": 67307,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623343",
                "game_type": "regular",
                "duration": "3:05",
                "venue": {
                    "id": "7349a2e6-0ac9-410b-8bd2-ca58c9f7aa34",
                    "name": "Acrisure Stadium",
                    "city": "Pittsburgh",
                    "state": "PA",
                    "country": "USA",
                    "zip": "15212",
                    "address": "100 Art Rooney Avenue",
                    "capacity": 68400,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8197",
                    "location": {
                        "lat": "40.446653",
                        "lng": "-80.015844"
                    }
                },
                "home": {
                    "id": "cb2f9f1f-ac67-424e-9e72-1475cb0ed398",
                    "name": "Pittsburgh Steelers",
                    "alias": "PIT",
                    "game_number": 6,
                    "sr_id": "sr:competitor:4345"
                },
                "away": {
                    "id": "4254d319-1bc7-4f81-b4ab-b5e6f3402b69",
                    "name": "Tampa Bay Buccaneers",
                    "alias": "TB",
                    "game_number": 6,
                    "sr_id": "sr:competitor:4388"
                },
                "broadcast": {
                    "network": "FOX"
                },
                "weather": {
                    "condition": "Overcast",
                    "humidity": 37,
                    "temp": 58,
                    "wind": {
                        "speed": 12,
                        "direction": "SW"
                    }
                },
                "scoring": {
                    "home_points": 20,
                    "away_points": 18,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "d0d84bac-60fc-4199-bd2c-b82b00413ff1",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 7,
                            "away_points": 3
                        },
                        {
                            "period_type": "quarter",
                            "id": "a63b32fc-3f94-4737-910a-e52b456bd36e",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 3,
                            "away_points": 6
                        },
                        {
                            "period_type": "quarter",
                            "id": "f2a5de99-6401-4880-97ca-74c46527328c",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 3,
                            "away_points": 3
                        },
                        {
                            "period_type": "quarter",
                            "id": "dc3e5259-abe0-43a1-9c36-70d9e056fa49",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 7,
                            "away_points": 6
                        }
                    ]
                }
            },
            {
                "id": "81e7ef41-0a62-496f-b224-6aa1957df6aa",
                "status": "closed",
                "scheduled": "2022-10-16T17:00:00+00:00",
                "attendance": 70004,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623339",
                "game_type": "regular",
                "duration": "2:58",
                "venue": {
                    "id": "3c85d89a-ec66-4983-acd5-1381d6c8673a",
                    "name": "Caesars Superdome",
                    "city": "New Orleans",
                    "state": "LA",
                    "country": "USA",
                    "zip": "70112",
                    "address": "1500 Sugar Bowl Drive",
                    "capacity": 73208,
                    "surface": "artificial",
                    "roof_type": "dome",
                    "sr_id": "sr:venue:8195",
                    "location": {
                        "lat": "29.950928",
                        "lng": "-90.080876"
                    }
                },
                "home": {
                    "id": "0d855753-ea21-4953-89f9-0e20aff9eb73",
                    "name": "New Orleans Saints",
                    "alias": "NO",
                    "game_number": 6,
                    "sr_id": "sr:competitor:4425"
                },
                "away": {
                    "id": "ad4ae08f-d808-42d5-a1e6-e9bc4e34d123",
                    "name": "Cincinnati Bengals",
                    "alias": "CIN",
                    "game_number": 6,
                    "sr_id": "sr:competitor:4416"
                },
                "broadcast": {
                    "network": "CBS"
                },
                "weather": {
                    "condition": "Partly cloudy",
                    "humidity": 82,
                    "temp": 78,
                    "wind": {
                        "speed": 8,
                        "direction": "NNE"
                    }
                },
                "scoring": {
                    "home_points": 26,
                    "away_points": 30,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "504a2a9d-6b72-4703-ac7f-f18338760213",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 7,
                            "away_points": 7
                        },
                        {
                            "period_type": "quarter",
                            "id": "2371c311-a17f-42a9-947c-334e9abe8a7c",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 13,
                            "away_points": 7
                        },
                        {
                            "period_type": "quarter",
                            "id": "278edb15-2084-4dfb-b9c3-73977db03534",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 3,
                            "away_points": 7
                        },
                        {
                            "period_type": "quarter",
                            "id": "0e736aea-076b-4d63-a7b3-de2a4b481cea",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 3,
                            "away_points": 9
                        }
                    ]
                }
            },
            {
                "id": "a62ebedf-c6fd-47e6-b511-ce5e998ac898",
                "status": "closed",
                "scheduled": "2022-10-16T17:00:00+00:00",
                "attendance": 78019,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623341",
                "game_type": "regular",
                "duration": "3:02",
                "venue": {
                    "id": "5d4c85c7-d84e-4e10-bd6a-8a15ebecca5c",
                    "name": "MetLife Stadium",
                    "city": "East Rutherford",
                    "state": "NJ",
                    "country": "USA",
                    "zip": "07073",
                    "address": "One MetLife Stadium Drive",
                    "capacity": 82500,
                    "surface": "artificial",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:1981",
                    "location": {
                        "lat": "40.813611",
                        "lng": "-74.074444"
                    }
                },
                "home": {
                    "id": "04aa1c9d-66da-489d-b16a-1dee3f2eec4d",
                    "name": "New York Giants",
                    "alias": "NYG",
                    "game_number": 6,
                    "sr_id": "sr:competitor:4426"
                },
                "away": {
                    "id": "ebd87119-b331-4469-9ea6-d51fe3ce2f1c",
                    "name": "Baltimore Ravens",
                    "alias": "BAL",
                    "game_number": 6,
                    "sr_id": "sr:competitor:4413"
                },
                "broadcast": {
                    "network": "CBS"
                },
                "weather": {
                    "condition": "Partly cloudy",
                    "humidity": 52,
                    "temp": 61,
                    "wind": {
                        "speed": 4,
                        "direction": "ENE"
                    }
                },
                "scoring": {
                    "home_points": 24,
                    "away_points": 20,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "237625c4-f5f0-4ba5-9175-e910169987b7",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 0,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "9651a71f-3fea-4ed5-96fd-56204e4bc950",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 7,
                            "away_points": 10
                        },
                        {
                            "period_type": "quarter",
                            "id": "0dd0785c-d6b2-4b2a-83e6-ed7c7708528f",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 3,
                            "away_points": 3
                        },
                        {
                            "period_type": "quarter",
                            "id": "30b529dc-3bc5-45c0-86c2-f5b420652f3a",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 14,
                            "away_points": 7
                        }
                    ]
                }
            },
            {
                "id": "ac2edcfb-f5e4-4fbd-ae49-fe424174db0c",
                "status": "closed",
                "scheduled": "2022-10-16T17:00:00+00:00",
                "attendance": 78343,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623333",
                "game_type": "regular",
                "duration": "3:05",
                "venue": {
                    "id": "5a60dd3a-302c-41c6-ab0f-dd335c1103c2",
                    "name": "Lambeau Field",
                    "city": "Green Bay",
                    "state": "WI",
                    "country": "USA",
                    "zip": "54304",
                    "address": "1265 Lombardi Avenue",
                    "capacity": 81435,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8183",
                    "location": {
                        "lat": "44.501357",
                        "lng": "-88.062440"
                    }
                },
                "home": {
                    "id": "a20471b4-a8d9-40c7-95ad-90cc30e46932",
                    "name": "Green Bay Packers",
                    "alias": "GB",
                    "game_number": 6,
                    "sr_id": "sr:competitor:4420"
                },
                "away": {
                    "id": "5fee86ae-74ab-4bdd-8416-42a9dd9964f3",
                    "name": "New York Jets",
                    "alias": "NYJ",
                    "game_number": 6,
                    "sr_id": "sr:competitor:4427"
                },
                "broadcast": {
                    "network": "FOX"
                },
                "weather": {
                    "condition": "Overcast",
                    "humidity": 66,
                    "temp": 49,
                    "wind": {
                        "speed": 7,
                        "direction": "W"
                    }
                },
                "scoring": {
                    "home_points": 10,
                    "away_points": 27,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "87a54bd3-81d0-4f31-97dd-292b81f34cde",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 0,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "2a0d6070-9a97-44f6-a726-7747b09fff8e",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 3,
                            "away_points": 3
                        },
                        {
                            "period_type": "quarter",
                            "id": "25075e91-d5e4-425a-89d1-405097df3013",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 7,
                            "away_points": 14
                        },
                        {
                            "period_type": "quarter",
                            "id": "8edcd06c-60e7-4e84-b9ee-a7923591f5d0",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 0,
                            "away_points": 10
                        }
                    ]
                }
            },
            {
                "id": "f4fb34ba-f863-48af-95f1-c317562087ed",
                "status": "closed",
                "scheduled": "2022-10-16T17:00:00+00:00",
                "attendance": 65749,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623335",
                "game_type": "regular",
                "duration": "3:04",
                "venue": {
                    "id": "6ed18563-53e0-46c2-a91d-12d73a16456d",
                    "name": "Lucas Oil Stadium",
                    "city": "Indianapolis",
                    "state": "IN",
                    "country": "USA",
                    "zip": "46225",
                    "address": "500 South Capitol Avenue",
                    "capacity": 67000,
                    "surface": "artificial",
                    "roof_type": "retractable_dome",
                    "sr_id": "sr:venue:8185",
                    "location": {
                        "lat": "39.760008",
                        "lng": "-86.163906"
                    }
                },
                "home": {
                    "id": "82cf9565-6eb9-4f01-bdbd-5aa0d472fcd9",
                    "name": "Indianapolis Colts",
                    "alias": "IND",
                    "game_number": 6,
                    "sr_id": "sr:competitor:4421"
                },
                "away": {
                    "id": "f7ddd7fa-0bae-4f90-bc8e-669e4d6cf2de",
                    "name": "Jacksonville Jaguars",
                    "alias": "JAC",
                    "game_number": 6,
                    "sr_id": "sr:competitor:4386"
                },
                "broadcast": {
                    "network": "CBS"
                },
                "weather": {
                    "condition": "Sunny",
                    "humidity": 39,
                    "temp": 60,
                    "wind": {
                        "speed": 2,
                        "direction": "WSW"
                    }
                },
                "scoring": {
                    "home_points": 34,
                    "away_points": 27,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "a749612c-ce18-41bd-8ff5-ae73c969c8e0",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 0,
                            "away_points": 7
                        },
                        {
                            "period_type": "quarter",
                            "id": "15b2c3ef-6ee6-4fbc-a097-6c770c8add0f",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 13,
                            "away_points": 7
                        },
                        {
                            "period_type": "quarter",
                            "id": "937a57d9-e02c-4f92-8dc9-fb0fa5c71c8a",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 6,
                            "away_points": 7
                        },
                        {
                            "period_type": "quarter",
                            "id": "3ff7f6f2-da3e-4666-8a59-d41634eb340e",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 15,
                            "away_points": 6
                        }
                    ]
                }
            },
            {
                "id": "6a5922a9-23e8-4c38-b3c4-604d0f97b1b6",
                "status": "closed",
                "scheduled": "2022-10-16T20:05:00+00:00",
                "attendance": 68867,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623347",
                "game_type": "regular",
                "duration": "3:08",
                "venue": {
                    "id": "c6b9e5df-c9e4-434c-b3e6-83928f11cbda",
                    "name": "Lumen Field",
                    "city": "Seattle",
                    "state": "WA",
                    "country": "USA",
                    "zip": "98134",
                    "address": "800 Occidental Avenue South",
                    "capacity": 68000,
                    "surface": "artificial",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:2291",
                    "location": {
                        "lat": "47.595165",
                        "lng": "-122.331650"
                    }
                },
                "home": {
                    "id": "3d08af9e-c767-4f88-a7dc-b920c6d2b4a8",
                    "name": "Seattle Seahawks",
                    "alias": "SEA",
                    "game_number": 6,
                    "sr_id": "sr:competitor:4430"
                },
                "away": {
                    "id": "de760528-1dc0-416a-a978-b510d20692ff",
                    "name": "Arizona Cardinals",
                    "alias": "ARI",
                    "game_number": 6,
                    "sr_id": "sr:competitor:4412"
                },
                "broadcast": {
                    "network": "FOX"
                },
                "weather": {
                    "condition": "Sunny",
                    "humidity": 29,
                    "temp": 80,
                    "wind": {
                        "speed": 6,
                        "direction": "WNW"
                    }
                },
                "scoring": {
                    "home_points": 19,
                    "away_points": 9,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "e518092e-4c2b-4906-ba2a-dd6e9d702b07",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 3,
                            "away_points": 3
                        },
                        {
                            "period_type": "quarter",
                            "id": "eb762630-89b3-4323-a7dc-3ee57eccf8d0",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 6,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "95a0f8af-9d20-44e7-b7d2-8c6d957b940e",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 3,
                            "away_points": 6
                        },
                        {
                            "period_type": "quarter",
                            "id": "3ab18891-0c79-4f90-90d3-1ac8b73ab753",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 7,
                            "away_points": 0
                        }
                    ]
                }
            },
            {
                "id": "fc458b69-5e18-4564-af26-8bc3b58756b8",
                "status": "closed",
                "scheduled": "2022-10-16T20:05:00+00:00",
                "attendance": 71482,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623345",
                "game_type": "regular",
                "duration": "2:58",
                "venue": {
                    "id": "790c1f04-73c6-4f6f-8b1e-78a62260be90",
                    "name": "SoFi Stadium",
                    "city": "Inglewood",
                    "state": "CA",
                    "country": "USA",
                    "zip": "90301",
                    "address": "1000 S Prairie Ave",
                    "capacity": 70240,
                    "surface": "artificial",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:52183",
                    "location": {
                        "lat": "33.953536",
                        "lng": "-118.338734"
                    }
                },
                "home": {
                    "id": "2eff2a03-54d4-46ba-890e-2bc3925548f3",
                    "name": "Los Angeles Rams",
                    "alias": "LA",
                    "game_number": 6,
                    "sr_id": "sr:competitor:4387"
                },
                "away": {
                    "id": "f14bf5cc-9a82-4a38-bc15-d39f75ed5314",
                    "name": "Carolina Panthers",
                    "alias": "CAR",
                    "game_number": 6,
                    "sr_id": "sr:competitor:4415"
                },
                "broadcast": {
                    "network": "FOX"
                },
                "weather": {
                    "condition": "Overcast",
                    "humidity": 66,
                    "temp": 70,
                    "wind": {
                        "speed": 2,
                        "direction": "N"
                    }
                },
                "scoring": {
                    "home_points": 24,
                    "away_points": 10,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "a73cf5ef-600c-42db-a3bf-b0d0dde6c396",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 0,
                            "away_points": 3
                        },
                        {
                            "period_type": "quarter",
                            "id": "cbe4c74e-06e3-4d98-a7cf-d023c8aa6ec3",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 7,
                            "away_points": 7
                        },
                        {
                            "period_type": "quarter",
                            "id": "772558fb-61f8-41bb-88e4-83b74c674f0d",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 10,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "85d39658-8549-4cb2-843c-fbbcadedd645",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 7,
                            "away_points": 0
                        }
                    ]
                }
            },
            {
                "id": "e53d49fb-8a14-4fb7-b6aa-9fa9466a7b4d",
                "status": "closed",
                "scheduled": "2022-10-16T20:25:00+00:00",
                "attendance": 73586,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623349",
                "game_type": "regular",
                "duration": "3:10",
                "venue": {
                    "id": "2ec4c411-dac2-403d-b091-6b6aa4a0a914",
                    "name": "GEHA Field at Arrowhead Stadium",
                    "city": "Kansas City",
                    "state": "MO",
                    "country": "USA",
                    "zip": "64129",
                    "address": "One Arrowhead Drive",
                    "capacity": 76416,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8189",
                    "location": {
                        "lat": "39.049019",
                        "lng": "-94.484140"
                    }
                },
                "home": {
                    "id": "6680d28d-d4d2-49f6-aace-5292d3ec02c2",
                    "name": "Kansas City Chiefs",
                    "alias": "KC",
                    "game_number": 6,
                    "sr_id": "sr:competitor:4422"
                },
                "away": {
                    "id": "768c92aa-75ff-4a43-bcc0-f2798c2e1724",
                    "name": "Buffalo Bills",
                    "alias": "BUF",
                    "game_number": 6,
                    "sr_id": "sr:competitor:4376"
                },
                "broadcast": {
                    "network": "CBS"
                },
                "weather": {
                    "condition": "Partly cloudy",
                    "humidity": 37,
                    "temp": 64,
                    "wind": {
                        "speed": 12,
                        "direction": "NNW"
                    }
                },
                "scoring": {
                    "home_points": 20,
                    "away_points": 24,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "56175b45-4469-4188-a0fa-7848c643555a",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 0,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "80a117ac-0143-4918-8b55-7b06d8c44a86",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 10,
                            "away_points": 10
                        },
                        {
                            "period_type": "quarter",
                            "id": "1bf9de66-2db6-4601-ae16-09a2f522d486",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 7,
                            "away_points": 7
                        },
                        {
                            "period_type": "quarter",
                            "id": "2698fb5c-254d-4d00-8e1e-32ef56239963",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 3,
                            "away_points": 7
                        }
                    ]
                }
            },
            {
                "id": "78419085-6fc4-4b44-b6c7-f3dd1db63a9c",
                "status": "closed",
                "scheduled": "2022-10-17T00:20:00+00:00",
                "attendance": 69879,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623351",
                "game_type": "regular",
                "duration": "3:03",
                "venue": {
                    "id": "4fa8c29c-6626-464c-8540-314ed7535e1b",
                    "name": "Lincoln Financial Field",
                    "city": "Philadelphia",
                    "state": "PA",
                    "country": "USA",
                    "zip": "19148",
                    "address": "1020 Pattison Avenue",
                    "capacity": 69596,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:1833",
                    "location": {
                        "lat": "39.900872",
                        "lng": "-75.167311"
                    }
                },
                "home": {
                    "id": "386bdbf9-9eea-4869-bb9a-274b0bc66e80",
                    "name": "Philadelphia Eagles",
                    "alias": "PHI",
                    "game_number": 6,
                    "sr_id": "sr:competitor:4428"
                },
                "away": {
                    "id": "e627eec7-bbae-4fa4-8e73-8e1d6bc5c060",
                    "name": "Dallas Cowboys",
                    "alias": "DAL",
                    "game_number": 6,
                    "sr_id": "sr:competitor:4392"
                },
                "broadcast": {
                    "network": "NBC"
                },
                "weather": {
                    "condition": "Partly cloudy",
                    "humidity": 58,
                    "temp": 61,
                    "wind": {
                        "speed": 2,
                        "direction": "N"
                    }
                },
                "scoring": {
                    "home_points": 26,
                    "away_points": 17,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "6ac070cf-4ace-4160-848c-84333a7dd01d",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 0,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "a84dd1ee-a41a-47b2-9562-fc0dc8b6d1c4",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 20,
                            "away_points": 3
                        },
                        {
                            "period_type": "quarter",
                            "id": "97907089-210f-4605-b583-805e933f1d4c",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 0,
                            "away_points": 7
                        },
                        {
                            "period_type": "quarter",
                            "id": "05102cc6-b818-468b-b40c-5934eaa40f72",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 6,
                            "away_points": 7
                        }
                    ]
                }
            },
            {
                "id": "1a57777c-7c57-43fa-bf08-66bffc204fd1",
                "status": "closed",
                "scheduled": "2022-10-18T00:15:00+00:00",
                "attendance": 70240,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623353",
                "game_type": "regular",
                "duration": "3:19",
                "venue": {
                    "id": "790c1f04-73c6-4f6f-8b1e-78a62260be90",
                    "name": "SoFi Stadium",
                    "city": "Inglewood",
                    "state": "CA",
                    "country": "USA",
                    "zip": "90301",
                    "address": "1000 S Prairie Ave",
                    "capacity": 70240,
                    "surface": "artificial",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:52183",
                    "location": {
                        "lat": "33.953536",
                        "lng": "-118.338734"
                    }
                },
                "home": {
                    "id": "1f6dcffb-9823-43cd-9ff4-e7a8466749b5",
                    "name": "Los Angeles Chargers",
                    "alias": "LAC",
                    "game_number": 6,
                    "sr_id": "sr:competitor:4429"
                },
                "away": {
                    "id": "ce92bd47-93d5-4fe9-ada4-0fc681e6caa0",
                    "name": "Denver Broncos",
                    "alias": "DEN",
                    "game_number": 6,
                    "sr_id": "sr:competitor:4418"
                },
                "broadcast": {
                    "network": "ESPN",
                    "satellite": "206"
                },
                "weather": {
                    "condition": "Sunny",
                    "humidity": 70,
                    "temp": 69,
                    "wind": {
                        "speed": 9,
                        "direction": "WSW"
                    }
                },
                "scoring": {
                    "home_points": 19,
                    "away_points": 16,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "74f5ba82-9231-41ed-9652-9198edaaf021",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 0,
                            "away_points": 10
                        },
                        {
                            "period_type": "quarter",
                            "id": "8c71b48a-6a1b-4bac-bef3-487e66cc1bbf",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 10,
                            "away_points": 3
                        },
                        {
                            "period_type": "quarter",
                            "id": "9cc118c3-b5aa-48b5-b125-0082e781a471",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 3,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "e153ab42-76b3-4a36-ada0-27d3edb453b1",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 3,
                            "away_points": 3
                        },
                        {
                            "period_type": "overtime",
                            "id": "c2a8f692-af28-473f-810c-01c3f1053cad",
                            "number": 1,
                            "sequence": 5,
                            "home_points": 3,
                            "away_points": 0
                        }
                    ]
                }
            }
        ],
        "createdAt": "2022-11-02T23:27:20.197Z",
        "updatedAt": "2022-11-02T23:27:20.197Z",
        "__v": 0
    },
    {
        "_id": "6362fcd8a05a14afa1a59d24",
        "weekNumber": 8,
        "games": [
            {
                "id": "430e5d4d-d4e8-4c54-a93f-ddb1a97cd7d9",
                "status": "closed",
                "scheduled": "2022-10-28T00:15:00+00:00",
                "attendance": 68912,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623383",
                "game_type": "regular",
                "duration": "3:08",
                "venue": {
                    "id": "6fccc39c-80bc-4c81-83d9-2d5a848c8c09",
                    "name": "Raymond James Stadium",
                    "city": "Tampa",
                    "state": "FL",
                    "country": "USA",
                    "zip": "33607",
                    "address": "4201 North Dale Mabry Highway",
                    "capacity": 65890,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8205",
                    "location": {
                        "lat": "27.976211",
                        "lng": "-82.503625"
                    }
                },
                "home": {
                    "id": "4254d319-1bc7-4f81-b4ab-b5e6f3402b69",
                    "name": "Tampa Bay Buccaneers",
                    "alias": "TB",
                    "game_number": 8,
                    "sr_id": "sr:competitor:4388"
                },
                "away": {
                    "id": "ebd87119-b331-4469-9ea6-d51fe3ce2f1c",
                    "name": "Baltimore Ravens",
                    "alias": "BAL",
                    "game_number": 8,
                    "sr_id": "sr:competitor:4413"
                },
                "broadcast": {
                    "network": "Amazon Prime Video"
                },
                "weather": {
                    "condition": "Partly cloudy",
                    "humidity": 91,
                    "temp": 76,
                    "wind": {
                        "speed": 4,
                        "direction": "S"
                    }
                },
                "scoring": {
                    "home_points": 22,
                    "away_points": 27,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "87e009e0-f124-4911-8b8e-24f47266eab5",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 10,
                            "away_points": 3
                        },
                        {
                            "period_type": "quarter",
                            "id": "0ff046dc-b5f3-496d-98f4-b766f017134c",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 0,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "ed1610b4-5611-443c-920b-3ed18520fba4",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 0,
                            "away_points": 14
                        },
                        {
                            "period_type": "quarter",
                            "id": "32e4c175-f4e7-4325-9fb8-19d3499af95e",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 12,
                            "away_points": 10
                        }
                    ]
                }
            },
            {
                "id": "de5a763a-8dd3-4d4e-84e6-41b9d5917c29",
                "status": "closed",
                "scheduled": "2022-10-30T13:30:00+00:00",
                "attendance": 86215,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33498789",
                "game_type": "regular",
                "duration": "2:58",
                "venue": {
                    "id": "ddaebc21-35aa-4f00-bef6-3f0bc7e76f70",
                    "name": "Wembley Stadium",
                    "city": "London",
                    "country": "GBR",
                    "zip": "HA9 0WS",
                    "address": "Wembley Stadium",
                    "capacity": 90000,
                    "surface": "turf",
                    "roof_type": "retractable_dome",
                    "sr_id": "sr:venue:8"
                },
                "home": {
                    "id": "f7ddd7fa-0bae-4f90-bc8e-669e4d6cf2de",
                    "name": "Jacksonville Jaguars",
                    "alias": "JAC",
                    "game_number": 8,
                    "sr_id": "sr:competitor:4386"
                },
                "away": {
                    "id": "ce92bd47-93d5-4fe9-ada4-0fc681e6caa0",
                    "name": "Denver Broncos",
                    "alias": "DEN",
                    "game_number": 8,
                    "sr_id": "sr:competitor:4418"
                },
                "broadcast": {
                    "network": "ESPN+"
                },
                "weather": {
                    "condition": "Partly cloudy",
                    "humidity": 77,
                    "temp": 61,
                    "wind": {
                        "speed": 9,
                        "direction": "SSW"
                    }
                },
                "scoring": {
                    "home_points": 17,
                    "away_points": 21,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "10d4ae72-744e-467f-bfa7-abdd06bd88a8",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 7,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "e8084649-ec9c-4d01-a509-9caa9137a1b3",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 3,
                            "away_points": 7
                        },
                        {
                            "period_type": "quarter",
                            "id": "ebcd242a-0b73-4490-a6e6-8bf15c6136aa",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 0,
                            "away_points": 7
                        },
                        {
                            "period_type": "quarter",
                            "id": "e26e4f35-ae4a-431e-b50a-15d3e5da0cf4",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 7,
                            "away_points": 7
                        }
                    ]
                }
            },
            {
                "id": "02211cd0-5ad9-4b1d-818c-20817f18484f",
                "status": "closed",
                "scheduled": "2022-10-30T17:00:00+00:00",
                "attendance": 66742,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623391",
                "game_type": "regular",
                "duration": "3:26",
                "venue": {
                    "id": "f5ff00d4-1ed8-4918-bf73-13d66d510f98",
                    "name": "U.S. Bank Stadium",
                    "city": "Minneapolis",
                    "state": "MN",
                    "country": "USA",
                    "zip": "55415",
                    "address": "900 S 5th Street",
                    "capacity": 66655,
                    "surface": "artificial",
                    "roof_type": "dome",
                    "sr_id": "sr:venue:18423",
                    "location": {
                        "lat": "44.973686",
                        "lng": "-93.257458"
                    }
                },
                "home": {
                    "id": "33405046-04ee-4058-a950-d606f8c30852",
                    "name": "Minnesota Vikings",
                    "alias": "MIN",
                    "game_number": 7,
                    "sr_id": "sr:competitor:4423"
                },
                "away": {
                    "id": "de760528-1dc0-416a-a978-b510d20692ff",
                    "name": "Arizona Cardinals",
                    "alias": "ARI",
                    "game_number": 8,
                    "sr_id": "sr:competitor:4412"
                },
                "broadcast": {
                    "network": "FOX"
                },
                "weather": {
                    "condition": "Sunny",
                    "humidity": 59,
                    "temp": 53,
                    "wind": {
                        "speed": 4,
                        "direction": "WNW"
                    }
                },
                "scoring": {
                    "home_points": 34,
                    "away_points": 26,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "e9ccb962-c94b-4e74-a566-a144f1472960",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 7,
                            "away_points": 3
                        },
                        {
                            "period_type": "quarter",
                            "id": "f29dc41a-8710-448a-a96c-4a76a7e7e000",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 7,
                            "away_points": 7
                        },
                        {
                            "period_type": "quarter",
                            "id": "77485515-4f42-47f0-a3ae-1b1dd4d3c96a",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 14,
                            "away_points": 13
                        },
                        {
                            "period_type": "quarter",
                            "id": "91b5b741-5329-45dd-8455-bea7d708105a",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 6,
                            "away_points": 3
                        }
                    ]
                }
            },
            {
                "id": "236c72f3-e4a8-4f4b-a469-8a057a1d32db",
                "status": "closed",
                "scheduled": "2022-10-30T17:00:00+00:00",
                "attendance": 61447,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623389",
                "game_type": "regular",
                "duration": "2:50",
                "venue": {
                    "id": "6e3bcf22-277d-4c06-b019-62aded51654f",
                    "name": "Ford Field",
                    "city": "Detroit",
                    "state": "MI",
                    "country": "USA",
                    "zip": "48226",
                    "address": "2000 Brush Street",
                    "capacity": 65000,
                    "surface": "artificial",
                    "roof_type": "dome",
                    "sr_id": "sr:venue:8181",
                    "location": {
                        "lat": "42.339958",
                        "lng": "-83.045636"
                    }
                },
                "home": {
                    "id": "c5a59daa-53a7-4de0-851f-fb12be893e9e",
                    "name": "Detroit Lions",
                    "alias": "DET",
                    "game_number": 7,
                    "sr_id": "sr:competitor:4419"
                },
                "away": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Miami Dolphins",
                    "alias": "MIA",
                    "game_number": 8,
                    "sr_id": "sr:competitor:4287"
                },
                "broadcast": {
                    "network": "CBS"
                },
                "weather": {
                    "condition": "Sunny",
                    "humidity": 84,
                    "temp": 53,
                    "wind": {
                        "speed": 2,
                        "direction": "N"
                    }
                },
                "scoring": {
                    "home_points": 27,
                    "away_points": 31,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "4d317c22-faf0-4c49-96eb-41a1055cb6de",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 14,
                            "away_points": 7
                        },
                        {
                            "period_type": "quarter",
                            "id": "b74da00f-ca83-4fdb-83bb-ade068b911f1",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 13,
                            "away_points": 10
                        },
                        {
                            "period_type": "quarter",
                            "id": "cb59bf65-7bf4-47b8-8ee5-71cd35eaca40",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 0,
                            "away_points": 14
                        },
                        {
                            "period_type": "quarter",
                            "id": "032af06c-2449-4a23-bd69-447b8af77152",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 0,
                            "away_points": 0
                        }
                    ]
                }
            },
            {
                "id": "32c7d6d0-5a74-4f14-af43-1337acc4d8e4",
                "status": "closed",
                "scheduled": "2022-10-30T17:00:00+00:00",
                "attendance": 93767,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623387",
                "game_type": "regular",
                "duration": "3:07",
                "venue": {
                    "id": "1e84213a-ff1f-4c9d-a003-8ee782b25a40",
                    "name": "AT&T Stadium",
                    "city": "Arlington",
                    "state": "TX",
                    "country": "USA",
                    "zip": "76011",
                    "address": "One Legends Way",
                    "capacity": 80000,
                    "surface": "artificial",
                    "roof_type": "retractable_dome",
                    "sr_id": "sr:venue:6650",
                    "location": {
                        "lat": "32.747778",
                        "lng": "-97.092778"
                    }
                },
                "home": {
                    "id": "e627eec7-bbae-4fa4-8e73-8e1d6bc5c060",
                    "name": "Dallas Cowboys",
                    "alias": "DAL",
                    "game_number": 8,
                    "sr_id": "sr:competitor:4392"
                },
                "away": {
                    "id": "7b112545-38e6-483c-a55c-96cf6ee49cb8",
                    "name": "Chicago Bears",
                    "alias": "CHI",
                    "game_number": 8,
                    "sr_id": "sr:competitor:4391"
                },
                "broadcast": {
                    "network": "FOX"
                },
                "weather": {
                    "condition": "Partly cloudy",
                    "humidity": 68,
                    "temp": 64,
                    "wind": {
                        "speed": 2,
                        "direction": "NW"
                    }
                },
                "scoring": {
                    "home_points": 49,
                    "away_points": 29,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "6c058267-56f6-48c1-be61-beac55d04df6",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 14,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "76bc16e3-bc73-4fd6-87ac-701477a1f1d7",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 14,
                            "away_points": 17
                        },
                        {
                            "period_type": "quarter",
                            "id": "ed1aa506-7908-4887-87c4-145d7cfa5b18",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 14,
                            "away_points": 6
                        },
                        {
                            "period_type": "quarter",
                            "id": "da419ab0-ad78-48e8-98ee-d41e39d2ab4f",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 7,
                            "away_points": 6
                        }
                    ]
                }
            },
            {
                "id": "67f337fc-6465-4dd9-8bdd-2a154b70534b",
                "status": "closed",
                "scheduled": "2022-10-30T17:00:00+00:00",
                "attendance": 70009,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623393",
                "game_type": "regular",
                "duration": "2:46",
                "venue": {
                    "id": "3c85d89a-ec66-4983-acd5-1381d6c8673a",
                    "name": "Caesars Superdome",
                    "city": "New Orleans",
                    "state": "LA",
                    "country": "USA",
                    "zip": "70112",
                    "address": "1500 Sugar Bowl Drive",
                    "capacity": 73208,
                    "surface": "artificial",
                    "roof_type": "dome",
                    "sr_id": "sr:venue:8195",
                    "location": {
                        "lat": "29.950928",
                        "lng": "-90.080876"
                    }
                },
                "home": {
                    "id": "0d855753-ea21-4953-89f9-0e20aff9eb73",
                    "name": "New Orleans Saints",
                    "alias": "NO",
                    "game_number": 8,
                    "sr_id": "sr:competitor:4425"
                },
                "away": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Las Vegas Raiders",
                    "alias": "LV",
                    "game_number": 7,
                    "sr_id": "sr:competitor:4390"
                },
                "broadcast": {
                    "network": "CBS"
                },
                "weather": {
                    "condition": "Partly cloudy",
                    "humidity": 73,
                    "temp": 67,
                    "wind": {
                        "speed": 4,
                        "direction": "W"
                    }
                },
                "scoring": {
                    "home_points": 24,
                    "away_points": 0,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "25930a58-8749-44f1-94a0-c165e659689e",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 7,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "550b80e0-c575-4ff8-9dd5-452683f7ae12",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 10,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "f3565ca5-231a-4e22-b24b-702dc7b9b22a",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 7,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "e582c969-8829-42d9-84d7-8fccff9bf162",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 0,
                            "away_points": 0
                        }
                    ]
                }
            },
            {
                "id": "c88b342c-fe51-48d2-992e-a4e21a7de71a",
                "status": "closed",
                "scheduled": "2022-10-30T17:00:00+00:00",
                "attendance": 68996,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623385",
                "game_type": "regular",
                "duration": "3:39",
                "venue": {
                    "id": "1f2d393b-2291-4835-a412-0714966ea245",
                    "name": "Mercedes-Benz Stadium",
                    "city": "Atlanta",
                    "state": "GA",
                    "country": "USA",
                    "zip": "30313",
                    "address": "441 Martin Luther King Jr Drive NW",
                    "capacity": 71000,
                    "surface": "artificial",
                    "roof_type": "retractable_dome",
                    "sr_id": "sr:venue:20343",
                    "location": {
                        "lat": "33.757368",
                        "lng": "-84.401008"
                    }
                },
                "home": {
                    "id": "e6aa13a4-0055-48a9-bc41-be28dc106929",
                    "name": "Atlanta Falcons",
                    "alias": "ATL",
                    "game_number": 8,
                    "sr_id": "sr:competitor:4393"
                },
                "away": {
                    "id": "f14bf5cc-9a82-4a38-bc15-d39f75ed5314",
                    "name": "Carolina Panthers",
                    "alias": "CAR",
                    "game_number": 8,
                    "sr_id": "sr:competitor:4415"
                },
                "broadcast": {
                    "network": "FOX"
                },
                "weather": {
                    "condition": "Overcast",
                    "humidity": 93,
                    "temp": 59,
                    "wind": {
                        "speed": 7,
                        "direction": "E"
                    }
                },
                "scoring": {
                    "home_points": 37,
                    "away_points": 34,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "5f5ce705-2dde-474d-a063-af7a1baa486c",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 0,
                            "away_points": 3
                        },
                        {
                            "period_type": "quarter",
                            "id": "bacdad48-ff95-4b47-9c07-74f1c21634c1",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 14,
                            "away_points": 7
                        },
                        {
                            "period_type": "quarter",
                            "id": "20e32d90-9182-4731-b2e2-a0d2843b2834",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 7,
                            "away_points": 3
                        },
                        {
                            "period_type": "quarter",
                            "id": "a1303c90-7274-4b1e-bd84-b65ebe7fda3e",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 13,
                            "away_points": 21
                        },
                        {
                            "period_type": "overtime",
                            "id": "9604b36e-8430-4555-9914-ddfbb4cc63cd",
                            "number": 1,
                            "sequence": 5,
                            "home_points": 3,
                            "away_points": 0
                        }
                    ]
                }
            },
            {
                "id": "d5e3b9a0-9f28-439e-bd89-2b87eee439b6",
                "status": "closed",
                "scheduled": "2022-10-30T17:00:00+00:00",
                "attendance": 82823,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623395",
                "game_type": "regular",
                "duration": "3:01",
                "venue": {
                    "id": "5d4c85c7-d84e-4e10-bd6a-8a15ebecca5c",
                    "name": "MetLife Stadium",
                    "city": "East Rutherford",
                    "state": "NJ",
                    "country": "USA",
                    "zip": "07073",
                    "address": "One MetLife Stadium Drive",
                    "capacity": 82500,
                    "surface": "artificial",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:1981",
                    "location": {
                        "lat": "40.813611",
                        "lng": "-74.074444"
                    }
                },
                "home": {
                    "id": "5fee86ae-74ab-4bdd-8416-42a9dd9964f3",
                    "name": "New York Jets",
                    "alias": "NYJ",
                    "game_number": 8,
                    "sr_id": "sr:competitor:4427"
                },
                "away": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "New England Patriots",
                    "alias": "NE",
                    "game_number": 8,
                    "sr_id": "sr:competitor:4424"
                },
                "broadcast": {
                    "network": "CBS"
                },
                "weather": {
                    "condition": "Sunny",
                    "humidity": 39,
                    "temp": 57,
                    "wind": {
                        "speed": 2,
                        "direction": "N"
                    }
                },
                "scoring": {
                    "home_points": 17,
                    "away_points": 22,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "06896b89-2eef-4c5d-843d-fa83084a4421",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 3,
                            "away_points": 3
                        },
                        {
                            "period_type": "quarter",
                            "id": "c54059d9-f2e7-49af-baa1-8e18452f4f82",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 7,
                            "away_points": 3
                        },
                        {
                            "period_type": "quarter",
                            "id": "abe31527-ddb5-496c-b80e-a5e3283361a2",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 0,
                            "away_points": 13
                        },
                        {
                            "period_type": "quarter",
                            "id": "c8a18ec9-6c29-4718-89dc-fa5815282b23",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 7,
                            "away_points": 3
                        }
                    ]
                }
            },
            {
                "id": "ed19500a-c5bf-4f38-89e1-291cb7e20ec9",
                "status": "closed",
                "scheduled": "2022-10-30T17:00:00+00:00",
                "attendance": 69879,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623397",
                "game_type": "regular",
                "duration": "2:54",
                "venue": {
                    "id": "4fa8c29c-6626-464c-8540-314ed7535e1b",
                    "name": "Lincoln Financial Field",
                    "city": "Philadelphia",
                    "state": "PA",
                    "country": "USA",
                    "zip": "19148",
                    "address": "1020 Pattison Avenue",
                    "capacity": 69596,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:1833",
                    "location": {
                        "lat": "39.900872",
                        "lng": "-75.167311"
                    }
                },
                "home": {
                    "id": "386bdbf9-9eea-4869-bb9a-274b0bc66e80",
                    "name": "Philadelphia Eagles",
                    "alias": "PHI",
                    "game_number": 7,
                    "sr_id": "sr:competitor:4428"
                },
                "away": {
                    "id": "cb2f9f1f-ac67-424e-9e72-1475cb0ed398",
                    "name": "Pittsburgh Steelers",
                    "alias": "PIT",
                    "game_number": 8,
                    "sr_id": "sr:competitor:4345"
                },
                "broadcast": {
                    "network": "CBS"
                },
                "weather": {
                    "condition": "Partly cloudy",
                    "humidity": 47,
                    "temp": 60,
                    "wind": {
                        "speed": 2,
                        "direction": "N"
                    }
                },
                "scoring": {
                    "home_points": 35,
                    "away_points": 13,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "16abd140-7aab-4716-aab2-9c750f014add",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 7,
                            "away_points": 7
                        },
                        {
                            "period_type": "quarter",
                            "id": "d4f1a313-0f83-464c-8da5-f4c90eaba299",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 14,
                            "away_points": 3
                        },
                        {
                            "period_type": "quarter",
                            "id": "51684354-1fb7-42ec-86d1-0826981d748d",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 7,
                            "away_points": 3
                        },
                        {
                            "period_type": "quarter",
                            "id": "0d7d9109-9e2c-4e17-bf55-5e0971255075",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 7,
                            "away_points": 0
                        }
                    ]
                }
            },
            {
                "id": "40a19cc9-bc8c-4ac4-b588-28d8ee87d29a",
                "status": "closed",
                "scheduled": "2022-10-30T20:05:00+00:00",
                "attendance": 68467,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623399",
                "game_type": "regular",
                "duration": "2:51",
                "venue": {
                    "id": "6a72e5ca-33d0-40af-8e6b-b32a4d3d9346",
                    "name": "NRG Stadium",
                    "city": "Houston",
                    "state": "TX",
                    "country": "USA",
                    "zip": "77054",
                    "address": "One Reliant Park",
                    "capacity": 72220,
                    "surface": "artificial",
                    "roof_type": "retractable_dome",
                    "sr_id": "sr:venue:2402",
                    "location": {
                        "lat": "29.684735",
                        "lng": "-95.410725"
                    }
                },
                "home": {
                    "id": "82d2d380-3834-4938-835f-aec541e5ece7",
                    "name": "Houston Texans",
                    "alias": "HOU",
                    "game_number": 7,
                    "sr_id": "sr:competitor:4324"
                },
                "away": {
                    "id": "d26a1ca5-722d-4274-8f97-c92e49c96315",
                    "name": "Tennessee Titans",
                    "alias": "TEN",
                    "game_number": 7,
                    "sr_id": "sr:competitor:367364"
                },
                "broadcast": {
                    "network": "CBS"
                },
                "weather": {
                    "condition": "Partly cloudy",
                    "humidity": 47,
                    "temp": 75,
                    "wind": {
                        "speed": 12,
                        "direction": "WSW"
                    }
                },
                "scoring": {
                    "home_points": 10,
                    "away_points": 17,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "5e77eafd-c347-43f8-b796-7c32d5efc9cf",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 0,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "8199e615-a4be-4729-b900-ed97d182d2b0",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 3,
                            "away_points": 7
                        },
                        {
                            "period_type": "quarter",
                            "id": "be3aba75-9e72-48cb-a288-a1bfb3eeafae",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 0,
                            "away_points": 7
                        },
                        {
                            "period_type": "quarter",
                            "id": "bf1aa451-2507-4c54-8197-97918f3e3581",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 7,
                            "away_points": 3
                        }
                    ]
                }
            },
            {
                "id": "35aedbae-936a-47ab-8113-17c69082a9eb",
                "status": "closed",
                "scheduled": "2022-10-30T20:25:00+00:00",
                "attendance": 68921,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623405",
                "game_type": "regular",
                "duration": "3:01",
                "venue": {
                    "id": "c6b9e5df-c9e4-434c-b3e6-83928f11cbda",
                    "name": "Lumen Field",
                    "city": "Seattle",
                    "state": "WA",
                    "country": "USA",
                    "zip": "98134",
                    "address": "800 Occidental Avenue South",
                    "capacity": 68000,
                    "surface": "artificial",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:2291",
                    "location": {
                        "lat": "47.595165",
                        "lng": "-122.331650"
                    }
                },
                "home": {
                    "id": "3d08af9e-c767-4f88-a7dc-b920c6d2b4a8",
                    "name": "Seattle Seahawks",
                    "alias": "SEA",
                    "game_number": 8,
                    "sr_id": "sr:competitor:4430"
                },
                "away": {
                    "id": "04aa1c9d-66da-489d-b16a-1dee3f2eec4d",
                    "name": "New York Giants",
                    "alias": "NYG",
                    "game_number": 8,
                    "sr_id": "sr:competitor:4426"
                },
                "broadcast": {
                    "network": "FOX"
                },
                "weather": {
                    "condition": "Overcast",
                    "humidity": 83,
                    "temp": 54,
                    "wind": {
                        "speed": 8,
                        "direction": "SSW"
                    }
                },
                "scoring": {
                    "home_points": 27,
                    "away_points": 13,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "7673ca13-883c-445a-a4d4-e082065961f1",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 0,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "097eda3e-655b-4761-b20f-0f1b2790bec0",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 10,
                            "away_points": 7
                        },
                        {
                            "period_type": "quarter",
                            "id": "8fbe2130-f437-40d8-a61d-771dabccbbae",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 3,
                            "away_points": 3
                        },
                        {
                            "period_type": "quarter",
                            "id": "2ea4ba5e-895b-481d-b0b6-b6b4829b1f33",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 14,
                            "away_points": 3
                        }
                    ]
                }
            },
            {
                "id": "37e27f71-bc52-436d-88d1-d55efe0771fd",
                "status": "closed",
                "scheduled": "2022-10-30T20:25:00+00:00",
                "attendance": 73505,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623403",
                "game_type": "regular",
                "duration": "2:45",
                "venue": {
                    "id": "790c1f04-73c6-4f6f-8b1e-78a62260be90",
                    "name": "SoFi Stadium",
                    "city": "Inglewood",
                    "state": "CA",
                    "country": "USA",
                    "zip": "90301",
                    "address": "1000 S Prairie Ave",
                    "capacity": 70240,
                    "surface": "artificial",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:52183",
                    "location": {
                        "lat": "33.953536",
                        "lng": "-118.338734"
                    }
                },
                "home": {
                    "id": "2eff2a03-54d4-46ba-890e-2bc3925548f3",
                    "name": "Los Angeles Rams",
                    "alias": "LA",
                    "game_number": 7,
                    "sr_id": "sr:competitor:4387"
                },
                "away": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "San Francisco 49ers",
                    "alias": "SF",
                    "game_number": 8,
                    "sr_id": "sr:competitor:4389"
                },
                "broadcast": {
                    "network": "FOX"
                },
                "weather": {
                    "condition": "Sunny",
                    "humidity": 50,
                    "temp": 76,
                    "wind": {
                        "speed": 8,
                        "direction": "W"
                    }
                },
                "scoring": {
                    "home_points": 14,
                    "away_points": 31,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "be81a92b-08c0-4650-b9b3-f1b27bba68a8",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 7,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "48f17035-73c7-4ba3-adfa-4c8e4958bcdb",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 7,
                            "away_points": 10
                        },
                        {
                            "period_type": "quarter",
                            "id": "b2427d2a-72fa-4ad3-91d7-23c50bb04368",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 0,
                            "away_points": 7
                        },
                        {
                            "period_type": "quarter",
                            "id": "50fe13df-9022-43f2-9c5e-c08e4aef4564",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 0,
                            "away_points": 14
                        }
                    ]
                }
            },
            {
                "id": "c1f26d78-9b4c-421c-9787-093471339913",
                "status": "closed",
                "scheduled": "2022-10-30T20:25:00+00:00",
                "attendance": 65515,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623401",
                "game_type": "regular",
                "duration": "2:50",
                "venue": {
                    "id": "6ed18563-53e0-46c2-a91d-12d73a16456d",
                    "name": "Lucas Oil Stadium",
                    "city": "Indianapolis",
                    "state": "IN",
                    "country": "USA",
                    "zip": "46225",
                    "address": "500 South Capitol Avenue",
                    "capacity": 67000,
                    "surface": "artificial",
                    "roof_type": "retractable_dome",
                    "sr_id": "sr:venue:8185",
                    "location": {
                        "lat": "39.760008",
                        "lng": "-86.163906"
                    }
                },
                "home": {
                    "id": "82cf9565-6eb9-4f01-bdbd-5aa0d472fcd9",
                    "name": "Indianapolis Colts",
                    "alias": "IND",
                    "game_number": 8,
                    "sr_id": "sr:competitor:4421"
                },
                "away": {
                    "id": "22052ff7-c065-42ee-bc8f-c4691c50e624",
                    "name": "Washington Commanders",
                    "alias": "WAS",
                    "game_number": 8,
                    "sr_id": "sr:competitor:4432"
                },
                "broadcast": {
                    "network": "FOX"
                },
                "weather": {
                    "condition": "Overcast",
                    "humidity": 93,
                    "temp": 57,
                    "wind": {
                        "speed": 9,
                        "direction": "SE"
                    }
                },
                "scoring": {
                    "home_points": 16,
                    "away_points": 17,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "0c11bc1e-f798-4147-ac38-07aeca6e2447",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 0,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "161f2edc-d9d0-4d0c-aeb6-c76084e9b7ad",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 3,
                            "away_points": 7
                        },
                        {
                            "period_type": "quarter",
                            "id": "4a607132-4221-4f4d-83db-a300d4a6d214",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 3,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "6def9fb4-aad6-408e-b3dd-3ccefaee6180",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 10,
                            "away_points": 10
                        }
                    ]
                }
            },
            {
                "id": "58f33c2e-85e9-4210-af03-17a576e2ab9b",
                "status": "closed",
                "scheduled": "2022-10-31T00:20:00+00:00",
                "attendance": 70863,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623407",
                "game_type": "regular",
                "duration": "3:04",
                "venue": {
                    "id": "e9e0828e-37fc-4238-a317-49037577dd55",
                    "name": "Highmark Stadium",
                    "city": "Orchard Park",
                    "state": "NY",
                    "country": "USA",
                    "zip": "14127",
                    "address": "One Bills Drive",
                    "capacity": 71608,
                    "surface": "artificial",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8171",
                    "location": {
                        "lat": "42.773826",
                        "lng": "-78.786589"
                    }
                },
                "home": {
                    "id": "768c92aa-75ff-4a43-bcc0-f2798c2e1724",
                    "name": "Buffalo Bills",
                    "alias": "BUF",
                    "game_number": 7,
                    "sr_id": "sr:competitor:4376"
                },
                "away": {
                    "id": "a20471b4-a8d9-40c7-95ad-90cc30e46932",
                    "name": "Green Bay Packers",
                    "alias": "GB",
                    "game_number": 8,
                    "sr_id": "sr:competitor:4420"
                },
                "broadcast": {
                    "network": "NBC"
                },
                "weather": {
                    "condition": "Partly cloudy",
                    "humidity": 47,
                    "temp": 54,
                    "wind": {
                        "speed": 4,
                        "direction": "ESE"
                    }
                },
                "scoring": {
                    "home_points": 27,
                    "away_points": 17,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "9d0ea5f4-c89b-4b5f-9c34-d798027c0b52",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 7,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "869fe413-b006-42ed-b0da-2edeab30d2ab",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 17,
                            "away_points": 7
                        },
                        {
                            "period_type": "quarter",
                            "id": "57301fe4-9086-409d-af7a-5cb495306da4",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 3,
                            "away_points": 3
                        },
                        {
                            "period_type": "quarter",
                            "id": "ee019af5-8ae1-4074-b2fc-d82c1e48b431",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 0,
                            "away_points": 7
                        }
                    ]
                }
            },
            {
                "id": "f5f0db8e-7900-4d38-8d94-245a43054141",
                "status": "closed",
                "scheduled": "2022-11-01T00:15:00+00:00",
                "attendance": 67431,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623409",
                "game_type": "regular",
                "duration": "2:52",
                "venue": {
                    "id": "90c38d91-3774-4f5d-82ca-1c806828219f",
                    "name": "FirstEnergy Stadium",
                    "city": "Cleveland",
                    "state": "OH",
                    "country": "USA",
                    "zip": "44114",
                    "address": "100 Alfred Lerner Way",
                    "capacity": 67895,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8177",
                    "location": {
                        "lat": "41.506054",
                        "lng": "-81.700004"
                    }
                },
                "home": {
                    "id": "d5a2eb42-8065-4174-ab79-0a6fa820e35e",
                    "name": "Cleveland Browns",
                    "alias": "CLE",
                    "game_number": 8,
                    "sr_id": "sr:competitor:4417"
                },
                "away": {
                    "id": "ad4ae08f-d808-42d5-a1e6-e9bc4e34d123",
                    "name": "Cincinnati Bengals",
                    "alias": "CIN",
                    "game_number": 8,
                    "sr_id": "sr:competitor:4416"
                },
                "broadcast": {
                    "network": "ESPN",
                    "satellite": "206"
                },
                "weather": {
                    "condition": "Overcast",
                    "humidity": 68,
                    "temp": 66,
                    "wind": {
                        "speed": 9,
                        "direction": "S"
                    }
                },
                "scoring": {
                    "home_points": 32,
                    "away_points": 13,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "d626845c-d1cd-4144-b0d3-d52b83ae2b4c",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 0,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "fce0e93b-fa43-4c0d-9b8d-d12bd3ce6903",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 11,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "87e6ffaf-7640-46ae-8432-71a12b63a7e3",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 14,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "fec2b494-4bde-49c0-8f90-2c66c3a6d8c2",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 7,
                            "away_points": 13
                        }
                    ]
                }
            }
        ],
        "createdAt": "2022-11-02T23:27:20.259Z",
        "updatedAt": "2022-11-02T23:27:20.259Z",
        "__v": 0
    },
    {
        "_id": "6362fcd8a05a14afa1a59d18",
        "weekNumber": 3,
        "games": [
            {
                "id": "cf7291ef-cb13-4d5d-882e-0221330aafeb",
                "status": "closed",
                "scheduled": "2022-09-23T00:15:00+00:00",
                "attendance": 67431,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623235",
                "game_type": "regular",
                "duration": "3:10",
                "venue": {
                    "id": "90c38d91-3774-4f5d-82ca-1c806828219f",
                    "name": "FirstEnergy Stadium",
                    "city": "Cleveland",
                    "state": "OH",
                    "country": "USA",
                    "zip": "44114",
                    "address": "100 Alfred Lerner Way",
                    "capacity": 67895,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8177",
                    "location": {
                        "lat": "41.506054",
                        "lng": "-81.700004"
                    }
                },
                "home": {
                    "id": "d5a2eb42-8065-4174-ab79-0a6fa820e35e",
                    "name": "Cleveland Browns",
                    "alias": "CLE",
                    "game_number": 3,
                    "sr_id": "sr:competitor:4417"
                },
                "away": {
                    "id": "cb2f9f1f-ac67-424e-9e72-1475cb0ed398",
                    "name": "Pittsburgh Steelers",
                    "alias": "PIT",
                    "game_number": 3,
                    "sr_id": "sr:competitor:4345"
                },
                "broadcast": {
                    "network": "Amazon Prime Video"
                },
                "weather": {
                    "condition": "Partly cloudy",
                    "humidity": 48,
                    "temp": 61,
                    "wind": {
                        "speed": 24,
                        "direction": "NW"
                    }
                },
                "scoring": {
                    "home_points": 29,
                    "away_points": 17,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "3d6c2de5-6f6e-4ca2-826e-311ee8555526",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 7,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "cc5a475a-cd8b-49bf-b674-2ef42c7e8122",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 6,
                            "away_points": 14
                        },
                        {
                            "period_type": "quarter",
                            "id": "d09d3d7d-0fa4-4f87-9d43-02cc61c0fb1b",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 3,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "53f06894-b3af-49bc-8b7d-b44a4c3219dc",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 13,
                            "away_points": 3
                        }
                    ]
                }
            },
            {
                "id": "2eb9ef80-c7fc-47f0-ba9e-359ffd5208c2",
                "status": "closed",
                "scheduled": "2022-09-25T17:00:00+00:00",
                "attendance": 68649,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623251",
                "game_type": "regular",
                "duration": "3:09",
                "venue": {
                    "id": "5295c1b7-c85c-49cb-9569-1707c65324e5",
                    "name": "Nissan Stadium",
                    "city": "Nashville",
                    "state": "TN",
                    "country": "USA",
                    "zip": "37213",
                    "address": "One Titans Way",
                    "capacity": 69143,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8207",
                    "location": {
                        "lat": "36.166367",
                        "lng": "-86.771223"
                    }
                },
                "home": {
                    "id": "d26a1ca5-722d-4274-8f97-c92e49c96315",
                    "name": "Tennessee Titans",
                    "alias": "TEN",
                    "game_number": 3,
                    "sr_id": "sr:competitor:367364"
                },
                "away": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Las Vegas Raiders",
                    "alias": "LV",
                    "game_number": 3,
                    "sr_id": "sr:competitor:4390"
                },
                "broadcast": {
                    "network": "FOX"
                },
                "weather": {
                    "condition": "Partly cloudy",
                    "humidity": 62,
                    "temp": 78,
                    "wind": {
                        "speed": 14,
                        "direction": "W"
                    }
                },
                "scoring": {
                    "home_points": 24,
                    "away_points": 22,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "ac398fe4-b332-4225-8d8b-cf744a542ef8",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 7,
                            "away_points": 3
                        },
                        {
                            "period_type": "quarter",
                            "id": "aee8290d-4b98-45c6-b823-639edc3be5eb",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 17,
                            "away_points": 7
                        },
                        {
                            "period_type": "quarter",
                            "id": "350cfbf3-0ee0-43b9-8d78-eade70859df0",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 0,
                            "away_points": 3
                        },
                        {
                            "period_type": "quarter",
                            "id": "82d2c459-c74e-4f98-8fb0-63f475d49775",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 0,
                            "away_points": 9
                        }
                    ]
                }
            },
            {
                "id": "5a49b508-acbe-4b5d-912d-a50b4f8c6366",
                "status": "closed",
                "scheduled": "2022-09-25T17:00:00+00:00",
                "attendance": 73708,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623249",
                "game_type": "regular",
                "duration": "3:15",
                "venue": {
                    "id": "5d4c85c7-d84e-4e10-bd6a-8a15ebecca5c",
                    "name": "MetLife Stadium",
                    "city": "East Rutherford",
                    "state": "NJ",
                    "country": "USA",
                    "zip": "07073",
                    "address": "One MetLife Stadium Drive",
                    "capacity": 82500,
                    "surface": "artificial",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:1981",
                    "location": {
                        "lat": "40.813611",
                        "lng": "-74.074444"
                    }
                },
                "home": {
                    "id": "5fee86ae-74ab-4bdd-8416-42a9dd9964f3",
                    "name": "New York Jets",
                    "alias": "NYJ",
                    "game_number": 3,
                    "sr_id": "sr:competitor:4427"
                },
                "away": {
                    "id": "ad4ae08f-d808-42d5-a1e6-e9bc4e34d123",
                    "name": "Cincinnati Bengals",
                    "alias": "CIN",
                    "game_number": 3,
                    "sr_id": "sr:competitor:4416"
                },
                "broadcast": {
                    "network": "CBS"
                },
                "weather": {
                    "condition": "Sunny",
                    "humidity": 63,
                    "temp": 67,
                    "wind": {
                        "speed": 2,
                        "direction": "SSW"
                    }
                },
                "scoring": {
                    "home_points": 12,
                    "away_points": 27,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "9f2b1de2-b883-4b43-a38f-95430b4002cd",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 6,
                            "away_points": 14
                        },
                        {
                            "period_type": "quarter",
                            "id": "8f4b61bf-1c03-4a57-8e04-4671de3e157e",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 3,
                            "away_points": 6
                        },
                        {
                            "period_type": "quarter",
                            "id": "86e5b00f-db96-4d25-aecf-47fd87bf5c13",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 3,
                            "away_points": 7
                        },
                        {
                            "period_type": "quarter",
                            "id": "c799b0c4-4b32-48b2-9a45-6845a3044810",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 0,
                            "away_points": 0
                        }
                    ]
                }
            },
            {
                "id": "8b8f8d1e-68b3-4b87-8f3b-d427bf790911",
                "status": "closed",
                "scheduled": "2022-09-25T17:00:00+00:00",
                "attendance": 66206,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623243",
                "game_type": "regular",
                "duration": "3:11",
                "venue": {
                    "id": "50a5c833-1570-4c38-abc7-7914cf87dbde",
                    "name": "Hard Rock Stadium",
                    "city": "Miami Gardens",
                    "state": "FL",
                    "country": "USA",
                    "zip": "33056",
                    "address": "2269 Northwest 199th Street",
                    "capacity": 65326,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:21306",
                    "location": {
                        "lat": "25.958025",
                        "lng": "-80.238724"
                    }
                },
                "home": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Miami Dolphins",
                    "alias": "MIA",
                    "game_number": 3,
                    "sr_id": "sr:competitor:4287"
                },
                "away": {
                    "id": "768c92aa-75ff-4a43-bcc0-f2798c2e1724",
                    "name": "Buffalo Bills",
                    "alias": "BUF",
                    "game_number": 3,
                    "sr_id": "sr:competitor:4376"
                },
                "broadcast": {
                    "network": "CBS"
                },
                "weather": {
                    "condition": "Partly cloudy",
                    "humidity": 54,
                    "temp": 90,
                    "wind": {
                        "speed": 7,
                        "direction": "ESE"
                    }
                },
                "scoring": {
                    "home_points": 21,
                    "away_points": 19,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "275c09fd-6288-48cd-b4bd-65984cdd7123",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 7,
                            "away_points": 7
                        },
                        {
                            "period_type": "quarter",
                            "id": "474399d9-988d-4c8c-b8e3-b49a249cb2b1",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 7,
                            "away_points": 7
                        },
                        {
                            "period_type": "quarter",
                            "id": "4c218239-9bfc-4e39-92e7-83f1a341c7d3",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 0,
                            "away_points": 3
                        },
                        {
                            "period_type": "quarter",
                            "id": "c896ec42-1171-4427-9895-739de2435853",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 7,
                            "away_points": 2
                        }
                    ]
                }
            },
            {
                "id": "8badc9e6-483a-498d-8f92-a8f5b02de67f",
                "status": "closed",
                "scheduled": "2022-09-25T17:00:00+00:00",
                "attendance": 64426,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623253",
                "game_type": "regular",
                "duration": "3:11",
                "venue": {
                    "id": "7c11bb2d-4a53-4842-b842-0f1c63ed78e9",
                    "name": "FedExField",
                    "city": "Landover",
                    "state": "MD",
                    "country": "USA",
                    "zip": "20785",
                    "address": "1600 FedEx Way",
                    "capacity": 82000,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:6652",
                    "location": {
                        "lat": "38.907724",
                        "lng": "-76.864613"
                    }
                },
                "home": {
                    "id": "22052ff7-c065-42ee-bc8f-c4691c50e624",
                    "name": "Washington Commanders",
                    "alias": "WAS",
                    "game_number": 3,
                    "sr_id": "sr:competitor:4432"
                },
                "away": {
                    "id": "386bdbf9-9eea-4869-bb9a-274b0bc66e80",
                    "name": "Philadelphia Eagles",
                    "alias": "PHI",
                    "game_number": 3,
                    "sr_id": "sr:competitor:4428"
                },
                "broadcast": {
                    "network": "FOX"
                },
                "weather": {
                    "condition": "Sunny",
                    "humidity": 78,
                    "temp": 68,
                    "wind": {
                        "speed": 4,
                        "direction": "SSW"
                    }
                },
                "scoring": {
                    "home_points": 8,
                    "away_points": 24,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "4c916e7a-3514-4c9a-b347-a33b463e6771",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 0,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "54275f2c-177f-4956-b8f6-04240410041f",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 0,
                            "away_points": 24
                        },
                        {
                            "period_type": "quarter",
                            "id": "97f2d764-b11b-4ae8-9dc7-8285a2f9cd6c",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 0,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "42e9b9e3-7737-446a-b11d-187a824de967",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 8,
                            "away_points": 0
                        }
                    ]
                }
            },
            {
                "id": "9cd300f9-b564-4beb-bc7f-687543a70c7f",
                "status": "closed",
                "scheduled": "2022-09-25T17:00:00+00:00",
                "attendance": 65975,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623241",
                "game_type": "regular",
                "duration": "3:05",
                "venue": {
                    "id": "6ed18563-53e0-46c2-a91d-12d73a16456d",
                    "name": "Lucas Oil Stadium",
                    "city": "Indianapolis",
                    "state": "IN",
                    "country": "USA",
                    "zip": "46225",
                    "address": "500 South Capitol Avenue",
                    "capacity": 67000,
                    "surface": "artificial",
                    "roof_type": "retractable_dome",
                    "sr_id": "sr:venue:8185",
                    "location": {
                        "lat": "39.760008",
                        "lng": "-86.163906"
                    }
                },
                "home": {
                    "id": "82cf9565-6eb9-4f01-bdbd-5aa0d472fcd9",
                    "name": "Indianapolis Colts",
                    "alias": "IND",
                    "game_number": 3,
                    "sr_id": "sr:competitor:4421"
                },
                "away": {
                    "id": "6680d28d-d4d2-49f6-aace-5292d3ec02c2",
                    "name": "Kansas City Chiefs",
                    "alias": "KC",
                    "game_number": 3,
                    "sr_id": "sr:competitor:4422"
                },
                "broadcast": {
                    "network": "CBS"
                },
                "weather": {
                    "condition": "Partly cloudy",
                    "humidity": 61,
                    "temp": 66,
                    "wind": {
                        "speed": 17,
                        "direction": "WNW"
                    }
                },
                "scoring": {
                    "home_points": 20,
                    "away_points": 17,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "783f782f-1dc4-4ff2-a982-45c455c97983",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 7,
                            "away_points": 6
                        },
                        {
                            "period_type": "quarter",
                            "id": "a6b90b8a-7e9c-4a3a-a01d-216b8c2a47dc",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 3,
                            "away_points": 8
                        },
                        {
                            "period_type": "quarter",
                            "id": "6cc0ada8-dbc3-4974-b31c-78069817db4f",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 3,
                            "away_points": 3
                        },
                        {
                            "period_type": "quarter",
                            "id": "c80e0cc0-1d99-427c-85be-ca1b1addedca",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 7,
                            "away_points": 0
                        }
                    ]
                }
            },
            {
                "id": "b3f234aa-0768-488b-930c-4171378cdb97",
                "status": "closed",
                "scheduled": "2022-09-25T17:00:00+00:00",
                "attendance": 60592,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623239",
                "game_type": "regular",
                "duration": "2:55",
                "venue": {
                    "id": "d7866605-5ac6-4b3a-90e8-760cc5a26b75",
                    "name": "Soldier Field",
                    "city": "Chicago",
                    "state": "IL",
                    "country": "USA",
                    "zip": "60605",
                    "address": "1410 South Museum Campus Drive",
                    "capacity": 61500,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:2109",
                    "location": {
                        "lat": "41.862498",
                        "lng": "-87.616979"
                    }
                },
                "home": {
                    "id": "7b112545-38e6-483c-a55c-96cf6ee49cb8",
                    "name": "Chicago Bears",
                    "alias": "CHI",
                    "game_number": 3,
                    "sr_id": "sr:competitor:4391"
                },
                "away": {
                    "id": "82d2d380-3834-4938-835f-aec541e5ece7",
                    "name": "Houston Texans",
                    "alias": "HOU",
                    "game_number": 3,
                    "sr_id": "sr:competitor:4324"
                },
                "broadcast": {
                    "network": "CBS"
                },
                "weather": {
                    "condition": "Partly cloudy",
                    "humidity": 65,
                    "temp": 65,
                    "wind": {
                        "speed": 15,
                        "direction": "WNW"
                    }
                },
                "scoring": {
                    "home_points": 23,
                    "away_points": 20,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "1cf87900-127b-49bc-a4da-c2ba74bf25d3",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 10,
                            "away_points": 7
                        },
                        {
                            "period_type": "quarter",
                            "id": "2a2daddc-714e-4022-b645-060d8499869c",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 3,
                            "away_points": 7
                        },
                        {
                            "period_type": "quarter",
                            "id": "d7c857e7-bdf3-4691-a5ec-519100ff4334",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 7,
                            "away_points": 6
                        },
                        {
                            "period_type": "quarter",
                            "id": "561b9844-c22f-44ab-afc8-772f5bd4aa6c",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 3,
                            "away_points": 0
                        }
                    ]
                }
            },
            {
                "id": "b9a40f08-db99-4cb0-856a-2434f41df26f",
                "status": "closed",
                "scheduled": "2022-09-25T17:00:00+00:00",
                "attendance": 70496,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623237",
                "game_type": "regular",
                "duration": "3:01",
                "venue": {
                    "id": "39be9ed4-3292-49ac-8699-a381de3a4969",
                    "name": "Bank of America Stadium",
                    "city": "Charlotte",
                    "state": "NC",
                    "country": "USA",
                    "zip": "28202",
                    "address": "800 South Mint Street",
                    "capacity": 75419,
                    "surface": "artificial",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8173",
                    "location": {
                        "lat": "35.225937",
                        "lng": "-80.853133"
                    }
                },
                "home": {
                    "id": "f14bf5cc-9a82-4a38-bc15-d39f75ed5314",
                    "name": "Carolina Panthers",
                    "alias": "CAR",
                    "game_number": 3,
                    "sr_id": "sr:competitor:4415"
                },
                "away": {
                    "id": "0d855753-ea21-4953-89f9-0e20aff9eb73",
                    "name": "New Orleans Saints",
                    "alias": "NO",
                    "game_number": 3,
                    "sr_id": "sr:competitor:4425"
                },
                "broadcast": {
                    "network": "FOX"
                },
                "weather": {
                    "condition": "Light Rain",
                    "humidity": 61,
                    "temp": 69,
                    "wind": {
                        "speed": 6,
                        "direction": "SW"
                    }
                },
                "scoring": {
                    "home_points": 22,
                    "away_points": 14,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "edc8184f-a7dd-429a-a090-92f3dfe8d26a",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 7,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "3719f6ca-e040-40d2-9c5a-5e7ed65b5290",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 6,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "e1e5d7ae-4066-4457-ae2d-098ae67f9639",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 0,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "37668a83-b32a-4167-ac55-e66ac605a113",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 9,
                            "away_points": 14
                        }
                    ]
                }
            },
            {
                "id": "beb9fe5d-a6aa-425f-8dab-ef5f11e59d11",
                "status": "closed",
                "scheduled": "2022-09-25T17:00:00+00:00",
                "attendance": 65878,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623247",
                "game_type": "regular",
                "duration": "3:04",
                "venue": {
                    "id": "e43310b1-cb82-4df9-8be5-e9b39637031b",
                    "name": "Gillette Stadium",
                    "city": "Foxborough",
                    "state": "MA",
                    "country": "USA",
                    "zip": "02035",
                    "address": "One Patriot Place",
                    "capacity": 66829,
                    "surface": "artificial",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:2379",
                    "location": {
                        "lat": "42.090944",
                        "lng": "-71.264344"
                    }
                },
                "home": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "New England Patriots",
                    "alias": "NE",
                    "game_number": 3,
                    "sr_id": "sr:competitor:4424"
                },
                "away": {
                    "id": "ebd87119-b331-4469-9ea6-d51fe3ce2f1c",
                    "name": "Baltimore Ravens",
                    "alias": "BAL",
                    "game_number": 3,
                    "sr_id": "sr:competitor:4413"
                },
                "broadcast": {
                    "network": "FOX"
                },
                "weather": {
                    "condition": "Partly cloudy",
                    "humidity": 55,
                    "temp": 69,
                    "wind": {
                        "speed": 15,
                        "direction": "SW"
                    }
                },
                "scoring": {
                    "home_points": 26,
                    "away_points": 37,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "81da457d-52f0-4f31-95fd-9fdb39b4edbc",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 0,
                            "away_points": 7
                        },
                        {
                            "period_type": "quarter",
                            "id": "11e17fc7-9d5b-4536-808c-098c6a867f77",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 13,
                            "away_points": 7
                        },
                        {
                            "period_type": "quarter",
                            "id": "e6fa3217-7339-45c8-9df9-28a4a0616c67",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 7,
                            "away_points": 17
                        },
                        {
                            "period_type": "quarter",
                            "id": "47a85c62-0e28-4df8-ba88-02533a2b2bf2",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 6,
                            "away_points": 6
                        }
                    ]
                }
            },
            {
                "id": "f33e2f4e-0647-4962-97c9-bfac791ff951",
                "status": "closed",
                "scheduled": "2022-09-25T17:00:00+00:00",
                "attendance": 66638,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623245",
                "game_type": "regular",
                "duration": "3:14",
                "venue": {
                    "id": "f5ff00d4-1ed8-4918-bf73-13d66d510f98",
                    "name": "U.S. Bank Stadium",
                    "city": "Minneapolis",
                    "state": "MN",
                    "country": "USA",
                    "zip": "55415",
                    "address": "900 S 5th Street",
                    "capacity": 66655,
                    "surface": "artificial",
                    "roof_type": "dome",
                    "sr_id": "sr:venue:18423",
                    "location": {
                        "lat": "44.973686",
                        "lng": "-93.257458"
                    }
                },
                "home": {
                    "id": "33405046-04ee-4058-a950-d606f8c30852",
                    "name": "Minnesota Vikings",
                    "alias": "MIN",
                    "game_number": 3,
                    "sr_id": "sr:competitor:4423"
                },
                "away": {
                    "id": "c5a59daa-53a7-4de0-851f-fb12be893e9e",
                    "name": "Detroit Lions",
                    "alias": "DET",
                    "game_number": 3,
                    "sr_id": "sr:competitor:4419"
                },
                "broadcast": {
                    "network": "FOX"
                },
                "weather": {
                    "condition": "Partly cloudy",
                    "humidity": 58,
                    "temp": 64,
                    "wind": {
                        "speed": 16,
                        "direction": "WNW"
                    }
                },
                "scoring": {
                    "home_points": 28,
                    "away_points": 24,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "01ce5e40-ccbb-468a-b6c0-b84427bdd6a0",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 0,
                            "away_points": 7
                        },
                        {
                            "period_type": "quarter",
                            "id": "fd7f3f4f-3eeb-4ba9-9d78-7b156f80854c",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 14,
                            "away_points": 7
                        },
                        {
                            "period_type": "quarter",
                            "id": "7fd017a6-2aab-43a7-b064-272961ce9c99",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 0,
                            "away_points": 10
                        },
                        {
                            "period_type": "quarter",
                            "id": "ad19f9a8-0bd2-4570-a186-0b377c2c15e1",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 14,
                            "away_points": 0
                        }
                    ]
                }
            },
            {
                "id": "8ebfa3c4-dc9c-4bf6-a51b-91d4c5b43a1f",
                "status": "closed",
                "scheduled": "2022-09-25T20:05:00+00:00",
                "attendance": 67964,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623255",
                "game_type": "regular",
                "duration": "2:59",
                "venue": {
                    "id": "790c1f04-73c6-4f6f-8b1e-78a62260be90",
                    "name": "SoFi Stadium",
                    "city": "Inglewood",
                    "state": "CA",
                    "country": "USA",
                    "zip": "90301",
                    "address": "1000 S Prairie Ave",
                    "capacity": 70240,
                    "surface": "artificial",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:52183",
                    "location": {
                        "lat": "33.953536",
                        "lng": "-118.338734"
                    }
                },
                "home": {
                    "id": "1f6dcffb-9823-43cd-9ff4-e7a8466749b5",
                    "name": "Los Angeles Chargers",
                    "alias": "LAC",
                    "game_number": 3,
                    "sr_id": "sr:competitor:4429"
                },
                "away": {
                    "id": "f7ddd7fa-0bae-4f90-bc8e-669e4d6cf2de",
                    "name": "Jacksonville Jaguars",
                    "alias": "JAC",
                    "game_number": 3,
                    "sr_id": "sr:competitor:4386"
                },
                "broadcast": {
                    "network": "CBS"
                },
                "weather": {
                    "condition": "Sunny",
                    "humidity": 51,
                    "temp": 81,
                    "wind": {
                        "speed": 9,
                        "direction": "WSW"
                    }
                },
                "scoring": {
                    "home_points": 10,
                    "away_points": 38,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "1ff27047-d90a-4151-976e-0885df8991ff",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 0,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "4ac50d5e-83ea-4cf2-8f77-9fa2efc1be76",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 7,
                            "away_points": 16
                        },
                        {
                            "period_type": "quarter",
                            "id": "2876d236-6430-497c-8f15-b7b1c374628e",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 3,
                            "away_points": 15
                        },
                        {
                            "period_type": "quarter",
                            "id": "74931b75-220b-4126-9e3e-eeb3f64c1808",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 0,
                            "away_points": 7
                        }
                    ]
                }
            },
            {
                "id": "381afd4d-bfe3-4c01-be10-ea85e2e57c18",
                "status": "closed",
                "scheduled": "2022-09-25T20:25:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623261",
                "game_type": "regular",
                "venue": {
                    "id": "6fccc39c-80bc-4c81-83d9-2d5a848c8c09",
                    "name": "Raymond James Stadium",
                    "city": "Tampa",
                    "state": "FL",
                    "country": "USA",
                    "zip": "33607",
                    "address": "4201 North Dale Mabry Highway",
                    "capacity": 65890,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8205",
                    "location": {
                        "lat": "27.976211",
                        "lng": "-82.503625"
                    }
                },
                "home": {
                    "id": "4254d319-1bc7-4f81-b4ab-b5e6f3402b69",
                    "name": "Tampa Bay Buccaneers",
                    "alias": "TB",
                    "game_number": 3,
                    "sr_id": "sr:competitor:4388"
                },
                "away": {
                    "id": "a20471b4-a8d9-40c7-95ad-90cc30e46932",
                    "name": "Green Bay Packers",
                    "alias": "GB",
                    "game_number": 3,
                    "sr_id": "sr:competitor:4420"
                },
                "broadcast": {
                    "network": "FOX"
                },
                "weather": {
                    "condition": "Partly cloudy",
                    "humidity": 54,
                    "temp": 89,
                    "wind": {
                        "speed": 7,
                        "direction": "N"
                    }
                },
                "scoring": {
                    "home_points": 12,
                    "away_points": 14,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "af484327-0a3b-486c-8eb4-44118edaabe9",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 3,
                            "away_points": 7
                        },
                        {
                            "period_type": "quarter",
                            "id": "75113dbb-2ec2-47f2-93db-2504dada1859",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 0,
                            "away_points": 7
                        },
                        {
                            "period_type": "quarter",
                            "id": "3ef438ad-14ed-4a8b-b4a3-5b675d5669c9",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 3,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "eb155ba8-a9eb-47d3-bb4e-6caca54d7474",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 6,
                            "away_points": 0
                        }
                    ]
                }
            },
            {
                "id": "8dbee8ee-a3a4-45f3-9425-239669ca778e",
                "status": "closed",
                "scheduled": "2022-09-25T20:25:00+00:00",
                "attendance": 63243,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623257",
                "game_type": "regular",
                "duration": "3:01",
                "venue": {
                    "id": "f8e4d2ab-53f9-4e9f-8c4a-9bc278094a84",
                    "name": "State Farm Stadium",
                    "city": "Glendale",
                    "state": "AZ",
                    "country": "USA",
                    "zip": "85305",
                    "address": "One Cardinals Drive",
                    "capacity": 63400,
                    "surface": "turf",
                    "roof_type": "retractable_dome",
                    "sr_id": "sr:venue:8165",
                    "location": {
                        "lat": "33.527765",
                        "lng": "-112.262090"
                    }
                },
                "home": {
                    "id": "de760528-1dc0-416a-a978-b510d20692ff",
                    "name": "Arizona Cardinals",
                    "alias": "ARI",
                    "game_number": 3,
                    "sr_id": "sr:competitor:4412"
                },
                "away": {
                    "id": "2eff2a03-54d4-46ba-890e-2bc3925548f3",
                    "name": "Los Angeles Rams",
                    "alias": "LA",
                    "game_number": 3,
                    "sr_id": "sr:competitor:4387"
                },
                "broadcast": {
                    "network": "FOX"
                },
                "weather": {
                    "condition": "Partly cloudy",
                    "humidity": 9,
                    "temp": 103,
                    "wind": {
                        "speed": 4,
                        "direction": "ESE"
                    }
                },
                "scoring": {
                    "home_points": 12,
                    "away_points": 20,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "3f4fb2b5-f7fa-41ff-8cc7-33176dbf8048",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 0,
                            "away_points": 10
                        },
                        {
                            "period_type": "quarter",
                            "id": "6f9a01e6-1693-4419-ae77-5b16b15cf493",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 6,
                            "away_points": 3
                        },
                        {
                            "period_type": "quarter",
                            "id": "8fecf630-b5a5-4d30-a361-8d244b89780c",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 3,
                            "away_points": 7
                        },
                        {
                            "period_type": "quarter",
                            "id": "99c8202b-85dc-4ef3-913d-08dfb3388dc0",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 3,
                            "away_points": 0
                        }
                    ]
                }
            },
            {
                "id": "db55a870-a775-46d3-b338-c73b29596991",
                "status": "closed",
                "scheduled": "2022-09-25T20:25:00+00:00",
                "attendance": 68773,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623259",
                "game_type": "regular",
                "duration": "2:53",
                "venue": {
                    "id": "c6b9e5df-c9e4-434c-b3e6-83928f11cbda",
                    "name": "Lumen Field",
                    "city": "Seattle",
                    "state": "WA",
                    "country": "USA",
                    "zip": "98134",
                    "address": "800 Occidental Avenue South",
                    "capacity": 68000,
                    "surface": "artificial",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:2291",
                    "location": {
                        "lat": "47.595165",
                        "lng": "-122.331650"
                    }
                },
                "home": {
                    "id": "3d08af9e-c767-4f88-a7dc-b920c6d2b4a8",
                    "name": "Seattle Seahawks",
                    "alias": "SEA",
                    "game_number": 3,
                    "sr_id": "sr:competitor:4430"
                },
                "away": {
                    "id": "e6aa13a4-0055-48a9-bc41-be28dc106929",
                    "name": "Atlanta Falcons",
                    "alias": "ATL",
                    "game_number": 3,
                    "sr_id": "sr:competitor:4393"
                },
                "broadcast": {
                    "network": "FOX"
                },
                "weather": {
                    "condition": "Smoke",
                    "humidity": 55,
                    "temp": 72,
                    "wind": {
                        "speed": 9,
                        "direction": "NW"
                    }
                },
                "scoring": {
                    "home_points": 23,
                    "away_points": 27,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "6f02463e-9c9c-4164-b8eb-024ed863cc99",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 10,
                            "away_points": 10
                        },
                        {
                            "period_type": "quarter",
                            "id": "fa711167-33a3-414c-9bb8-ae44d0a8736a",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 10,
                            "away_points": 7
                        },
                        {
                            "period_type": "quarter",
                            "id": "557dcbf2-3b99-40de-8a75-6092a7fbadef",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 3,
                            "away_points": 10
                        },
                        {
                            "period_type": "quarter",
                            "id": "361c4d3d-e318-4036-932f-b9e04b45a742",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 0,
                            "away_points": 0
                        }
                    ]
                }
            },
            {
                "id": "02c1b1e9-e2dd-475f-84cf-6b1c9a2cbc51",
                "status": "closed",
                "scheduled": "2022-09-26T00:20:00+00:00",
                "attendance": 77021,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623263",
                "game_type": "regular",
                "duration": "3:05",
                "venue": {
                    "id": "6589e61d-ef1e-4e30-91b5-9acd2072b8a0",
                    "name": "Empower Field at Mile High",
                    "city": "Denver",
                    "state": "CO",
                    "country": "USA",
                    "zip": "80204",
                    "address": "1701 Mile High Stadium Circle",
                    "capacity": 76125,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8179",
                    "location": {
                        "lat": "39.743865",
                        "lng": "-105.020158"
                    }
                },
                "home": {
                    "id": "ce92bd47-93d5-4fe9-ada4-0fc681e6caa0",
                    "name": "Denver Broncos",
                    "alias": "DEN",
                    "game_number": 3,
                    "sr_id": "sr:competitor:4418"
                },
                "away": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "San Francisco 49ers",
                    "alias": "SF",
                    "game_number": 3,
                    "sr_id": "sr:competitor:4389"
                },
                "broadcast": {
                    "network": "NBC"
                },
                "weather": {
                    "condition": "Partly cloudy",
                    "humidity": 27,
                    "temp": 72,
                    "wind": {
                        "speed": 7,
                        "direction": "NNE"
                    }
                },
                "scoring": {
                    "home_points": 11,
                    "away_points": 10,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "941dfd70-fba4-4813-878e-ed68bae975d3",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 0,
                            "away_points": 7
                        },
                        {
                            "period_type": "quarter",
                            "id": "671f4ae9-0814-488d-af31-098665075c0b",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 3,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "35f9dde0-9692-4697-bcda-0bafb6d08c98",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 2,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "b9d313ba-73ed-46c5-b1eb-61f637c56297",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 6,
                            "away_points": 3
                        }
                    ]
                }
            },
            {
                "id": "d4910570-5897-4653-9dfe-552e8121624e",
                "status": "closed",
                "scheduled": "2022-09-27T00:15:00+00:00",
                "attendance": 79445,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623265",
                "game_type": "regular",
                "duration": "3:11",
                "venue": {
                    "id": "5d4c85c7-d84e-4e10-bd6a-8a15ebecca5c",
                    "name": "MetLife Stadium",
                    "city": "East Rutherford",
                    "state": "NJ",
                    "country": "USA",
                    "zip": "07073",
                    "address": "One MetLife Stadium Drive",
                    "capacity": 82500,
                    "surface": "artificial",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:1981",
                    "location": {
                        "lat": "40.813611",
                        "lng": "-74.074444"
                    }
                },
                "home": {
                    "id": "04aa1c9d-66da-489d-b16a-1dee3f2eec4d",
                    "name": "New York Giants",
                    "alias": "NYG",
                    "game_number": 3,
                    "sr_id": "sr:competitor:4426"
                },
                "away": {
                    "id": "e627eec7-bbae-4fa4-8e73-8e1d6bc5c060",
                    "name": "Dallas Cowboys",
                    "alias": "DAL",
                    "game_number": 3,
                    "sr_id": "sr:competitor:4392"
                },
                "broadcast": {
                    "network": "ESPN",
                    "satellite": "206"
                },
                "weather": {
                    "condition": "Clear",
                    "humidity": 42,
                    "temp": 70,
                    "wind": {
                        "speed": 2,
                        "direction": "WSW"
                    }
                },
                "scoring": {
                    "home_points": 16,
                    "away_points": 23,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "abcfb386-3f64-42b9-baf3-5656c8360715",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 0,
                            "away_points": 3
                        },
                        {
                            "period_type": "quarter",
                            "id": "723bb3f9-5265-4778-bf76-f55da2110319",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 3,
                            "away_points": 3
                        },
                        {
                            "period_type": "quarter",
                            "id": "b1254ea0-1d1d-4dfc-bd43-6cff23aa5948",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 10,
                            "away_points": 7
                        },
                        {
                            "period_type": "quarter",
                            "id": "edc12466-edde-475f-a3ca-23c0c47e1d7f",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 3,
                            "away_points": 10
                        }
                    ]
                }
            }
        ],
        "createdAt": "2022-11-02T23:27:20.019Z",
        "updatedAt": "2022-11-02T23:27:20.019Z",
        "__v": 0
    },
    {
        "_id": "6362fcd8a05a14afa1a59d26",
        "weekNumber": 16,
        "games": [
            {
                "id": "bbb1588e-dd86-4621-b618-011d0278135e",
                "status": "scheduled",
                "scheduled": "2022-12-23T01:15:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623597",
                "game_type": "regular",
                "venue": {
                    "id": "5d4c85c7-d84e-4e10-bd6a-8a15ebecca5c",
                    "name": "MetLife Stadium",
                    "city": "East Rutherford",
                    "state": "NJ",
                    "country": "USA",
                    "zip": "07073",
                    "address": "One MetLife Stadium Drive",
                    "capacity": 82500,
                    "surface": "artificial",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:1981",
                    "location": {
                        "lat": "40.813611",
                        "lng": "-74.074444"
                    }
                },
                "home": {
                    "id": "5fee86ae-74ab-4bdd-8416-42a9dd9964f3",
                    "name": "New York Jets",
                    "alias": "NYJ",
                    "game_number": 15,
                    "sr_id": "sr:competitor:4427"
                },
                "away": {
                    "id": "f7ddd7fa-0bae-4f90-bc8e-669e4d6cf2de",
                    "name": "Jacksonville Jaguars",
                    "alias": "JAC",
                    "game_number": 15,
                    "sr_id": "sr:competitor:4386"
                },
                "broadcast": {
                    "network": "Amazon Prime Video"
                }
            },
            {
                "id": "17b3df26-4163-4234-83be-700cb0ab5f93",
                "status": "scheduled",
                "scheduled": "2022-12-24T18:00:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623605",
                "game_type": "regular",
                "venue": {
                    "id": "90c38d91-3774-4f5d-82ca-1c806828219f",
                    "name": "FirstEnergy Stadium",
                    "city": "Cleveland",
                    "state": "OH",
                    "country": "USA",
                    "zip": "44114",
                    "address": "100 Alfred Lerner Way",
                    "capacity": 67895,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8177",
                    "location": {
                        "lat": "41.506054",
                        "lng": "-81.700004"
                    }
                },
                "home": {
                    "id": "d5a2eb42-8065-4174-ab79-0a6fa820e35e",
                    "name": "Cleveland Browns",
                    "alias": "CLE",
                    "game_number": 15,
                    "sr_id": "sr:competitor:4417"
                },
                "away": {
                    "id": "0d855753-ea21-4953-89f9-0e20aff9eb73",
                    "name": "New Orleans Saints",
                    "alias": "NO",
                    "game_number": 15,
                    "sr_id": "sr:competitor:4425"
                },
                "broadcast": {
                    "network": "CBS"
                }
            },
            {
                "id": "58ea9307-f76e-45e4-9f31-432e320331c2",
                "status": "scheduled",
                "scheduled": "2022-12-24T18:00:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623599",
                "game_type": "regular",
                "venue": {
                    "id": "d54faae0-0314-484f-8604-9d8dd08e1149",
                    "name": "M&T Bank Stadium",
                    "city": "Baltimore",
                    "state": "MD",
                    "country": "USA",
                    "zip": "21230",
                    "address": "1101 Russell Street",
                    "capacity": 71008,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8169",
                    "location": {
                        "lat": "39.277995",
                        "lng": "-76.622592"
                    }
                },
                "home": {
                    "id": "ebd87119-b331-4469-9ea6-d51fe3ce2f1c",
                    "name": "Baltimore Ravens",
                    "alias": "BAL",
                    "game_number": 15,
                    "sr_id": "sr:competitor:4413"
                },
                "away": {
                    "id": "e6aa13a4-0055-48a9-bc41-be28dc106929",
                    "name": "Atlanta Falcons",
                    "alias": "ATL",
                    "game_number": 15,
                    "sr_id": "sr:competitor:4393"
                },
                "broadcast": {
                    "network": "FOX"
                }
            },
            {
                "id": "9d0e87dd-5bc0-47a4-9c0a-7a426b5605e5",
                "status": "scheduled",
                "scheduled": "2022-12-24T18:00:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623611",
                "game_type": "regular",
                "venue": {
                    "id": "e43310b1-cb82-4df9-8be5-e9b39637031b",
                    "name": "Gillette Stadium",
                    "city": "Foxborough",
                    "state": "MA",
                    "country": "USA",
                    "zip": "02035",
                    "address": "One Patriot Place",
                    "capacity": 66829,
                    "surface": "artificial",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:2379",
                    "location": {
                        "lat": "42.090944",
                        "lng": "-71.264344"
                    }
                },
                "home": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "New England Patriots",
                    "alias": "NE",
                    "game_number": 15,
                    "sr_id": "sr:competitor:4424"
                },
                "away": {
                    "id": "ad4ae08f-d808-42d5-a1e6-e9bc4e34d123",
                    "name": "Cincinnati Bengals",
                    "alias": "CIN",
                    "game_number": 15,
                    "sr_id": "sr:competitor:4416"
                },
                "broadcast": {
                    "network": "CBS"
                }
            },
            {
                "id": "a3a9a355-7d17-45a4-a7b1-d0ac460e4877",
                "status": "scheduled",
                "scheduled": "2022-12-24T18:00:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623603",
                "game_type": "regular",
                "venue": {
                    "id": "d7866605-5ac6-4b3a-90e8-760cc5a26b75",
                    "name": "Soldier Field",
                    "city": "Chicago",
                    "state": "IL",
                    "country": "USA",
                    "zip": "60605",
                    "address": "1410 South Museum Campus Drive",
                    "capacity": 61500,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:2109",
                    "location": {
                        "lat": "41.862498",
                        "lng": "-87.616979"
                    }
                },
                "home": {
                    "id": "7b112545-38e6-483c-a55c-96cf6ee49cb8",
                    "name": "Chicago Bears",
                    "alias": "CHI",
                    "game_number": 15,
                    "sr_id": "sr:competitor:4391"
                },
                "away": {
                    "id": "768c92aa-75ff-4a43-bcc0-f2798c2e1724",
                    "name": "Buffalo Bills",
                    "alias": "BUF",
                    "game_number": 15,
                    "sr_id": "sr:competitor:4376"
                },
                "broadcast": {
                    "network": "CBS"
                }
            },
            {
                "id": "beaee843-99ce-47c1-b32f-9a4055951698",
                "status": "scheduled",
                "scheduled": "2022-12-24T18:00:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623609",
                "game_type": "regular",
                "venue": {
                    "id": "f5ff00d4-1ed8-4918-bf73-13d66d510f98",
                    "name": "U.S. Bank Stadium",
                    "city": "Minneapolis",
                    "state": "MN",
                    "country": "USA",
                    "zip": "55415",
                    "address": "900 S 5th Street",
                    "capacity": 66655,
                    "surface": "artificial",
                    "roof_type": "dome",
                    "sr_id": "sr:venue:18423",
                    "location": {
                        "lat": "44.973686",
                        "lng": "-93.257458"
                    }
                },
                "home": {
                    "id": "33405046-04ee-4058-a950-d606f8c30852",
                    "name": "Minnesota Vikings",
                    "alias": "MIN",
                    "game_number": 15,
                    "sr_id": "sr:competitor:4423"
                },
                "away": {
                    "id": "04aa1c9d-66da-489d-b16a-1dee3f2eec4d",
                    "name": "New York Giants",
                    "alias": "NYG",
                    "game_number": 15,
                    "sr_id": "sr:competitor:4426"
                },
                "broadcast": {
                    "network": "FOX"
                }
            },
            {
                "id": "ca33baaa-05ac-4bc9-b1da-4330689ce690",
                "status": "scheduled",
                "scheduled": "2022-12-24T18:00:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623601",
                "game_type": "regular",
                "venue": {
                    "id": "39be9ed4-3292-49ac-8699-a381de3a4969",
                    "name": "Bank of America Stadium",
                    "city": "Charlotte",
                    "state": "NC",
                    "country": "USA",
                    "zip": "28202",
                    "address": "800 South Mint Street",
                    "capacity": 75419,
                    "surface": "artificial",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8173",
                    "location": {
                        "lat": "35.225937",
                        "lng": "-80.853133"
                    }
                },
                "home": {
                    "id": "f14bf5cc-9a82-4a38-bc15-d39f75ed5314",
                    "name": "Carolina Panthers",
                    "alias": "CAR",
                    "game_number": 15,
                    "sr_id": "sr:competitor:4415"
                },
                "away": {
                    "id": "c5a59daa-53a7-4de0-851f-fb12be893e9e",
                    "name": "Detroit Lions",
                    "alias": "DET",
                    "game_number": 15,
                    "sr_id": "sr:competitor:4419"
                },
                "broadcast": {
                    "network": "FOX"
                }
            },
            {
                "id": "e28ece47-84ed-4f83-a5f5-6bfd6cf58396",
                "status": "scheduled",
                "scheduled": "2022-12-24T18:00:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623607",
                "game_type": "regular",
                "venue": {
                    "id": "2ec4c411-dac2-403d-b091-6b6aa4a0a914",
                    "name": "GEHA Field at Arrowhead Stadium",
                    "city": "Kansas City",
                    "state": "MO",
                    "country": "USA",
                    "zip": "64129",
                    "address": "One Arrowhead Drive",
                    "capacity": 76416,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8189",
                    "location": {
                        "lat": "39.049019",
                        "lng": "-94.484140"
                    }
                },
                "home": {
                    "id": "6680d28d-d4d2-49f6-aace-5292d3ec02c2",
                    "name": "Kansas City Chiefs",
                    "alias": "KC",
                    "game_number": 15,
                    "sr_id": "sr:competitor:4422"
                },
                "away": {
                    "id": "3d08af9e-c767-4f88-a7dc-b920c6d2b4a8",
                    "name": "Seattle Seahawks",
                    "alias": "SEA",
                    "game_number": 15,
                    "sr_id": "sr:competitor:4430"
                },
                "broadcast": {
                    "network": "FOX"
                }
            },
            {
                "id": "f98ba7c3-d9cf-470d-a1b9-8557e148ece4",
                "status": "scheduled",
                "scheduled": "2022-12-24T18:00:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623613",
                "game_type": "regular",
                "venue": {
                    "id": "5295c1b7-c85c-49cb-9569-1707c65324e5",
                    "name": "Nissan Stadium",
                    "city": "Nashville",
                    "state": "TN",
                    "country": "USA",
                    "zip": "37213",
                    "address": "One Titans Way",
                    "capacity": 69143,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8207",
                    "location": {
                        "lat": "36.166367",
                        "lng": "-86.771223"
                    }
                },
                "home": {
                    "id": "d26a1ca5-722d-4274-8f97-c92e49c96315",
                    "name": "Tennessee Titans",
                    "alias": "TEN",
                    "game_number": 15,
                    "sr_id": "sr:competitor:367364"
                },
                "away": {
                    "id": "82d2d380-3834-4938-835f-aec541e5ece7",
                    "name": "Houston Texans",
                    "alias": "HOU",
                    "game_number": 15,
                    "sr_id": "sr:competitor:4324"
                },
                "broadcast": {
                    "network": "CBS"
                }
            },
            {
                "id": "2b86a156-8ba0-4c37-969e-fa14372dd263",
                "status": "scheduled",
                "scheduled": "2022-12-24T21:05:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623615",
                "game_type": "regular",
                "venue": {
                    "id": "24c71dbf-6469-46f1-8165-22005c295c8f",
                    "name": "Levi's Stadium",
                    "city": "Santa Clara",
                    "state": "CA",
                    "country": "USA",
                    "zip": "95054",
                    "address": "4900 Marie P DeBartolo Way",
                    "capacity": 68500,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:15672",
                    "location": {
                        "lat": "37.403000",
                        "lng": "-121.970000"
                    }
                },
                "home": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "San Francisco 49ers",
                    "alias": "SF",
                    "game_number": 15,
                    "sr_id": "sr:competitor:4389"
                },
                "away": {
                    "id": "22052ff7-c065-42ee-bc8f-c4691c50e624",
                    "name": "Washington Commanders",
                    "alias": "WAS",
                    "game_number": 15,
                    "sr_id": "sr:competitor:4432"
                },
                "broadcast": {
                    "network": "CBS"
                }
            },
            {
                "id": "95fb687b-d407-4eb1-907f-af18e41eda0a",
                "status": "scheduled",
                "scheduled": "2022-12-24T21:25:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623617",
                "game_type": "regular",
                "venue": {
                    "id": "1e84213a-ff1f-4c9d-a003-8ee782b25a40",
                    "name": "AT&T Stadium",
                    "city": "Arlington",
                    "state": "TX",
                    "country": "USA",
                    "zip": "76011",
                    "address": "One Legends Way",
                    "capacity": 80000,
                    "surface": "artificial",
                    "roof_type": "retractable_dome",
                    "sr_id": "sr:venue:6650",
                    "location": {
                        "lat": "32.747778",
                        "lng": "-97.092778"
                    }
                },
                "home": {
                    "id": "e627eec7-bbae-4fa4-8e73-8e1d6bc5c060",
                    "name": "Dallas Cowboys",
                    "alias": "DAL",
                    "game_number": 15,
                    "sr_id": "sr:competitor:4392"
                },
                "away": {
                    "id": "386bdbf9-9eea-4869-bb9a-274b0bc66e80",
                    "name": "Philadelphia Eagles",
                    "alias": "PHI",
                    "game_number": 15,
                    "sr_id": "sr:competitor:4428"
                },
                "broadcast": {
                    "network": "FOX"
                }
            },
            {
                "id": "1348ec41-0920-450b-b809-440581016fac",
                "status": "scheduled",
                "scheduled": "2022-12-25T01:15:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623619",
                "game_type": "regular",
                "venue": {
                    "id": "7349a2e6-0ac9-410b-8bd2-ca58c9f7aa34",
                    "name": "Acrisure Stadium",
                    "city": "Pittsburgh",
                    "state": "PA",
                    "country": "USA",
                    "zip": "15212",
                    "address": "100 Art Rooney Avenue",
                    "capacity": 68400,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8197",
                    "location": {
                        "lat": "40.446653",
                        "lng": "-80.015844"
                    }
                },
                "home": {
                    "id": "cb2f9f1f-ac67-424e-9e72-1475cb0ed398",
                    "name": "Pittsburgh Steelers",
                    "alias": "PIT",
                    "game_number": 15,
                    "sr_id": "sr:competitor:4345"
                },
                "away": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Las Vegas Raiders",
                    "alias": "LV",
                    "game_number": 15,
                    "sr_id": "sr:competitor:4390"
                },
                "broadcast": {
                    "network": "NFL Network",
                    "satellite": "212"
                }
            },
            {
                "id": "b9ceeb26-c2c5-45ac-8a5f-f01639818e4c",
                "status": "scheduled",
                "scheduled": "2022-12-25T18:00:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623621",
                "game_type": "regular",
                "venue": {
                    "id": "50a5c833-1570-4c38-abc7-7914cf87dbde",
                    "name": "Hard Rock Stadium",
                    "city": "Miami Gardens",
                    "state": "FL",
                    "country": "USA",
                    "zip": "33056",
                    "address": "2269 Northwest 199th Street",
                    "capacity": 65326,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:21306",
                    "location": {
                        "lat": "25.958025",
                        "lng": "-80.238724"
                    }
                },
                "home": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Miami Dolphins",
                    "alias": "MIA",
                    "game_number": 15,
                    "sr_id": "sr:competitor:4287"
                },
                "away": {
                    "id": "a20471b4-a8d9-40c7-95ad-90cc30e46932",
                    "name": "Green Bay Packers",
                    "alias": "GB",
                    "game_number": 15,
                    "sr_id": "sr:competitor:4420"
                },
                "broadcast": {
                    "network": "FOX"
                }
            },
            {
                "id": "409f6cec-7369-48fc-b707-9a85621fe059",
                "status": "scheduled",
                "scheduled": "2022-12-25T21:30:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33604181",
                "game_type": "regular",
                "venue": {
                    "id": "790c1f04-73c6-4f6f-8b1e-78a62260be90",
                    "name": "SoFi Stadium",
                    "city": "Inglewood",
                    "state": "CA",
                    "country": "USA",
                    "zip": "90301",
                    "address": "1000 S Prairie Ave",
                    "capacity": 70240,
                    "surface": "artificial",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:52183",
                    "location": {
                        "lat": "33.953536",
                        "lng": "-118.338734"
                    }
                },
                "home": {
                    "id": "2eff2a03-54d4-46ba-890e-2bc3925548f3",
                    "name": "Los Angeles Rams",
                    "alias": "LA",
                    "game_number": 15,
                    "sr_id": "sr:competitor:4387"
                },
                "away": {
                    "id": "ce92bd47-93d5-4fe9-ada4-0fc681e6caa0",
                    "name": "Denver Broncos",
                    "alias": "DEN",
                    "game_number": 15,
                    "sr_id": "sr:competitor:4418"
                },
                "broadcast": {
                    "network": "CBS"
                }
            },
            {
                "id": "87097385-eb47-4932-89a0-656c35c0d285",
                "status": "scheduled",
                "scheduled": "2022-12-26T01:20:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623623",
                "game_type": "regular",
                "venue": {
                    "id": "f8e4d2ab-53f9-4e9f-8c4a-9bc278094a84",
                    "name": "State Farm Stadium",
                    "city": "Glendale",
                    "state": "AZ",
                    "country": "USA",
                    "zip": "85305",
                    "address": "One Cardinals Drive",
                    "capacity": 63400,
                    "surface": "turf",
                    "roof_type": "retractable_dome",
                    "sr_id": "sr:venue:8165",
                    "location": {
                        "lat": "33.527765",
                        "lng": "-112.262090"
                    }
                },
                "home": {
                    "id": "de760528-1dc0-416a-a978-b510d20692ff",
                    "name": "Arizona Cardinals",
                    "alias": "ARI",
                    "game_number": 15,
                    "sr_id": "sr:competitor:4412"
                },
                "away": {
                    "id": "4254d319-1bc7-4f81-b4ab-b5e6f3402b69",
                    "name": "Tampa Bay Buccaneers",
                    "alias": "TB",
                    "game_number": 15,
                    "sr_id": "sr:competitor:4388"
                },
                "broadcast": {
                    "network": "NBC"
                }
            },
            {
                "id": "9f0a94c7-439a-44f3-979a-ca66855ce34a",
                "status": "scheduled",
                "scheduled": "2022-12-27T01:15:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623625",
                "game_type": "regular",
                "venue": {
                    "id": "6ed18563-53e0-46c2-a91d-12d73a16456d",
                    "name": "Lucas Oil Stadium",
                    "city": "Indianapolis",
                    "state": "IN",
                    "country": "USA",
                    "zip": "46225",
                    "address": "500 South Capitol Avenue",
                    "capacity": 67000,
                    "surface": "artificial",
                    "roof_type": "retractable_dome",
                    "sr_id": "sr:venue:8185",
                    "location": {
                        "lat": "39.760008",
                        "lng": "-86.163906"
                    }
                },
                "home": {
                    "id": "82cf9565-6eb9-4f01-bdbd-5aa0d472fcd9",
                    "name": "Indianapolis Colts",
                    "alias": "IND",
                    "game_number": 15,
                    "sr_id": "sr:competitor:4421"
                },
                "away": {
                    "id": "1f6dcffb-9823-43cd-9ff4-e7a8466749b5",
                    "name": "Los Angeles Chargers",
                    "alias": "LAC",
                    "game_number": 15,
                    "sr_id": "sr:competitor:4429"
                },
                "broadcast": {
                    "network": "ESPN",
                    "satellite": "206"
                }
            }
        ],
        "createdAt": "2022-11-02T23:27:20.293Z",
        "updatedAt": "2022-11-02T23:27:20.293Z",
        "__v": 0
    },
    {
        "_id": "6362fcd8a05a14afa1a59d28",
        "weekNumber": 17,
        "games": [
            {
                "id": "ef0c58f6-54f6-4889-b880-8a503494d138",
                "status": "scheduled",
                "scheduled": "2022-12-30T01:15:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623627",
                "game_type": "regular",
                "venue": {
                    "id": "5295c1b7-c85c-49cb-9569-1707c65324e5",
                    "name": "Nissan Stadium",
                    "city": "Nashville",
                    "state": "TN",
                    "country": "USA",
                    "zip": "37213",
                    "address": "One Titans Way",
                    "capacity": 69143,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8207",
                    "location": {
                        "lat": "36.166367",
                        "lng": "-86.771223"
                    }
                },
                "home": {
                    "id": "d26a1ca5-722d-4274-8f97-c92e49c96315",
                    "name": "Tennessee Titans",
                    "alias": "TEN",
                    "game_number": 16,
                    "sr_id": "sr:competitor:367364"
                },
                "away": {
                    "id": "e627eec7-bbae-4fa4-8e73-8e1d6bc5c060",
                    "name": "Dallas Cowboys",
                    "alias": "DAL",
                    "game_number": 16,
                    "sr_id": "sr:competitor:4392"
                },
                "broadcast": {
                    "network": "Amazon Prime Video"
                }
            },
            {
                "id": "1be368b9-7379-4d76-b954-9d3e7eefc1c1",
                "status": "scheduled",
                "scheduled": "2023-01-01T18:00:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623639",
                "game_type": "regular",
                "venue": {
                    "id": "e43310b1-cb82-4df9-8be5-e9b39637031b",
                    "name": "Gillette Stadium",
                    "city": "Foxborough",
                    "state": "MA",
                    "country": "USA",
                    "zip": "02035",
                    "address": "One Patriot Place",
                    "capacity": 66829,
                    "surface": "artificial",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:2379",
                    "location": {
                        "lat": "42.090944",
                        "lng": "-71.264344"
                    }
                },
                "home": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "New England Patriots",
                    "alias": "NE",
                    "game_number": 16,
                    "sr_id": "sr:competitor:4424"
                },
                "away": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Miami Dolphins",
                    "alias": "MIA",
                    "game_number": 16,
                    "sr_id": "sr:competitor:4287"
                },
                "broadcast": {
                    "network": "CBS"
                }
            },
            {
                "id": "2f1ee220-e31b-4427-8686-b65f7f151776",
                "status": "scheduled",
                "scheduled": "2023-01-01T18:00:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623647",
                "game_type": "regular",
                "venue": {
                    "id": "7c11bb2d-4a53-4842-b842-0f1c63ed78e9",
                    "name": "FedExField",
                    "city": "Landover",
                    "state": "MD",
                    "country": "USA",
                    "zip": "20785",
                    "address": "1600 FedEx Way",
                    "capacity": 82000,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:6652",
                    "location": {
                        "lat": "38.907724",
                        "lng": "-76.864613"
                    }
                },
                "home": {
                    "id": "22052ff7-c065-42ee-bc8f-c4691c50e624",
                    "name": "Washington Commanders",
                    "alias": "WAS",
                    "game_number": 16,
                    "sr_id": "sr:competitor:4432"
                },
                "away": {
                    "id": "d5a2eb42-8065-4174-ab79-0a6fa820e35e",
                    "name": "Cleveland Browns",
                    "alias": "CLE",
                    "game_number": 16,
                    "sr_id": "sr:competitor:4417"
                },
                "broadcast": {
                    "network": "FOX"
                }
            },
            {
                "id": "812e3626-aea7-4907-b726-3b2dc719667c",
                "status": "scheduled",
                "scheduled": "2023-01-01T18:00:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623629",
                "game_type": "regular",
                "venue": {
                    "id": "1f2d393b-2291-4835-a412-0714966ea245",
                    "name": "Mercedes-Benz Stadium",
                    "city": "Atlanta",
                    "state": "GA",
                    "country": "USA",
                    "zip": "30313",
                    "address": "441 Martin Luther King Jr Drive NW",
                    "capacity": 71000,
                    "surface": "artificial",
                    "roof_type": "retractable_dome",
                    "sr_id": "sr:venue:20343",
                    "location": {
                        "lat": "33.757368",
                        "lng": "-84.401008"
                    }
                },
                "home": {
                    "id": "e6aa13a4-0055-48a9-bc41-be28dc106929",
                    "name": "Atlanta Falcons",
                    "alias": "ATL",
                    "game_number": 16,
                    "sr_id": "sr:competitor:4393"
                },
                "away": {
                    "id": "de760528-1dc0-416a-a978-b510d20692ff",
                    "name": "Arizona Cardinals",
                    "alias": "ARI",
                    "game_number": 16,
                    "sr_id": "sr:competitor:4412"
                },
                "broadcast": {
                    "network": "FOX"
                }
            },
            {
                "id": "86b4dcc4-cc87-43b7-98e1-ea82b24dd400",
                "status": "scheduled",
                "scheduled": "2023-01-01T18:00:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623635",
                "game_type": "regular",
                "venue": {
                    "id": "6a72e5ca-33d0-40af-8e6b-b32a4d3d9346",
                    "name": "NRG Stadium",
                    "city": "Houston",
                    "state": "TX",
                    "country": "USA",
                    "zip": "77054",
                    "address": "One Reliant Park",
                    "capacity": 72220,
                    "surface": "artificial",
                    "roof_type": "retractable_dome",
                    "sr_id": "sr:venue:2402",
                    "location": {
                        "lat": "29.684735",
                        "lng": "-95.410725"
                    }
                },
                "home": {
                    "id": "82d2d380-3834-4938-835f-aec541e5ece7",
                    "name": "Houston Texans",
                    "alias": "HOU",
                    "game_number": 16,
                    "sr_id": "sr:competitor:4324"
                },
                "away": {
                    "id": "f7ddd7fa-0bae-4f90-bc8e-669e4d6cf2de",
                    "name": "Jacksonville Jaguars",
                    "alias": "JAC",
                    "game_number": 16,
                    "sr_id": "sr:competitor:4386"
                },
                "broadcast": {
                    "network": "CBS"
                }
            },
            {
                "id": "ae1134d1-7e07-4197-8e9b-9fff27ff6519",
                "status": "scheduled",
                "scheduled": "2023-01-01T18:00:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623641",
                "game_type": "regular",
                "venue": {
                    "id": "5d4c85c7-d84e-4e10-bd6a-8a15ebecca5c",
                    "name": "MetLife Stadium",
                    "city": "East Rutherford",
                    "state": "NJ",
                    "country": "USA",
                    "zip": "07073",
                    "address": "One MetLife Stadium Drive",
                    "capacity": 82500,
                    "surface": "artificial",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:1981",
                    "location": {
                        "lat": "40.813611",
                        "lng": "-74.074444"
                    }
                },
                "home": {
                    "id": "04aa1c9d-66da-489d-b16a-1dee3f2eec4d",
                    "name": "New York Giants",
                    "alias": "NYG",
                    "game_number": 16,
                    "sr_id": "sr:competitor:4426"
                },
                "away": {
                    "id": "82cf9565-6eb9-4f01-bdbd-5aa0d472fcd9",
                    "name": "Indianapolis Colts",
                    "alias": "IND",
                    "game_number": 16,
                    "sr_id": "sr:competitor:4421"
                },
                "broadcast": {
                    "network": "CBS"
                }
            },
            {
                "id": "bb9a5164-71d2-4efb-9d3e-13c5a4b7df04",
                "status": "scheduled",
                "scheduled": "2023-01-01T18:00:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623637",
                "game_type": "regular",
                "venue": {
                    "id": "2ec4c411-dac2-403d-b091-6b6aa4a0a914",
                    "name": "GEHA Field at Arrowhead Stadium",
                    "city": "Kansas City",
                    "state": "MO",
                    "country": "USA",
                    "zip": "64129",
                    "address": "One Arrowhead Drive",
                    "capacity": 76416,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8189",
                    "location": {
                        "lat": "39.049019",
                        "lng": "-94.484140"
                    }
                },
                "home": {
                    "id": "6680d28d-d4d2-49f6-aace-5292d3ec02c2",
                    "name": "Kansas City Chiefs",
                    "alias": "KC",
                    "game_number": 16,
                    "sr_id": "sr:competitor:4422"
                },
                "away": {
                    "id": "ce92bd47-93d5-4fe9-ada4-0fc681e6caa0",
                    "name": "Denver Broncos",
                    "alias": "DEN",
                    "game_number": 16,
                    "sr_id": "sr:competitor:4418"
                },
                "broadcast": {
                    "network": "CBS"
                }
            },
            {
                "id": "beedd537-287a-4699-82b6-58387becf9ad",
                "status": "scheduled",
                "scheduled": "2023-01-01T18:00:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623645",
                "game_type": "regular",
                "venue": {
                    "id": "6fccc39c-80bc-4c81-83d9-2d5a848c8c09",
                    "name": "Raymond James Stadium",
                    "city": "Tampa",
                    "state": "FL",
                    "country": "USA",
                    "zip": "33607",
                    "address": "4201 North Dale Mabry Highway",
                    "capacity": 65890,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8205",
                    "location": {
                        "lat": "27.976211",
                        "lng": "-82.503625"
                    }
                },
                "home": {
                    "id": "4254d319-1bc7-4f81-b4ab-b5e6f3402b69",
                    "name": "Tampa Bay Buccaneers",
                    "alias": "TB",
                    "game_number": 16,
                    "sr_id": "sr:competitor:4388"
                },
                "away": {
                    "id": "f14bf5cc-9a82-4a38-bc15-d39f75ed5314",
                    "name": "Carolina Panthers",
                    "alias": "CAR",
                    "game_number": 16,
                    "sr_id": "sr:competitor:4415"
                },
                "broadcast": {
                    "network": "FOX"
                }
            },
            {
                "id": "cbf9656b-66ec-4568-b697-93f0f723949b",
                "status": "scheduled",
                "scheduled": "2023-01-01T18:00:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623633",
                "game_type": "regular",
                "venue": {
                    "id": "6e3bcf22-277d-4c06-b019-62aded51654f",
                    "name": "Ford Field",
                    "city": "Detroit",
                    "state": "MI",
                    "country": "USA",
                    "zip": "48226",
                    "address": "2000 Brush Street",
                    "capacity": 65000,
                    "surface": "artificial",
                    "roof_type": "dome",
                    "sr_id": "sr:venue:8181",
                    "location": {
                        "lat": "42.339958",
                        "lng": "-83.045636"
                    }
                },
                "home": {
                    "id": "c5a59daa-53a7-4de0-851f-fb12be893e9e",
                    "name": "Detroit Lions",
                    "alias": "DET",
                    "game_number": 16,
                    "sr_id": "sr:competitor:4419"
                },
                "away": {
                    "id": "7b112545-38e6-483c-a55c-96cf6ee49cb8",
                    "name": "Chicago Bears",
                    "alias": "CHI",
                    "game_number": 16,
                    "sr_id": "sr:competitor:4391"
                },
                "broadcast": {
                    "network": "FOX"
                }
            },
            {
                "id": "ce9870af-6d45-403a-bf73-2cf6d3382c52",
                "status": "scheduled",
                "scheduled": "2023-01-01T18:00:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623643",
                "game_type": "regular",
                "venue": {
                    "id": "4fa8c29c-6626-464c-8540-314ed7535e1b",
                    "name": "Lincoln Financial Field",
                    "city": "Philadelphia",
                    "state": "PA",
                    "country": "USA",
                    "zip": "19148",
                    "address": "1020 Pattison Avenue",
                    "capacity": 69596,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:1833",
                    "location": {
                        "lat": "39.900872",
                        "lng": "-75.167311"
                    }
                },
                "home": {
                    "id": "386bdbf9-9eea-4869-bb9a-274b0bc66e80",
                    "name": "Philadelphia Eagles",
                    "alias": "PHI",
                    "game_number": 16,
                    "sr_id": "sr:competitor:4428"
                },
                "away": {
                    "id": "0d855753-ea21-4953-89f9-0e20aff9eb73",
                    "name": "New Orleans Saints",
                    "alias": "NO",
                    "game_number": 16,
                    "sr_id": "sr:competitor:4425"
                },
                "broadcast": {
                    "network": "FOX"
                }
            },
            {
                "id": "f96a8e3f-f7d4-4b8d-8a5d-9c5c0bf1d0e0",
                "status": "scheduled",
                "scheduled": "2023-01-01T18:00:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623631",
                "game_type": "regular",
                "venue": {
                    "id": "d54faae0-0314-484f-8604-9d8dd08e1149",
                    "name": "M&T Bank Stadium",
                    "city": "Baltimore",
                    "state": "MD",
                    "country": "USA",
                    "zip": "21230",
                    "address": "1101 Russell Street",
                    "capacity": 71008,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8169",
                    "location": {
                        "lat": "39.277995",
                        "lng": "-76.622592"
                    }
                },
                "home": {
                    "id": "ebd87119-b331-4469-9ea6-d51fe3ce2f1c",
                    "name": "Baltimore Ravens",
                    "alias": "BAL",
                    "game_number": 16,
                    "sr_id": "sr:competitor:4413"
                },
                "away": {
                    "id": "cb2f9f1f-ac67-424e-9e72-1475cb0ed398",
                    "name": "Pittsburgh Steelers",
                    "alias": "PIT",
                    "game_number": 16,
                    "sr_id": "sr:competitor:4345"
                },
                "broadcast": {
                    "network": "CBS"
                }
            },
            {
                "id": "397e9db0-eb0d-44ec-a579-848b32b116f2",
                "status": "scheduled",
                "scheduled": "2023-01-01T21:05:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623649",
                "game_type": "regular",
                "venue": {
                    "id": "53d42601-5dfb-40a7-bd94-da2c1d3a75e4",
                    "name": "Allegiant Stadium",
                    "city": "Las Vegas",
                    "state": "NV",
                    "country": "USA",
                    "zip": "89118",
                    "address": "3333 Al Davis Way",
                    "capacity": 65000,
                    "surface": "turf",
                    "roof_type": "dome",
                    "sr_id": "sr:venue:51543",
                    "location": {
                        "lat": "36.090852",
                        "lng": "-115.183339"
                    }
                },
                "home": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Las Vegas Raiders",
                    "alias": "LV",
                    "game_number": 16,
                    "sr_id": "sr:competitor:4390"
                },
                "away": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "San Francisco 49ers",
                    "alias": "SF",
                    "game_number": 16,
                    "sr_id": "sr:competitor:4389"
                },
                "broadcast": {
                    "network": "FOX"
                }
            },
            {
                "id": "efa47ae7-e65b-4ae2-bc09-4400d8ec093e",
                "status": "scheduled",
                "scheduled": "2023-01-01T21:05:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623651",
                "game_type": "regular",
                "venue": {
                    "id": "c6b9e5df-c9e4-434c-b3e6-83928f11cbda",
                    "name": "Lumen Field",
                    "city": "Seattle",
                    "state": "WA",
                    "country": "USA",
                    "zip": "98134",
                    "address": "800 Occidental Avenue South",
                    "capacity": 68000,
                    "surface": "artificial",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:2291",
                    "location": {
                        "lat": "47.595165",
                        "lng": "-122.331650"
                    }
                },
                "home": {
                    "id": "3d08af9e-c767-4f88-a7dc-b920c6d2b4a8",
                    "name": "Seattle Seahawks",
                    "alias": "SEA",
                    "game_number": 16,
                    "sr_id": "sr:competitor:4430"
                },
                "away": {
                    "id": "5fee86ae-74ab-4bdd-8416-42a9dd9964f3",
                    "name": "New York Jets",
                    "alias": "NYJ",
                    "game_number": 16,
                    "sr_id": "sr:competitor:4427"
                },
                "broadcast": {
                    "network": "FOX"
                }
            },
            {
                "id": "836f3e95-a59b-4ec2-8461-932548ca3acd",
                "status": "scheduled",
                "scheduled": "2023-01-01T21:25:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623653",
                "game_type": "regular",
                "venue": {
                    "id": "5a60dd3a-302c-41c6-ab0f-dd335c1103c2",
                    "name": "Lambeau Field",
                    "city": "Green Bay",
                    "state": "WI",
                    "country": "USA",
                    "zip": "54304",
                    "address": "1265 Lombardi Avenue",
                    "capacity": 81435,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8183",
                    "location": {
                        "lat": "44.501357",
                        "lng": "-88.062440"
                    }
                },
                "home": {
                    "id": "a20471b4-a8d9-40c7-95ad-90cc30e46932",
                    "name": "Green Bay Packers",
                    "alias": "GB",
                    "game_number": 16,
                    "sr_id": "sr:competitor:4420"
                },
                "away": {
                    "id": "33405046-04ee-4058-a950-d606f8c30852",
                    "name": "Minnesota Vikings",
                    "alias": "MIN",
                    "game_number": 16,
                    "sr_id": "sr:competitor:4423"
                },
                "broadcast": {
                    "network": "CBS"
                }
            },
            {
                "id": "7d5ce394-4034-4ce3-b500-baff56fe0546",
                "status": "scheduled",
                "scheduled": "2023-01-02T01:20:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623655",
                "game_type": "regular",
                "venue": {
                    "id": "790c1f04-73c6-4f6f-8b1e-78a62260be90",
                    "name": "SoFi Stadium",
                    "city": "Inglewood",
                    "state": "CA",
                    "country": "USA",
                    "zip": "90301",
                    "address": "1000 S Prairie Ave",
                    "capacity": 70240,
                    "surface": "artificial",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:52183",
                    "location": {
                        "lat": "33.953536",
                        "lng": "-118.338734"
                    }
                },
                "home": {
                    "id": "1f6dcffb-9823-43cd-9ff4-e7a8466749b5",
                    "name": "Los Angeles Chargers",
                    "alias": "LAC",
                    "game_number": 16,
                    "sr_id": "sr:competitor:4429"
                },
                "away": {
                    "id": "2eff2a03-54d4-46ba-890e-2bc3925548f3",
                    "name": "Los Angeles Rams",
                    "alias": "LA",
                    "game_number": 16,
                    "sr_id": "sr:competitor:4387"
                },
                "broadcast": {
                    "network": "NBC"
                }
            },
            {
                "id": "7c0c0abf-f566-4a1f-a482-b74a991e1663",
                "status": "scheduled",
                "scheduled": "2023-01-03T01:30:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623657",
                "game_type": "regular",
                "venue": {
                    "id": "b87a1595-d3c8-48ea-8a53-0aab6378a64a",
                    "name": "Paycor Stadium",
                    "city": "Cincinnati",
                    "state": "OH",
                    "country": "USA",
                    "zip": "45202",
                    "address": "One Paul Brown Stadium",
                    "capacity": 65515,
                    "surface": "artificial",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8175",
                    "location": {
                        "lat": "39.095413",
                        "lng": "-84.516204"
                    }
                },
                "home": {
                    "id": "ad4ae08f-d808-42d5-a1e6-e9bc4e34d123",
                    "name": "Cincinnati Bengals",
                    "alias": "CIN",
                    "game_number": 16,
                    "sr_id": "sr:competitor:4416"
                },
                "away": {
                    "id": "768c92aa-75ff-4a43-bcc0-f2798c2e1724",
                    "name": "Buffalo Bills",
                    "alias": "BUF",
                    "game_number": 16,
                    "sr_id": "sr:competitor:4376"
                },
                "broadcast": {
                    "network": "ESPN",
                    "satellite": "206"
                }
            }
        ],
        "createdAt": "2022-11-02T23:27:20.320Z",
        "updatedAt": "2022-11-02T23:27:20.320Z",
        "__v": 0
    },
    {
        "_id": "6362fcd8a05a14afa1a59d2a",
        "weekNumber": 18,
        "games": [
            {
                "id": "0b690459-804a-4f62-9625-077b0c3e21da",
                "status": "flex-schedule",
                "scheduled": "2023-01-08T18:00:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623699",
                "game_type": "regular",
                "venue": {
                    "id": "c6b9e5df-c9e4-434c-b3e6-83928f11cbda",
                    "name": "Lumen Field",
                    "city": "Seattle",
                    "state": "WA",
                    "country": "USA",
                    "zip": "98134",
                    "address": "800 Occidental Avenue South",
                    "capacity": 68000,
                    "surface": "artificial",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:2291",
                    "location": {
                        "lat": "47.595165",
                        "lng": "-122.331650"
                    }
                },
                "home": {
                    "id": "3d08af9e-c767-4f88-a7dc-b920c6d2b4a8",
                    "name": "Seattle Seahawks",
                    "alias": "SEA",
                    "game_number": 17,
                    "sr_id": "sr:competitor:4430"
                },
                "away": {
                    "id": "2eff2a03-54d4-46ba-890e-2bc3925548f3",
                    "name": "Los Angeles Rams",
                    "alias": "LA",
                    "game_number": 17,
                    "sr_id": "sr:competitor:4387"
                }
            },
            {
                "id": "189c02f5-7832-41a3-b6ec-dfa9d244e095",
                "status": "flex-schedule",
                "scheduled": "2023-01-08T18:00:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623681",
                "game_type": "regular",
                "venue": {
                    "id": "6ed18563-53e0-46c2-a91d-12d73a16456d",
                    "name": "Lucas Oil Stadium",
                    "city": "Indianapolis",
                    "state": "IN",
                    "country": "USA",
                    "zip": "46225",
                    "address": "500 South Capitol Avenue",
                    "capacity": 67000,
                    "surface": "artificial",
                    "roof_type": "retractable_dome",
                    "sr_id": "sr:venue:8185",
                    "location": {
                        "lat": "39.760008",
                        "lng": "-86.163906"
                    }
                },
                "home": {
                    "id": "82cf9565-6eb9-4f01-bdbd-5aa0d472fcd9",
                    "name": "Indianapolis Colts",
                    "alias": "IND",
                    "game_number": 17,
                    "sr_id": "sr:competitor:4421"
                },
                "away": {
                    "id": "82d2d380-3834-4938-835f-aec541e5ece7",
                    "name": "Houston Texans",
                    "alias": "HOU",
                    "game_number": 17,
                    "sr_id": "sr:competitor:4324"
                }
            },
            {
                "id": "2d05d64f-24c6-4d1a-a682-e909f7fcccf9",
                "status": "flex-schedule",
                "scheduled": "2023-01-08T18:00:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623697",
                "game_type": "regular",
                "venue": {
                    "id": "53d42601-5dfb-40a7-bd94-da2c1d3a75e4",
                    "name": "Allegiant Stadium",
                    "city": "Las Vegas",
                    "state": "NV",
                    "country": "USA",
                    "zip": "89118",
                    "address": "3333 Al Davis Way",
                    "capacity": 65000,
                    "surface": "turf",
                    "roof_type": "dome",
                    "sr_id": "sr:venue:51543",
                    "location": {
                        "lat": "36.090852",
                        "lng": "-115.183339"
                    }
                },
                "home": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Las Vegas Raiders",
                    "alias": "LV",
                    "game_number": 17,
                    "sr_id": "sr:competitor:4390"
                },
                "away": {
                    "id": "6680d28d-d4d2-49f6-aace-5292d3ec02c2",
                    "name": "Kansas City Chiefs",
                    "alias": "KC",
                    "game_number": 17,
                    "sr_id": "sr:competitor:4422"
                }
            },
            {
                "id": "3ca61a46-2cef-4962-a481-f7ae6d7751eb",
                "status": "flex-schedule",
                "scheduled": "2023-01-08T18:00:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623679",
                "game_type": "regular",
                "venue": {
                    "id": "5a60dd3a-302c-41c6-ab0f-dd335c1103c2",
                    "name": "Lambeau Field",
                    "city": "Green Bay",
                    "state": "WI",
                    "country": "USA",
                    "zip": "54304",
                    "address": "1265 Lombardi Avenue",
                    "capacity": 81435,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8183",
                    "location": {
                        "lat": "44.501357",
                        "lng": "-88.062440"
                    }
                },
                "home": {
                    "id": "a20471b4-a8d9-40c7-95ad-90cc30e46932",
                    "name": "Green Bay Packers",
                    "alias": "GB",
                    "game_number": 17,
                    "sr_id": "sr:competitor:4420"
                },
                "away": {
                    "id": "c5a59daa-53a7-4de0-851f-fb12be893e9e",
                    "name": "Detroit Lions",
                    "alias": "DET",
                    "game_number": 17,
                    "sr_id": "sr:competitor:4419"
                }
            },
            {
                "id": "521ea2e6-3f9b-4e15-b94c-cb76fa6ca785",
                "status": "flex-schedule",
                "scheduled": "2023-01-08T18:00:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623683",
                "game_type": "regular",
                "venue": {
                    "id": "4c5c036d-dd3d-4183-b595-71a43a97560f",
                    "name": "TIAA Bank Field",
                    "city": "Jacksonville",
                    "state": "FL",
                    "country": "USA",
                    "zip": "32202",
                    "address": "One EverBank Field Drive",
                    "capacity": 69132,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8187",
                    "location": {
                        "lat": "30.324027",
                        "lng": "-81.637239"
                    }
                },
                "home": {
                    "id": "f7ddd7fa-0bae-4f90-bc8e-669e4d6cf2de",
                    "name": "Jacksonville Jaguars",
                    "alias": "JAC",
                    "game_number": 17,
                    "sr_id": "sr:competitor:4386"
                },
                "away": {
                    "id": "d26a1ca5-722d-4274-8f97-c92e49c96315",
                    "name": "Tennessee Titans",
                    "alias": "TEN",
                    "game_number": 17,
                    "sr_id": "sr:competitor:367364"
                }
            },
            {
                "id": "5301e285-9d4b-4991-8f64-059bfd6bad13",
                "status": "flex-schedule",
                "scheduled": "2023-01-08T18:00:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623675",
                "game_type": "regular",
                "venue": {
                    "id": "d7866605-5ac6-4b3a-90e8-760cc5a26b75",
                    "name": "Soldier Field",
                    "city": "Chicago",
                    "state": "IL",
                    "country": "USA",
                    "zip": "60605",
                    "address": "1410 South Museum Campus Drive",
                    "capacity": 61500,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:2109",
                    "location": {
                        "lat": "41.862498",
                        "lng": "-87.616979"
                    }
                },
                "home": {
                    "id": "7b112545-38e6-483c-a55c-96cf6ee49cb8",
                    "name": "Chicago Bears",
                    "alias": "CHI",
                    "game_number": 17,
                    "sr_id": "sr:competitor:4391"
                },
                "away": {
                    "id": "33405046-04ee-4058-a950-d606f8c30852",
                    "name": "Minnesota Vikings",
                    "alias": "MIN",
                    "game_number": 17,
                    "sr_id": "sr:competitor:4423"
                }
            },
            {
                "id": "7913a1bc-a010-474c-922a-22b0d552fb9c",
                "status": "flex-schedule",
                "scheduled": "2023-01-08T18:00:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623677",
                "game_type": "regular",
                "venue": {
                    "id": "b87a1595-d3c8-48ea-8a53-0aab6378a64a",
                    "name": "Paycor Stadium",
                    "city": "Cincinnati",
                    "state": "OH",
                    "country": "USA",
                    "zip": "45202",
                    "address": "One Paul Brown Stadium",
                    "capacity": 65515,
                    "surface": "artificial",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8175",
                    "location": {
                        "lat": "39.095413",
                        "lng": "-84.516204"
                    }
                },
                "home": {
                    "id": "ad4ae08f-d808-42d5-a1e6-e9bc4e34d123",
                    "name": "Cincinnati Bengals",
                    "alias": "CIN",
                    "game_number": 17,
                    "sr_id": "sr:competitor:4416"
                },
                "away": {
                    "id": "ebd87119-b331-4469-9ea6-d51fe3ce2f1c",
                    "name": "Baltimore Ravens",
                    "alias": "BAL",
                    "game_number": 17,
                    "sr_id": "sr:competitor:4413"
                }
            },
            {
                "id": "9038a474-aafe-4c67-94b2-72c9e387b206",
                "status": "flex-schedule",
                "scheduled": "2023-01-08T18:00:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623695",
                "game_type": "regular",
                "venue": {
                    "id": "6589e61d-ef1e-4e30-91b5-9acd2072b8a0",
                    "name": "Empower Field at Mile High",
                    "city": "Denver",
                    "state": "CO",
                    "country": "USA",
                    "zip": "80204",
                    "address": "1701 Mile High Stadium Circle",
                    "capacity": 76125,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8179",
                    "location": {
                        "lat": "39.743865",
                        "lng": "-105.020158"
                    }
                },
                "home": {
                    "id": "ce92bd47-93d5-4fe9-ada4-0fc681e6caa0",
                    "name": "Denver Broncos",
                    "alias": "DEN",
                    "game_number": 17,
                    "sr_id": "sr:competitor:4418"
                },
                "away": {
                    "id": "1f6dcffb-9823-43cd-9ff4-e7a8466749b5",
                    "name": "Los Angeles Chargers",
                    "alias": "LAC",
                    "game_number": 17,
                    "sr_id": "sr:competitor:4429"
                }
            },
            {
                "id": "9163d9a1-945f-4b0f-9746-20eaf6a73de3",
                "status": "flex-schedule",
                "scheduled": "2023-01-08T18:00:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623685",
                "game_type": "regular",
                "venue": {
                    "id": "50a5c833-1570-4c38-abc7-7914cf87dbde",
                    "name": "Hard Rock Stadium",
                    "city": "Miami Gardens",
                    "state": "FL",
                    "country": "USA",
                    "zip": "33056",
                    "address": "2269 Northwest 199th Street",
                    "capacity": 65326,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:21306",
                    "location": {
                        "lat": "25.958025",
                        "lng": "-80.238724"
                    }
                },
                "home": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Miami Dolphins",
                    "alias": "MIA",
                    "game_number": 17,
                    "sr_id": "sr:competitor:4287"
                },
                "away": {
                    "id": "5fee86ae-74ab-4bdd-8416-42a9dd9964f3",
                    "name": "New York Jets",
                    "alias": "NYJ",
                    "game_number": 17,
                    "sr_id": "sr:competitor:4427"
                }
            },
            {
                "id": "9cfe315e-1497-41cf-b39c-deff6371f471",
                "status": "flex-schedule",
                "scheduled": "2023-01-08T18:00:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623687",
                "game_type": "regular",
                "venue": {
                    "id": "3c85d89a-ec66-4983-acd5-1381d6c8673a",
                    "name": "Caesars Superdome",
                    "city": "New Orleans",
                    "state": "LA",
                    "country": "USA",
                    "zip": "70112",
                    "address": "1500 Sugar Bowl Drive",
                    "capacity": 73208,
                    "surface": "artificial",
                    "roof_type": "dome",
                    "sr_id": "sr:venue:8195",
                    "location": {
                        "lat": "29.950928",
                        "lng": "-90.080876"
                    }
                },
                "home": {
                    "id": "0d855753-ea21-4953-89f9-0e20aff9eb73",
                    "name": "New Orleans Saints",
                    "alias": "NO",
                    "game_number": 17,
                    "sr_id": "sr:competitor:4425"
                },
                "away": {
                    "id": "f14bf5cc-9a82-4a38-bc15-d39f75ed5314",
                    "name": "Carolina Panthers",
                    "alias": "CAR",
                    "game_number": 17,
                    "sr_id": "sr:competitor:4415"
                }
            },
            {
                "id": "acb4aaf3-8850-4b35-abc6-d0f8f6824905",
                "status": "flex-schedule",
                "scheduled": "2023-01-08T18:00:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623689",
                "game_type": "regular",
                "venue": {
                    "id": "4fa8c29c-6626-464c-8540-314ed7535e1b",
                    "name": "Lincoln Financial Field",
                    "city": "Philadelphia",
                    "state": "PA",
                    "country": "USA",
                    "zip": "19148",
                    "address": "1020 Pattison Avenue",
                    "capacity": 69596,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:1833",
                    "location": {
                        "lat": "39.900872",
                        "lng": "-75.167311"
                    }
                },
                "home": {
                    "id": "386bdbf9-9eea-4869-bb9a-274b0bc66e80",
                    "name": "Philadelphia Eagles",
                    "alias": "PHI",
                    "game_number": 17,
                    "sr_id": "sr:competitor:4428"
                },
                "away": {
                    "id": "04aa1c9d-66da-489d-b16a-1dee3f2eec4d",
                    "name": "New York Giants",
                    "alias": "NYG",
                    "game_number": 17,
                    "sr_id": "sr:competitor:4426"
                }
            },
            {
                "id": "b3e960cd-6f6f-4da2-897c-ec30a9285e65",
                "status": "flex-schedule",
                "scheduled": "2023-01-08T18:00:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623673",
                "game_type": "regular",
                "venue": {
                    "id": "e9e0828e-37fc-4238-a317-49037577dd55",
                    "name": "Highmark Stadium",
                    "city": "Orchard Park",
                    "state": "NY",
                    "country": "USA",
                    "zip": "14127",
                    "address": "One Bills Drive",
                    "capacity": 71608,
                    "surface": "artificial",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8171",
                    "location": {
                        "lat": "42.773826",
                        "lng": "-78.786589"
                    }
                },
                "home": {
                    "id": "768c92aa-75ff-4a43-bcc0-f2798c2e1724",
                    "name": "Buffalo Bills",
                    "alias": "BUF",
                    "game_number": 17,
                    "sr_id": "sr:competitor:4376"
                },
                "away": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "New England Patriots",
                    "alias": "NE",
                    "game_number": 17,
                    "sr_id": "sr:competitor:4424"
                }
            },
            {
                "id": "b4adc1bb-a794-42ee-bd33-09646ea596e7",
                "status": "flex-schedule",
                "scheduled": "2023-01-08T18:00:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623701",
                "game_type": "regular",
                "venue": {
                    "id": "24c71dbf-6469-46f1-8165-22005c295c8f",
                    "name": "Levi's Stadium",
                    "city": "Santa Clara",
                    "state": "CA",
                    "country": "USA",
                    "zip": "95054",
                    "address": "4900 Marie P DeBartolo Way",
                    "capacity": 68500,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:15672",
                    "location": {
                        "lat": "37.403000",
                        "lng": "-121.970000"
                    }
                },
                "home": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "San Francisco 49ers",
                    "alias": "SF",
                    "game_number": 17,
                    "sr_id": "sr:competitor:4389"
                },
                "away": {
                    "id": "de760528-1dc0-416a-a978-b510d20692ff",
                    "name": "Arizona Cardinals",
                    "alias": "ARI",
                    "game_number": 17,
                    "sr_id": "sr:competitor:4412"
                }
            },
            {
                "id": "d714479c-d97d-4aad-9c71-0833ed049647",
                "status": "flex-schedule",
                "scheduled": "2023-01-08T18:00:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623671",
                "game_type": "regular",
                "venue": {
                    "id": "1f2d393b-2291-4835-a412-0714966ea245",
                    "name": "Mercedes-Benz Stadium",
                    "city": "Atlanta",
                    "state": "GA",
                    "country": "USA",
                    "zip": "30313",
                    "address": "441 Martin Luther King Jr Drive NW",
                    "capacity": 71000,
                    "surface": "artificial",
                    "roof_type": "retractable_dome",
                    "sr_id": "sr:venue:20343",
                    "location": {
                        "lat": "33.757368",
                        "lng": "-84.401008"
                    }
                },
                "home": {
                    "id": "e6aa13a4-0055-48a9-bc41-be28dc106929",
                    "name": "Atlanta Falcons",
                    "alias": "ATL",
                    "game_number": 17,
                    "sr_id": "sr:competitor:4393"
                },
                "away": {
                    "id": "4254d319-1bc7-4f81-b4ab-b5e6f3402b69",
                    "name": "Tampa Bay Buccaneers",
                    "alias": "TB",
                    "game_number": 17,
                    "sr_id": "sr:competitor:4388"
                }
            },
            {
                "id": "e6b71fe7-ecb3-4931-ad91-907dee42c561",
                "status": "flex-schedule",
                "scheduled": "2023-01-08T18:00:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623691",
                "game_type": "regular",
                "venue": {
                    "id": "7349a2e6-0ac9-410b-8bd2-ca58c9f7aa34",
                    "name": "Acrisure Stadium",
                    "city": "Pittsburgh",
                    "state": "PA",
                    "country": "USA",
                    "zip": "15212",
                    "address": "100 Art Rooney Avenue",
                    "capacity": 68400,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8197",
                    "location": {
                        "lat": "40.446653",
                        "lng": "-80.015844"
                    }
                },
                "home": {
                    "id": "cb2f9f1f-ac67-424e-9e72-1475cb0ed398",
                    "name": "Pittsburgh Steelers",
                    "alias": "PIT",
                    "game_number": 17,
                    "sr_id": "sr:competitor:4345"
                },
                "away": {
                    "id": "d5a2eb42-8065-4174-ab79-0a6fa820e35e",
                    "name": "Cleveland Browns",
                    "alias": "CLE",
                    "game_number": 17,
                    "sr_id": "sr:competitor:4417"
                }
            },
            {
                "id": "fdc4acd7-da9d-4dd0-b1ab-206432a5f781",
                "status": "flex-schedule",
                "scheduled": "2023-01-08T18:00:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623693",
                "game_type": "regular",
                "venue": {
                    "id": "7c11bb2d-4a53-4842-b842-0f1c63ed78e9",
                    "name": "FedExField",
                    "city": "Landover",
                    "state": "MD",
                    "country": "USA",
                    "zip": "20785",
                    "address": "1600 FedEx Way",
                    "capacity": 82000,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:6652",
                    "location": {
                        "lat": "38.907724",
                        "lng": "-76.864613"
                    }
                },
                "home": {
                    "id": "22052ff7-c065-42ee-bc8f-c4691c50e624",
                    "name": "Washington Commanders",
                    "alias": "WAS",
                    "game_number": 17,
                    "sr_id": "sr:competitor:4432"
                },
                "away": {
                    "id": "e627eec7-bbae-4fa4-8e73-8e1d6bc5c060",
                    "name": "Dallas Cowboys",
                    "alias": "DAL",
                    "game_number": 17,
                    "sr_id": "sr:competitor:4392"
                }
            }
        ],
        "createdAt": "2022-11-02T23:27:20.348Z",
        "updatedAt": "2022-11-02T23:27:20.348Z",
        "__v": 0
    },
    {
        "_id": "6362fcd8a05a14afa1a59d20",
        "weekNumber": 5,
        "games": [
            {
                "id": "f19f51de-5185-460f-bdc5-ec5887276fa4",
                "status": "closed",
                "scheduled": "2022-10-07T00:15:00+00:00",
                "attendance": 76667,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623297",
                "game_type": "regular",
                "duration": "3:30",
                "venue": {
                    "id": "6589e61d-ef1e-4e30-91b5-9acd2072b8a0",
                    "name": "Empower Field at Mile High",
                    "city": "Denver",
                    "state": "CO",
                    "country": "USA",
                    "zip": "80204",
                    "address": "1701 Mile High Stadium Circle",
                    "capacity": 76125,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8179",
                    "location": {
                        "lat": "39.743865",
                        "lng": "-105.020158"
                    }
                },
                "home": {
                    "id": "ce92bd47-93d5-4fe9-ada4-0fc681e6caa0",
                    "name": "Denver Broncos",
                    "alias": "DEN",
                    "game_number": 5,
                    "sr_id": "sr:competitor:4418"
                },
                "away": {
                    "id": "82cf9565-6eb9-4f01-bdbd-5aa0d472fcd9",
                    "name": "Indianapolis Colts",
                    "alias": "IND",
                    "game_number": 5,
                    "sr_id": "sr:competitor:4421"
                },
                "broadcast": {
                    "network": "Amazon Prime Video"
                },
                "weather": {
                    "condition": "Partly cloudy",
                    "humidity": 23,
                    "temp": 71,
                    "wind": {
                        "speed": 9,
                        "direction": "ESE"
                    }
                },
                "scoring": {
                    "home_points": 9,
                    "away_points": 12,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "0e458fa3-5ea1-4ef3-8b60-1d142f06616d",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 3,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "73f94fce-8622-45b6-bcd0-6c90ad32f256",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 3,
                            "away_points": 3
                        },
                        {
                            "period_type": "quarter",
                            "id": "8d97ce59-873d-493a-a64b-533420c95488",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 3,
                            "away_points": 3
                        },
                        {
                            "period_type": "quarter",
                            "id": "67007e28-a25f-4fdc-8d5c-5ee3f529b2ed",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 0,
                            "away_points": 3
                        },
                        {
                            "period_type": "overtime",
                            "id": "909f8895-c0de-4cab-a6c7-dc3ae124eca2",
                            "number": 1,
                            "sequence": 5,
                            "home_points": 0,
                            "away_points": 3
                        }
                    ]
                }
            },
            {
                "id": "37d85a48-62c1-4c27-a05b-759fabd1b0c1",
                "status": "closed",
                "scheduled": "2022-10-09T13:30:00+00:00",
                "attendance": 61024,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33506747",
                "game_type": "regular",
                "duration": "2:59",
                "venue": {
                    "id": "4829986d-66a3-48da-8c82-aafe8b32ab19",
                    "name": "Tottenham Hotspur Stadium",
                    "city": "London",
                    "country": "GBR",
                    "address": "Tottenham Stadium",
                    "capacity": 60463,
                    "surface": "artificial",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:28762"
                },
                "home": {
                    "id": "a20471b4-a8d9-40c7-95ad-90cc30e46932",
                    "name": "Green Bay Packers",
                    "alias": "GB",
                    "game_number": 5,
                    "sr_id": "sr:competitor:4420"
                },
                "away": {
                    "id": "04aa1c9d-66da-489d-b16a-1dee3f2eec4d",
                    "name": "New York Giants",
                    "alias": "NYG",
                    "game_number": 5,
                    "sr_id": "sr:competitor:4426"
                },
                "broadcast": {
                    "network": "NFL Network",
                    "satellite": "212"
                },
                "weather": {
                    "condition": "Sunny",
                    "humidity": 42,
                    "temp": 64,
                    "wind": {
                        "speed": 9,
                        "direction": "S"
                    }
                },
                "scoring": {
                    "home_points": 22,
                    "away_points": 27,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "c30c49fc-02a2-4884-9f15-abd44ed75c92",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 10,
                            "away_points": 3
                        },
                        {
                            "period_type": "quarter",
                            "id": "d37de3fd-21d4-4c59-a1fe-4bcfb5d9e16f",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 10,
                            "away_points": 7
                        },
                        {
                            "period_type": "quarter",
                            "id": "6c35df28-96f7-4e45-bd3d-d76f4368c924",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 0,
                            "away_points": 3
                        },
                        {
                            "period_type": "quarter",
                            "id": "2fc131c8-16dd-41c2-a01f-2d2507ae695a",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 2,
                            "away_points": 14
                        }
                    ]
                }
            },
            {
                "id": "0c925851-577d-4e7c-9722-cf6b58e41f1e",
                "status": "closed",
                "scheduled": "2022-10-09T17:00:00+00:00",
                "attendance": 67431,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623301",
                "game_type": "regular",
                "duration": "3:01",
                "venue": {
                    "id": "90c38d91-3774-4f5d-82ca-1c806828219f",
                    "name": "FirstEnergy Stadium",
                    "city": "Cleveland",
                    "state": "OH",
                    "country": "USA",
                    "zip": "44114",
                    "address": "100 Alfred Lerner Way",
                    "capacity": 67895,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8177",
                    "location": {
                        "lat": "41.506054",
                        "lng": "-81.700004"
                    }
                },
                "home": {
                    "id": "d5a2eb42-8065-4174-ab79-0a6fa820e35e",
                    "name": "Cleveland Browns",
                    "alias": "CLE",
                    "game_number": 5,
                    "sr_id": "sr:competitor:4417"
                },
                "away": {
                    "id": "1f6dcffb-9823-43cd-9ff4-e7a8466749b5",
                    "name": "Los Angeles Chargers",
                    "alias": "LAC",
                    "game_number": 5,
                    "sr_id": "sr:competitor:4429"
                },
                "broadcast": {
                    "network": "CBS"
                },
                "weather": {
                    "condition": "Sunny",
                    "humidity": 47,
                    "temp": 58,
                    "wind": {
                        "speed": 16,
                        "direction": "SW"
                    }
                },
                "scoring": {
                    "home_points": 28,
                    "away_points": 30,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "3274536f-1292-466e-88c5-9be142d8aebc",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 14,
                            "away_points": 3
                        },
                        {
                            "period_type": "quarter",
                            "id": "2fbac4b4-c7c9-4a06-9f4d-028036870d6e",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 7,
                            "away_points": 14
                        },
                        {
                            "period_type": "quarter",
                            "id": "3a29b832-68fd-44ce-b994-c1ccf7565e47",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 7,
                            "away_points": 10
                        },
                        {
                            "period_type": "quarter",
                            "id": "0990a087-d781-46a6-aac9-6e4f9f422192",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 0,
                            "away_points": 3
                        }
                    ]
                }
            },
            {
                "id": "13025660-aa95-4885-b33e-3a3554d4c4c3",
                "status": "closed",
                "scheduled": "2022-10-09T17:00:00+00:00",
                "attendance": 66929,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623305",
                "game_type": "regular",
                "duration": "2:52",
                "venue": {
                    "id": "f5ff00d4-1ed8-4918-bf73-13d66d510f98",
                    "name": "U.S. Bank Stadium",
                    "city": "Minneapolis",
                    "state": "MN",
                    "country": "USA",
                    "zip": "55415",
                    "address": "900 S 5th Street",
                    "capacity": 66655,
                    "surface": "artificial",
                    "roof_type": "dome",
                    "sr_id": "sr:venue:18423",
                    "location": {
                        "lat": "44.973686",
                        "lng": "-93.257458"
                    }
                },
                "home": {
                    "id": "33405046-04ee-4058-a950-d606f8c30852",
                    "name": "Minnesota Vikings",
                    "alias": "MIN",
                    "game_number": 5,
                    "sr_id": "sr:competitor:4423"
                },
                "away": {
                    "id": "7b112545-38e6-483c-a55c-96cf6ee49cb8",
                    "name": "Chicago Bears",
                    "alias": "CHI",
                    "game_number": 5,
                    "sr_id": "sr:competitor:4391"
                },
                "broadcast": {
                    "network": "FOX"
                },
                "weather": {
                    "condition": "Partly cloudy",
                    "humidity": 44,
                    "temp": 57,
                    "wind": {
                        "speed": 2,
                        "direction": "N"
                    }
                },
                "scoring": {
                    "home_points": 29,
                    "away_points": 22,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "3aceffcc-ce41-4277-b6a7-3bebb312a7a5",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 7,
                            "away_points": 3
                        },
                        {
                            "period_type": "quarter",
                            "id": "22f25520-64f5-48aa-bdc2-93a9f1a63c9a",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 14,
                            "away_points": 7
                        },
                        {
                            "period_type": "quarter",
                            "id": "47091cc4-08c2-4f83-9d8d-59c3c85e1725",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 0,
                            "away_points": 9
                        },
                        {
                            "period_type": "quarter",
                            "id": "5518a732-3d1c-4bec-ba34-a5ecd2465603",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 8,
                            "away_points": 3
                        }
                    ]
                }
            },
            {
                "id": "50250a4a-e3be-4ba5-a53b-a8894b2d6d5e",
                "status": "closed",
                "scheduled": "2022-10-09T17:00:00+00:00",
                "attendance": 51836,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623315",
                "game_type": "regular",
                "duration": "3:12",
                "venue": {
                    "id": "7c11bb2d-4a53-4842-b842-0f1c63ed78e9",
                    "name": "FedExField",
                    "city": "Landover",
                    "state": "MD",
                    "country": "USA",
                    "zip": "20785",
                    "address": "1600 FedEx Way",
                    "capacity": 82000,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:6652",
                    "location": {
                        "lat": "38.907724",
                        "lng": "-76.864613"
                    }
                },
                "home": {
                    "id": "22052ff7-c065-42ee-bc8f-c4691c50e624",
                    "name": "Washington Commanders",
                    "alias": "WAS",
                    "game_number": 5,
                    "sr_id": "sr:competitor:4432"
                },
                "away": {
                    "id": "d26a1ca5-722d-4274-8f97-c92e49c96315",
                    "name": "Tennessee Titans",
                    "alias": "TEN",
                    "game_number": 5,
                    "sr_id": "sr:competitor:367364"
                },
                "broadcast": {
                    "network": "CBS"
                },
                "weather": {
                    "condition": "Sunny",
                    "humidity": 36,
                    "temp": 59,
                    "wind": {
                        "speed": 11,
                        "direction": "W"
                    }
                },
                "scoring": {
                    "home_points": 17,
                    "away_points": 21,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "39e1e7b0-df47-48d0-93ca-c69b8f92ec3b",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 3,
                            "away_points": 7
                        },
                        {
                            "period_type": "quarter",
                            "id": "7b86e2b3-5e4d-41f7-82ad-f71b33642576",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 7,
                            "away_points": 7
                        },
                        {
                            "period_type": "quarter",
                            "id": "5df7a7d8-41b0-4ac5-a9af-ee738ce6238f",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 7,
                            "away_points": 7
                        },
                        {
                            "period_type": "quarter",
                            "id": "5df08fce-6942-48a8-ab64-45f8bd1b63a0",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 0,
                            "away_points": 0
                        }
                    ]
                }
            },
            {
                "id": "5ccb1b6a-1dd1-4ae0-aa3a-f530546488c6",
                "status": "closed",
                "scheduled": "2022-10-09T17:00:00+00:00",
                "attendance": 60018,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623303",
                "game_type": "regular",
                "duration": "2:58",
                "venue": {
                    "id": "4c5c036d-dd3d-4183-b595-71a43a97560f",
                    "name": "TIAA Bank Field",
                    "city": "Jacksonville",
                    "state": "FL",
                    "country": "USA",
                    "zip": "32202",
                    "address": "One EverBank Field Drive",
                    "capacity": 69132,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8187",
                    "location": {
                        "lat": "30.324027",
                        "lng": "-81.637239"
                    }
                },
                "home": {
                    "id": "f7ddd7fa-0bae-4f90-bc8e-669e4d6cf2de",
                    "name": "Jacksonville Jaguars",
                    "alias": "JAC",
                    "game_number": 5,
                    "sr_id": "sr:competitor:4386"
                },
                "away": {
                    "id": "82d2d380-3834-4938-835f-aec541e5ece7",
                    "name": "Houston Texans",
                    "alias": "HOU",
                    "game_number": 5,
                    "sr_id": "sr:competitor:4324"
                },
                "broadcast": {
                    "network": "CBS"
                },
                "weather": {
                    "condition": "Sunny",
                    "humidity": 59,
                    "temp": 87,
                    "wind": {
                        "speed": 11,
                        "direction": "NNE"
                    }
                },
                "scoring": {
                    "home_points": 6,
                    "away_points": 13,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "af58a947-a5a0-4da0-88ab-b67ab89a1ffa",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 3,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "4070adbf-a2e3-4ed2-b1e5-3745e5b3de8e",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 3,
                            "away_points": 6
                        },
                        {
                            "period_type": "quarter",
                            "id": "03b31f94-c8e3-4ec5-8acf-5579850baed2",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 0,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "4648e05e-8a29-4ca3-b0b8-815026165667",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 0,
                            "away_points": 7
                        }
                    ]
                }
            },
            {
                "id": "859ef7f3-39fd-45d5-8769-d7255837d2ce",
                "status": "closed",
                "scheduled": "2022-10-09T17:00:00+00:00",
                "attendance": 70003,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623309",
                "game_type": "regular",
                "duration": "3:20",
                "venue": {
                    "id": "3c85d89a-ec66-4983-acd5-1381d6c8673a",
                    "name": "Caesars Superdome",
                    "city": "New Orleans",
                    "state": "LA",
                    "country": "USA",
                    "zip": "70112",
                    "address": "1500 Sugar Bowl Drive",
                    "capacity": 73208,
                    "surface": "artificial",
                    "roof_type": "dome",
                    "sr_id": "sr:venue:8195",
                    "location": {
                        "lat": "29.950928",
                        "lng": "-90.080876"
                    }
                },
                "home": {
                    "id": "0d855753-ea21-4953-89f9-0e20aff9eb73",
                    "name": "New Orleans Saints",
                    "alias": "NO",
                    "game_number": 5,
                    "sr_id": "sr:competitor:4425"
                },
                "away": {
                    "id": "3d08af9e-c767-4f88-a7dc-b920c6d2b4a8",
                    "name": "Seattle Seahawks",
                    "alias": "SEA",
                    "game_number": 5,
                    "sr_id": "sr:competitor:4430"
                },
                "broadcast": {
                    "network": "FOX"
                },
                "weather": {
                    "condition": "Partly cloudy",
                    "humidity": 43,
                    "temp": 73,
                    "wind": {
                        "speed": 13,
                        "direction": "NE"
                    }
                },
                "scoring": {
                    "home_points": 39,
                    "away_points": 32,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "cdb107f1-9a8e-4e66-99c6-b2ba60e011d1",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 3,
                            "away_points": 10
                        },
                        {
                            "period_type": "quarter",
                            "id": "76a85382-13f0-4256-8de6-ea43c8136d4c",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 14,
                            "away_points": 9
                        },
                        {
                            "period_type": "quarter",
                            "id": "93571a23-b4d1-4e02-a124-7ff18c1f5bd9",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 14,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "a6e1715f-6e5b-45aa-9004-9d0961145523",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 8,
                            "away_points": 13
                        }
                    ]
                }
            },
            {
                "id": "b6c9bee6-1ec7-4282-96cb-ad1b59439f80",
                "status": "closed",
                "scheduled": "2022-10-09T17:00:00+00:00",
                "attendance": 68299,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623313",
                "game_type": "regular",
                "duration": "3:04",
                "venue": {
                    "id": "6fccc39c-80bc-4c81-83d9-2d5a848c8c09",
                    "name": "Raymond James Stadium",
                    "city": "Tampa",
                    "state": "FL",
                    "country": "USA",
                    "zip": "33607",
                    "address": "4201 North Dale Mabry Highway",
                    "capacity": 65890,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8205",
                    "location": {
                        "lat": "27.976211",
                        "lng": "-82.503625"
                    }
                },
                "home": {
                    "id": "4254d319-1bc7-4f81-b4ab-b5e6f3402b69",
                    "name": "Tampa Bay Buccaneers",
                    "alias": "TB",
                    "game_number": 5,
                    "sr_id": "sr:competitor:4388"
                },
                "away": {
                    "id": "e6aa13a4-0055-48a9-bc41-be28dc106929",
                    "name": "Atlanta Falcons",
                    "alias": "ATL",
                    "game_number": 5,
                    "sr_id": "sr:competitor:4393"
                },
                "broadcast": {
                    "network": "FOX"
                },
                "weather": {
                    "condition": "Partly cloudy",
                    "humidity": 58,
                    "temp": 82,
                    "wind": {
                        "speed": 8,
                        "direction": "NE"
                    }
                },
                "scoring": {
                    "home_points": 21,
                    "away_points": 15,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "c68f9c75-1f2a-4021-a6e5-d7f24d41e82b",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 0,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "ff6e3d4a-25ab-4abf-98d2-56e46e4c932f",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 13,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "3573441d-9491-40a0-93e2-6807e0736a38",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 8,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "687c3a38-d5e5-4fca-a1a7-f80e267a11ed",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 0,
                            "away_points": 15
                        }
                    ]
                }
            },
            {
                "id": "cb54b23b-4192-4eda-8431-794d21dd58ab",
                "status": "closed",
                "scheduled": "2022-10-09T17:00:00+00:00",
                "attendance": 82500,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623311",
                "game_type": "regular",
                "duration": "3:09",
                "venue": {
                    "id": "5d4c85c7-d84e-4e10-bd6a-8a15ebecca5c",
                    "name": "MetLife Stadium",
                    "city": "East Rutherford",
                    "state": "NJ",
                    "country": "USA",
                    "zip": "07073",
                    "address": "One MetLife Stadium Drive",
                    "capacity": 82500,
                    "surface": "artificial",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:1981",
                    "location": {
                        "lat": "40.813611",
                        "lng": "-74.074444"
                    }
                },
                "home": {
                    "id": "5fee86ae-74ab-4bdd-8416-42a9dd9964f3",
                    "name": "New York Jets",
                    "alias": "NYJ",
                    "game_number": 5,
                    "sr_id": "sr:competitor:4427"
                },
                "away": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Miami Dolphins",
                    "alias": "MIA",
                    "game_number": 5,
                    "sr_id": "sr:competitor:4287"
                },
                "broadcast": {
                    "network": "CBS"
                },
                "weather": {
                    "condition": "Sunny",
                    "humidity": 47,
                    "temp": 57,
                    "wind": {
                        "speed": 15,
                        "direction": "W"
                    }
                },
                "scoring": {
                    "home_points": 40,
                    "away_points": 17,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "9ec68554-3b4f-4008-965f-2ca19978f5a8",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 5,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "0f9f8e8f-3305-4cd2-9c80-55342b9536c5",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 14,
                            "away_points": 14
                        },
                        {
                            "period_type": "quarter",
                            "id": "a1b49de7-665a-4b15-aaa2-6083c96a5171",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 0,
                            "away_points": 3
                        },
                        {
                            "period_type": "quarter",
                            "id": "5fff1a2c-4fa8-4439-bf98-795b1e55b86f",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 21,
                            "away_points": 0
                        }
                    ]
                }
            },
            {
                "id": "cde58dfc-e789-4ff2-bda4-a8ece588e1d7",
                "status": "closed",
                "scheduled": "2022-10-09T17:00:00+00:00",
                "attendance": 70764,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623299",
                "game_type": "regular",
                "duration": "3:10",
                "venue": {
                    "id": "e9e0828e-37fc-4238-a317-49037577dd55",
                    "name": "Highmark Stadium",
                    "city": "Orchard Park",
                    "state": "NY",
                    "country": "USA",
                    "zip": "14127",
                    "address": "One Bills Drive",
                    "capacity": 71608,
                    "surface": "artificial",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8171",
                    "location": {
                        "lat": "42.773826",
                        "lng": "-78.786589"
                    }
                },
                "home": {
                    "id": "768c92aa-75ff-4a43-bcc0-f2798c2e1724",
                    "name": "Buffalo Bills",
                    "alias": "BUF",
                    "game_number": 5,
                    "sr_id": "sr:competitor:4376"
                },
                "away": {
                    "id": "cb2f9f1f-ac67-424e-9e72-1475cb0ed398",
                    "name": "Pittsburgh Steelers",
                    "alias": "PIT",
                    "game_number": 5,
                    "sr_id": "sr:competitor:4345"
                },
                "broadcast": {
                    "network": "CBS"
                },
                "weather": {
                    "condition": "Partly cloudy",
                    "humidity": 47,
                    "temp": 59,
                    "wind": {
                        "speed": 13,
                        "direction": "SW"
                    }
                },
                "scoring": {
                    "home_points": 38,
                    "away_points": 3,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "69f3ab26-c70c-4e83-9e2a-393cf568df09",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 10,
                            "away_points": 3
                        },
                        {
                            "period_type": "quarter",
                            "id": "d519a1e4-e69f-4a9a-badd-aa5a68eae927",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 21,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "edf3eb9c-795b-4eb9-bb56-f5fe7fc63f72",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 0,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "688f3fe6-6ad4-4c45-8efd-42870263ee9e",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 7,
                            "away_points": 0
                        }
                    ]
                }
            },
            {
                "id": "eb541067-920e-4052-945f-4fb4142341a6",
                "status": "closed",
                "scheduled": "2022-10-09T17:00:00+00:00",
                "attendance": 65878,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623307",
                "game_type": "regular",
                "duration": "2:55",
                "venue": {
                    "id": "e43310b1-cb82-4df9-8be5-e9b39637031b",
                    "name": "Gillette Stadium",
                    "city": "Foxborough",
                    "state": "MA",
                    "country": "USA",
                    "zip": "02035",
                    "address": "One Patriot Place",
                    "capacity": 66829,
                    "surface": "artificial",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:2379",
                    "location": {
                        "lat": "42.090944",
                        "lng": "-71.264344"
                    }
                },
                "home": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "New England Patriots",
                    "alias": "NE",
                    "game_number": 5,
                    "sr_id": "sr:competitor:4424"
                },
                "away": {
                    "id": "c5a59daa-53a7-4de0-851f-fb12be893e9e",
                    "name": "Detroit Lions",
                    "alias": "DET",
                    "game_number": 5,
                    "sr_id": "sr:competitor:4419"
                },
                "broadcast": {
                    "network": "FOX"
                },
                "weather": {
                    "condition": "Sunny",
                    "humidity": 42,
                    "temp": 60,
                    "wind": {
                        "speed": 13,
                        "direction": "W"
                    }
                },
                "scoring": {
                    "home_points": 29,
                    "away_points": 0,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "d9491168-4f54-4c26-a5e4-d22248a8b29f",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 3,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "0a66e9af-6d7d-49e2-a7e4-8b3706213316",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 13,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "65fbac91-e7d2-441c-8f5d-8302410d542b",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 10,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "1f66161e-a1e7-4c85-aaa0-6311af3d3cb1",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 3,
                            "away_points": 0
                        }
                    ]
                }
            },
            {
                "id": "e86d674e-a47c-4038-adac-5a6b659dd2c8",
                "status": "closed",
                "scheduled": "2022-10-09T20:05:00+00:00",
                "attendance": 72321,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623317",
                "game_type": "regular",
                "duration": "3:07",
                "venue": {
                    "id": "39be9ed4-3292-49ac-8699-a381de3a4969",
                    "name": "Bank of America Stadium",
                    "city": "Charlotte",
                    "state": "NC",
                    "country": "USA",
                    "zip": "28202",
                    "address": "800 South Mint Street",
                    "capacity": 75419,
                    "surface": "artificial",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8173",
                    "location": {
                        "lat": "35.225937",
                        "lng": "-80.853133"
                    }
                },
                "home": {
                    "id": "f14bf5cc-9a82-4a38-bc15-d39f75ed5314",
                    "name": "Carolina Panthers",
                    "alias": "CAR",
                    "game_number": 5,
                    "sr_id": "sr:competitor:4415"
                },
                "away": {
                    "id": "f0e724b0-4cbf-495a-be47-013907608da9",
                    "name": "San Francisco 49ers",
                    "alias": "SF",
                    "game_number": 5,
                    "sr_id": "sr:competitor:4389"
                },
                "broadcast": {
                    "network": "CBS"
                },
                "weather": {
                    "condition": "Partly cloudy",
                    "humidity": 43,
                    "temp": 66,
                    "wind": {
                        "speed": 2,
                        "direction": "N"
                    }
                },
                "scoring": {
                    "home_points": 15,
                    "away_points": 37,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "c5b7831d-1907-4933-8a2e-308de57bfc5e",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 0,
                            "away_points": 7
                        },
                        {
                            "period_type": "quarter",
                            "id": "faa00e92-a386-4130-b8d9-3ca7a47720ca",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 3,
                            "away_points": 10
                        },
                        {
                            "period_type": "quarter",
                            "id": "c24890b3-77da-4f0d-82ef-6a96549b770b",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 9,
                            "away_points": 7
                        },
                        {
                            "period_type": "quarter",
                            "id": "a9c759b8-115f-4cab-a08c-93bfa281035d",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 3,
                            "away_points": 13
                        }
                    ]
                }
            },
            {
                "id": "8ee9c37b-4fd8-4954-9d78-f84d1efd700f",
                "status": "closed",
                "scheduled": "2022-10-09T20:25:00+00:00",
                "attendance": 63919,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623319",
                "game_type": "regular",
                "duration": "2:53",
                "venue": {
                    "id": "f8e4d2ab-53f9-4e9f-8c4a-9bc278094a84",
                    "name": "State Farm Stadium",
                    "city": "Glendale",
                    "state": "AZ",
                    "country": "USA",
                    "zip": "85305",
                    "address": "One Cardinals Drive",
                    "capacity": 63400,
                    "surface": "turf",
                    "roof_type": "retractable_dome",
                    "sr_id": "sr:venue:8165",
                    "location": {
                        "lat": "33.527765",
                        "lng": "-112.262090"
                    }
                },
                "home": {
                    "id": "de760528-1dc0-416a-a978-b510d20692ff",
                    "name": "Arizona Cardinals",
                    "alias": "ARI",
                    "game_number": 5,
                    "sr_id": "sr:competitor:4412"
                },
                "away": {
                    "id": "386bdbf9-9eea-4869-bb9a-274b0bc66e80",
                    "name": "Philadelphia Eagles",
                    "alias": "PHI",
                    "game_number": 5,
                    "sr_id": "sr:competitor:4428"
                },
                "broadcast": {
                    "network": "FOX"
                },
                "weather": {
                    "condition": "Partly cloudy",
                    "humidity": 27,
                    "temp": 87,
                    "wind": {
                        "speed": 4,
                        "direction": "SW"
                    }
                },
                "scoring": {
                    "home_points": 17,
                    "away_points": 20,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "dfeab2d4-ef61-4704-b5db-c60f6cf7a708",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 0,
                            "away_points": 7
                        },
                        {
                            "period_type": "quarter",
                            "id": "2166aaf0-7e3f-42b9-8339-b4fda4d530f4",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 10,
                            "away_points": 7
                        },
                        {
                            "period_type": "quarter",
                            "id": "a234867b-87c3-4719-a1d9-ca553c5dcec0",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 0,
                            "away_points": 3
                        },
                        {
                            "period_type": "quarter",
                            "id": "4c84e89b-c89e-4835-8671-aeb4a2973ae5",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 7,
                            "away_points": 3
                        }
                    ]
                }
            },
            {
                "id": "bf8318c0-e876-4a47-9cb4-d3b85725d8f6",
                "status": "closed",
                "scheduled": "2022-10-09T20:25:00+00:00",
                "attendance": 74154,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623321",
                "game_type": "regular",
                "duration": "2:56",
                "venue": {
                    "id": "790c1f04-73c6-4f6f-8b1e-78a62260be90",
                    "name": "SoFi Stadium",
                    "city": "Inglewood",
                    "state": "CA",
                    "country": "USA",
                    "zip": "90301",
                    "address": "1000 S Prairie Ave",
                    "capacity": 70240,
                    "surface": "artificial",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:52183",
                    "location": {
                        "lat": "33.953536",
                        "lng": "-118.338734"
                    }
                },
                "home": {
                    "id": "2eff2a03-54d4-46ba-890e-2bc3925548f3",
                    "name": "Los Angeles Rams",
                    "alias": "LA",
                    "game_number": 5,
                    "sr_id": "sr:competitor:4387"
                },
                "away": {
                    "id": "e627eec7-bbae-4fa4-8e73-8e1d6bc5c060",
                    "name": "Dallas Cowboys",
                    "alias": "DAL",
                    "game_number": 5,
                    "sr_id": "sr:competitor:4392"
                },
                "broadcast": {
                    "network": "FOX"
                },
                "weather": {
                    "condition": "Partly cloudy",
                    "humidity": 68,
                    "temp": 72,
                    "wind": {
                        "speed": 12,
                        "direction": "W"
                    }
                },
                "scoring": {
                    "home_points": 10,
                    "away_points": 22,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "e4d62833-2c05-42b5-afb6-44a0f3950555",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 3,
                            "away_points": 9
                        },
                        {
                            "period_type": "quarter",
                            "id": "8805a869-e885-46cb-81e8-95085d0b54f2",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 7,
                            "away_points": 7
                        },
                        {
                            "period_type": "quarter",
                            "id": "4898c8fc-928a-46c6-8ba6-bc861601766b",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 0,
                            "away_points": 3
                        },
                        {
                            "period_type": "quarter",
                            "id": "2ce2cf01-c3f8-4eb3-be43-944f8c7b4e2e",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 0,
                            "away_points": 3
                        }
                    ]
                }
            },
            {
                "id": "449e9f9f-d2be-40df-ac2c-7e0caf6b1269",
                "status": "closed",
                "scheduled": "2022-10-10T00:20:00+00:00",
                "attendance": 70548,
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623323",
                "game_type": "regular",
                "duration": "2:57",
                "venue": {
                    "id": "d54faae0-0314-484f-8604-9d8dd08e1149",
                    "name": "M&T Bank Stadium",
                    "city": "Baltimore",
                    "state": "MD",
                    "country": "USA",
                    "zip": "21230",
                    "address": "1101 Russell Street",
                    "capacity": 71008,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8169",
                    "location": {
                        "lat": "39.277995",
                        "lng": "-76.622592"
                    }
                },
                "home": {
                    "id": "ebd87119-b331-4469-9ea6-d51fe3ce2f1c",
                    "name": "Baltimore Ravens",
                    "alias": "BAL",
                    "game_number": 5,
                    "sr_id": "sr:competitor:4413"
                },
                "away": {
                    "id": "ad4ae08f-d808-42d5-a1e6-e9bc4e34d123",
                    "name": "Cincinnati Bengals",
                    "alias": "CIN",
                    "game_number": 5,
                    "sr_id": "sr:competitor:4416"
                },
                "broadcast": {
                    "network": "NBC"
                },
                "weather": {
                    "condition": "Clear",
                    "humidity": 71,
                    "temp": 52,
                    "wind": {
                        "speed": 2,
                        "direction": "N"
                    }
                },
                "scoring": {
                    "home_points": 19,
                    "away_points": 17,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "07511fcc-ba7a-47a4-ad3e-e9e30a122a88",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 3,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "15532bdd-c9a3-432f-ade6-a638c0139852",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 7,
                            "away_points": 10
                        },
                        {
                            "period_type": "quarter",
                            "id": "6c9c880d-2634-4e78-b235-0048022d7a5f",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 3,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "163d60d4-42da-4800-bb61-bc965f6cde3f",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 6,
                            "away_points": 7
                        }
                    ]
                }
            },
            {
                "id": "befce21a-d8dd-416d-bad2-e104279f8823",
                "status": "closed",
                "scheduled": "2022-10-11T00:15:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623325",
                "game_type": "regular",
                "venue": {
                    "id": "2ec4c411-dac2-403d-b091-6b6aa4a0a914",
                    "name": "GEHA Field at Arrowhead Stadium",
                    "city": "Kansas City",
                    "state": "MO",
                    "country": "USA",
                    "zip": "64129",
                    "address": "One Arrowhead Drive",
                    "capacity": 76416,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8189",
                    "location": {
                        "lat": "39.049019",
                        "lng": "-94.484140"
                    }
                },
                "home": {
                    "id": "6680d28d-d4d2-49f6-aace-5292d3ec02c2",
                    "name": "Kansas City Chiefs",
                    "alias": "KC",
                    "game_number": 5,
                    "sr_id": "sr:competitor:4422"
                },
                "away": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Las Vegas Raiders",
                    "alias": "LV",
                    "game_number": 5,
                    "sr_id": "sr:competitor:4390"
                },
                "broadcast": {
                    "network": "ESPN",
                    "satellite": "206"
                },
                "weather": {
                    "condition": "Clear",
                    "humidity": 37,
                    "temp": 77,
                    "wind": {
                        "speed": 4,
                        "direction": "SW"
                    }
                },
                "scoring": {
                    "home_points": 30,
                    "away_points": 29,
                    "periods": [
                        {
                            "period_type": "quarter",
                            "id": "545150ca-724f-4081-9eba-0826247327a9",
                            "number": 1,
                            "sequence": 1,
                            "home_points": 0,
                            "away_points": 7
                        },
                        {
                            "period_type": "quarter",
                            "id": "564ee33a-f3e5-45a5-9adb-05b45c4e1cd5",
                            "number": 2,
                            "sequence": 2,
                            "home_points": 10,
                            "away_points": 13
                        },
                        {
                            "period_type": "quarter",
                            "id": "e6879d93-719d-4de5-8dc0-46b9a32e120c",
                            "number": 3,
                            "sequence": 3,
                            "home_points": 14,
                            "away_points": 0
                        },
                        {
                            "period_type": "quarter",
                            "id": "360cbcde-e112-434d-9e8a-ca7f34fa1d0a",
                            "number": 4,
                            "sequence": 4,
                            "home_points": 6,
                            "away_points": 9
                        }
                    ]
                }
            }
        ],
        "createdAt": "2022-11-02T23:27:20.160Z",
        "updatedAt": "2022-11-02T23:27:20.160Z",
        "__v": 0
    },
    {
        "_id": "6362fcd8a05a14afa1a59d2c",
        "weekNumber": 9,
        "games": [
            {
                "id": "9e4f6e8a-2f76-4432-a741-6f26ad6b53ab",
                "status": "created",
                "scheduled": "2022-11-04T00:15:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623411",
                "game_type": "regular",
                "venue": {
                    "id": "6a72e5ca-33d0-40af-8e6b-b32a4d3d9346",
                    "name": "NRG Stadium",
                    "city": "Houston",
                    "state": "TX",
                    "country": "USA",
                    "zip": "77054",
                    "address": "One Reliant Park",
                    "capacity": 72220,
                    "surface": "artificial",
                    "roof_type": "retractable_dome",
                    "sr_id": "sr:venue:2402",
                    "location": {
                        "lat": "29.684735",
                        "lng": "-95.410725"
                    }
                },
                "home": {
                    "id": "82d2d380-3834-4938-835f-aec541e5ece7",
                    "name": "Houston Texans",
                    "alias": "HOU",
                    "game_number": 8,
                    "sr_id": "sr:competitor:4324"
                },
                "away": {
                    "id": "386bdbf9-9eea-4869-bb9a-274b0bc66e80",
                    "name": "Philadelphia Eagles",
                    "alias": "PHI",
                    "game_number": 8,
                    "sr_id": "sr:competitor:4428"
                },
                "broadcast": {
                    "network": "Amazon Prime Video"
                }
            },
            {
                "id": "4c107e07-511a-4ec2-9172-af0e381690a0",
                "status": "scheduled",
                "scheduled": "2022-11-06T18:00:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623413",
                "game_type": "regular",
                "venue": {
                    "id": "1f2d393b-2291-4835-a412-0714966ea245",
                    "name": "Mercedes-Benz Stadium",
                    "city": "Atlanta",
                    "state": "GA",
                    "country": "USA",
                    "zip": "30313",
                    "address": "441 Martin Luther King Jr Drive NW",
                    "capacity": 71000,
                    "surface": "artificial",
                    "roof_type": "retractable_dome",
                    "sr_id": "sr:venue:20343",
                    "location": {
                        "lat": "33.757368",
                        "lng": "-84.401008"
                    }
                },
                "home": {
                    "id": "e6aa13a4-0055-48a9-bc41-be28dc106929",
                    "name": "Atlanta Falcons",
                    "alias": "ATL",
                    "game_number": 9,
                    "sr_id": "sr:competitor:4393"
                },
                "away": {
                    "id": "1f6dcffb-9823-43cd-9ff4-e7a8466749b5",
                    "name": "Los Angeles Chargers",
                    "alias": "LAC",
                    "game_number": 8,
                    "sr_id": "sr:competitor:4429"
                },
                "broadcast": {
                    "network": "FOX"
                }
            },
            {
                "id": "74a9daed-6d9a-4a34-b7fd-0537fe991647",
                "status": "scheduled",
                "scheduled": "2022-11-06T18:00:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623419",
                "game_type": "regular",
                "venue": {
                    "id": "6e3bcf22-277d-4c06-b019-62aded51654f",
                    "name": "Ford Field",
                    "city": "Detroit",
                    "state": "MI",
                    "country": "USA",
                    "zip": "48226",
                    "address": "2000 Brush Street",
                    "capacity": 65000,
                    "surface": "artificial",
                    "roof_type": "dome",
                    "sr_id": "sr:venue:8181",
                    "location": {
                        "lat": "42.339958",
                        "lng": "-83.045636"
                    }
                },
                "home": {
                    "id": "c5a59daa-53a7-4de0-851f-fb12be893e9e",
                    "name": "Detroit Lions",
                    "alias": "DET",
                    "game_number": 8,
                    "sr_id": "sr:competitor:4419"
                },
                "away": {
                    "id": "a20471b4-a8d9-40c7-95ad-90cc30e46932",
                    "name": "Green Bay Packers",
                    "alias": "GB",
                    "game_number": 9,
                    "sr_id": "sr:competitor:4420"
                },
                "broadcast": {
                    "network": "FOX"
                }
            },
            {
                "id": "83cd16ed-aca2-4d13-bff8-bb16225bedb1",
                "status": "scheduled",
                "scheduled": "2022-11-06T18:00:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623415",
                "game_type": "regular",
                "venue": {
                    "id": "d7866605-5ac6-4b3a-90e8-760cc5a26b75",
                    "name": "Soldier Field",
                    "city": "Chicago",
                    "state": "IL",
                    "country": "USA",
                    "zip": "60605",
                    "address": "1410 South Museum Campus Drive",
                    "capacity": 61500,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:2109",
                    "location": {
                        "lat": "41.862498",
                        "lng": "-87.616979"
                    }
                },
                "home": {
                    "id": "7b112545-38e6-483c-a55c-96cf6ee49cb8",
                    "name": "Chicago Bears",
                    "alias": "CHI",
                    "game_number": 9,
                    "sr_id": "sr:competitor:4391"
                },
                "away": {
                    "id": "4809ecb0-abd3-451d-9c4a-92a90b83ca06",
                    "name": "Miami Dolphins",
                    "alias": "MIA",
                    "game_number": 9,
                    "sr_id": "sr:competitor:4287"
                },
                "broadcast": {
                    "network": "CBS"
                }
            },
            {
                "id": "a4da928d-acf8-48d8-a35b-e0cd247aaabc",
                "status": "scheduled",
                "scheduled": "2022-11-06T18:00:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623421",
                "game_type": "regular",
                "venue": {
                    "id": "4c5c036d-dd3d-4183-b595-71a43a97560f",
                    "name": "TIAA Bank Field",
                    "city": "Jacksonville",
                    "state": "FL",
                    "country": "USA",
                    "zip": "32202",
                    "address": "One EverBank Field Drive",
                    "capacity": 69132,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8187",
                    "location": {
                        "lat": "30.324027",
                        "lng": "-81.637239"
                    }
                },
                "home": {
                    "id": "f7ddd7fa-0bae-4f90-bc8e-669e4d6cf2de",
                    "name": "Jacksonville Jaguars",
                    "alias": "JAC",
                    "game_number": 9,
                    "sr_id": "sr:competitor:4386"
                },
                "away": {
                    "id": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576",
                    "name": "Las Vegas Raiders",
                    "alias": "LV",
                    "game_number": 8,
                    "sr_id": "sr:competitor:4390"
                },
                "broadcast": {
                    "network": "CBS"
                }
            },
            {
                "id": "c9f431dd-637f-48ca-b01b-76510249d4a4",
                "status": "scheduled",
                "scheduled": "2022-11-06T18:00:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623423",
                "game_type": "regular",
                "venue": {
                    "id": "e43310b1-cb82-4df9-8be5-e9b39637031b",
                    "name": "Gillette Stadium",
                    "city": "Foxborough",
                    "state": "MA",
                    "country": "USA",
                    "zip": "02035",
                    "address": "One Patriot Place",
                    "capacity": 66829,
                    "surface": "artificial",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:2379",
                    "location": {
                        "lat": "42.090944",
                        "lng": "-71.264344"
                    }
                },
                "home": {
                    "id": "97354895-8c77-4fd4-a860-32e62ea7382a",
                    "name": "New England Patriots",
                    "alias": "NE",
                    "game_number": 9,
                    "sr_id": "sr:competitor:4424"
                },
                "away": {
                    "id": "82cf9565-6eb9-4f01-bdbd-5aa0d472fcd9",
                    "name": "Indianapolis Colts",
                    "alias": "IND",
                    "game_number": 9,
                    "sr_id": "sr:competitor:4421"
                },
                "broadcast": {
                    "network": "CBS"
                }
            },
            {
                "id": "cdf0116f-cd16-456e-9b7c-33975736b93e",
                "status": "scheduled",
                "scheduled": "2022-11-06T18:00:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623425",
                "game_type": "regular",
                "venue": {
                    "id": "5d4c85c7-d84e-4e10-bd6a-8a15ebecca5c",
                    "name": "MetLife Stadium",
                    "city": "East Rutherford",
                    "state": "NJ",
                    "country": "USA",
                    "zip": "07073",
                    "address": "One MetLife Stadium Drive",
                    "capacity": 82500,
                    "surface": "artificial",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:1981",
                    "location": {
                        "lat": "40.813611",
                        "lng": "-74.074444"
                    }
                },
                "home": {
                    "id": "5fee86ae-74ab-4bdd-8416-42a9dd9964f3",
                    "name": "New York Jets",
                    "alias": "NYJ",
                    "game_number": 9,
                    "sr_id": "sr:competitor:4427"
                },
                "away": {
                    "id": "768c92aa-75ff-4a43-bcc0-f2798c2e1724",
                    "name": "Buffalo Bills",
                    "alias": "BUF",
                    "game_number": 8,
                    "sr_id": "sr:competitor:4376"
                },
                "broadcast": {
                    "network": "CBS"
                }
            },
            {
                "id": "f4acdc1b-4dbe-42d0-a6c3-617558c40684",
                "status": "scheduled",
                "scheduled": "2022-11-06T18:00:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623417",
                "game_type": "regular",
                "venue": {
                    "id": "b87a1595-d3c8-48ea-8a53-0aab6378a64a",
                    "name": "Paycor Stadium",
                    "city": "Cincinnati",
                    "state": "OH",
                    "country": "USA",
                    "zip": "45202",
                    "address": "One Paul Brown Stadium",
                    "capacity": 65515,
                    "surface": "artificial",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8175",
                    "location": {
                        "lat": "39.095413",
                        "lng": "-84.516204"
                    }
                },
                "home": {
                    "id": "ad4ae08f-d808-42d5-a1e6-e9bc4e34d123",
                    "name": "Cincinnati Bengals",
                    "alias": "CIN",
                    "game_number": 9,
                    "sr_id": "sr:competitor:4416"
                },
                "away": {
                    "id": "f14bf5cc-9a82-4a38-bc15-d39f75ed5314",
                    "name": "Carolina Panthers",
                    "alias": "CAR",
                    "game_number": 9,
                    "sr_id": "sr:competitor:4415"
                },
                "broadcast": {
                    "network": "FOX"
                }
            },
            {
                "id": "f6dd0415-2dbd-4e98-9b1b-bca1b8074a05",
                "status": "scheduled",
                "scheduled": "2022-11-06T18:00:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623427",
                "game_type": "regular",
                "venue": {
                    "id": "7c11bb2d-4a53-4842-b842-0f1c63ed78e9",
                    "name": "FedExField",
                    "city": "Landover",
                    "state": "MD",
                    "country": "USA",
                    "zip": "20785",
                    "address": "1600 FedEx Way",
                    "capacity": 82000,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:6652",
                    "location": {
                        "lat": "38.907724",
                        "lng": "-76.864613"
                    }
                },
                "home": {
                    "id": "22052ff7-c065-42ee-bc8f-c4691c50e624",
                    "name": "Washington Commanders",
                    "alias": "WAS",
                    "game_number": 9,
                    "sr_id": "sr:competitor:4432"
                },
                "away": {
                    "id": "33405046-04ee-4058-a950-d606f8c30852",
                    "name": "Minnesota Vikings",
                    "alias": "MIN",
                    "game_number": 8,
                    "sr_id": "sr:competitor:4423"
                },
                "broadcast": {
                    "network": "FOX"
                }
            },
            {
                "id": "fe7fa4d7-f4d6-4e24-85bd-de084acbe3a9",
                "status": "scheduled",
                "scheduled": "2022-11-06T21:05:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623429",
                "game_type": "regular",
                "venue": {
                    "id": "f8e4d2ab-53f9-4e9f-8c4a-9bc278094a84",
                    "name": "State Farm Stadium",
                    "city": "Glendale",
                    "state": "AZ",
                    "country": "USA",
                    "zip": "85305",
                    "address": "One Cardinals Drive",
                    "capacity": 63400,
                    "surface": "turf",
                    "roof_type": "retractable_dome",
                    "sr_id": "sr:venue:8165",
                    "location": {
                        "lat": "33.527765",
                        "lng": "-112.262090"
                    }
                },
                "home": {
                    "id": "de760528-1dc0-416a-a978-b510d20692ff",
                    "name": "Arizona Cardinals",
                    "alias": "ARI",
                    "game_number": 9,
                    "sr_id": "sr:competitor:4412"
                },
                "away": {
                    "id": "3d08af9e-c767-4f88-a7dc-b920c6d2b4a8",
                    "name": "Seattle Seahawks",
                    "alias": "SEA",
                    "game_number": 9,
                    "sr_id": "sr:competitor:4430"
                },
                "broadcast": {
                    "network": "FOX"
                }
            },
            {
                "id": "77a33d6b-1e3f-416f-8890-fe38f535bee9",
                "status": "scheduled",
                "scheduled": "2022-11-06T21:25:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623431",
                "game_type": "regular",
                "venue": {
                    "id": "6fccc39c-80bc-4c81-83d9-2d5a848c8c09",
                    "name": "Raymond James Stadium",
                    "city": "Tampa",
                    "state": "FL",
                    "country": "USA",
                    "zip": "33607",
                    "address": "4201 North Dale Mabry Highway",
                    "capacity": 65890,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8205",
                    "location": {
                        "lat": "27.976211",
                        "lng": "-82.503625"
                    }
                },
                "home": {
                    "id": "4254d319-1bc7-4f81-b4ab-b5e6f3402b69",
                    "name": "Tampa Bay Buccaneers",
                    "alias": "TB",
                    "game_number": 9,
                    "sr_id": "sr:competitor:4388"
                },
                "away": {
                    "id": "2eff2a03-54d4-46ba-890e-2bc3925548f3",
                    "name": "Los Angeles Rams",
                    "alias": "LA",
                    "game_number": 8,
                    "sr_id": "sr:competitor:4387"
                },
                "broadcast": {
                    "network": "CBS"
                }
            },
            {
                "id": "e1e21176-49f5-4145-be0f-f428b5c11926",
                "status": "scheduled",
                "scheduled": "2022-11-07T01:20:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623433",
                "game_type": "regular",
                "venue": {
                    "id": "2ec4c411-dac2-403d-b091-6b6aa4a0a914",
                    "name": "GEHA Field at Arrowhead Stadium",
                    "city": "Kansas City",
                    "state": "MO",
                    "country": "USA",
                    "zip": "64129",
                    "address": "One Arrowhead Drive",
                    "capacity": 76416,
                    "surface": "turf",
                    "roof_type": "outdoor",
                    "sr_id": "sr:venue:8189",
                    "location": {
                        "lat": "39.049019",
                        "lng": "-94.484140"
                    }
                },
                "home": {
                    "id": "6680d28d-d4d2-49f6-aace-5292d3ec02c2",
                    "name": "Kansas City Chiefs",
                    "alias": "KC",
                    "game_number": 8,
                    "sr_id": "sr:competitor:4422"
                },
                "away": {
                    "id": "d26a1ca5-722d-4274-8f97-c92e49c96315",
                    "name": "Tennessee Titans",
                    "alias": "TEN",
                    "game_number": 8,
                    "sr_id": "sr:competitor:367364"
                },
                "broadcast": {
                    "network": "NBC"
                }
            },
            {
                "id": "dbd63c38-1d79-4b19-9db4-b167cadc70d0",
                "status": "scheduled",
                "scheduled": "2022-11-08T01:15:00+00:00",
                "entry_mode": "LDE",
                "sr_id": "sr:match:33623435",
                "game_type": "regular",
                "venue": {
                    "id": "3c85d89a-ec66-4983-acd5-1381d6c8673a",
                    "name": "Caesars Superdome",
                    "city": "New Orleans",
                    "state": "LA",
                    "country": "USA",
                    "zip": "70112",
                    "address": "1500 Sugar Bowl Drive",
                    "capacity": 73208,
                    "surface": "artificial",
                    "roof_type": "dome",
                    "sr_id": "sr:venue:8195",
                    "location": {
                        "lat": "29.950928",
                        "lng": "-90.080876"
                    }
                },
                "home": {
                    "id": "0d855753-ea21-4953-89f9-0e20aff9eb73",
                    "name": "New Orleans Saints",
                    "alias": "NO",
                    "game_number": 9,
                    "sr_id": "sr:competitor:4425"
                },
                "away": {
                    "id": "ebd87119-b331-4469-9ea6-d51fe3ce2f1c",
                    "name": "Baltimore Ravens",
                    "alias": "BAL",
                    "game_number": 9,
                    "sr_id": "sr:competitor:4413"
                },
                "broadcast": {
                    "network": "ESPN",
                    "satellite": "206"
                }
            }
        ],
        "createdAt": "2022-11-02T23:27:20.372Z",
        "updatedAt": "2022-11-02T23:27:20.372Z",
        "__v": 0
    }
]
const seedDB = async () => {
    await Week.deleteMany({})
    await Week.insertMany(seedWeeks)
}
seedDB().then(() => {
    mongoose.connection.close()
})
