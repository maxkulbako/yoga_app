import { Outlet } from "react-router-dom";

export function LeftSide () {

  return (
    <div className="leftside_wrapper">
      <Outlet/>
    </div>
  );
}
