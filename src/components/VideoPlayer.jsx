let VideoPlayer = ({ streamVideo }) => {
  let url = `https://www.youtube.com/embed/${streamVideo.id.videoId}?autoplay=0`
  return (
  <div className="video-player">
    <div className="embed-responsive embed-responsive-16by9">
      <iframe className="embed-responsive-item" src={url} allowFullScreen></iframe>
    </div>
    <div className="video-player-details">
      <h3>
        {streamVideo.snippet.title}
      </h3>
      <div>
        {streamVideo.snippet.description}
      </div>
    </div>
  </div>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoPlayer.propTypes = {
  streamVideo: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoPlayer;
