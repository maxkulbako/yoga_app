import './youtube.scss';
import { SocialMediaSvg } from '../../components/SocialMedia';
import { BaseButton } from '../../components';
import { useState, useEffect } from 'react';
import { fetchVideo } from '../News/fetchVideos';

export function YoutubePage() {
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
      <div
        className="youtube_img"
        style={{ backgroundImage: `url("${currentVideo?.thumbnailUrl}")` }}
      >
        <SocialMediaSvg id="video" videoId={currentVideo?.id} />
      </div>
      <div className="page_text_block">
        <p>
          Наш канал <b>«Йога с Наной»</b> мы активно ведем с 2022 года. Мы - это{' '}
          <b>Нана</b>, которую Вы постоянно видите в кадре, и <b>Валерий</b>,
          который помогает всё это создавать и воплощать в реальность.
        </p>
        <p>
          на канале представлены практики{' '}
          <b>
            разной длительности, формата, наполнения, направления и сложности.{' '}
          </b>
          вы можете точечно выбрать любое занятие, которое понравится или
          воспользоваться нашими «марафонами»: «7 дней йоги с наной» или «месяц
          йоги».
        </p>
        <p>
          Мы продолжаем развивать это пространство, чтобы дать возможность
          каждому окунуться в этот мир саморазвития и познания себя.{' '}
          <b>подписывайтесь, комментируйте и поддерживайте наше творчество.</b>{' '}
          мы будем благодарны.
        </p>
        <p>
          Верим, эти практики принесут Вам <b>пользу и состояние йоги.</b>{' '}
          будьте здоровы, счастливы и осознаны. приятного погружения.
        </p>
      </div>
      <BaseButton
        onClick={() =>
          window.open('https://youtube.com/@yogawithnana', '_blank')
        }
        title="подписаться"
      />
    </div>
  );
}
