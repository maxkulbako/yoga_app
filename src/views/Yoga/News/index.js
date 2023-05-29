import { SocialMediaSvg } from "../../components/SocialMedia";

import "./_newspage.scss";

export function NewsPage() {
  return (
    <div className="news_page_container">
      <div className="news_wrapper">
        <p className="news_title">Откройте для себя пользу йоги</p>
        <p className="news_text">
          Йога - это не только способ поддерживать физическую форму, но и
          полезное занятие для ума и души. Согласно исследованиям, практика йоги
          может снижать уровень стресса, улучшать настроение и повышать гибкость
          тела. Более того, она может способствовать снижению боли в спине и
          улучшению качества сна. Если вы еще не практиковали йогу, то можете
          открыть для себя ее пользу, начав с общих сведений о ее благотворном
          влиянии на здоровье.
        </p>
        <div
          className="news_img"
          style={{
            backgroundImage:
              'url("https://res.cloudinary.com/dd69ztxsd/image/upload/v1677049574/nana_yoga/Hatha_Yoga_odq6cv.jpg")',
          }}
        >
          <SocialMediaSvg id="video" />
        </div>
      </div>
      <div className="news_wrapper">
        <p className="news_title">
          Йога для начинающих: 5 базовых поз, которые улучшат ваше здоровье
        </p>
        <p className="news_text">
          Анонс: "Вы когда-нибудь думали попробовать йогу, но не знаете, с чего
          начать? Мы предлагаем вам попробовать 5 базовых поз, которые помогут
          улучшить ваше здоровье и душевное состояние.
        </p>
        <div
          className="news_img"
          style={{
            backgroundImage:
              'url("https://res.cloudinary.com/dd69ztxsd/image/upload/v1680198836/nana_yoga/D0_BE_D1_84_D1_84_D0_BB_D0_B0_D0_B8_CC_86_D0_BD_m4tsbu_knkpgg_p7qh9t.png")',
          }}
        >
          <SocialMediaSvg id="video" />
        </div>
      </div>
    </div>
  );
}
