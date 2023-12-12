import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const HomePage = lazy(() => import('./pages/home'));
const PricePage = lazy(() => import('./pages/price'));
const SuplementPage = lazy(() => import('./pages/suplement'));

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/prices" element={<PricePage />} />
      <Route exact path="/suplements" element={<SuplementPage />} />
    </Routes>
  );
};

export default App;
