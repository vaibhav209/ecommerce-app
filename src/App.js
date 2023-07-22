import React from 'react';
import './style.css';
import PageRoutes from './routes/PageRoutes';
import AuthProvider from './contexts/AuthContext';

export default function App() {
  return (
    <AuthProvider>
      <PageRoutes />
    </AuthProvider>
  );
}
