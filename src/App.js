
import './App.css';
import React from 'react';
import { createBrowserRouter,  RouterProvider} from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Services from './Pages/Services/Services';
import Contact from './Pages/Contact/Contact';
import Term from './Pages/Terms/Term';
import AppLayout from './component/AppLayout';

const router = createBrowserRouter(
  [
    {
      path:"/",
      element:<AppLayout/>,
      children:[
        {path:"/",
          element:<Home/>,
        },
        {path:"/about",
          element:<About/>,
        },
        {path:"/services",
          element:<Services/>   
        },
        {path:"/term",
          element:<Term/>
        },
        {path:"/contact",
          element:<Contact/>
        },
  ],}
  
]);
function App() {
  return (
    <div>
    <RouterProvider router={router}/>
    </div>
    
  );
}

export default App;
