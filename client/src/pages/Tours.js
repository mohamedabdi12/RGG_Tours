import React, { useState, useEffect } from 'react';
import { Tabs, Tab } from 'react-mdl';

import API from "../utils/API";

import TourGrid from "../components/TourGrid";

const Tours = () => {
  const [regions, setRegions] = useState();
  const [activeTab, setActiveTab] = useState(0);
  const [tours, setTours] = useState([]);

  useEffect(() => {
    API.getRegions().then(res => {
      setRegions(res.data);
    });
  }, []);

  useEffect(() =>{
    if (!regions) return;
    API.getTours(regions[activeTab].id).then(res => {
      setTours(() => res.data);
    });
  }, [regions, activeTab]);
  console.log('regons are: ', regions);
  return (
    <div>
      {
        !!regions && (
          <Tabs activeTab={activeTab} onChange={(tabId) => setActiveTab(tabId)} ripple>
            {regions.map(region => (<Tab key={region.text}>{region.text}</Tab>))}
          </Tabs>
        )
      }
      <TourGrid tours={tours} />
    </div>
  )
}

export default Tours;