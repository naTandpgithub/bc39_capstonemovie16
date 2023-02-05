import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import AdminTemplate from "./pages/AdminTemplate";
import Films from "./pages/AdminTemplate/Film";
import Users from "./pages/AdminTemplate/User";
import HomeTemplate from "./pages/HomeTemplate";
import CinemaLocaltion from "./pages/HomeTemplate/Cinema";
import Contact from "./pages/HomeTemplate/Contact";
import HomePage from "./pages/HomeTemplate/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomeTemplate />}>
          <Route path="" element={<HomePage />} />
          <Route path="cinema" element={<CinemaLocaltion />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="admin" element={<AdminTemplate />}>
          <Route path="films" element={<Films />} />
          <Route path="users" element={<Users />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
