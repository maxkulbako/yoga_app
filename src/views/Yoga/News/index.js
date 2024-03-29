import { useEffect, useState } from 'react';
import { SocialMediaSvg } from '../../components/SocialMedia';

import './_newspage.scss';
import { fetchVideo } from './fetchVideos';

export function NewsPage() {
  const [currentVideo, setCurrentVideo] = useState();

  useEffect(() => {
    const fetchVideoData = async () => {
      const video = await fetchVideo();
      if (video) {
        setCurrentVideo(video);
      }
    };

    fetchVideoData();
  }, []);

  return (
    <div className="section_wrapper">
      <div className="page_text_block">
        <p>Рады приветствовать вас.</p>
        <p>Мы активно ведем нашу йога-жизнь и делимся ею с вами.</p>
        <p>
          Это пространство создано для единомышленников. Для всех, кто ищет
          поддержки на пути йоги и самопознания. Кто хочет идти вдолгую и
          качественно, утверждаясь в выбранном мировоззрении.
        </p>
        <p>
          Здесь Вы можете найти разные способы практиковать и углублять свои
          знания. Для этого мы постоянно расширяем и улучшаем качество наших
          продуктов. И знакомим Вас с ними.
        </p>
        <p>
          Если Вы еще не практиковали с Наной, то ниже можно перейти на одну из
          практик YouTube канала и сделать это. И не забывайте подписаться, это
          очень ценно для нас.{' '}
        </p>
      </div>
      <div
        className="youtube_img"
        style={{ backgroundImage: `url("${currentVideo?.thumbnailUrl}")` }}
      >
        <SocialMediaSvg id="video" videoId={currentVideo?.id} />
      </div>
      <div className="page_text_block">
        <p>
          Для регулярных совместных практик Вы также можете присоединиться к
          нашей онлайн-группе (детали читайте во вкладке “онлайн-группа”).
          Сейчас в группе занимается более 80 человек с разных уголков мира,
          объединённые общей целью.
        </p>
        <p>
          Мы так же работаем над несколькими курсами, которые вскоре появятся
          здесь и будут доступны для приобретения. Продолжаем снимать практики
          на канал, ведем живые практики на Кипре и переодически проводим
          ретриты.
        </p>
        <p>
          Выбирайте комфортный способ взаимодействия с нами и начинайте уже
          сейчас.
        </p>
        <p>Желаем не останавливаться на пути саморазвития.</p>
        <p>OM.</p>
      </div>
    </div>
  );
}
