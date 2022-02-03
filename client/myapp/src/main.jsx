import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Pages from './Pages'
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Pages/>
  </BrowserRouter>,
  document.getElementById('root')
)
