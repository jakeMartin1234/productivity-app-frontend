import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import './index.css';
import { ThemeProvider } from '@mui/material';
import theme from './components/utils/Theme';
import axios from 'axios';

const renderApp = (clientId) => {
    createRoot(document.getElementById('root')).render(
        <div className="App">
            <Auth0Provider
                domain={"dev-zf5rma6cwrgiqo0n.us.auth0.com"}
                clientId={clientId}
                authorizationParams={{
                    redirect_uri: window.location.origin,
                }}
            >
                <ThemeProvider theme={theme}>
                    <App />
                </ThemeProvider>
            </Auth0Provider>
        </div>
    );
};

const fetchClientId = async() => {
    const keys = await axios.get('https://productivity-app-backend1-cf19c6c0aed8.herokuapp.com/keys')
    console.log(keys.data);
    renderApp(keys.data);
};

// Fetch Auth0 client ID from backend API during component initialization
await fetchClientId();




