import React from 'react'
import ReactDOM from 'react-dom/client'
import About from './Components/About.jsx';
import './index.css'
import RootLayout from './Pages/RootLayout.jsx';
import Error from './Components/Error.jsx';
import Home from './Pages/Home';



import {

  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider
} from "react-router-dom";
import Single1 from './Components/Single1.jsx';
import Single2 from './Components/Single2';
import Single3 from './Components/Single3';
import Single4 from './Components/Single4';
import Single5 from './Components/Single5';
import Single6 from './Components/Single6';
import Single7 from './Components/Single7';
import Single8 from './Components/Single8';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home/>}/>
      <Route path="/about" element={<About/>} />
      <Route path="/singlaProuct1" element={<Single1/>} />
      <Route path="/singlaProuct2" element={<Single2/>} />
      <Route path="/singlaProuct3" element={<Single3/>} />
      <Route path="/singlaProuct4" element={<Single4/>} />
      <Route path="/singlaProuct5" element={<Single5/>} />
      <Route path="/singlaProuct6" element={<Single6/>} />
      <Route path="/singlaProuct7" element={<Single7/>} />
      <Route path="/singlaProuct8" element={<Single8/>} />
      <Route path="*" element={<Error/>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={router} /> 
  </React.StrictMode>,
)
