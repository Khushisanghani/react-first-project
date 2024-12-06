
import './App.css';
import PageFooter from './component/PageFooter';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Term from './Pages/Term';
import Navbar from './component/Navbar';
const router = createBrowserRouter(
  [
  {path:"/",
    element:
    <div>
      <Navbar/>
      <Home/>
      <PageFooter/>
    </div>
    ,
  },
  {path:"/about",
    element: <div>
    <Navbar/>
    <About/>
    <PageFooter/>
  </div>,
  },
  {path:"/services",
    element:<div>
      <Navbar/>
      <Services/>
      <PageFooter/>
      </div>,
  },
  {path:"/term",
    element:<div>
      <Navbar/>
      <Term/>
      <PageFooter/>
      </div>,
  },
  {path:"/contact",
    element:<div>
      <Navbar/>
      <Contact/>
      <PageFooter/>
      </div>,
  },
]
);
function App() {
  return (
    <div>
    <RouterProvider router={router}/>
    </div>
    
  );
}

export default App;
