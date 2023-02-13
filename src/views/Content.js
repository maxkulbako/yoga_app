import { LeftSide, RightSide } from "./index.js"


export function Content () {
  return (
    <main className="main_wrapper">
      <LeftSide/>
      <div className="content_separator"></div>
      <RightSide/>
    </main>
  );
}
