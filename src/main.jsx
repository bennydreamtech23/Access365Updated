import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "./scss/index.scss";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { BrowserRouter as HashRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <HashRouter>
    <App />
    </HashRouter>
  </React.StrictMode>,
)
