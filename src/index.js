import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Header from './components/Header';
import Abouts from './components/Abouts';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

// import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Header></Header>
    <Abouts></Abouts>
    <Services></Services>
    <Contact></Contact>
    <Footer></Footer>
    <App></App>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
