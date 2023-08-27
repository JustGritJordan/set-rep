import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SetRemaining from './pages/SetRemaining';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  { 
    path: "SetRemaining",
    element: <SetRemaining/>,
  }, 
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// 1. Add Footer
// 2. Edit Nav Bar
// 3. Add Pages
// 4. Add Logic