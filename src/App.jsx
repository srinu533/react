import React from 'react';
import { BrowserRouter as Router,Routes,Route, Link } from 'react-router-dom';
import Home from './Home';
import Veg from './Veg';
import NonVeg from './NonVeg';
import Cart from './Cart';
import PurchaseHistory from './PurchaseHistory';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import GoogleLoginComponent from './GoogleLoginComponent';
import { GoogleOAuthProvider } from '@react-oauth/google';
function App() {
  return(
    <>
    <GoogleOAuthProvider clientId="1045288179466-oilea4s7ng1r5ki3rueuq0tk0ma84r6m.apps.googleusercontent.com">
    <GoogleLoginComponent /> 
    </GoogleOAuthProvider>

    <Router>
      
<Link to="/Home">My Shop</Link>
<Link to="/Veg">veg</Link>
<Link to="/NonVeg">Non veg</Link>
<Link to="/Cart">Cart</Link>
<Link to="/PurchaseHistory">Purchase-History</Link>
<Link to="/AboutUs">AboutUs</Link>
<Link to="/ContactUs">ContactUs</Link>  

    <Routes>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/Veg" element={<Veg/>}/>
      <Route path="/NonVeg" element={<NonVeg/>}/>
      <Route path="/Cart" element={<Cart/>}/>
      <Route path="/PurchaseHistory" element={<PurchaseHistory/>}/>
      <Route path="/AboutUs" element={<AboutUs/>}/>
      <Route path="/ContactUs" element={<ContactUs/>}/>
    </Routes>
    </Router>
   
    </>
  )
}

export default App;
