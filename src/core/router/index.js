import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import { Contacts, About, Retreat, ContentYoga } from "../../views";
import ErrorPage from "./ErrorPage";
import { NewsPage, Online } from "../../views/Yoga/MenuPages";
import { Courses, CoursesList, CoursePage } from "../../views/Yoga/Courses";
import { YogaNavMenu } from "../../views/Yoga/components/YogaNavMenu";
import { useMediaQuery } from "../hooks";

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
            element: <StartElement/>
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
                path: ":titleID",
                element: <CoursePage/>
              }
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

function StartElement () {
  const isDesktop = useMediaQuery('(min-width: 600px)');

  return (
    <>
      {isDesktop ? <NewsPage/> : <YogaNavMenu/>}
    </>
  );
}
