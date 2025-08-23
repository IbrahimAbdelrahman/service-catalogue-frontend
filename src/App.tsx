import React from 'react';
import MainLayout from './components/Layout/MainLayout';
import DashboardContent from './components/Dashboard/DashboardContent';

function App() {
  return (
    <MainLayout userName="Yasmine Saber">
      <DashboardContent />
    </MainLayout>
  );
}

export default App;
