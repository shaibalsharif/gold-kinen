import logo from './logo.svg';
import './App.css';
import TimeLine from './TimeLine.js'

import Navs from './Navs.js'

import Tags from './Tags.js'

function App() {
  return (
    <div className="App">
      <Navs/>
      <Tags />
      <TimeLine/>
    </div>
  );
}

export default App;
