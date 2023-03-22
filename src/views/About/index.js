import { SocialMediaSvg } from "../components/SocialMedia";
import { BaseButton } from "../components/Buttons/BaseButton";

import "./about.scss";

export function About() {
  return (
    <div className="about_contant_wrapper">
      <div className="img_wrapper">
        <img
          alt="ava_img"
          src="https://res.cloudinary.com/dd69ztxsd/image/upload/v1677590264/nana_yoga/IMG_2448_m2cw1o.jpg"
        />
      </div>
      <div className="text_section_wrapper">
        <div className="text_block">
          <p>
            Если вы ощущаете необходимость выдохнуть, расслабиться и отпустить -
            эта практика идеально подойдет. Услышать тело, замедлиться и
            провести 30 минут наедине с собой. Без лишнего напряжения, свободная
            и легкая, эта практика приблизит вас к вам же.
          </p>
          <p>
            Оставьте все ненужное за пределами коврика, это время только для
            себя. Позвольте йоге войти в Вашу жизнь и вести Вас.
          </p>
          <p>
            Приглашаем в закрытую онлайн-группу, если есть запрос практиковать
            чаще и на постоянной основе. В группе есть более 120 практик с Наной
            в записи. Разной длительности и уровня. И две прямых трансляции
            еженедельно. Приобретая доступ к группе, Вы так же имеете
            возможность добавиться в телеграм-чат, где мы делимся полезной
            информацией о йоге и общаемся с участниками.
          </p>
          <p>
            Закрытая онлайн-группа с Наной - более 120 сохраненных практик по
            которым вы можете заниматься. - в течении месяца проводится 8 прямых
            эфиров (продолжительностью 1 час) - телеграмм канал в котором вы
            найдете и поймете, что такое йога. - групповые голосовые чаты с
            лекциями о разных аспектах йоги.
          </p>
        </div>
        <div className="social_media_block">
          <SocialMediaSvg id="mail" />
          <SocialMediaSvg id="instagram" />
          <SocialMediaSvg id="youtube" />
        </div>
        <div className="action_button">
          <BaseButton title="практиковать" />
        </div>
      </div>
    </div>
  );
}
