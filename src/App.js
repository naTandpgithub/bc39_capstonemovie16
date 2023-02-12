import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import renderRoutes from "./Routes";
import { Suspense } from "react";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Routes>
          {renderRoutes()}
          {/* <Route path="" element={<HomeTemplate />}>
            <Route path="" element={<HomePage />} />
            <Route path="cinema" element={<CinemaLocaltion />} />
            <Route path="contact" element={<Contact />} />
          </Route>
          <Route path="admin" element={<AdminTemplate />}>
            <Route path="films" element={<Films />} />
            <Route path="users" element={<Users />} />
          </Route> */}
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
