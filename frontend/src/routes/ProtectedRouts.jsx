// import { Navigate } from 'react-router-dom';

// const ProtectedRoute = ({ allowedRoles, children }) => {
//   // Kunin role mula sa backend-ready localStorage / context
//   const role = localStorage.getItem('userRole');

//   // Kung wala sa allowedRoles → redirect sa dashboard
//   if (!allowedRoles.includes(role)) {
//     return <Navigate to="/Pagesdashboard" />;
//   }

//   return children;
// };

// export default ProtectedRoute;

import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ allowedRoles, children }) => {
  // ✅ Check both localStorage at sessionStorage
  const token = localStorage.getItem("userToken") || sessionStorage.getItem("userToken");
  const role = localStorage.getItem("userRole") || sessionStorage.getItem("userRole");

  // Hindi naka-login
  if (!token || !role) {
    return <Navigate to="/Login" replace />;
  }

  // Mali ang role
  if (allowedRoles && !allowedRoles.includes(role)) {
    return <Navigate to="/PagesDashboard" replace />;
  }

  return children;
};

export default ProtectedRoute;