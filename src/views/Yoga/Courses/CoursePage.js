import { useParams } from "react-router-dom";
import { coursesMenuList } from "../../../core/constants/storage";
import { BaseButton } from "../../components";
import { SocialMediaSvg } from "../../components/SocialMedia";
import { useMediaQuery } from "../../../core/hooks";

import "./courses.scss";

export function CoursePage() {
  const isDesktop = useMediaQuery("(min-width: 800px)");
  const { titleID } = useParams();
  const { title, background } = coursesMenuList.find(
    (page) => page.link === titleID
  );

  return (
    <div className="page_container">
      {isDesktop ? (
        <div
          className="page_title"
          style={{
            backgroundImage: `url(${background})`,
          }}
        >
          <p>{title}</p>
        </div>
      ) : (
        <p className="mobile_page_title">{title}</p>
      )}
      <button
        type="button"
        className="video_button"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <SocialMediaSvg id="video" />
      </button>
      <div className="page_text_block">
        <p>
          Если вы ощущаете необходимость выдохнуть, расслабиться и отпустить -
          эта практика идеально подойдет. Услышать тело, замедлиться и ровести
          30 минут наедине с собой. Без лишнего напряжения, свободная и легкая,
          эта практика приблизит вас к вам же.
        </p>
        <p>
          Оставьте все ненужное за пределами коврика, это время только для себя.
          Позвольте йоге войти в Вашу жизнь и вести Вас.
        </p>
        <p>
          Приглашаем в закрытую онлайн-группу, если есть запрос практиковать
          чаще и на постоянной основе. В группе есть более 120 практик с Наной в
          записи. Разной длительности и уровня. И две прямых трансляции
          еженедельно. Приобретая доступ к группе, Вы так же имеете возможность
          добавиться в телеграм-чат, где мы делимся полезной информацией о йоге
          и общаемся с участниками.
        </p>
        <p>
          Закрытая онлайн-группа с Наной - более 120 сохраненных практик по
          которым вы можете заниматься. - в течении месяца проводится 8 прямых
          эфиров (продолжительностью 1 час) - телеграмм канал в котором вы
          найдете и поймете, что такое йога. - групповые голосовые чаты с
          лекциями о разных аспектах йоги.
        </p>
        <div className="telegram_link">
          <p>Для записи в закрытую онлайн-группу пишите сюда (телеграм):</p>
          <a href="#najfdskf">@NanaVladysenko</a>
        </div>
        <p>Стоимость: 20€ (в месяц)</p>
      </div>
      <div className="try_button_block">
        <p>попробовать первую практику</p>
        <a href="#najfdskf">free</a>
      </div>
      <BaseButton title="купить" />
    </div>
  );
}
