import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import { Contacts } from "../../views/Contacts/Contacts";
import { About } from "../../views/About/About";
import { Retreat } from "../../views/Retreat/Retreat";
import { ContentYoga } from "../../views/Yoga";
import ErrorPage from "./ErrorPage";
import { Courses } from "../../views/Yoga/Courses/index";
import { Online } from "../../views/Yoga/Menu/";
import { NewsPage } from "../../views/Yoga/conmonents/NewsPage";
import { DeepPage } from "../../views/Yoga/Courses/DeepPage";
import { Morning } from "../../views/Yoga/Courses/Morning";
import { CoursesList } from "../../views/Yoga/Courses/CoursesList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "yoga/",
        element: <ContentYoga/>,
        children: [
          {
            path: "",
            element: <NewsPage/>
          },
          {
            path: "course/",
            element: <Courses />,
            children: [
              {
                path: "",
                element: <CoursesList/>
              },
              {
                path: "deep/",
                element: <DeepPage/>
              },
              {
                path: "morning/",
                element: <Morning/>
              },
            ]
          },
          {
            path: "online/",
            element: <Online />,
          },
        ],
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
