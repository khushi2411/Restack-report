import React from 'react';
import Slide1Cover from './Slide1Cover';
import Slide2Disclaimer from './Slide2Disclaimer';
import Slide3Overview from './Slide2Overview';
import Slide4Specs from './Slide3Specs';
import Slide4Developer from './Slide4Developer';
import Slide5Location from './Slide5Location';
import Slide6View from './Slide6View';
import Slide7Cdp from './Slide7Cdp';
import Slide8Siteplan from './Slide8Siteplan';
import Slide9MasterPlan from './Slide9MasterPlan';
import Slide10WaterSupply from './Slide10WaterSupply';
import Slide11Clubhouse from './Slide11Clubhouse';


export default function SlideRoutes({ index }) {
  switch (index) {
    case 1:
      return <Slide1Cover />;
    case 2:
      return <Slide2Disclaimer />;
    case 3:
      return <Slide3Overview />;
    case 4:
      return <Slide4Specs />;
    case 5:
      return <Slide4Developer />;
    case 6:
      return <Slide5Location />;
    case 7:
      return <Slide6View />;
    case 8:
      return <Slide7Cdp />;
    case 9:
      return <Slide8Siteplan />;
    case 10:
      return <Slide9MasterPlan />;
    case 11:
      return <Slide10WaterSupply />;
    case 12:
      return <Slide11Clubhouse />;
    case 13:
      return <Slide5Conclusion />;
    case 14:
      return <Slide14Connectivity />;
  
  }
}