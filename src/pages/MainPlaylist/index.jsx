import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Aside } from "../Home/components/Aside";
import { Footer } from "../Home/components/Footer";
import { Header } from "../Home/components/Header";
import { Playlist } from "./components/Playlist";
import "../Home/styles.css";

export function MainPlaylist() {
  useEffect(() => {
    document.title = "Spotify - Playlist";
  }, []);

  return (
    <div class="root">
      <Aside />
      <Header />
      <Playlist />
      <Footer />
    </div>
  );
}
