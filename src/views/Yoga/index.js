import { Outlet } from "react-router-dom";
import { YogaNavMenu } from "./components/YogaNavMenu";


export function ContentYoga () {
  return (
    <main className="main_wrapper">
      <div className="side_wrapper">
        <Outlet/>
      </div>
      <div className="content_separator"></div>
      <div className="side_wrapper right">
        <YogaNavMenu/>
      </div>
    </main>
  );
}
