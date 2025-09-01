import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Main from './Main';
import Slide1Cover from './slides/Slide1Cover';
import Slide2Disclaimer from './slides/Slide2Disclaimer';
import Slide3Overview from './slides/Slide2Overview';
import Slide4Specs from './slides/Slide3Specs';
import Slide4Developer from './slides/Slide4Developer';
import Slide5Location from './slides/Slide5Location';
import Slide6View from './slides/Slide6View';
import Slide7Cdp from './slides/Slide7Cdp';
import Slide8Siteplan from './slides/Slide8Siteplan';
import Slide6Conclusion from './slides/Slide5Conclusion';
import Slide9MasterPlan from './slides/Slide9MasterPlan';
import Slide10WaterSupply from './slides/Slide10WaterSupply';
import Slide11Clubhouse from './slides/Slide11Clubhouse';
import Slide13SiteAssessment from './slides/Slide13SiteAssessment';
import Slide14Connectivity from './slides/Slide14Connectivity';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/slide/1" replace />} />
        <Route path="/slide" element={<Main />}>
          <Route path="1" element={<Slide1Cover />} />
          <Route path="2" element={<Slide2Disclaimer />} />
          <Route path="3" element={<Slide3Overview />} />
          <Route path="4" element={<Slide4Specs />} />
          <Route path="5" element={<Slide4Developer />} />
          <Route path="6" element={<Slide5Location />} />
          <Route path="7" element={<Slide6View />} />
          <Route path="8" element={<Slide7Cdp />} />
          <Route path="9" element={<Slide8Siteplan />} />
          <Route path="10" element={<Slide9MasterPlan />} />
          <Route path="11" element={<Slide10WaterSupply />} />
          <Route path="12" element={<Slide11Clubhouse />} />
          <Route path="13" element={<Slide13SiteAssessment />} />
          <Route path="14" element={<Slide14Connectivity />} />
        </Route>
        <Route path="*" element={<Navigate to="/slide/1" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;