//src/index.js

import React from 'react';
import { createRoot } from 'react-dom/client';

import AppRouter from './appRouter';

const root = document.getElementById('root');
const rootElement = createRoot(root);

rootElement.render(<React.StrictMode><AppRouter /></React.StrictMode>);



