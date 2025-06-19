import React, { useEffect, useState } from 'react';

function Home() {

  const [error , setError] = useState(null);
  useEffect(() => {
  try {
   
    
  } catch (e) {
    console.error("Caught error:", e);
    setError(true);
  }
}, []);

  return <h2>Welcome to the Home Page {error}</h2>;
}

export default Home;
