import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import Table from './Table';

const Dashboard = () => {
  let { user } = useLocation();

  return (
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}
      >
        <span>Welcome {user?.username} </span>
      </div>
      <Table />
    </>
  );
};

export default Dashboard;
