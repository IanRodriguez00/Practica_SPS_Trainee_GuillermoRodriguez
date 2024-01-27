import { Outlet } from "react-router-dom"
import Header from "./pages/Header"



const Layout = () => {
  return (
    <div>
     <div className="m-10 bg-gray-100">
      <Header/>
      </div>
      <div>
      <Outlet />
      </div>
    </div>
   
  )
}

export default Layout
