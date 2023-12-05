import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const HomePage = lazy(() => import('./pages/home'));
const PricePage = lazy(() => import('./pages/price'));

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/price" element={<PricePage />} />
    </Routes>
  );
};

export default App;
