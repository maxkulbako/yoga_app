import axios from 'axios';

const apiKey = 'AIzaSyAAijmOqxCqN3JtjZIATvboMFWaKEUjVes';

const getRandomItem = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

const videoIds = [
  'WsmP_RHXpMo',
  'njNnRZ8rfhc',
  'jjV_yd2syt0',
  '3Y-o-g8DGak',
  'AmLs1M8z5Qk',
  'LBr7s-yj0MI',
  'Lkc_9zdIr98',
  'XzTxr4aS3MU',
  'CJnvTEVg4Qs',
  'QqC0KZi7RZY',
  '0LdOkxDhWEo',
  '8xWH5ZxjC30',
  'Hhd8QKRrIqA',
  'TFklkTvZkEM',
  '3EowE4WUkjA',
  '1IsED2NaFhU',
  'krz4oMNhm5I',
  'svg9Z1CUZHY',
  'h1srpuxm9ss',
];

export const fetchVideo = async () => {
  const videoId = getRandomItem(videoIds);

  const apiUrl = `https://www.googleapis.com/youtube/v3/videos?key=${apiKey}&id=${videoId}&part=snippet`;

  try {
    const { data } = await axios.get(apiUrl);
    const videoInfo = data.items[0];
    if (videoInfo) {
      const id = videoInfo.id;
      const videoUrl = `https://www.youtube.com/watch?v=${id}`;
      const thumbnailUrl = videoInfo.snippet.thumbnails.maxres.url;
      return { id, videoUrl, thumbnailUrl };
    } else {
      console.log('Видео не найдено');
      return {
        id: '0LdOkxDhWEo',
        videoUrl: 'https://www.youtube.com/watch?v=0LdOkxDhWEo',
        thumbnailUrl: 'https://i.ytimg.com/vi/0LdOkxDhWEo/maxresdefault.jpg',
      };
    }
  } catch (error) {
    console.error('Ошибка при запросе к YouTube API:', error);
    return {
      id: '0LdOkxDhWEo',
      videoUrl: 'https://www.youtube.com/watch?v=0LdOkxDhWEo',
      thumbnailUrl: 'https://i.ytimg.com/vi/0LdOkxDhWEo/maxresdefault.jpg',
    };
  }
};
