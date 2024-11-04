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
        <p>We are happy to welcome you.</p>
        <p>We actively lead our yoga life and share it with you.</p>
        <p>
          This space is created for like-minded people. For everyone who seeks
          support on the path of yoga and self-discovery. For those who want to
          go long-term and with quality, affirming their chosen worldview.
        </p>
        <p>
          Here you can find different ways to practice and deepen your
          knowledge. To this end, we are constantly expanding and improving the
          quality of our products. And we introduce you to them.
        </p>
        <p>
          If you haven't practiced with Nana yet, you can access one of the
          practices from our YouTube channel below and give it a try. And don't
          forget to subscribe; it means a lot to us.
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
          For regular joint practices, you can also join our online group (see
          details in the "online group" tab). Currently, over 80 people from
          around the world are part of the group, united by a common goal.
        </p>
        <p>
          We are also working on several courses that will soon appear here and
          be available for purchase. We continue to film practices for the
          channel, hold live sessions in Cyprus, and occasionally conduct
          retreats.
        </p>
        <p>Choose a comfortable way to connect with us and start right now.</p>
        <p>We wish you not to stop on the path of self-development.</p>
        <p>OM.</p>
      </div>
    </div>
  );
}
