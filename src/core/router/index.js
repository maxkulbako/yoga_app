import { createBrowserRouter } from "react-router-dom";
import Media from "react-media";
import App from "../../App";
import { Contacts, About, Retreat, ContentYoga } from "../../views";
import ErrorPage from "./ErrorPage";
import { NewsPage, Online } from "../../views/Yoga/MenuPages";
import { Courses, CoursesList, DeepPage, Morning } from "../../views/Yoga/Courses";
import { YogaNavMenu } from "../../views/Yoga/components/YogaNavMenu"

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
        large: "(min-width: 600px)"
      }}>
        {matches => (
          <div>
            {matches.small && <YogaNavMenu/>}
            {matches.large && <NewsPage/>}
          </div>
        )}
      </Media>
    </>
  );
}
