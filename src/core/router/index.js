import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import { Contacts } from "../../views/Contacts.js";
import { About } from "../../views/About.js";
import { Retreat } from "../../views/Retreat.js";
import { Content } from "../../views";
import ErrorPage from "./ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "yoga/",
        element: <Content/>
      },
      {
        path: "contacts/",
        element: <Contacts />,
      },
      {
        path: "about/",
        element: <About />,
      },
      {
        path: "retreat/",
        element: <Retreat />,
      }
    ],
  },
]);