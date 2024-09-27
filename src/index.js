import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from "./redux/store";
import 'react-toastify/dist/ReactToastify.css'; 
import { ToastContainer } from 'react-toastify';


const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
  typography: {
    fontFamily: ["Gilroy-Regular", "Arial", "sans-serif"].join(","),
  },
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <ThemeProvider theme={theme}>
    <BrowserRouter>
      <CssBaseline />
      <Provider store={store}>
      <ToastContainer />
        <App />
      </Provider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);


reportWebVitals();
