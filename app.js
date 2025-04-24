const express   = require("express");
const hbs       = require("hbs");
const app       = express();
const path      = require("path");
 
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));
hbs.registerPartials(__dirname + "/views/partials");

app.use(express.static(path.join(__dirname, "public")));
 
app.get("/", (req, res, next) => res.render("index"));
 
app.get('/players', (req, res, next) => {
 
    // ADD THIS:
    const players = [
      {
        name: "Rusell",
        lastName: "Westbrook",
        team: "OKC",
        photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3468.png",
        average: [
          { year: 2013, points: 82 },
          { year: 2014, points: 82 },
          { year: 2015, points: 60 },
          { year: 2016, points: 46 },
          { year: 2017, points: 67 },
          { year: 2018, points: 80 }
        ]
      },
      {
        name: "Kevin",
        lastName: "Durant",
        team: "GSW",
        photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3202.png",
        average: [
          { year: 2013, points: 76 },
          { year: 2014, points: 80 },
          { year: 2015, points: 65 },
          { year: 2016, points: 50 },
          { year: 2017, points: 67 },
          { year: 2018, points: 78 }
        ]
      },
      {
        name: "Lebron",
        lastName: "James",
        team: "CLE",
        photo: "https://a.espncdn.com/i/headshots/nba/players/full/1966.png",
        average: [
          { year: 2013, points: 78 },
          { year: 2014, points: 82 },
          { year: 2015, points: 76 },
          { year: 2016, points: 84 },
          { year: 2017, points: 67 },
          { year: 2018, points: 60 }
        ]
      },
      {
        name: "Emanuel",
        lastName: "Ginóbilli",
        team: "SAS",
        photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/272.png",
        average: [
          { year: 2013, points: 82 },
          { year: 2014, points: 76 },
          { year: 2015, points: 74 },
          { year: 2016, points: 80 },
          { year: 2017, points: 66 },
          { year: 2018, points: 63 }
        ]
      },
      {
        name: "Kyrie",
        lastName: "Irving",
        team: "BOS",
        photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6442.png",
        average: [
          { year: 2013, points: 74 },
          { year: 2014, points: 72 },
          { year: 2015, points: 66 },
          { year: 2016, points: 82 },
          { year: 2017, points: 64 },
          { year: 2018, points: 61 }
        ]
      }
    ];
   
    res.render("players", { players });
  });
 
app.get("/teams", (req, res, next) => res.render("teams"));
 
app.listen(3000);