import Paper from '@mui/material/Paper';
import Search from '../components/SearchComponent';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
// import PrivateRoute from '../auth/PrivateRoute';
import SearchComponent from '../components/SearchComponent';
import ProtectedRoute from '../auth/PrivateRoute';
import LoginPage from '../pages/LoginPage';
import LogoutPage from '../pages/LogoutPage';
import NotAuthorizedPage from '../pages/NotAuthorizedPage';
import Legging from '../molecules/Legging200DenirComponent';

export default function Content() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>hi</h1>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/unauthorized" element={<NotAuthorizedPage />} />
        <Route
          path="/logout"
          element={
            <ProtectedRoute>
              <LogoutPage />
            </ProtectedRoute>
          }
        />
        <Route path="/products" element={<Legging />} />
      </Routes>
    </BrowserRouter>
  );
}
