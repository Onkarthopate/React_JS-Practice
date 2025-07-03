import React, { useEffect, useState } from 'react';
import lostConnection from './images/lost.png'
const OfflineNotice = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (isOnline) return null;

  return (
    <div style={styles.container}>
      <div style={styles.icon}>
        <img
          src={lostConnection}
          alt="No Internet"
        />
      </div>
      <h2>Connect to the internet</h2>
      <p>You're offline. Check your connection.</p>
      <button onClick={() => window.location.reload()}>Retry</button>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
    backgroundColor: '#f8f9fa',

    color: '#333',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    zIndex: 9999,
  },
  icon: {
    fontSize: '40px',
    marginBottom: '10px',
  },
};

export default OfflineNotice;
