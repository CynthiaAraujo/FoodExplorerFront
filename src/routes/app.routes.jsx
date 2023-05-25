import { Route, Routes } from "react-router-dom";

import { AddPrato } from "../pages/AddPrato";
import { EditarPrato } from "../pages/EditarPrato";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import { Plate } from "../pages/Plate";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Plate/:id" element={<Plate />} />
      <Route path="/AddPrato" element={<AddPrato />} />
      <Route path="/EditarPrato/:id" element={<EditarPrato />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
