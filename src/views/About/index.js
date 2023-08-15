import { BaseButton } from '../components/Buttons/BaseButton';
import { useNavigate } from 'react-router-dom';

import './about.scss';

export function About() {
  const navigate = useNavigate();

  const handleYoutube = () => {
    window.open('https://youtu.be/krz4oMNhm5I', '_blank');
  };

  const handlePractice = () => {
    navigate('/main/yoga/online');
  };

  return (
    <div className="about_contant_wrapper">
      <div className="img_wrapper">
        <img
          alt="ava_img"
          src="https://res.cloudinary.com/dd69ztxsd/image/upload/v1680197635/nana_yoga/ava_nana-min_1_noy1mn_bkqhqh.jpg"
        />
      </div>
      <div className="text_section_wrapper">
        <div className="text_block">
          <p>
            Меня зовут Настя Владисенко, или можно просто Нана. Я преподаватель
            хатха-йоги.
          </p>
          <p>
            Очень рада, что вы здесь оказались. Ведь это значит, что Ваша душа
            стремиться к познанию своей изначальной сути и свободе.
          </p>
          <p>
            Все мы приходим к йоге по разным причинам и это абсолютно нормально.
            Кто-то стремиться обрести здоровье, красивое тело, гибкость, кто-то
            ищет душевный покой. Самое важное <b>продолжать идти </b> не только
            дальше, но и <b>глубже.</b>
          </p>
          <p>
            Для меня <b>йога</b> - это то,{' '}
            <b>как я смотрю на жизнь, свобода проявления,</b>
            возможность на собственном опыте исследовать <b>«кто я»</b>, как
            здесь все устроено и <b>«куда я иду»</b>. Это про <b>состояние</b>.
            Это что-то, <b>что в процессе двигает тобою</b>.
          </p>
          <p>
            Это <b>соединение с собой и со всем</b>, ощущение <b>целостности</b>
            .
          </p>
          <p>
            Бережно и с любовью делюсь тем, что я внедрила в свою жизнь
            благодаря йоге. Хочу, чтобы люди “просыпались” и вспоминали для чего
            они здесь, чтобы мы снова объединились.
          </p>
          <p>
            Я завершила курс, который вобрал в себя лекции и практические
            занятия об асанах, пранаямах, шаткармах, чакральной системе,
            анатомии, мудрах, бандхах и ведических писаниях. И являюсь
            дипломированным преподавателем (200 часов).
          </p>
          <p>
            Не взирая на то, как и где вы практикуете, желаю вам продолжать этот
            непростой, но важный путь. И помните: 
            <b>сначала Вы делаете йогу, затем йога делает Вас</b>.
          </p>
          <p>ОМ</p>
          <p>
            Попробуйте практики вместе со мной на YouTube или присоединяйтесь к
            совместным занятиям в нашем закрытом онлайн-сообществе.{' '}
          </p>
        </div>
        <div className="buttons_wrapper">
          <div className="action_button">
            <BaseButton title="YouTube" onClick={handleYoutube} />
          </div>
          <div className="action_button">
            <BaseButton title="онлайн-группа" onClick={handlePractice} />
          </div>
        </div>
      </div>
    </div>
  );
}
