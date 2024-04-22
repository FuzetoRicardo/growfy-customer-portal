import React from 'react';
import { defer, RouteObject } from 'react-router-dom';

import { Layout } from 'layout';

import { Dashboard } from 'pages/dashboard';
import { Login } from 'pages/login';
import { MediaKit } from 'pages/mediakit';
import { MyAccount } from 'pages/myaccount';
import { Networks } from 'pages/networks';
import { Revenue } from 'pages/revenue';

export const Routes: RouteObject[] = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    element: <Layout />,
    id: 'layout',
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
      {
        path: '/mediakit',
        element: <MediaKit />,
      },
      {
        path: '/myaccount',
        element: <MyAccount />,
      },
      {
        path: '/revenue',
        element: <Revenue />,
      },
      {
        path: '/networks',
        element: <Networks />,
      },
    ],
  }
];