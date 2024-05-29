import logo from './logo.svg';
import './App.css';
import TimeLine from './TimeLine.js'
import Navs from './Navs.js'
import Tags from './Tags.js'
import BgAnimation from './BgAnimation.js'

function App() {
  return (
    <div className="App">
      <div className='fixed top-0 bottom-0 left-0  w-full -z-30'>
        <BgAnimation />
      </div>
      <Navs />
      <Tags size={'big'} />
      <TimeLine />
      
    </div>
  );
}

export default App;
