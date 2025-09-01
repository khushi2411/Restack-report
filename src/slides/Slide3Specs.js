import React from 'react';
import { Home } from 'lucide-react';
import { styles } from '../shared/styles';
import { projectData } from '../shared/projectData';
import OpenAreaIcon from '../components/openArea.png';
import LaunchIcon from '../components/launchicon.png';
import TypologyIcon from '../components/typology.png';
import ParkingIcon from '../components/parkingicon.png';

export default function Slide3Specs() {
  return (
    <div style={{...styles.screen, ...styles.whiteBg}}>
      <div style={styles.container}>
        {/* Main Title */}
        <h1 style={styles.overviewTitle}>PROJECT SPECIFICATIONS</h1>

        {/* Horizontal line below title */}
        <div style={styles.overviewTitleDivider}></div>

        <div style={{ display: 'flex' }}>
          {/* Building Configuration */}
          <div style={{ flex: '1', marginRight: '32px' }}>
            <h2 style={styles.specsBuildingConfigurationTitle}>
              BUILDING CONFIGURATION
            </h2>
            <div className="divider-line" style={styles.specsDividerLine}></div>
            <p style={styles.specsBuildingConfigurationText} dangerouslySetInnerHTML={{
              __html: projectData.projectOverview2.buildingConfiguration
                .replace('Parcel-2', '<br />Parcel-2')
                .replace('Parcel-3', '<br />Parcel-3')
                .replace('Parcel-4', '<br />Parcel-4')
            }} />
          </div>

          {/* Key Metrics Grid - 2 rows of 2 */}
          <div style={{ flex: '1' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px' }}>
              {/* Row 1 */}
              <div style={styles.overviewInfoBox}>
                <img src={OpenAreaIcon} alt="Open Area" style={{ height: '40px', marginBottom: '16px' }} />
                <div style={styles.overviewMetricLabel}>OPEN AREA %</div>
                <div style={styles.overviewMetricValue}>{projectData.projectOverview2.openArea}</div>
                <div style={styles.overviewMetricDivider}></div>
              </div>
<div style={styles.overviewInfoBox}>
  <img src={LaunchIcon} alt="Launch Status" style={{ height: '40px', marginBottom: '16px' }} />
  <div style={styles.overviewMetricLabel}>LAUNCH STATUS</div>
  <div style={styles.overviewMetricValue}>Launch On {projectData.projectOverview2.launchDateTentative}</div>
  <div style={styles.overviewMetricDivider}></div>
</div>

{/* Row 2 */}
<div style={styles.overviewInfoBox}>
  <img src={TypologyIcon} alt="Typology" style={{ height: '40px', marginBottom: '16px' }} />

                <div style={styles.overviewMetricLabel}>TYPOLOGY</div>
                <div style={styles.overviewMetricValue}>{projectData.projectOverview2.typology?.join(', ')}</div>
                <div style={styles.overviewMetricDivider}></div>
              </div>

              <div style={styles.overviewInfoBox}>
                <img src={ParkingIcon} alt="No of Parking" style={{ height: '40px', marginBottom: '16px' }} />
                <div style={styles.overviewMetricLabel}>NO OF PARKING</div>
                <div style={styles.overviewMetricValue}>{projectData.projectOverview2.noOfParking} Parking Per Unit</div>
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
        <div style={styles.overviewPageNumber}>02</div>
      </div>
    </div>
  );
}