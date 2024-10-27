import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Root from "./routes/root";
import ErrorPage from "./error-page";

// import App from './App';
import reportWebVitals from './reportWebVitals';
import UrlShortner from './routes/UrlShortner';
import Twitter2 from './routes/Twitter2';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    // loader: rootLoader,
    // action: rootAction,
    children: [
      {
        // path: "urlshortner",
        // element: <UrlShortner />,
        // loader: contactLoader,
      },
    ],
  },
  {
    path: "urlshortner",
    element: <UrlShortner />,
  },
  {
    path: "twitter",
    element: <Twitter2 />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
