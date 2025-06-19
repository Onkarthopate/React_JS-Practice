import React, { useEffect, useState } from 'react';

function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulate fetching dashboard data
    setTimeout(() => {
      setData({ revenue: 5000, users: 120 });
    }, 500);
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      {data ? (
        <div>
          <p>Revenue: ${data.revenue}</p>
          <p>Users: {data.users}</p>
        </div>
      ) : (
        <p>Loading dashboard...</p>
      )}
    </div>
  );
}

export default Dashboard;
