import { Outlet } from "react-router-dom";
export * from './Morning';
export * from './DeepPage';
export * from './CoursesList';

export function Courses () {
  return (
    <div>
      <Outlet/>
    </div>
  );
}
