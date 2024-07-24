import './App.scss';
import './styles/test.scss'
import NavBar from './components/navBar';
import SearchBar from './components/searchBar';
import ManiBar from './components/internNavBar/maniBar';
// import ExampleDev from './components/insideDev/exampleDev';
// import {Buttons} from'./components/buttons'
// import ThreePotScene from './components/threePotScene'
// import ThreeRoverScene from './components/threeRoverScene'
// import AutoSlideShow from './components/autoSlideShow'
import ManualSlideShow from './components/manualSlideShow'

function App() {

  return (
    <div>
      <header>
        <SearchBar />
        <NavBar />
        <ManiBar />
      </header>
      <main>
        {/* <ExampleDev /> */}
        {/* <ThreePotScene /> */}
        {/* <ThreeRoverScene /> */}
        {/* <AutoSlideShow /> */}
        <ManualSlideShow />
      </main>
      {/* <h1 className='h11'>Hello</h1>
      <div className='mainDiv'>
        <div className='subDiv'>1</div>
        <div className='subDiv'>2</div>
        <div className='subDiv'>3</div>
        <div className='subDiv'>4</div>
        <div className='subDiv'>5</div>
      </div>
      <Buttons /> */}
    </div>
  );
}

export default App;
