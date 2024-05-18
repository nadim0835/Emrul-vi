import { Outlet } from 'react-router-dom'
import Navber from './../Components/Navber';
import Footer from './../Components/Footer';

const RootLayout = () => {
  return (
    <>
    <Navber/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default RootLayout