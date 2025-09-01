import React from 'react';
import { styles } from '../shared/styles';
import { projectData } from '../shared/projectData';
import SitePlanImage from '../components/siteplan.png';

export default function Slide5Location() {
  return (
    <div style={{...styles.screen, ...styles.whiteBg}}>
      <div style={styles.container}>
        {/* Main Title */}
        <h1 style={styles.overviewTitle}>PROJECT LOCATION</h1>

        {/* Horizontal line below title */}
        <div style={styles.overviewTitleDivider}></div>

        <div style={{ display: 'flex' }}>
          {/* Project Site on Google Maps */}
          <div style={{ flex: '1', marginRight: '32px' }}>
            <div style={{display: 'flex', alignItems: 'center'}}>
              <h2 style={styles.specsBuildingConfigurationTitle}>
                Project Site on Google Maps
              </h2>
              <a href={projectData.projectLocation.googleMapsLink} style={{marginLeft: '10px', fontFamily: 'Outfit, sans-serif', fontSize: '1.4rem'}}>Link</a>
            </div>
            <img src={SitePlanImage} alt="Site Plan" style={{ width: '350px', height: '350px', objectFit: 'cover' }} />
          </div>

          {/* Project Address */}
          <div style={{ flex: '1', flexDirection: 'column' }}>
            <h2 style={styles.specsBuildingConfigurationTitle}>
              PROJECT ADDRESS
            </h2>
            <p style={styles.specsBuildingConfigurationText}>
              {projectData.projectLocation.projectAddress}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginTop: '16px' }}>
              <div style={{...styles.overviewInfoBox, padding: '16px'}}>
                <div style={styles.overviewMetricLabel}>MICRO MARKET</div>
                <div style={styles.overviewMetricValue}>{projectData.projectLocation.microMarket}</div>
                <div style={styles.overviewMetricDivider}></div>
              </div>

              <div style={{...styles.overviewInfoBox, padding: '16px'}}>
                <div style={styles.overviewMetricLabel}>DISTRICT</div>
                <div style={styles.overviewMetricValue}>{projectData.projectLocation.district}</div>
                <div style={styles.overviewMetricDivider}></div>
              </div>

              <div style={{...styles.overviewInfoBox, padding: '16px'}}>
                <div style={styles.overviewMetricLabel}>ZONE</div>
                <div style={styles.overviewMetricValue}>{projectData.projectLocation.zone}</div>
                <div style={styles.overviewMetricDivider}></div>
              </div>

              <div style={{...styles.overviewInfoBox, padding: '16px'}}>
                <div style={styles.overviewMetricLabel}>LAT / LONG</div>
                <div style={styles.overviewMetricValue}>{projectData.projectLocation.latLong}</div>
                <div style={styles.overviewMetricDivider}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
         <div style={styles.overviewFooter}>
                         <p style={styles.overviewFooterText}>{projectData.projectOverview1.projectName} Investment Report March 2024 © Restack</p>
                       </div>

        {/* Page Number */}
        <div style={styles.overviewPageNumber}>04</div>
      </div>
    </div>
  );
}