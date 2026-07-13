import React from 'react';
import SimpleTenLandingPage from '../SimpleTenLandingPage';
import SimpleTenModernizationPage from '../SimpleTenModernizationPage';
import SimpleTenLocalAutomationPage from '../SimpleTenLocalAutomationPage';
import SimpleTenSacramentoAiPage from '../SimpleTenSacramentoAiPage';
import SimpleTenLeadGenerationPage from '../SimpleTenLeadGenerationPage';

function App() {
  const path = window.location.pathname;

  if (path.endsWith('/small-business-ai.html')) {
    return <SimpleTenModernizationPage />;
  }

  if (path.endsWith('/automation-for-local-business.html')) {
    return <SimpleTenLocalAutomationPage />;
  }

  if (path.endsWith('/ai-sacramento.html')) {
    return <SimpleTenSacramentoAiPage />;
  }

  if (path.endsWith('/lead-generation.html')) {
    return <SimpleTenLeadGenerationPage />;
  }

  return <SimpleTenLandingPage />;
}

export default App;
