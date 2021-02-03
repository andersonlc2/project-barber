import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import theme from './theme';

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="SignIn" element={ <SignIn /> } />
          <Route path="*" element={ <h2 style={{ textAlign: 'center' }}>Oops... not found! 404</h2> } />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
