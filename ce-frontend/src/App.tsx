import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResponsiveAppBar from "./components/HeaderBar";
import { Admin } from "./pages/Admin";
import AddClient from "./pages/AddClient";
import PropertyForm from "./pages/PropertyForm";
import ClientForm from "./pages/ClientForm";
import PropertyData from "./pages/PropertyData";
import SuperAdmin from "./pages/SuperAdmin";

function App() {
  return (
    <BrowserRouter>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/properties" element={<Admin />} />
        <Route
          path="/properties_data/:id/:propertyName"
          element={<PropertyData />}
        />
        <Route path="/" element={<Admin />} />
        <Route path="/addclient" element={<AddClient />} />
        <Route path="/property_form" element={<PropertyForm />} />
        <Route
          path="/client_form/:property_id/:propertyName"
          element={<ClientForm />}
        />
        <Route path="/super_admin" element={<SuperAdmin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
