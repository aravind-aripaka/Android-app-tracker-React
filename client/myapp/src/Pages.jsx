import React from 'react';
import App from './App';
import LoginForm from './LoginForm';
import { Route, Routes, Router} from "react-router-dom";

const Pages = () => {
  return( 
      <Routes>
      <Route exact path="/home" element={<App/>}></Route>
      <Route exact path="/login" element={<LoginForm/>}></Route>
      </Routes>
  )
};

export default Pages;