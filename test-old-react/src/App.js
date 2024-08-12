import './App.scss';
import './styles/test.scss'
// import NavBar from './components/navBar';
// import SearchBar from './components/searchBar';
// import ManiBar from './components/internNavBar/maniBar';
import ShopByCategoriesV2 from './components/shopByCategories/shopByCategories';
// import ShopByCategoriesV2 from './components/slidingAnimation1/shopByCategories';
// import ExampleDev from './components/insideDev/exampleDev';
// import {Buttons} from'./components/buttons'
import ThreePotScene from './components/threePotScene'
// import ThreeRoverScene from './components/threeRoverScene'
// import AutoSlideShow from './components/autoSlideShow'
import ManualSlideShow from './components/manualSlideShow'
import TitleBar from './components/titleBar'
import Error from './components/error'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './routes/Home';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element:<>
                <Home />
              </>,
      errorElement:<Error/>
    },
    {
      path: "/demo",
      element:<>
                <header>
                  <TitleBar />
                </header>
                <ThreePotScene/>
              </>,
      errorElement:<Error/>
    },
    {
      path: "/test",
      element: 
        <ShopByCategoriesV2 />
      ,
      errorElement:<Error/>
    }
  ]);
  

  return (
    <div>
        {/* <SearchBar /> */}
        {/* <NavBar /> */}
        {/* <ManiBar /> */}
        {/* <ExampleDev /> */}
        {/* <ThreePotScene /> */}
        {/* <ThreeRoverScene /> */}
        {/* <AutoSlideShow /> */}
        {/* <ManualSlideShow /> */}
        {/* <ShopByCategoriesV2 /> */}
      <div>
        <RouterProvider router={router} />
      </div>
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
