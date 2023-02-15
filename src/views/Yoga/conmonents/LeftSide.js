import { Outlet } from "react-router-dom";

export function LeftSide () {

  return (
    <div className="left_side_wrapper">
      <Outlet/>
    </div>
  );
}
