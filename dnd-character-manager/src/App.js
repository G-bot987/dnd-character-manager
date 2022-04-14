import "./App.css";
import React, { useState } from "react";
import NavTabs from "./components/NavTabs";
import Header from "./components/Header";
import Bio from "./components/pages/Bio";
import Attributes from "./components/pages/Attributes";
import Notes from "./components/pages/Notes";
// attribute import
import character from "./data/charactertodisplay";

// react dom
import ReactDOM from "react-dom";
function App() {
  // use state hook to render different pg's

  const [pg, setCurrentPG] = useState(`bio`);
  const [data, setData] = useState(character);
  const renderPage = () => {
    if (pg === "bio") {
      return <Bio />;
    }
    if (pg === "attributes") {
      return <Attributes character={data} />;
    }
    if (pg === "notes") {
      return <Notes />;
    }
  };

  const handlePageChange = (page) => setCurrentPG(page);
  return (
    <div>
      <Header />
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={pg} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}

export default App;
