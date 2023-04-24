import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResponsiveAppBar from "./components/Utils/HeaderBar";
import { Admin } from "./components/Admin/Admin";
import AddClient from "./components/Forms/AddClient";
import PropertyForm from "./components/Admin/PropertyForm";
import ClientForm from "./components/Admin/ClientForm";
import PropertyData from "./components/Admin/PropertyData";


function App() {
  return (
    <BrowserRouter>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/properties" element={<Admin />} />
        <Route path="/properties_data" element={<PropertyData />} />
        <Route path="/" element={<Admin />} />
        <Route path="/addclient" element={<AddClient />}/>
        <Route path="/property_form" element={<PropertyForm />} />
        <Route path="/client_form" element={<ClientForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;