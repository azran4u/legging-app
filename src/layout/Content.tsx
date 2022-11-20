import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ProtectedRoute from '../auth/PrivateRoute';
import LoginPage from '../pages/LoginPage';
import LogoutPage from '../pages/LogoutPage';
import NotAuthorizedPage from '../pages/NotAuthorizedPage';
import Legging200DenirComponent from '../molecules/Legging200DenirComponent';
import { catalog } from '../model/catalog';

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
        <Route path="/products" element={<Legging200DenirComponent legging200denir={catalog.legging200denir}/>} />
      </Routes>
    </BrowserRouter>
  );
}
