import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResponsiveAppBar from "./components/Utils/HeaderBar";
import { Admin } from "./components/Admin/Admin";
import AddClient from "./components/Forms/AddClient";
import PropertyForm from "./components/Admin/PropertyForm";


function App() {
  return (
    <BrowserRouter>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Admin />} />
        <Route path="/addclient" element={<AddClient />}/>
        <Route path="/property_form" element={<PropertyForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;