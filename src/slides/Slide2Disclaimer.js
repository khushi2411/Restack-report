import React from 'react';
import { styles } from '../shared/styles';
import { projectData } from '../shared/projectData';

export default function Slide2Disclaimer() {
  return (
    <div style={{...styles.screen, ...styles.whiteBg}}>
      <div style={styles.container}>
        {/* Disclaimer Title */}
        <h1 style={styles.disclaimerTitle}>Disclaimer</h1>
        
        {/* Horizontal line below title */}
        <div style={styles.disclaimerDivider}></div>
        
        {/* First Paragraph */}
        <p style={styles.disclaimerText}>
          The information presented in this document about {projectData.projectOverview1.projectName} is intended solely for informational purposes. The insights shared here are derived from publicly available sources and data at the time of publication, including market analysis, price trends, location advantages, and proposed infrastructure plans. All information, including project specifications, pricing, amenities, possession timelines, and approvals, are subject to change as the project evolves and undergoes necessary clearances, including RERA.
        </p>
        
        {/* Second Paragraph */}
        <p style={styles.disclaimerText}>
          This document offers data-backed insights to assist prospective buyers in understanding the project's market positioning and potential value proposition. However, it does not constitute legal, financial, or investment advice. All interested parties are strongly encouraged to conduct their own due diligence and consult with certified professionals before making any investment or purchase decisions. Neither the publisher nor its affiliates shall be held responsible for any decisions taken based on the information herein. By accessing and referring to this document, you acknowledge and accept the above terms.
        </p>
        
        {/* Footer */}
        <div style={styles.disclaimerFooter}>
          <p style={styles.disclaimerFooterText}>
            Green Hills Investment Report March 2024 © Restack
          </p>
        </div>
      </div>
    </div>
  );
}
