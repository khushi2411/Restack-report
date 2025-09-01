import React from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { styles } from './shared/styles';

const routes = ['/slide/1', '/slide/2', '/slide/3', '/slide/4', '/slide/5', '/slide/6', '/slide/7', '/slide/8', '/slide/9', '/slide/10', '/slide/11', '/slide/12', '/slide/13', '/slide/14'];

export default function Main() {
 const location = useLocation();
  const navigate = useNavigate();
  const currentIndex = Math.max(0, routes.indexOf(location.pathname));
  console.log("Current index:", currentIndex);

  const goPrev = () => currentIndex > 0 && navigate(routes[currentIndex - 1]);
  const goNext = () => {
    console.log("Current index before navigation:", currentIndex);
    currentIndex < routes.length - 1 && navigate(routes[currentIndex + 1]);
  };

  return (
    <div style={{position: 'relative'}}>
      <Outlet />
      <div style={styles.navigation}>
        <button
          onClick={goPrev}
          disabled={currentIndex === 0}
          style={{
            ...styles.navButton,
            ...(currentIndex === 0 ? styles.navButtonDisabled : {}),
          }}
        >
          <ChevronLeft size={20} />
        </button>
        <div style={{display: 'flex', gap: '8px'}}>
          {routes.map((path, i) => (
            <button
              key={path}
              onClick={() => navigate(path)}
              style={{
                ...styles.slideIndicator,
                ...(i === currentIndex ? styles.slideIndicatorActive : styles.slideIndicatorInactive)
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        <button
          onClick={goNext}
          disabled={currentIndex === routes.length - 1}
          style={{
            ...styles.navButton,
            ...(currentIndex === routes.length - 1 ? styles.navButtonDisabled : {}),
          }}
        >
          <ChevronRight size={20} />
        </button>
      </div>
      <div style={styles.counter}>
        <span>{currentIndex + 1} / {routes.length}</span>
      </div>
    </div>
  );
}