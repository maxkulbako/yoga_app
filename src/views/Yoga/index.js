import { Outlet } from "react-router-dom";
import { YogaNavMenu } from "./components/YogaNavMenu";


export function ContentYoga () {
  return (
    <main className="main_wrapper">
      <div className="left_side_wrapper">
        <Outlet/>
      </div>
      <div className="content_separator"></div>
      <div className="right_side_wrapper">
        <YogaNavMenu/>
      </div>
    </main>
  );
}
