import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResponsiveAppBar from "./components/Utils/HeaderBar";
import { Admin } from "./components/Admin/Admin";
import PropertyForm from "./components/Admin/PropertyForm";

function App() {
  return (
    <BrowserRouter>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Admin />} />
        <Route path="/property_form" element={<PropertyForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;