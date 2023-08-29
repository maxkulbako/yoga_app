import { createBrowserRouter, createHashRouter } from 'react-router-dom';
import { Main } from '../../Main';
import { Contacts, About, Retreat, ContentYoga } from '../../views';
import ErrorPage from './ErrorPage';
import { NewsPage } from '../../views/Yoga/News';
import { Online } from '../../views/Yoga/Online';
import { YoutubePage } from '../../views/Yoga/YouTube';
import { OfflinePage } from '../../views/Yoga/Offline';
import { PersonalTreningPage } from '../../views/Yoga/Personal';
import { Courses, CoursesList, CoursePage } from '../../views/Yoga/Courses';
import { YogaNavMenu } from '../../views/Yoga/components/YogaNavMenu';
import { StartPage } from '../../views';
import { RetreatStartPage } from '../../views';
import { RetreatNavMenu } from '../../views/Retreat/components/RetreatNavMenu';
import { App } from '../../App';
import { InsidePage } from '../../views/Retreat/InsidePage';
import { CarpathiansPage } from '../../views/Retreat/CarpathiansPage';
import { CiprusPage } from '../../views/Retreat/CiprusPage';

const createRouter =
  process.env.ENV === 'gh-pages' ? createHashRouter : createBrowserRouter;

export const router = createRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <StartPage />,
      },
      {
        path: 'main/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: 'yoga/',
            element: <ContentYoga />,
            children: [
              {
                path: '',
                element:
                  window.innerWidth >= 800 ? <NewsPage /> : <YogaNavMenu />,
              },
              {
                path: 'course/',
                element: <Courses />,
                children: [
                  {
                    path: '',
                    element: <CoursesList />,
                  },
                  {
                    path: ':titleID',
                    element: <CoursePage />,
                  },
                ],
              },
              {
                path: 'online/',
                element: <Online />,
              },
              {
                path: 'youtube/',
                element: <YoutubePage />,
              },
              {
                path: 'offline/',
                element: <OfflinePage />,
              },
              {
                path: 'pesonal/',
                element: <PersonalTreningPage />,
              },
            ],
          },
          {
            path: 'contacts/',
            element: <Contacts />,
          },
          {
            path: 'about/',
            element: <About />,
          },
          {
            path: 'retreat/',
            element: <Retreat />,
            children: [
              {
                path: '',
                element:
                  window.innerWidth >= 800 ? (
                    <RetreatStartPage />
                  ) : (
                    <RetreatNavMenu />
                  ),
              },
              {
                path: 'inside',
                element: <InsidePage />,
              },
              {
                path: 'summer',
                element: <CarpathiansPage />,
              },
              {
                path: 'cyprus',
                element: <CiprusPage />,
              },
            ],
          },
        ],
      },
    ],
  },
]);
