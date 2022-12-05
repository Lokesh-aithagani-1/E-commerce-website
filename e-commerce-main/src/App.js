import React, { useEffect } from 'react';
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from './Checkout';
import Login from "./Login";
import Orders from './Orders';
import Address from './Address';
import Payment from "./Payment";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements} from "@stripe/react-stripe-js";

const promise = loadStripe(
   "pk_test_51LFe0jSAZBHoV2i6ZC31eOvggsIbkzwy63opFsf9j5ha4wBeoPozTKyQJWM6y5ccxFJ4SiHrCu2AzNVt42ARLomP00ayW1vdme"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {

    auth.onAuthStateChanged(authUser => {

      if(authUser)
      {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {

        dispatch({
          type: 'SET_USER',
          user: null
        })

      }

    })
  }, [])

  // const options = {
  //   clientSecret: '{{CLIENT_SECRET}}',
  // };


  return (
    
    <Router>
      <div className="app">
        
        <Routes>
          <Route path='/orders' element={[<Header />, <Orders />]} />
          <Route path="/payment" element={[<Header />, <Elements stripe={promise}><Payment /></Elements>]} />
          <Route path="/login" element={[<Login />]} />
          <Route path="/checkout" element={[<Header />, <Checkout />]}/>
          <Route path="/address" element={<Address />} />
          <Route path="/" element={[<Header />, <Home />]}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;