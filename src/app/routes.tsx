import { createBrowserRouter } from "react-router";
import { Layout } from "./components/layout/Layout";
import { Home } from "./pages/Home";
import { Work } from "./pages/Work";
import { Lab } from "./pages/Lab";
import { Resume } from "./pages/Resume";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "work", Component: Work },
      { path: "lab", Component: Lab },
      { path: "resume", Component: Resume },
    ],
  },
]);
