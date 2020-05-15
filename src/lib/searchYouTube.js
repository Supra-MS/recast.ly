var searchYouTube = (options, callback) => {

  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      key: options.key,
      q: options.query,
      maxResults: options.max || 5,
      videoEmbeddable: true,
      part: 'snippet',
      type: 'video'
    },
    contentType: 'application/json',
    success: function (data) {
      callback(data.items);
      console.log('Recastly: Successfully able to get response from the youtube API', data);
    },
    error: function (data) {
      console.error('Recastly: Failed to get response from the youtube API', data);
    }
  });


};

export default searchYouTube;
