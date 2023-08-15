import './personal.scss';
import { BaseButton } from '../../components';
import { useContext } from 'react';
import { ModalContext } from '../../components/Modal/ModalContext';

export function PersonalTreningPage() {
  const { setActiveContant } = useContext(ModalContext);

  const handleTelegram = () => {
    window.open('https://t.me/nanayoga', '_blank');
  };

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
        <p>Доступные форматы: онлайн и оффлайн (Кипр).</p>
        <p>
          <b>Стоимость онлайн занятий</b> в ZOOM:
        </p>
        <ul className="list_wrapper">
          <li>
            <p>разовое занятие (60 мин) - 30 €;</p>
          </li>
          <li>
            <p>разовое занятие (90 мин) - 40 €;</p>
          </li>
          <li>
            <p>абонемент на 10 занятий (60 мин) - 250 €;</p>
          </li>
          <li>
            <p>абонемент на 10 занятий (90 мин) - 350€.</p>
          </li>
        </ul>
      </div>
      <div className="page_text_block">
        <p>
          <b>Стоимость оффлайн занятий:</b>
        </p>
        <ul className="list_wrapper">
          <li>
            <p>разовое занятие (60 мин) - 40 €;</p>
          </li>
          <li>
            <p>разовое занятие (90 мин) - 50 €;</p>
          </li>
          <li>
            <p>абонемент на 10 занятий (60 мин) - 350 €;</p>
          </li>
          <li>
            <p>абонемент на 10 занятий (90 мин) - 450€.</p>
          </li>
        </ul>
      </div>
      <div className="page_text_block">
        <p>
          Для записи оформите заявку ниже или свяжитесь со мной в Телеграм.{' '}
        </p>
        <p>Благодарю. </p>
      </div>
      <div className="buttons_wrapper">
        <BaseButton
          onClick={() => setActiveContant('personal')}
          title="заполнить форму"
        />
        <BaseButton onClick={handleTelegram} title="мой Телеграм" />
      </div>
    </div>
  );
}
