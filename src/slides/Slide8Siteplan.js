import React from 'react';
import siteplan2 from '../components/siteplan2.jpg';
import { styles } from '../shared/styles';
import { projectData } from '../shared/projectData';

export default function Slide8Siteplan() {
  return (
    <div style={{...styles.screen, ...styles.whiteBg}}>
      <div style={styles.container}>
        {/* Main Title */}
        <h1 style={styles.overviewTitle}>SITE PLAN</h1>

        {/* Horizontal line below title */}
        <div style={styles.overviewTitleDivider}></div>

        <div style={{ display: 'flex' }}>
          {/* Project Siteplan Image */}
          <div style={{ flex: '1', marginRight: '32px' }}>
            <div style={{display: 'flex', alignItems: 'center'}}>
              <h2 style={styles.specsBuildingConfigurationTitle}>
                Site Plan CAD Drawing PDF
              </h2>
              <a href={projectData.projectLocation.googleMapsLink} style={{marginLeft: '10px', fontFamily: 'Outfit, sans-serif', fontSize: '1.4rem'}}>Link</a>
            </div>
            <img src={siteplan2} alt="Site Plan" style={{ width: '350px', height: '350px', objectFit: 'cover' }} />
          </div>

          {/* Key Points */}
          <div style={{ flex: '1', flexDirection: 'column' }}>
            <h2 style={styles.specsBuildingConfigurationTitle}>
              KEY POINTS
            </h2>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
              {projectData.siteplan.keyPoints.map((point, index) => (
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
        <div style={styles.overviewPageNumber}>07</div>
      </div>
    </div>
  );
}