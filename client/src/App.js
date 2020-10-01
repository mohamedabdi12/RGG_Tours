import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import PageSwitch from './pages/PageSwitch';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header className="header-color" title={<Link style={{ textDecoration: 'none', color: 'white' }} to="/">Reds Gold and Greens</Link>} scroll>
            <Navigation>
              <Link to="/about">About</Link>
              <Link to="/tours">Tours</Link>
              <Link to="/booking">Booking</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Header>
          <Drawer title="Explore">
            <Navigation>
              <Link to="/about">About</Link>
              <Link to="/tours">Tours</Link>
              <Link to="/booking">Booking</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <PageSwitch />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;