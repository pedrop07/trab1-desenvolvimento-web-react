import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layout";
import { Cadastro } from "./pages/Cadastro";
import { Faq } from "./pages/Faq";
import { Home } from "./pages/Home";
import { MainPlaylist } from "./pages/MainPlaylist";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/playlist" element={<MainPlaylist/>} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
}
