import React, {useState, useEffect} from 'react';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ClipLoader from "react-spinners/HashLoader";
import Footer from './components/Footer';
import FooterBottom from './components/FooterBottom';

import { lazy, Suspense } from 'react';

const router = createBrowserRouter([
  {
    path: "/",
    Component: lazy(() => import('./pages/Home'))
  },
]);

function App() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
       setLoading(false)
    }, 2000)
  }, [])

  return (
    <>
      {
        loading ?
        <div className='loader--section'>
          <ClipLoader width={300} color={"black"} loading = {loading} />
        </div>
        :
        <>
          <Navbar />
          <Suspense fallback={<section style={{backgroundColor:"white", width:"100%", height:"100vh"}}></section>}>
            <RouterProvider router={router} />
          </Suspense>
          <Footer />
          <FooterBottom />
        </>  
      }
    </>
  )
}

export default App
