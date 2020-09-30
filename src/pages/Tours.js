import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell} from 'react-mdl';

import TourCard from "../components/TourCard";

const tours = [
  {
    title: "Party of 5 - 9/20/20",
    description: "This is some text about a recent wine tour!",
    bgImg: "https://www.cardfool.com/cards/assets/Big%20Wine%20Glass%20Val_cover.jpg",
    links: [
      { text: "Wines", href:"https://www.yahoo.com/"},
      { text: "Wineries"},
      { text: "Pics"}
    ]
  },
  {
    title: "Brewery Tour in Bend 9/25",
    description: "This is some text about a recent wine tour!",
    bgImg: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/11/20/0/fnd_beer-istock.jpg.rend.hgtvcom.616.462.suffix/1448031613421.jpeg",
    links: [
      { text: "Breweries"},
      { text: "Beers"},
      { text: "Pics"}
    ]
  },
  {
    title: "Dispensery Tour in NW!!",
    description: "This is some text about a recent wine tour!",
    bgImg: "https://www.northernsun.com/images/image16x16/576x576/3702.png",
    links: [
      { text: "Wines" },
      { text: "Beers"},
      { text: "Pics"}
    ]
  }
]

class Tours extends Component {
  constructor(props) {
    super();
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if (this.state.activeTab === 0) {
      return (
        <div className="tours-grid">
          {tours.map(({title, description, bgImg, links}) => (<TourCard title={title} description={description} bgImg={bgImg} links={links} />))}
        </div>


      )
    } else if (this.state.activeTab === 1) {
      return (
        <div className="tours-grid">
        {tours.map(({title, description, bgImg, links}) => (<TourCard title={title} description={description} bgImg={bgImg} links={links} />))}
      </div>
      )
    } else if (this.state.activeTab === 2) {
      return (
        <div className="tours-grid">
        {tours.map(({title, description, bgImg, links}) => (<TourCard title={title} description={description} bgImg={bgImg} links={links} />))}
      </div>
      )
    } else if (this.state.activeTab === 3) {
      return (
        <div className="tours-grid">
        {tours.map(({title, description, bgImg, links}) => (<TourCard title={title} description={description} bgImg={bgImg} links={links} />))}
      </div>
      )
    }

  }



  render() {
    return (
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ 
          activeTab: tabId })} ripple>
          <Tab>NW Portland</Tab>
          <Tab>SE Portland</Tab>
          <Tab>Central OR</Tab>
          <Tab>Southern OR</Tab>
        </Tabs>
        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>


      </div>
    )
  }
}

export default Tours;