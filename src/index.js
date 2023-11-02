import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Home from './Components/Views/Home'
import Contacts from './Components/Views/Contacts'
import News from './Components/Views/News'
import Services from './Components/Views/Services'
import PageNotFound from './Components/Views/NotFound'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
