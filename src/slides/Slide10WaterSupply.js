import React from 'react';
import { styles } from '../shared/styles';
import { projectData } from '../shared/projectData';

const Slide10WaterSupply = () => {
  return (
    <div style={styles.screen}>
      <div style={styles.whiteBg}>
        <div style={styles.container}>
          <h1 style={styles.overviewTitle}>
            WATER SUPPLY AND TREATMENT
          </h1>
          <div style={styles.overviewTitleDivider}></div>

          <h2 style={styles.specsBuildingConfigurationTitle}>
            WATER SUPPLY DETAILS
          </h2>

          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <div style={{...styles.metricBox, position: 'relative', flex: '1', textAlign: 'center'}}>
              <div style={{...styles.metricLabel, fontSize: '1rem'}}>
                Source of Water
              </div>
              <div style={{...styles.metricNumber, fontSize: '1.2rem'}}>
                {projectData.waterSupply && projectData.waterSupply.sourceOfWater}
              </div>
              <div style={{position: 'absolute', top: '0', bottom: '0', right: '0', width: '1px', background: '#ddd'}}></div>
            </div>
            <div style={{...styles.metricBox, position: 'relative', flex: '1', textAlign: 'center'}}>
              <div style={{...styles.metricLabel, fontSize: '1rem'}}>
                Total Water Requirement
              </div>
              <div style={{...styles.metricNumber, fontSize: '1.2rem'}}>
                {projectData.waterSupply && projectData.waterSupply.totalWaterRequirement}
              </div>
              <div style={{position: 'absolute', top: '0', bottom: '0', right: '0', width: '1px', background: '#ddd'}}></div>
            </div>
            <div style={{...styles.metricBox, flex: '1', textAlign: 'center'}}>
              <div style={{...styles.metricLabel, fontSize: '1rem'}}>
                Wastewater Generation
              </div>
              <div style={{...styles.metricNumber, fontSize: '1.2rem'}}>
                {projectData.waterSupply && projectData.waterSupply.wastewaterGeneration}
              </div>
            </div>
          </div>

          <h2 style={styles.specsBuildingConfigurationTitle}>
            TREATMENT FACILITIES
          </h2>

          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <div style={{...styles.metricBox, position: 'relative', flex: '1', textAlign: 'center'}}>
              <div style={{...styles.metricLabel, fontSize: '1rem'}}>
                Treated Water Use
              </div>
              <div style={{...styles.metricNumber, fontSize: '1.2rem'}}>
                {projectData.waterSupply && projectData.waterSupply.treatedWaterUse}
              </div>
              <div style={{position: 'absolute', top: '0', bottom: '0', right: '0', width: '1px', background: '#ddd'}}></div>
            </div>
            <div style={{...styles.metricBox, position: 'relative', flex: '1', textAlign: 'center'}}>
              <div style={{...styles.metricLabel, fontSize: '1rem'}}>
                Treatment Facility and Technology
              </div>
              <div style={{...styles.metricNumber, fontSize: '1.2rem'}}>
                {projectData.waterSupply && projectData.waterSupply.treatmentFacilityTechnology}
              </div>
              <div style={{position: 'absolute', top: '0', bottom: '0', right: '0', width: '1px', background: '#ddd'}}></div>
            </div>
            <div style={{...styles.metricBox, flex: '1', textAlign: 'center'}}>
              <div style={{...styles.metricLabel, fontSize: '1rem'}}>
                Capacity of STP
              </div>
              <div style={{...styles.metricNumber, fontSize: '1.2rem'}}>
                {projectData.waterSupply && projectData.waterSupply.capacityOfSTP}
              </div>
            </div>
          </div>

          <div style={styles.overviewFooter}>
            <p style={styles.overviewFooterText}>{projectData.projectOverview1.projectName} Investment Report March 2024 © Restack</p>
          </div>

          <div style={styles.overviewPageNumber}>09</div>
        </div>
      </div>
    </div>
  );
};

export default Slide10WaterSupply;