import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage'
import PrivacyPolicyPage from './components/PrivacyPolicyPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" component={LandingPage} />
        <Route path="/privacy-policy" component={PrivacyPolicyPage} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;