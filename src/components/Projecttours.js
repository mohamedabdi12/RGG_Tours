import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projecttours extends Component {
  constructor(props) {
    super();
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if (this.state.activeTab === 0) {
      return (
        <div className="projecttours-grid">
          {/* Image 1 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://www.cardfool.com/cards/assets/Big%20Wine%20Glass%20Val_cover.jpg) center / cover' }} >Party of 5 - 9/20/20</CardTitle>
            <CardText>
              This is some text about a recent wine tour!
            </CardText>
            <CardActions border>
              <Button colored><a href="https://www.yahoo.com/">Wines</a></Button>
              <Button colored>Wineries</Button>
              <Button colored>Pics</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Image 2 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/11/20/0/fnd_beer-istock.jpg.rend.hgtvcom.616.462.suffix/1448031613421.jpeg) center / cover' }} >Brewery Tour in Bend 9/25</CardTitle>
            <CardText>
              This is some text about a brewery tour!
            </CardText>
            <CardActions border>
              <Button colored>Breweries</Button>
              <Button colored>Beers</Button>
              <Button colored>Pics</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Image 3 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://www.northernsun.com/images/image16x16/576x576/3702.png) center / cover' }} >Dispensery Tour in NW!!</CardTitle>
            <CardText>
              This is some text about a dispensery tour!
            </CardText>
            <CardActions border>
              <Button colored>Wines</Button>
              <Button colored>Beers</Button>
              <Button colored>Buds</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>


      )
    } else if (this.state.activeTab === 1) {
      return (
        <div><h1>This is SE Portland's Page</h1></div> /* Add cards as above per section */
      )
    } else if (this.state.activeTab === 2) {
      return (
        <div><h1>This is Central Oregon's Page</h1></div> /* Add cards as above per section */
      )
    } else if (this.state.activeTab === 3) {
      return (
        <div><h1>This is Southern Oregon's Page</h1></div> /* Add cards as above per section */
      )
    }

  }



  render() {
    return (
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
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

export default Projecttours;