import React from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import PagDemostracao from './ComponenteDemostracao/pagDemostracao';
import PagNovoCliente from './ComponenteNovoCliente/pagNovoCliente';
import PagEditCliente from './ComponenteEditCliente/pagEditCliente';

const router  = createBrowserRouter([

    {
      path: "/",
      element: <PagDemostracao />,
    },

    {
      path: "/novo-cliente",
      element: <PagNovoCliente />,
    },

    {
      path: "/cliente/:cliente",
      element: <PagEditCliente />,
    },

]);


export default function Router() {

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );

}