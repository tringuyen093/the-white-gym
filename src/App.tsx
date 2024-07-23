import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const HomePage = lazy(() => import('./pages/home'));
const PricePage = lazy(() => import('./pages/price'));
const PersonalTrainerPage = lazy(() => import('./pages/personalTrainer'));
const SuplementPage = lazy(() => import('./pages/suplement'));
const EquipmentPage = lazy(() => import('./pages/equipment'));

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/prices" element={<PricePage />} />
      <Route exact path="/personal-trainer" element={<PersonalTrainerPage />} />
      <Route exact path="/suplements" element={<SuplementPage />} />
      <Route exact path="/equipments" element={<EquipmentPage />} />
    </Routes>
  );
};

export default App;
