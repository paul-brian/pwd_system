import { useState, useEffect } from 'react';
import AdminStaffProfiling from '../profiling/AdminStaffProfiling'; // existing UI
import UserProfiling from '../profiling/UserProfiling';
import { ROLES } from '../Auth/roles';

const PagesProfiling = () => {
  const [role, setRole] = useState(null);

  useEffect(() => {
    const userRole =
      localStorage.getItem('userRole') ||
      sessionStorage.getItem('userRole');
    setRole(userRole);
  }, []);

  if (!role) return <div>Loading...</div>;

  return role === ROLES.USER ? <UserProfiling /> : <AdminStaffProfiling />;
};

export default PagesProfiling;