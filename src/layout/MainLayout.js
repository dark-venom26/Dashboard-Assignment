import './main-layout.scss'
import Sidebar from "../components/sidebar/Sidebar"
import TopNav from "../components/topnav/TopNav"
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <>
      <Sidebar/>
      <div className="main">
        <div className="main__content">
          <TopNav/>
          <Outlet/>
        </div>
      </div>
    </>
  )
}

export default MainLayout