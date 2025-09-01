import React from 'react';
import { styles } from '../shared/styles';
import { projectData } from '../shared/projectData';
import ReusableTable from '../components/ReusableTable';

const Slide13SiteAssessment = () => {
  const columns = ["assessmentType", "status"];
  return (
    <div style={{...styles.screen, ...styles.whiteBg}}>
      <div style={styles.container}>
        <h1 style={styles.overviewTitle}>Site Assessment</h1>
        <div style={styles.overviewTitleDivider}></div>

        <ReusableTable data={projectData.siteAssessment} columns={columns} />

        <div style={styles.overviewFooter}>
          <p style={styles.overviewFooterText}>{projectData.projectOverview1.projectName} Investment Report March 2024 © Restack</p>
        </div>

        <div style={styles.overviewPageNumber}>11</div>
      </div>
    </div>
  );
};

export default Slide13SiteAssessment;