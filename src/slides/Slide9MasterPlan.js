import React from 'react';
import { styles } from '../shared/styles';

import { projectData } from '../shared/projectData';

const masterplan1 = require('../components/masterplan1.jpg');
const masterplan2 = require('../components/masterplan2.jpg');

function Slide9MasterPlan() {
 const { title, keyPoints } = projectData.masterPlan;
 const images = [masterplan1, masterplan2];
 return (
  <div style={{...styles.screen, ...styles.whiteBg}}>
   <div style={styles.container}>
    {/* Main Title */}
    <h1 style={styles.overviewTitle}>{title}</h1>

    {/* Horizontal line below title */}
    <div style={styles.overviewTitleDivider}></div>

    <div style={{ display: 'flex' }}>
     {/* Project Siteplan Image */}
     <div style={{ flex: '1', marginRight: '32px' }}>
      <div style={{display: 'flex', alignItems: 'center'}}>
       <h2 style={styles.specsBuildingConfigurationTitle}>
        Master Plan Images
       </h2>
      </div>
      {images?.length === 1 ? (
       <img src={images[0]} alt="Masterplan" style={{ width: '350px', height: '350px', objectFit: 'cover' }} />
      ) : images?.length === 2 ? (
       <div style={{display: 'flex'}}>
        <img src={images[0]} alt="Masterplan 1" style={{ width: '350px', height: '350px', objectFit: 'cover', marginRight: '10px' }} />
        <img src={images[1]} alt="Masterplan 2" style={{ width: '350px', height: '350px', objectFit: 'cover' }} />
       </div>
      ) : (
       <p>Please provide one or two images.</p>
      )}
     </div>

     {/* Key Points */}
     <div style={{ flex: '1', flexDirection: 'column' }}>
      <h2 style={styles.specsBuildingConfigurationTitle}>
       KEY POINTS
      </h2>
      <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
       {keyPoints?.map((point, index) => (
        <li key={index} style={styles.specsBuildingConfigurationText}>{point}</li>
       ))}
      </ul>
     </div>
    </div>

    {/* Footer */}
    <div style={styles.overviewFooter}>
                    <p style={styles.overviewFooterText}>{projectData.projectOverview1.projectName} Investment Report March 2024 © Restack</p>
                  </div>

    {/* Page Number */}
    <div style={styles.overviewPageNumber}>08</div>
   </div>
  </div>
 );
}

export default Slide9MasterPlan;
