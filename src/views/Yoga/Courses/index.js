import { Outlet } from "react-router-dom";

export * from "./CoursePage";
export * from "./CoursesList";

export function Courses() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
