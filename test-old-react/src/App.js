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
import SliderAnimation2 from './components/sliderAnimation2/sliderAnimation2'
import Error from './components/error'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './routes/Home';

function App() {

  const slides = [
    { id: 1, imageUrl: 'https://placehold.co/600x400?text=Slide+1' },
    { id: 2, imageUrl: 'https://placehold.co/600x400?text=Slide+2' },
    { id: 3, imageUrl: 'https://placehold.co/600x400?text=Slide+3' },
    { id: 4, imageUrl: 'https://placehold.co/600x400?text=Slide+4' },
    { id: 5, imageUrl: 'https://placehold.co/600x400?text=Slide+5' },
    { id: 6, imageUrl: 'https://placehold.co/600x400?text=Slide+6' },
    { id: 7, imageUrl: 'https://placehold.co/600x400?text=Slide+7' },
    // { id: 8, imageUrl: 'https://placehold.co/600x400?text=Slide+8' },
    // { id: 9, imageUrl: 'https://placehold.co/600x400?text=Slide+9' },
  ];

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
      <>
        <ShopByCategoriesV2 slides={slides} rowCount={3} columnCount={2}/>
        <SliderAnimation2 slides={slides} showcount={4} />
      </>
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
