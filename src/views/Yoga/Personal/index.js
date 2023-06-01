import "./personal.scss";
import { BaseButton } from "../../components";
import { useContext } from "react";
import { ModalContext } from "../../components/Modal/ModalContext";

export function PersonalTreningPage() {
  const { setActiveContant } = useContext(ModalContext);
  return (
    <div className="section_wrapper">
      <div
        className="personal_img"
        style={{
          backgroundImage:
            'url("https://res.cloudinary.com/dd69ztxsd/image/upload/q_auto,f_auto/v1684773700/nana_yoga/YOGA/Yoga_Menu_IMG/IMG_individual_ip8aok.jpg")',
        }}
      />
      <div className="page_text_block">
        <p>
          индивидуальные занятия доступны в зависимости от загрузки Наны в
          других проектах. формат может быть любой: онлайн или оффлайн.
        </p>
        <p>
          сперва мы проводим с вами встречу-знакомство, чтобы определить запрос.
          и уже после определяем как и сколько будем практиковать.
        </p>
        <p>
          чтобы узнать больше деталей, пожалуйста оформите заявку ниже и мы с
          Вами свяжемся для дальнейших шагов.
        </p>
        <p>благодарим.</p>
      </div>
      <BaseButton
        onClick={() => setActiveContant("personal")}
        title="записаться"
      />
    </div>
  );
}
