import { useState, useEffect } from 'react';
import AdminStaffDashboard from './AdminStaffDashboard'; // existing UI
import UserDashboard from './UserDashboard';
import { ROLES } from '../Auth/roles';

const Pagesdashboard = () => {
  const [role, setRole] = useState(null);

  useEffect(() => {
    const userRole =
      localStorage.getItem('userRole') ||
      sessionStorage.getItem('userRole');
    setRole(userRole);
  }, []);

  if (!role) return <div>Loading...</div>;

  return role === ROLES.USER ? <UserDashboard /> : <AdminStaffDashboard />;
};

export default Pagesdashboard;