import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import MainLayout from "./components/layout/MainLayout.js";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: <HomePage />,
          },
          {
            path: "projects",
            element: <ProjectsPage />,
          },
          {
            path: "contact",
            element: <ContactPage />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
