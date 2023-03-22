import { SocialMediaSvg } from "../../components/SocialMedia";

import "./_newspage.scss";

export function NewsPage() {
  return (
    <div className="news_page_container">
      <div className="news_wrapper">
        <p className="news_title">Новая модель организационной</p>
        <p className="news_text">
          А ещё независимые государства описаны максимально подробно. Вот вам
          яркий пример современных тенденций — повышение уровня гражданского
          сознания играет определяющее значение для экспериментов, поражающих по
          своей масштабности и грандиозности.
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
        <p className="news_title">Новая модель организационной</p>
        <p className="news_text">
          А ещё независимые государства описаны максимально подробно. Вот вам
          яркий пример современных тенденций — повышение уровня гражданского
          сознания играет определяющее значение для экспериментов, поражающих по
          своей масштабности и грандиозности.
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
    </div>
  );
}
