const mongoose = require("mongoose");
const db = require("./");

const tours = [
  {
    region: "nw_portland",
    title: "Party of 5 - 9/20/20",
    description: "Our driver suggested this place and we were so happy!",
    bgImg: "https://www.cardfool.com/cards/assets/Big%20Wine%20Glass%20Val_cover.jpg",
    links: [
      { text: "Wines that we sampled", href: "https://www.yelp.com/search?cflt=winetastingroom&find_loc=Northwest%2C+Portland%2C+OR" },
      { text: "Pics", href: "https://blog.williams-sonoma.com/how-to-host-a-wine-tasting-party-2/" }
    ]
  },
  {
    region: "nw_portland",
    title: "Brewery Tour in NW. What a night!",
    description: "This beer is great but the food was even better!",
    bgImg: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/11/20/0/fnd_beer-istock.jpg.rend.hgtvcom.616.462.suffix/1448031613421.jpeg",
    links: [
      { text: "Breweries we hit in NW Portland!", href: "https://beermebend.com/" }
    ]
  },
  {
    region: "nw_portland",
    title: "Dispensery Tour in NW!!",
    description: "Best night I can't remember!",
    bgImg: "http://portlanddispensary.net/wp-content/uploads/2015/07/OregonWeederySample4.png",
    links: [
      { text: "Not sure what else happened...", href: "http://portlanddispensary.net/" },
    ]
  },
  {
    region: "se_portland",
    title: "Anniversary date - 8/20/20",
    description: "We started at Wayfinder and never left! ",
    bgImg: "https://media-cdn.tripadvisor.com/media/photo-s/10/13/e9/a6/the-bar-at-wayfinder.jpg",
    links: [
      { text: "Our Event Was Amazing!", href: "https://www.wayfinder.beer/food-menu/" },
    ]
  },
  {
    region: "se_portland",
    title: "Hip Chicks do wine!",
    description: "A great wine tour starting in SE!!",
    bgImg: "https://images.squarespace-cdn.com/content/v1/5637f9ade4b0e9770c34bb99/1448407988345-EYYQRRAUR9BQNKXP58YE/ke17ZwdGBToddI8pDm48kJkf_0C__lNNupgcqn2I-MZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mhydAgiKdIfeAoxVgE7c7pMyORsnVOl4gRJQ6JCMcQUT9wCIrpqoU4pCaAjZhv_Rg/LaurieReneeBY_web.jpg?format=1000w",
    links: [
      { text: "Wine Tour", href: "https://www.hipchicksdowine.com/" },
      { text: "Pics to remember!", href: "https://www.hipchicksdowine.com/store" }
    ]
  },
  {
    region: "se_portland",
    title: "Dispensery Tour in SE!!",
    description: "This was easily my best birthday EVER!",
    bgImg: "https://high5tours.com/wp-content/uploads/2016/05/High_5_Tours_CannaPDX_007-e1497778518752.jpg",
    links: [
      { text: "Our entire night was spent here!", href: "https://homegrownapothecary.com/" }
    ]
  },
  {
    region: "central_or",
    title: "Our friends 50th",
    description: "We were supposed to start here but never left!",
    bgImg: "https://static.wixstatic.com/media/decb9b_a1083f6a6e6247c6a1bec49db587b0aa~mv2.png/v1/fill/w_369,h_297,al_c,q_85,usm_0.66_1.00_0.01/Screen%20Shot%202019-01-07%20at%202_26_43%20PM.webp",
    links: [
      { text: "Faith Hope and Charity Winery was Amazing!!", href: "https://www.faithhopeandcharityevents.com/about" },
    ]
  },
  {
    region: "central_or",
    title: "Brewery Tour in Bend 9/25",
    description: "Cannot wait to get back to this place!",
    bgImg: "https://d1o0i0v5q5lp8h.cloudfront.net/desbre/live/assets/locations/image/DeschutesBendPub_Summer1599083081-26923.jpg",
    links: [
      { text: "Breweries we hit in Bend!", href: "https://beermebend.com/" }
    ]
  },
  {
    region: "central_or",
    title: "Dispensery Tour in Central OR",
    description: "Tours fill up fast. Book one soon!",
    bgImg: "https://homegrownapothecary.com/wp-content/uploads/2014/09/new-tinctures-zzz-lung-love-sexy-1-768x512.jpeg",
    links: [
      { text: "Not sure what happened after we showed up...", href: "https://homegrownapothecary.com/wp-content/uploads/2014/09/new-tinctures-zzz-lung-love-sexy-1-768x512.jpeg" }
    ]
  },
  {
    region: "southern_or",
    title: "Easily 1 of the best wineries in Oregon",
    description: "We spent 4 hours there and had to ask for an extension...",
    bgImg: "https://www.2hawk.wine/wp-content/uploads/2016/11/2Hawk-Vineyard-and-Winery-Tasting-Room-and-Vineyard-with-Mountains-350x233px.webp",
    links: [
      { text: "2Hawk for life! In Medford! :)", href: "https://www.2hawk.wine/" },
    ]
  },
  {
    region: "southern_or",
    title: "Wild River Brewery Tour, AMAZING!!",
    description: "This place makes you want to stay!",
    bgImg: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/11/20/0/fnd_beer-istock.jpg.rend.hgtvcom.616.462.suffix/1448031613421.jpeg",
    links: [
      { text: "Wild River Does Not Disappoint", href: "https://www.wildriverbrewing.com/" },
    ]
  },
  {
    region: "southern_or",
    title: "Dispensery Tour in Medford!",
    description: "No need to look any further. End your night here!",
    bgImg: "https://static.wixstatic.com/media/4f8e2a_659ca684a9244163bf8bfaeffb56f058~mv2.jpeg/v1/fill/w_299,h_148,al_c,q_80,usm_0.66_1.00_0.01/4f8e2a_659ca684a9244163bf8bfaeffb56f058~mv2.webp",
    links: [
      { text: "The Oregon Farmacy Rocks!", href: "https://www.theoregonfarmacy.com/" }
    ]
  }
];

(async function () {
  await Promise.all(tours.map(tour => {
    return db.PastTours.create(tour);
  })
  );
  console.log("Seeding completed");
  mongoose.connection.close();
})();