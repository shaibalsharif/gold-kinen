import '..//Styles/App.css';
import TimeLine from '../Components/TimeLine.js'
import Header from '../Components/Header.js'
import Tags from '../Components/Tags.js'
import BgAnimation from '../Components/BgAnimation.js'

function App() {
  return (
    <div className="App">
      <div className='fixed top-0 bottom-0 left-0  w-full -z-30'>
        <BgAnimation />
      </div>
      <Header />
      <Tags size={'big'} />
      <TimeLine />

    </div>
  );
}

export default App;
