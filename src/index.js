import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from './Home';
import About from './About';
import Layout from './Layout';
import Projects from './Projects';
import Resume from './Resume'
import Contact from './Contact'
import Skills from './Skills';
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout/>,
//     errorElement: <Home/>
//   },
//   {
//     path: "/home",
//     element: <Home/>,
//     errorElement: <Home/>
//   },
//   {
//     path: "/about",
//     element:<About/>
//   }
// ]);


const router= createBrowserRouter(
createRoutesFromElements(
<Route path='/' element={<Layout/>}>
<Route path='' element={<Home/>}/>

<Route path='/about' element={<Skills/>}/>
<Route path='/projects' element={<Projects/>}/>
<Route path='/Resume' element={<Resume/>}/>
<Route path='/Contact' element={<Contact/>}/>
<Route path='/skills' element={<Skills/>}/>


</Route>
)
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

