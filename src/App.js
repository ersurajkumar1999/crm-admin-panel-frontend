import './App.css';
import { Login } from './User/Auth/Login';
import { Navigate, Routes, Route } from "react-router-dom"
import { Register } from './User/Auth/Register';
import Dashboard from './User/Dashboard';
// import { UserAuthProvider } from './User/Auth/UserAuthProvider';
import { MainLayout } from './Components/User/Layouts/MainLayout';
import Profile from './User/Profile';
// import { useState } from 'react';
import Protected from './Routes/User/Protected';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to="/auth/login" />} />
        <Route path='/auth/login' element={<Login />} />
        <Route path='/auth/register' element={<Register />} />

        <Route
          path="/user/dashboard"
          element={
            <Protected >
              <MainLayout ><Dashboard /></MainLayout>
            </Protected>
          }
        />
        <Route
          path="/user/profile"
          element={
            <Protected >
              <MainLayout ><Profile /></MainLayout>
            </Protected>
          }
        />

      </Routes>
      {/* <UserAuthProvider> */}
      {/* <Routes> */}
      {/* <Route path='/user/dashboard' element={<MainLayout ><Dashboard /></MainLayout>} /> */}
      {/* <Route path='/user/profile' element={<MainLayout ><Profile /></MainLayout>} /> */}
      {/* </Routes> */}
      {/* </UserAuthProvider> */}
    </>
  );
}

export default App;
