export const styles = {
  screen: {
    height: '100vh',
    position: 'relative'
  },
  coverBg: {
    background: 'linear-gradient(135deg, #065f46 0%, #047857 100%)',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '48px'
  },
  whiteBg: {
    background: 'white',
    padding: '48px'
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto'
  },
  title: {
    fontSize: '4rem',
    fontWeight: 'bold',
    marginBottom: '24px',
    lineHeight: '1.1',
    textAlign: 'left'
  },
  subtitle: {
    fontSize: '1.5rem',
    marginBottom: '32px',
    opacity: '0.9'
  },
  sectionTitle: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '16px',
    textAlign: 'left'
  },
  card: {
    background: 'white',
    padding: '32px',
    borderRadius: '16px',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    marginBottom: '24px'
  },
  greenCard: {
    background: 'linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)',
    padding: '32px',
    borderRadius: '16px'
  },
  blueCard: {
    background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
    padding: '32px',
    borderRadius: '16px'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '48px',
    alignItems: 'center'
  },
  grid3: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '32px'
  },
  metricBox: {
    textAlign: 'center',
    padding: '24px',
    background: 'white',
    borderRadius: '12px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
  },
  metricNumber: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#1f2937',
    margin: '12px 0'
  },
  navigation: {
    position: 'fixed',
    bottom: '32px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    background: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(8px)',
    padding: '12px 24px',
    borderRadius: '50px',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
  },
  navButton: {
    padding: '8px',
    borderRadius: '50%',
    background: '#e5e7eb',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s'
  },
  navButtonDisabled: {
    opacity: '0.5',
    cursor: 'not-allowed'
  },
  slideIndicator: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s'
  },
  slideIndicatorActive: {
    background: '#10b981',
    width: '24px'
  },
  slideIndicatorInactive: {
    background: '#d1d5db'
  },
  counter: {
    position: 'fixed',
    top: '32px',
    right: '32px',
    background: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    padding: '8px 16px',
    borderRadius: '50px',
    fontWeight: '500'
  },
  dateTag: {
    display: 'flex',
    alignItems: 'center',
    background: 'rgba(34, 197, 94, 0.5)',
    padding: '12px 24px',
    borderRadius: '50px',
    fontSize: '1.125rem'
  },
  statusBadge: {
    background: '#f97316',
    color: 'white',
    padding: '4px 12px',
    borderRadius: '50px',
    fontSize: '0.875rem',
    fontWeight: '500'
  },
  divider: {
    width: '96px',
    height: '4px',
    background: '#10b981',
    margin: '0 auto'
  },
  detailRow: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '12px 0',
    borderBottom: '1px solid #d1fae5'
  },
  timelineBox: {
    padding: '16px',
    borderLeft: '4px solid',
    borderRadius: '8px',
    marginBottom: '16px'
  },
  advantageCard: {
    background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)',
    padding: '32px',
    borderRadius: '16px',
    color: 'white'
  },
  limitationCard: {
    background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
    padding: '32px',
    borderRadius: '16px',
    color: 'white'
  },
  summaryCard: {
    textAlign: 'center',
    background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
    padding: '32px',
    borderRadius: '16px',
    color: 'white'
  },
  // Theme tokens for the whole project
  theme: {
    colors: {
      brandBlue: '#1d4ed8',
      brandGreen: '#10b981',
      textPrimary: '#111827',
      textSecondary: '#4b5563',
      luxuryBeige: '#E5D7C6',
      luxuryGray: '#6B7280',
      luxuryGold: '#C9A227',
      luxuryDeepGreen: '#0B3D2E'
    },
    fontWeights: {
      extraBold: 800,
      bold: 700,
      medium: 500,
      light: 300
    },
    fontSizes: {
      h1: '2rem',
      h2: '1.25rem',
      body: '0.95rem',
      xs: '0.75rem',
      h3: '1rem'
    },
    spacing: {
      xl: '64px',
      lg: '56px',
      md: '40px',
      sm: '16px',
      xs: '12px'
    },
    shadow: {
      luxury: '0 10px 30px rgba(0,0,0,0.12)'
    }
  },
  // Cover-specific reusable styles
  coverSplit: {
    display: 'flex',
    background: 'white'
  },
  coverLeft: {
    flex: '0 0 47%',
    padding: '56px 64px',
    position: 'relative'
  },
  coverLeftInner: {
    maxWidth: '560px'
  },
  coverTitle: {
    fontFamily: 'Outfit, sans-serif',
    fontSize: '45px',
    fontWeight: 700,
    color: '#0033A0',
    marginBottom: '40px',
    marginTop: '60px',
    letterSpacing: '0.2px',
    whiteSpace: 'nowrap',
    lineHeight: '1.2'
  },
  coverProjectTitle: {
    fontSize: '1.75rem',
    fontWeight: 700,
    color: '#111827',
    marginBottom: '8px',
    marginTop: '40px'
  },
  coverProjectSubtitle: {
    color: '#4b5563',
    fontSize: '1.25rem'
  },
  coverFooterMuted: {
    color: '#111827',
    fontWeight: 700,
    fontSize: '1.4rem'
  },
  coverRight: {
    flex: '1 1 53%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  // Reusable card for the cover info block
  coverInfoCard: {
    background: 'white',
    padding: '24px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.12)',
    border: '1px solid #E5D7C6',
    borderRadius: '12px'
  },
  coverInfoCardTitle: {
    textAlign: 'center',
    fontSize: '0.75rem',
    fontWeight: 500,
    color: '#6B7280',
    marginBottom: '12px',
    letterSpacing: '0.2em',
    textTransform: 'uppercase'
  },
  coverInfoCardValue: {
    textAlign: 'center',
    fontSize: '1.5rem',
    fontWeight: 300,
    color: '#0B3D2E',
    marginBottom: '8px'
  },
  coverInfoDivider: {
    width: '48px',
    height: '1px',
    background: '#C9A227',
    margin: '0 auto'
  },
  // Disclaimer slide styles
  disclaimerTitle: {
    fontFamily: 'Outfit, sans-serif',
    fontSize: '2.5rem',
    fontWeight: 700,
    color: '#0033A0',
    marginBottom: '16px',
    textAlign: 'left'
  },
  disclaimerDivider: {
    width: '100%',
    height: '1px',
    background: '#d1d5db',
    marginBottom: '32px'
  },
  disclaimerText: {
    fontFamily: 'Outfit, sans-serif',
    fontSize: '22px',
    fontWeight: 400,
    lineHeight: '1.6',
    color: '#111827',
    marginBottom: '24px',
    textAlign: 'left'
  },
  disclaimerFooter: {
    position: 'absolute',
    bottom: '48px',
    left: '48px'
  },
  disclaimerFooterText: {
    fontSize: '0.9rem',
    color: '#6b7280',
    margin: 0
  },
  // Overview slide styles
  overviewTitle: {
    fontFamily: 'Outfit, sans-serif',
    fontSize: '2.5rem',
    fontWeight: 700,
    color: '#0033A0',
    marginBottom: '16px',
    textAlign: 'left'
  },
  overviewTitleDivider: {
    width: '100%',
    height: '1px',
    background: '#d1d5db',
    marginBottom: '32px'
  },
  overviewDescription: {
    fontFamily: 'Outfit, sans-serif',
    fontSize: '1.1rem',
    lineHeight: '1.6',
    color: '#111827',
    marginBottom: '48px',
    textAlign: 'left'
  },
  overviewMetricsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '32px',
    marginBottom: '48px'
  },
  overviewInfoBox: {
    border: '1px solid #ddd',
    padding: '30px 20px',
    textAlign: 'center',
    background: 'white',
    transition: 'box-shadow 0.3s ease',
    cursor: 'pointer'
  },
  overviewMetricLabel: {
    fontSize: '0.875rem',
    fontWeight: 500,
    color: '#6b7280',
    marginBottom: '16px',
    textTransform: 'uppercase',
    letterSpacing: '0.05em'
  },
  overviewMetricValue: {
    fontSize: '1.25rem',
    fontWeight: 700,
    color: '#111827',
    marginBottom: '16px'
  },
  overviewMetricDivider: {
    width: '100%',
    height: '1px',
    background: '#d1d5db',
    margin: '0 auto'
  },
  overviewFooter: {
    position: 'absolute',
    bottom: '48px',
    left: '48px'
  },
  overviewFooterText: {
    fontSize: '0.9rem',
    color: '#6b7280',
    margin: 0
  },
  overviewPageNumber: {
    position: 'absolute',
    bottom: '0',
    right: '0',
    background: '#1e4d8b',
    color: 'white',
    width: '60px',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
    fontWeight: 'bold'
  },
  specsBuildingConfigurationTitle: {
    fontFamily: 'Outfit, sans-serif',
    fontSize: '1.70rem',
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: '16px'
  },
  specsBuildingConfigurationText: {
    fontFamily: 'Outfit, sans-serif',
    fontSize: '1.2rem',
    lineHeight: '1.6',
    color: '000000'
  },
  specsDividerLine: {
    width: '100%',
    height: '1px',
    background: '#d1d5db',
    marginBottom: '32px'
  },
  metricLabel: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#1f2937'
  }
};