import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./assets/fonts/Inter-ExtraBold.ttf";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./features/ErrorPage";
import ContactUs from "./features/ContactUs";
import LandingPage from "./features/LandingPage";
import PrivacyPolicyPage from "./features/PrivacyPolicyPage";
import HowToPage from "./features/HowToPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <LandingPage />,
      },
      {
        path: "contact_us",
        element: <ContactUs />,
      },
      {
        path: "privacy_policy",
        element: <PrivacyPolicyPage />,
      },
      {
        path: "how_to",
        element: <HowToPage />,
      },
    ],
  },
  {},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
