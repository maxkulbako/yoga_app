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
          у нас есть канал «Йога с Наной», который мы активно ведем с 2022 года.
          Мы - это Нана, которую Вы постоянно видите в кадре, и Валерий, который
          помогает всё это создавать и воплощать в реальность.
        </p>
        <p>
          на канале представлены практики разной длительности, формата,
          наполнения, направления и сложности. вы можете точечно выбрать любое
          занятие, которое понравится или воспользоваться нашими «марафонами»:
          «7 дней йоги с наной» или «месяц йоги».
        </p>
        <p>
          вмы продолжаем развивать это пространство, чтобы дать возможность
          каждому окунуться в этот мир саморазвития и познания себя.
          подписывайтесь, комментируйте и поддерживайте наше творчество. мы
          будем благодарны.
        </p>
        <p>
          внимание: все видео созданы для самостоятельных занятий, и автор
          контента не несёт ответственности за качество выполнения упражнений
          занимающимися. занятия подходят для здоровых людей, поэтому
          прислушивайтесь к своим ощущениям, и если Вы не уверены в состоянии
          своего здоровья и возможности выполнения представленных асан, то
          обратитесь к врачу. если во время практики почувствуете негативные
          ощущения, прекратите занятия и также примите меры.
        </p>
        <p>
          верим, эти практики принесут Вам только пользу и состояние йоги.
          будьте здоровы и осознаны. приятного погружения.
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
