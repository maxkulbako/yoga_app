import { createBrowserRouter, createHashRouter } from "react-router-dom";
import { Main } from "../../Main";
import { Contacts, About, Retreat, ContentYoga } from "../../views";
import ErrorPage from "./ErrorPage";
import { NewsPage } from "../../views/Yoga/News";
import { Online } from "../../views/Yoga/Online";
import { YoutubePage } from "../../views/Yoga/YouTube";
import { OfflinePage } from "../../views/Yoga/Offline";
import { PersonalTreningPage } from "../../views/Yoga/Personal";
import { Courses, CoursesList, CoursePage } from "../../views/Yoga/Courses";
import { YogaNavMenu } from "../../views/Yoga/components/YogaNavMenu";
import { useMediaQuery } from "../hooks";
import { StartPage } from "../../views";
import { App } from "../../App";

const createRouter =
  process.env.ENV === "gh-pages" ? createHashRouter : createBrowserRouter;

function StartElement() {
  const isDesktop = useMediaQuery("(min-width: 800px)");

  return isDesktop ? <NewsPage /> : <YogaNavMenu />;
}

export const router = createRouter([
  {
    path: "yoga_app/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <StartPage />,
      },
      {
        path: "main/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "yoga/",
            element: <ContentYoga />,
            children: [
              {
                path: "",
                element: <StartElement />,
              },
              {
                path: "course/",
                element: <Courses />,
                children: [
                  {
                    path: "",
                    element: <CoursesList />,
                  },
                  {
                    path: ":titleID",
                    element: <CoursePage />,
                  },
                ],
              },
              {
                path: "online/",
                element: <Online />,
              },
              {
                path: "youtube/",
                element: <YoutubePage />,
              },
              {
                path: "offline/",
                element: <OfflinePage />,
              },
              {
                path: "pesonal/",
                element: <PersonalTreningPage />,
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
          },
        ],
      },
    ],
  },
]);
