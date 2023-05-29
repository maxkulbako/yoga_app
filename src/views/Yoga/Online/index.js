import "./online.scss";
import { useContext } from "react";
import { ModalContext } from "../../components/Modal/ModalContext";
import { BaseButton } from "../../components";

export function Online() {
  const { setActiveContant } = useContext(ModalContext);

  return (
    <div className="section_wrapper">
      <img
        src="https://res.cloudinary.com/dd69ztxsd/image/upload/v1684776119/nana_yoga/YOGA/PNG_online_group_wblnz5.png"
        alt="NANA_ONLINE"
      />
      <div className="page_text_block">
        <p>
          онлайн-группа - это возможность заниматься вместе с Наной
          систематично. практики проходят в прямом эфире на платформе телерграм.
        </p>
        <p>
          сила учения йоги - в практике. занимаясь онлайн вы имеете возможность
          погрузиться в этот процесс из любой точки мира и в удобное для вас
          время. вам нужно только ваше намерение ✨
        </p>
        <p>важные детали:</p>
        <p>
          ⁃ прямые эфиры проходят дважды в неделю: пн/чт в 7:30 по Киевскому
          времени (8 онлайн занятий в месяц); <br /> ⁃ доступ ко всем предыдущим
          практикам, которых уже более 170; <br /> ⁃ доступ в
          телеграм-сообщество (вопросы-ответы, ощущения/сложности/прогресс, поле
          единомышленников); <br />
          ⁃ лекции на различные темы о йоге, которые можно слушать в любое
          удобное время; <br /> ⁃ асаны, дыхание, внимание, концентрация,
          шаткармы.
        </p>
        <p>Стоимость: 20€ (в месяц)</p>
      </div>
      <BaseButton
        onClick={() => setActiveContant("online")}
        title="отправить сообщение"
      />
    </div>
  );
}
