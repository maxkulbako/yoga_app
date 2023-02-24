import {useParams} from "react-router-dom";
import { coursesMenuList } from "../../../core/constants/storage";
import { BaseButton } from "../../components";

export function CoursePage () {
  const {titleID} = useParams();
  const { title, background } = coursesMenuList.find(page => page.link === titleID)

  return (
    <div className="page_container">
      <div className="page_title"
          style={{
            backgroundImage: `url(${background})`
          }}
      >
        <p>{title}</p>
      </div>
      <button
        className="video_button"
        style={{
          backgroundImage: `url(${background})`
      }}
      >
        <svg width="109" height="109" viewBox="0 0 109 109" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="19" width="89" height="71" rx="13" stroke="currentColor" strokeWidth="2"/>
          <path d="M67.5909 50.4985C70.346 52.0199 70.346 55.9801 67.5909 57.5015L48.4337 68.0811C45.7678 69.5533 42.5 67.625 42.5 64.5795L42.5 43.4205C42.5 40.375 45.7678 38.4467 48.4337 39.9189L67.5909 50.4985Z" stroke="currentColor" strokeWidth="2"/>
        </svg>

      </button>
      <div className="page_text_block">
        <p>
          Если вы ощущаете необходимость выдохнуть, расслабиться и отпустить - эта практика идеально подойдет. Услышать тело, замедлиться и провести 30 минут наедине с собой. Без лишнего напряжения, свободная и легкая, эта практика приблизит вас к вам же.
        </p>
        <p>
          Оставьте все ненужное за пределами коврика, это время только для себя.
          Позвольте йоге войти в Вашу жизнь и вести Вас.
        </p>
        <p>
          Приглашаем в закрытую онлайн-группу, если есть запрос практиковать чаще и на постоянной основе. В группе есть более 120 практик с Наной в записи. Разной длительности и уровня. И две прямых трансляции еженедельно.
          Приобретая доступ к группе, Вы так же имеете возможность добавиться в телеграм-чат, где мы делимся полезной информацией о йоге и общаемся с участниками.
        </p>
        <p>
          Закрытая онлайн-группа с Наной
          - более 120 сохраненных практик по которым вы можете заниматься.
          - в течении месяца проводится 8 прямых эфиров (продолжительностью 1 час)
          - телеграмм канал в котором вы найдете и поймете, что такое йога.
          - групповые голосовые чаты с лекциями о разных аспектах йоги.
        </p>
        <div className="telegram_link">
          <p>
            Для записи в закрытую онлайн-группу пишите сюда (телеграм):
          </p>
          <a href="#najfdskf">@NanaVladysenko</a>
        </div>
        <p>
          Стоимость: 20€ (в месяц)
        </p>
      </div>
      <div className="try_button_block">
        <p>попробовать первую практику</p>
        <a href="#najfdskf" >free</a>
      </div>
      <BaseButton title="купить"/>
    </div>
  );
}
