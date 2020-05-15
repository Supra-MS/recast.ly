import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false,
      videos: exampleVideoData,
      streamingVideo: exampleVideoData[0]
    };
  }

  handleVideoClick(video) {
    this.setState({
      streamingVideo: video
    });
  }

  componentDidMount() {
    this.onSubmitChange('react');
  }

  onSubmitChange(query) {
    let options = {
      key: YOUTUBE_API_KEY,
      query: query,
      max: 3
    };

    console.log(options.key);
    console.log(options.query);
    this.props.searchYouTube(options, (videos) => {
      this.setState({
        videos: videos,
        streamingVideo: videos[0]
      });
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div>
              <Search searchSubmit={this.onSubmitChange.bind(this)}/>
            </div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div>
              <VideoPlayer streamVideo={this.state.streamingVideo} />
            </div>
          </div>
          <div className="col-md-5">
            <div>
              <VideoList videos={this.state.videos} handleVideoClick={this.handleVideoClick.bind(this)} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;

