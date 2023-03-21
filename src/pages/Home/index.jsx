import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Aside } from "./components/Aside";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { MainContent } from "./components/MainContent";
import "./styles.css";

export function Home() {
  useEffect(() => {
    document.title = "Spotify - Home";
  }, []);

  return (
    <div class="root">
      <Aside />
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
