import { Outlet } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import Resmenu from "../Resmenu/Resmenu"

const Layout = () => {
  return (
    <div>
      <Navbar/>
      <Resmenu/>
      <Outlet/>
    </div>
  )
}

export default Layout
