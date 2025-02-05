import React from "react";
import YogaAdmissionForm from "./components/YogaAdmissionForm";

function App() {
  return (
    <div style={{ backgroundColor: "#2E7D32", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <h1 style={{ color: "white", fontSize: "2rem", fontWeight: "bold", marginBottom: "20px" }}>
        Flex Yoga
      </h1>
      <YogaAdmissionForm />
    </div>
  );
}

export default App;
