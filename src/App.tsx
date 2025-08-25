import React, { useState } from "react";
import MainLayout from "./components/Layout/MainLayout";
import DashboardContent from "./components/Dashboard/DashboardContent";
import SquadPage from "./Pages/SquadPage";

function App() {
  const [activeItem, setActiveItem] = useState("dashboard");

  const renderContent = () => {
    switch (activeItem) {
      case "dashboard":
        return <DashboardContent />;
      case "teams":
        return <h1>Teams Page</h1>;
      case "squads":
        return <SquadPage />;
      case "projects":
        return <h1>Projects Page</h1>;
      case "services":
        return <h1>Services Page</h1>;
      case "members":
        return <h1>Members Page</h1>;
      default:
        return <DashboardContent />;
    }
  };

  return (
    <MainLayout userName="Yasmine Saber" activeItem={activeItem} onItemClick={setActiveItem}>
      {renderContent()}
    </MainLayout>
  );
}

export default App;