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
import PostPage from "./features/posts/PostPage";
import store from "./app/store";
import { Provider } from "react-redux";
import { HelmetProvider } from "react-helmet-async";

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
      {
        path: "post/:id",
        element: <PostPage />,
      },
    ],
  },
  {},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HelmetProvider>
    <Provider store={store}>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </Provider>
  </HelmetProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
