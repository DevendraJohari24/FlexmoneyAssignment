import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import RegisteredList from "./components/RegisteredList";

import AdmissionForm from "./components/AdmissionForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AdmissionForm />} />
      <Route path="/users" element={<RegisteredList />} />
    </Routes>
      
  );
}

export default App;
