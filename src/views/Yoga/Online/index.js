import './online.scss';
import { useContext } from 'react';
import { ModalContext } from '../../components/Modal/ModalContext';
import { BaseButton } from '../../components';

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
          Онлайн-группа - это <b>поддерживающее пространство</b>, которое
          помогает выработать дисциплину к{' '}
          <b>постоянным практикам в поле единомышленников.</b>
        </p>
        <p>
          Занимаясь онлайн вы имеете возможность погрузиться в процесс из любой
          точки мира и в удобное для вас время. Вам понадобиться намерение,
          коврик и возможно йога-блоки + ремень.
        </p>
        <p>
          Работаем с <b>телом, дыханием, вниманием, мышлением. </b>
        </p>
        <ul className="list_wrapper">
          <li>
            <p>
              <b>2 живых практики</b> в неделю (хатха-йога/медитация/пранаяма)
              длительностью 70-80 минут;
            </p>
          </li>
          <li>
            <p>поддерживающее коммьюнити в Телеграм со мной и участниками;</p>
          </li>
          <li>
            <p>
              <b>аудио и видео лекции</b> о различных аспектах йоги;
            </p>
          </li>
          <li>
            <p>
              <b>полезные рецепты</b>, информация о днях <b>Экадаши</b>.{' '}
            </p>
          </li>
        </ul>
      </div>
      <div className="page_text_block">
        <p>Варианты подписки:</p>
        <ul className="list_wrapper">
          <li>
            <p>1 месяц - 25 €;</p>
          </li>
          <li>
            <p>3 месяца - 65 €;</p>
          </li>
          <li>
            <p>6 месяцев - 125 €;</p>
          </li>
          <li>
            <p>12 месяцев - 240 €.</p>
          </li>
        </ul>
      </div>
      <BaseButton
        onClick={() => setActiveContant('online')}
        title="присоединиться"
      />
    </div>
  );
}
