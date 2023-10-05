import React from 'react'
import { Navigate } from 'react-router-dom'
function Protected({ children }) {
  const authenticated = localStorage.getItem('authenticated');
  console.log("authenticated authenticated==>", authenticated)
  if (!authenticated) {
    return <Navigate to="/auth/login" replace />
  }
  return children
}
export default Protected