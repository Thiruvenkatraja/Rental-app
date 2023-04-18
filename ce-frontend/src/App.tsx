import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResponsiveAppBar from "./components/Utils/HeaderBar";
import { Admin } from "./components/Admin/Admin";
import AddClient from "./components/Forms/AddClient";

function App() {
  return (
    <BrowserRouter>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Admin />} />
        <Route path="/addclient" element={<AddClient />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
