import React from 'react';
import { styles } from '../shared/styles';
import { projectData } from '../shared/projectData';
import ReusableTable from '../components/ReusableTable';

const Slide14Connectivity = () => {
  const columns = ["Mode", "Distance"];
  const connectivityData = projectData.connectivity;

  const tableStyle = {
    width: '45%',
    margin: '10px',
    display: 'inline-block',
    verticalAlign: 'top',
    minHeight: '150px' // Added minHeight to make tables larger
  };

  const nearbyAmenitiesContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'space-around'
  };

  return (
    <div style={{...styles.screen, ...styles.whiteBg}}>
      <div style={styles.container}>
        <h1 style={styles.overviewTitle}>CONNECTIVITY ANALYSIS</h1>
        <div style={styles.overviewTitleDivider}></div>

        <h2 style={styles.specsBuildingConfigurationTitle}>Nearby Amenities</h2>
        <div style={nearbyAmenitiesContainerStyle}>
          <div style={tableStyle}>
            <ReusableTable data={connectivityData.nearbyAmenities} columns={["Tech Parks", "Distance"]} />
          </div>

          <div style={tableStyle}>
            <h2 style={styles.specsBuildingConfigurationTitle}>Schools</h2>
            <ReusableTable data={[]} columns={["Schools", "Distance"]} />
          </div>

          <div style={tableStyle}>
            <h2 style={styles.specsBuildingConfigurationTitle}>Hospitals</h2>
            <ReusableTable data={connectivityData.nearbyAmenities} columns={["Hospitals", "Distance"]} />
          </div>

          <div style={tableStyle}>
            <h2 style={styles.specsBuildingConfigurationTitle}>Malls</h2>
            <ReusableTable data={[]} columns={["Malls", "Distance"]} />
          </div>
        </div>

        <h2 style={styles.specsBuildingConfigurationTitle}>Airport, Railway and Metro</h2>
        <div style={tableStyle}>
          <ReusableTable data={connectivityData.airportRailwayMetro} columns={columns} />
        </div>

        <div style={styles.overviewFooter}>
          <p style={styles.overviewFooterText}>{projectData.projectOverview1.projectName} Investment Report March 2024 © Restack</p>
        </div>

        <div style={styles.overviewPageNumber}>12</div>
      </div>
    </div>
  );
};

export default Slide14Connectivity;