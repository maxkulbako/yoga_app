import { LeftSide } from "./conmonents/LeftSide";
import { RightSide} from "./conmonents/RightSide";


export function ContentYoga () {
  return (
    <main className="main_wrapper">
      <LeftSide/>
      <div className="content_separator"></div>
      <RightSide/>
    </main>
  );
}
