import "./App.css";

import { Outlet } from "react-router-dom";
import CookieBanner from "./components/CookieBanner"; 
import Header from "./components/Header";
import Footer from "./components/Footer";
import SliderContainer from "./components/homepage/SliderContainer";
import LastNews from "./components/homepage/LastNews";
import Reviews from "./components/homepage/Reviews";


function App() {
  return (
    <div>
      <CookieBanner />
      <Outlet />
    </div>
  );
}

export default App;
