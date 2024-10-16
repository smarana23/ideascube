import './App.css';
import Navbar from './Components/Navbar';
import Getstarted from './Components/Getstarted';
import Contact from './Components/Contact';
import About from './Components/About';
import Cards from './Components/Cards';
import Home from './Components/Home';
import Detailcards from './Components/Detailcards';
import { createBrowserRouter, RouterProvider } from "react-router-dom";


function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <><Home/></>
    },
    {
      path:"/about",
      element: <><About/> </>
    },
    {
      path:"/contact",
      element: <> <Contact/> </>
    },
    {
      path: "/getstarted",
      element: <> <Getstarted/>  </>
    },
    {}
  ])
  return <>
    <RouterProvider router={router} />
  </>
  
}

export default App;
