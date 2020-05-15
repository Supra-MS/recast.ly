import App from '../src/components/App.js';
import searchYouTube from '../src/lib/searchYouTube.js';

//render app component to Dom
ReactDOM.render(<App searchYouTube={ searchYouTube } />, document.getElementById('app'));

