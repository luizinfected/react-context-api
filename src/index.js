import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Empresa from './components/Empresa';
import Produtos from './components/Produtos';
import Contato from './components/Contato';
import { CounterContextProvider } from './context/CounterContext';
import { TitleColorContextProvider } from './context/TitleColorContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CounterContextProvider>
      <TitleColorContextProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<App />} />
            <Route path='/empresa' element={<Empresa />} />
            <Route path='/produtos' element={<Produtos />} />
            <Route path='/contato' element={<Contato />} />
          </Routes>
        </BrowserRouter>
      </TitleColorContextProvider>
    </CounterContextProvider>
  </React.StrictMode>
);

