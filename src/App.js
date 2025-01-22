import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import ContentPage from "./components/ContentPage"; // Import the new content page
import "./App.css";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <ContentPage />
    </div>
  );
}

export default App;
