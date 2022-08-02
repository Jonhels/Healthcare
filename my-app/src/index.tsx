import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';
import About from './About/About';
import Services from './Services/Services';
import PatientInformation from './PatientInformation/PatientInformation';
import Events from './Events/Events';
import Locations from './Locations/Locations';
import Contact from './Contact/Contact';
import Healthcare from './Healthcare/Healthcare';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='/' element={<Healthcare />}/>
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/patient-information" element={<PatientInformation />} />
        <Route path="/events" element={<Events />} />
        <Route path="/refferrals" element={<Locations/>} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
