import React from "react";
import "./App.css";
import Form from "./components/Form";

const App = () => {
  return (
    <div className="app">
      <Form
        appName="Sample Name"
        appEmail="Sample Email"
        appPhone="Sample Phone Number"
        appPassword="Sample Password"
      />
    </div>
  );
};

export default App;