import React from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import PagDemostracao from './ComponenteDemostracao/pagDemostracao';

const router  = createBrowserRouter([

    {
      path: "/",
      element: <PagDemostracao />,
    },

]);


export default function Router() {

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );

}