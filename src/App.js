import React from 'react';

import LandingPage from "./pages/landing-page/landing-page.component";

import { GlobalStyle } from "./global.style";

function App() {
  return (
    <div>
      <GlobalStyle />
      <LandingPage />
    </div>
  );
}

export default App;
