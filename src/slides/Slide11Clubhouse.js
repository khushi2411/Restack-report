import React from 'react';
import { styles } from '../shared/styles';
import { projectData } from '../shared/projectData';
import ReusableTable from '../components/ReusableTable';

const Slide11Clubhouse = () => {
  const columns = ["name", "size", "floor"];
  return (
    <div style={{...styles.screen, ...styles.whiteBg}}>
      <div style={styles.container}>
        <h1 style={styles.overviewTitle}>CLUBHOUSE</h1>
        <div style={styles.overviewTitleDivider}></div>

        <h2 style={styles.specsBuildingConfigurationTitle}>CLUBHOUSE SPECIFICATIONS</h2>

        <ReusableTable data={projectData.clubhouseSpecifications} columns={columns} />

        <div style={styles.overviewFooter}>
          <p style={styles.overviewFooterText}>{projectData.projectOverview1.projectName} Investment Report March 2024 © Restack</p>
        </div>

        <div style={styles.overviewPageNumber}>10</div>
      </div>
    </div>
  );
};

export default Slide11Clubhouse;