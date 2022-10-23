import React from "react";
import { Route, Routes } from 'react-router-dom';
import {NavLink} from "react-router-dom";
import logo from "./images/teslalogo.png";

import Home from "./Pages/home";
import Model3 from "./Pages/Model3";
import ModelS from "./Pages/ModelS";
import ModelX from "./Pages/ModelX";
import ModelY from "./Pages/ModelY";
import SolarPannels from "./Pages/SolarPannels";
import SolarRoof from "./Pages/SolarRoof";
import Account from "./Pages/Account";
import Shop from "./Pages/Shop";
import Comman from "./Pages/CommanPage";

function App() {
    // ........................To Open Menu......................
    const set =()=>{
      document.querySelector('.blur-bg').className ='blur-bgaactive';
      document.querySelector('.sidebar').className='sidebaractive';
  }
  return (
    <>
    
    <header>
            <div className="logo">
                <NavLink to="/"><img src={logo} alt="" /></NavLink>
            </div>
            <nav className="center showdesktop">
                <NavLink to="/models" className="navlinks">Model S</NavLink>
                <NavLink to="/model3" className="navlinks">Model 3</NavLink>
                <NavLink to="/modelx" className="navlinks">Model X</NavLink>
                <NavLink to="/modely" className="navlinks">Model Y</NavLink>
                <NavLink to="/solarroof" className="navlinks">Solar Roof</NavLink>
                <NavLink to="/solarpannel" className="navlinks">Solar Pannel</NavLink>
            </nav>

            <nav className="right">
                <NavLink to="/shop" className="showdesktop navlinks">Shop</NavLink>
                <NavLink to="/account" className="showdesktop navlinks">Account</NavLink>
                <span className="navlinks" id="menu" onClick={set}>Menu</span>
            </nav>
        </header>

<Routes>
  <Route exact path="/" element={<Home/>} />
  <Route path="/models" element={<ModelS/>} />
  <Route path="/model3" element={<Model3/>} />
  <Route path="/modelx" element={<ModelX/>} />
  <Route path="/modely" element={<ModelY/>} />
  <Route path="/solarroof" element={<SolarRoof/>}  />
  <Route path="/solarpannel" element={<SolarPannels/>}/>
  <Route path="/shop" element={<Shop/>} />
  <Route path="/account" element={<Account/>} />
  <Route path="/cmn" element={<Comman/>} />
  <Route element={<Home/>}/>
</Routes>
</>
  );
}

export default App;
