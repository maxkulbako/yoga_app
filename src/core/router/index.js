import { createBrowserRouter } from "react-router-dom";
import Media from "react-media";
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
import { NavMenu } from "../../views/Yoga/conmonents/RightSide";

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

function StartElement () {
  return (
    <>
      <Media queries={{
        small: "(max-width: 599px)",
        large: "(min-width: 1200px)"
      }}>
        {matches => (
          <div>
            {matches.small && <NavMenu/>}
            {matches.large && <NewsPage/>}
          </div>
        )}
      </Media>
    </>
  );
}
