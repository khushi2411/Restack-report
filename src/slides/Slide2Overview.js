import React from 'react';
import { styles } from '../shared/styles';
import { projectData } from '../shared/projectData';

export default function Slide2Overview() {
  return (
    <div style={{...styles.screen, ...styles.whiteBg}}>
      <div style={styles.container}>
        {/* Main Title */}
        <h1 style={styles.overviewTitle}>{projectData.projectOverview1.projectName?.toUpperCase()}</h1>
        
        {/* Horizontal line below title */}
        <div style={styles.overviewTitleDivider}></div>
        
        {/* Project Description */}
        <p style={styles.overviewDescription}>
          {projectData.projectOverview1.projectDescription}
        </p>
        
        {/* Key Metrics Grid - 2 rows of 3 */}
        <div style={styles.overviewMetricsGrid}>
          {/* Row 1 */}
          <div style={styles.overviewInfoBox}>
            <div style={styles.overviewMetricLabel}>PROJECT STAGE</div>
            <div style={styles.overviewMetricValue}>{projectData.projectOverview1.projectStatus?.toUpperCase()}</div>
            <div style={styles.overviewMetricDivider}></div>
          </div>
          
          <div style={styles.overviewInfoBox}>
            <div style={styles.overviewMetricLabel}>ASSET TYPE</div>
            <div style={styles.overviewMetricValue}>{projectData.projectOverview1.assetType?.toUpperCase()}</div>
            <div style={styles.overviewMetricDivider}></div>
          </div>
          
          <div style={styles.overviewInfoBox}>
            <div style={styles.overviewMetricLabel}>PRICE</div>
            <div style={styles.overviewMetricValue}>{projectData.projectOverview1.expectedLaunchPrice}</div>
            <div style={styles.overviewMetricDivider}></div>
          </div>
          
          {/* Row 2 */}
          <div style={styles.overviewInfoBox}>
            <div style={styles.overviewMetricLabel}>NO OF UNITS</div>
            <div style={styles.overviewMetricValue}>{projectData.projectOverview1.noOfUnits} UNITS</div>
            <div style={styles.overviewMetricDivider}></div>
          </div>
          
          <div style={styles.overviewInfoBox}>
            <div style={styles.overviewMetricLabel}>PROJECT DENSITY</div>
            <div style={styles.overviewMetricValue}>{projectData.projectOverview2.projectDensity?.toUpperCase()}</div>
            <div style={styles.overviewMetricDivider}></div>
          </div>
          
          <div style={styles.overviewInfoBox}>
            <div style={styles.overviewMetricLabel}>PROJECT SIZE</div>
            <div style={styles.overviewMetricValue}>{projectData.projectOverview1.projectSize?.toUpperCase()}</div>
            <div style={styles.overviewMetricDivider}></div>
          </div>
        </div>
        
        {/* Footer */}
        <div style={styles.overviewFooter}>
          <p style={styles.overviewFooterText}>{projectData.projectOverview1.projectName} Investment Report March 2024 © Restack</p>
        </div>
        
        {/* Page Number */}
        <div style={styles.overviewPageNumber}>01</div>
      </div>
    </div>
  );
} 