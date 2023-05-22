import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Burger from "./Pages/Burger";
import Sandwich from "./Pages/Sandwich";
import Sides from "./Pages/Sides";
import KidManu from "./Pages/KidManu";
import Salad from "./Pages/Salad";
import ColdDrink from "./Pages/ColdDrink";
import Profile from "./Pages/Profile";
import Cart from "./Pages/Cart";


function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Header /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="burger" element={<Burger />} />
          <Route path="sandwich" element={<Sandwich />} />
          <Route path="sides" element={<Sides />} />
          <Route path="kidmanu" element={<KidManu />} />
          <Route path="salad" element={<Salad />} />
          <Route path="colddrink" element={<ColdDrink />} />
          <Route path="profile" element={<Profile />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
