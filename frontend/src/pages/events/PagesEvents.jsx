import { useState, useEffect } from 'react';
import AdminStaffEvent from '../events/AdminStaffEvent'; // existing UI
import UserEvent from '../events/UserEvent';
import { ROLES } from '../Auth/roles';

const PagesEvents = () => {
  const [role, setRole] = useState(null);

  useEffect(() => {
    const userRole =
      localStorage.getItem('userRole') ||
      sessionStorage.getItem('userRole');
    setRole(userRole);
  }, []);

  if (!role) return <div>Loading...</div>;

  return role === ROLES.USER ? <UserEvent /> : <AdminStaffEvent />;
};

export default PagesEvents;