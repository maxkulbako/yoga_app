import { useParams } from "react-router-dom";
import { retreatMenuList } from "../../core/constants/storage";
import { BaseButton } from "../components";
import { useContext } from "react";
import { ModalContext } from "../components/Modal/ModalContext";

export function RetreatPage() {
  const { setActiveContant } = useContext(ModalContext);
  const { titleID } = useParams();
  const { title } = retreatMenuList.find((page) => page.link === titleID);

  return (
    <div className="page_container">
      <p className="mobile_page_title">{title}</p>

      <div className="page_text_block">
        <p>
          Если вы ощущаете необходимость выдохнуть, расслабиться и отпустить -
          эта практика идеально подойдет. Услышать тело, замедлиться и ровести
          30 минут наедине с собой. Без лишнего напряжения, свободная и легкая,
          эта практика приблизит вас к вам же.
        </p>

        <BaseButton
          onClick={() => setActiveContant("test")}
          title="присоединиться"
        />
      </div>
    </div>
  );
}
