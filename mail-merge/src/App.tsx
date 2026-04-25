/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Navbar from './components/layout/Navbar';
import Dashboard from './pages/Dashboard';
import Campaigns from './pages/Campaigns';
import Contacts from './pages/Contacts';
import Templates from './pages/Templates';
import Landing from './pages/Landing';

function AppContent() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-[#F8F9FA]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      {user && <Navbar />}
      <main className={user ? "pt-16 pb-8" : ""}>
        <Routes>
          <Route path="/" element={user ? <Navigate to="/dashboard" /> : <Landing />} />
          <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/" />} />
          <Route path="/campaigns/*" element={user ? <Campaigns /> : <Navigate to="/" />} />
          <Route path="/contacts" element={user ? <Contacts /> : <Navigate to="/" />} />
          <Route path="/templates" element={user ? <Templates /> : <Navigate to="/" />} />
        </Routes>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Router>
  );
}

