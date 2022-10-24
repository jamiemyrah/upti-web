import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './app/App';
// import Date from './Date'
// import Container from './Components/container/Container';
import 'bootstrap/dist/css/bootstrap.css';
import MainLayout from './composing components/MainLayout'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     {/* <App/> */}
    {/* <Date/> 
   <Container />  */}
   <MainLayout/>
   {/* <Example1 numbers={Number}/> */}
  </React.StrictMode>
  
);



