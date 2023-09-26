import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './Pages/HomePage/HomePage';
import TracksPage, { trackDataLoader } from './Pages/TracksPage/TracksPage';
import SingleTrackPage, { singleTrackDataLoader } from './Pages/SingleTrackPage/SingleTrackPage';
import CupsPage, { cupsDataLoader } from './Pages/CupsPage/CupsPage';

export function trackLoader(){

}

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />, 
    errorElement: <ErrorPage />
  },
  {
    path: "/cups",
    element: <CupsPage />,
    loader: cupsDataLoader
  },
  {
    path: "/tracks",
    element: <TracksPage />,
    loader: trackDataLoader
  },
  {
    path: "/tracks/:id",
    element: <SingleTrackPage />,
    loader: singleTrackDataLoader
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
