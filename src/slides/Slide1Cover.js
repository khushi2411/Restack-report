import React from 'react';
import { styles } from '../shared/styles';
import { projectData } from '../shared/projectData';
import coverImg from '../components/Rectangle 4690.png';

export default function Slide1Cover() {
  return (
    <div style={{...styles.screen, ...styles.coverSplit}}>
      <div style={styles.coverLeft}>
        <div style={styles.coverLeftInner}>
          <h1 style={styles.coverTitle}>Real Estate Investment Report</h1>

          <div style={{marginTop: styles.theme.spacing.lg}}>
            <h2 style={styles.coverProjectTitle}>{projectData.projectOverview1.projectName || '—'}</h2>
            <p style={styles.coverProjectSubtitle}>{projectData.projectOverview1.location || ''}</p>
          </div>

          <div style={{position: 'absolute', bottom: '48px'}}>
            <p style={styles.coverFooterMuted}>Powered by Restack</p>
          </div>
        </div>
      </div>

      {/* <div style={{...styles.coverRight, backgroundImage: `url(${coverImg})`}} /> */}
      <img src={coverImg} alt="Cover" style={{...styles.coverRight, objectFit: 'cover'}} />
    </div>
  );
} 