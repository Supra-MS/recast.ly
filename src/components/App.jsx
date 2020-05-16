import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: exampleVideoData,
      streamingVideo: exampleVideoData[0]
    };
    // Tests are passing without any timeouts[ - uncomment debounce timeout]. If we give timeouts then it is failing.
    this.onSubmitChange = this.onSubmitChange.bind(this);
    this.onSubmitChange = _.debounce(this.onSubmitChange, 2000);
  }

  handleVideoClick(video) {
    this.setState({
      streamingVideo: video
    });
  }

  componentDidMount() {
    setTimeout(() => {
      this.onSubmitChange('violin');
    }, 1500);
    // order of running:
    // constructor, render, componentDidMount
    // this.onSubmitChange = _.debounce(this.onSubmitChange, 2000);
  }


  onSubmitChange(query) {
    let options = {
      key: YOUTUBE_API_KEY,
      query: query,
      max: 3
    };

    console.log('Inside submit');
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
    // put asynchronous calls/side-effects in componentDidComponent (within .then of that call). Below is not recommended.
    // eslint-disable-next-line indent
      /* this.onSubmitChange = this.onSubmitChange.bind(this);
      this.onSubmitChange = _.debounce(this.onSubmitChange, 1000); */
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
//window.App = App;
export default App;





