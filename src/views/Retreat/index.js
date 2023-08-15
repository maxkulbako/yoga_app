import { Outlet } from 'react-router-dom';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import { RetreatNavMenu } from './components/RetreatNavMenu';
import { BaseButton } from '../components';
import { useContext } from 'react';
import { ModalContext } from '../components/Modal/ModalContext';

export function Retreat() {
  return (
    <main className="main_wrapper">
      <OverlayScrollbarsComponent>
        <div className="side_wrapper left">
          <RetreatNavMenu />
        </div>
      </OverlayScrollbarsComponent>
      <div className="content_separator" />
      <OverlayScrollbarsComponent defer>
        <div className="side_wrapper">
          <Outlet />
        </div>
      </OverlayScrollbarsComponent>
    </main>
  );
}

export function RetreatStartPage() {
  const { setActiveContant } = useContext(ModalContext);
  return (
    <div className="page_container">
      <div className="page_text_block">
        <p>
          Сегодня каждому из нас нужен глоток свежего воздуха, возможность
          вынырнуть из рутины повседневных дел и перестать бежать, как белка в
          колесе. Кому-то необходимо задать себе важные вопросы (на самом деле
          всем), кому-то просто отдохнуть и вернуться к своей первоначальной
          природе.{' '}
        </p>
        <p>
          Ретрит - это место перезагрузки и погружения, перенесения фокуса
          вовнутрь и соединения с собой. Каждая такая встреча насыщена
          практиками и осознаниями. Используя одинаковые инструменты, здесь
          каждый обретает свое и увозит с собой разное. Место, где можно
          отпустить, выдохнуть, простить и проститься.{' '}
        </p>
        <p>
          Здесь Вы можете очистить сознание и приблизиться к состоянию йоги.{' '}
        </p>
        <p>
          Не ждите никаких результатов, ведь этому нас учит йога. Просто
          присоединяйтесь, если чувствуете такой отклик, желание, а может быть
          даже необходимость.{' '}
        </p>
        <p>
          В каждое путешествие мы берем с собой себя, так давайте обретем эту
          ясность и совершим самое важное путешествие - к себе.{' '}
        </p>
        <p>Программа каждого ретрита формируется индивидуально. </p>
        <p>
          Если хотите узнать первыми о следующем ретрите и записаться по самым
          приятным ценам - оставляйте заявку ниже, мы свяжемся с Вами в первую
          очередь (*заполнение формы не обязывает вас ехать).{' '}
        </p>
        <p>ОМ.</p>
      </div>
      <BaseButton
        title="хочу на ретрит"
        onClick={() => setActiveContant('retreat')}
      />
    </div>
  );
}
