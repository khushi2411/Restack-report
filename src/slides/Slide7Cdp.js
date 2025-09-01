import React from 'react';
import { styles } from '../shared/styles';
import { projectData } from '../shared/projectData';
import CdpImage from '../components/cdp.jpg';

export default function Slide7Cdp() {
  return (
    <div style={{...styles.screen, ...styles.whiteBg}}>
      <div style={styles.container}>
        {/* Main Title */}
        <h1 style={styles.overviewTitle}>PROJECT IMAGE ON CDP</h1>

        {/* Horizontal line below title */}
        <div style={styles.overviewTitleDivider}></div>

        <div style={{ display: 'flex' }}>
          {/* Project CDP Image */}
          <div style={{ flex: '1', marginRight: '32px' }}>
            <div style={{display: 'flex', alignItems: 'center'}}>
              <h2 style={styles.specsBuildingConfigurationTitle}>
                Project on CPD Map
              </h2>
              <a href={projectData.projectLocation.googleMapsLink} style={{marginLeft: '10px', fontFamily: 'Outfit, sans-serif', fontSize: '1.4rem'}}>Link</a>
            </div>
            <img src={CdpImage} alt="CDP View" style={{ width: '350px', height: '350px', objectFit: 'cover' }} />
          </div>

          {/* Key Points */}
          <div style={{ flex: '1', flexDirection: 'column' }}>
            <h2 style={styles.specsBuildingConfigurationTitle}>
              KEY POINTS
            </h2>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
              {projectData.aerialView.keyPoints.map((point, index) => (
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
        <div style={styles.overviewPageNumber}>06</div>
      </div>
    </div>
  );
}