const mongoose = require("mongoose");
const db = require("./");

const tours = [
  {
    region: "nw_portland",
    title: "Party of 5 - 9/20/20",
    description: "This is some text about a recent wine tour!",
    bgImg: "https://www.cardfool.com/cards/assets/Big%20Wine%20Glass%20Val_cover.jpg",
    links: [
      { text: "Wines", href: "https://www.yahoo.com/" },
      { text: "Wineries" },
      { text: "Pics" }
    ]
  },
  {
    region: "nw_portland",
    title: "Brewery Tour in Bend 9/25",
    description: "This is some text about a recent wine tour!",
    bgImg: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/11/20/0/fnd_beer-istock.jpg.rend.hgtvcom.616.462.suffix/1448031613421.jpeg",
    links: [
      { text: "Breweries" },
      { text: "Beers" },
      { text: "Pics" }
    ]
  },
  {
    region: "nw_portland",
    title: "Dispensery Tour in NW!!",
    description: "This is some text about a recent wine tour!",
    bgImg: "https://www.northernsun.com/images/image16x16/576x576/3702.png",
    links: [
      { text: "Wines" },
      { text: "Beers" },
      { text: "Pics" }
    ]
  }
];

(async function () {
  await Promise.all(tours.map(tour => {
    return db.Tour.create(tour);
  })
  );
  console.log("Seeding completed");
  mongoose.connection.close();
})();