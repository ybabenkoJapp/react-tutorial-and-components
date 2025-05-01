import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.jsx";
import SidebarLayout from "../src/layouts/sidebarLayout";
import Buttons from "./routes/buttons.js";
import Raiting from "./routes/raiting.js";
import RadioGroup from "./routes/radio-group.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<SidebarLayout />}>
          <Route index element={<App />} />
          <Route path="/buttons" element={<Buttons />} />
          <Route path="/raiting" element={<Raiting />} />
          <Route path="/radio-group" element={<RadioGroup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
