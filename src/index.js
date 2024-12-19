import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
//import './index.css';
//import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import Home from './Home';
//import Invoice from './Invoice';


// function Router() {
//   return (
//    <BrowserRouter>
//      <Routes>
//       <Route exact path="/" element={<App/>}/>
//       <Route exact path="/home" element={<Home/>}/>
//       <Route exact path="/invoice" element={<Invoice/>}/>
//      </Routes>
//    </BrowserRouter>
//   );
// }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
