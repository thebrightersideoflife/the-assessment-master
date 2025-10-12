import React from 'react';
import YouTube from 'react-youtube';

const VideoEmbed = ({ videoUrl, title }) => {
  const getYouTubeId = (url) => {
    const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const videoId = getYouTubeId(videoUrl);
  const origin = typeof window !== 'undefined' ? window.location.origin : '';

  const opts = {
    playerVars: {
      autoplay: 0,
      cc_load_policy: 1,
      modestbranding: 1,
      rel: 0,
      origin,
    },
  };

  return (
    <div className="my-6 w-full">
      {videoId ? (
        <div className="w-full overflow-hidden rounded-lg shadow-md">
          <div
            className="relative w-full overflow-hidden"
            style={{ paddingBottom: '56.25%' /* 16:9 aspect ratio */ }}
          >
            <YouTube
              videoId={videoId}
              className="absolute top-0 left-0 w-full h-full"
              iframeClassName="w-full h-full rounded-lg"
              title={title}
              opts={opts}
            />
          </div>
        </div>
      ) : (
        <div className="bg-gray-100 p-4 rounded-lg text-gray-600 text-center">
          Video coming soon
        </div>
      )}
    </div>
  );
};

export default VideoEmbed;