import React from 'react';
import { useAuth } from '../Utils';

export default function Dashboard() {
  const {logout} = useAuth();

  return (
    <div>
      Dashboard
      <span onClick={logout}>Logout</span>
    </div>
  );
}
