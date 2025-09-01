import React from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';
import { styles } from '../shared/styles';
import { projectData } from '../shared/projectData';

export default function Slide5Conclusion() {
  return (
    <div style={{...styles.screen, background: 'linear-gradient(135deg, #1f2937 0%, #111827 100%)', color: 'white', padding: '48px'}}>
      <div style={styles.container}>
        <div style={{textAlign: 'center', marginBottom: '48px'}}>
          <h2 style={{fontSize: '4rem', fontWeight: 'bold', marginBottom: '24px'}}>Conclusion</h2>
          <div style={{...styles.divider, background: '#10b981'}}></div>
        </div>
        <div style={{...styles.grid, marginBottom: '48px'}}>
          <div style={styles.advantageCard}>
            <h3 style={{fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '24px', display: 'flex', alignItems: 'center'}}>
              <CheckCircle size={32} style={{marginRight: '12px'}} />
              Key Advantages
            </h3>
            <div style={{display: 'grid', gap: '16px'}}>
              {projectData.conclusion.keyAdvantages.map((advantage, index) => (
                <div key={index} style={{display: 'flex', alignItems: 'center', padding: '16px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '8px'}}>
                  <CheckCircle size={24} style={{color: '#bbf7d0', marginRight: '12px'}} />
                  <span style={{fontSize: '1.125rem', fontWeight: '500'}}>{advantage}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={styles.limitationCard}>
            <h3 style={{fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '24px', display: 'flex', alignItems: 'center'}}>
              <AlertCircle size={32} style={{marginRight: '12px'}} />
              Key Limitations
            </h3>
            <div style={{display: 'grid', gap: '16px'}}>
              {projectData.conclusion.keyLimitations.map((limitation, index) => (
                <div key={index} style={{display: 'flex', alignItems: 'center', padding: '16px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '8px'}}>
                  <AlertCircle size={24} style={{color: '#fecaca', marginRight: '12px'}} />
                  <span style={{fontSize: '1.125rem', fontWeight: '500'}}>{limitation}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={styles.summaryCard}>
          <h3 style={{fontSize: '2rem', fontWeight: 'bold', marginBottom: '16px'}}>Executive Summary</h3>
          <p style={{fontSize: '1.25rem', lineHeight: '1.6', color: '#bfdbfe'}}>{projectData.conclusion.summary}</p>
        </div>
        <div style={{textAlign: 'center', marginTop: '32px'}}>
          <div style={{display: 'inline-block', background: '#10b981', color: 'white', padding: '16px 32px', borderRadius: '50px'}}>
            <span style={{fontSize: '1.125rem', fontWeight: 'bold'}}>End of Report</span>
          </div>
        </div>
      </div>
    </div>
  );
} 