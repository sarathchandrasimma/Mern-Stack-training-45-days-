import React from 'react';
import Getusers from './Components/Getusers';
import Adduser from './Components/Adduser';
import { ToastContainer } from "react-toastify";

import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
   <div>
    <ToastContainer />

    <h1 style={{display:"flex",justifyContent:"center"}}>
      Crud Operations Using MongoDB
    </h1>
      <h2><Adduser/></h2>
    <Getusers/>
   </div>
  );
}

export default App;