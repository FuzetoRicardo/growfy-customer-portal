import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './global.scss';

import { Routes } from './Routes';

const root = createRoot(document.getElementById('root')!);
root.render(<StrictMode><RouterProvider router={createBrowserRouter(Routes)} /></StrictMode>);