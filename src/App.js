import './App.css';
import { Login } from './User/Auth/Login';
import { Navigate, Routes, Route } from "react-router-dom"
import { Register } from './User/Auth/Register';
import Dashboard from './User/Dashboard';
import { UserAuthProvider } from './User/Auth/UserAuthProvider';
// import MainLayout from "./Components/User/Layouts/MainLayout";
import { MainLayout } from './Components/User/Layouts/MainLayout';
import Profile from './User/Profile';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to="/auth/login" />} />
        <Route path='/auth/login' element={<Login />} />
        <Route path='/auth/register' element={<Register />} />
      </Routes>
      <UserAuthProvider>

        <MainLayout >
          <Routes>
            <Route path='/user/dashboard' element={<Dashboard />} />
            <Route path='/user/profile' element={<Profile />} />
          </Routes>

        </MainLayout>
        {/* <MainLayout>

        </MainLayout> */}
      </UserAuthProvider>

    </>
  );
}

export default App;
