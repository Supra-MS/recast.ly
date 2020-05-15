import App from '../src/components/App.js';
import searchYouTube from '../src/lib/searchYouTube.js';
import YOUTUBE_API_KEY from '../src/config/youtube.js';

//render app component to Dom
ReactDOM.render(<App searchYouTube={ searchYouTube } API_KEY={ YOUTUBE_API_KEY }/>, document.getElementById('app'));

