import React from 'react';
import { styles } from '../shared/styles';
import { projectData } from '../shared/projectData';
import DeveloperImage from '../components/developer.png';

export default function Slide4Developer() {
  return (
    <div style={{...styles.screen, ...styles.whiteBg}}>
      <div style={styles.container}>
        {/* Main Title */}
        <h1 style={styles.overviewTitle}>DEVELOPER PROFILE</h1>

        {/* Horizontal line below title */}
        <div style={styles.overviewTitleDivider}></div>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Developer Information */}
          <div style={{ flex: '1', marginRight: '32px' }}>
            <h2 style={styles.specsBuildingConfigurationTitle}>
              DEVELOPER INFORMATION
            </h2>
            <p style={styles.specsBuildingConfigurationText}>
              Developer Name : {projectData.developerProfile.developerName}
            </p>
            <img src={DeveloperImage} alt="Developer" style={{ width: '250px', height: '250px', objectFit: 'cover' }} />
          </div>

          {/* About Developer */}
          <div style={{ flex: '1', flexDirection: 'column' }}>
            <h2 style={styles.specsBuildingConfigurationTitle}>
              About Developer
            </h2>
            <p style={styles.specsBuildingConfigurationText}>
              {projectData.developerProfile.aboutDeveloper}
            </p>
            <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '32px' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>
                  {projectData.developerProfile.ongoingProjects}
                </div>
                <div style={styles.specsDividerLine}></div>
                <div>Ongoing Projects</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>
                  {projectData.developerProfile.projectsCompleted}
                </div>
                <div style={styles.specsDividerLine}></div>
                <div>Projects Completed</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={styles.overviewFooter}>
                        <p style={styles.overviewFooterText}>{projectData.projectOverview1.projectName} Investment Report March 2024 © Restack</p>
                      </div>

        {/* Page Number */}
        <div style={styles.overviewPageNumber}>03</div>
      </div>
    </div>
  );
}