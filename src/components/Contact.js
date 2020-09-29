import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Book your tour today!</h2>
            <img
              src="https://st.depositphotos.com/1636803/2416/i/950/depositphotos_24169067-stock-photo-sign-a-green-cross.jpg"
              alt="Big Green Cross"
              style={{height: '250px'}}
               />
               <img
              src="https://www.cardfool.com/cards/assets/Big%20Wine%20Glass%20Val_cover.jpg"
              alt="Big Wine Glass"
              style={{height: '250px'}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>We specialize in wine and dispensery tours. Call today to reserve your tour!</p>
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Flying solo? No problem. Check out our message board to connect with others looking to book tours in your area. No one wants to fly alone!</p>

          </Cell>
          <Cell col={6}>
            <h2>Contact Us</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (971) 655-5646
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-fax" aria-hidden="true"/>
                    (503) 202-0401
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    RedGoldAndGreens@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-skype" aria-hidden="true"/>
                    RedGoldAndGreens@Skype
                  </ListItemContent>
                </ListItem>


              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;