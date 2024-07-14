import './App.scss';
import './styles/test.scss'
import NavBar from './components/navBar';
import SearchBar from './components/searchBar';
// import {Buttons} from'./components/buttons'
// import Three from './components/threeScene'

function App() {

  return (
    <div>
      <header>
        <SearchBar />
        <NavBar />
      </header>
      {/* <h1 className='h11'>Hello</h1>
      <div className='mainDiv'>
        <div className='subDiv'>1</div>
        <div className='subDiv'>2</div>
        <div className='subDiv'>3</div>
        <div className='subDiv'>4</div>
        <div className='subDiv'>5</div>
      </div>
      <Buttons /> */}
      {/* <Three /> */}
    </div>
  );
}

export default App;
