//src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/app';

const root = document.getElementById('root');
const rootElement = createRoot(root);

rootElement.render(<App />);


