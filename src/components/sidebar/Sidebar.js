import { Link, useLocation } from 'react-router-dom'
import './sidebar.scss'
import { images } from '../../constants'
import sidebarNav from '../../config/sidebarNav'
import { useEffect, useState } from 'react'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

function Sidebar() {
  const [activeIndex, setActiveIndex] = useState(0)
  const location = useLocation()

  useEffect(()=>{
    const curPath = location.pathname.split('/')[1]
    const activeItem = sidebarNav.findIndex(item => item.section === curPath)

    setActiveIndex(curPath.length === 0 ? 0 : activeItem)
  }, [setActiveIndex, location])

  const closeSidebar = () => {
    document.querySelector('.main__content').style.transform ='scale(1) translateX(0)';
    setTimeout(()=>{
      document.body.classList.remove('sidebar-open');
      document.querySelector('.main__content').style = '';
    }, 1000)
  }

  return (
    <div className='sidebar'>
      <div className="sidebar__logo">
        <img src={images.logo} alt="" />
        <div className="sidebar-close" onClick={closeSidebar}>
          <CloseOutlinedIcon className='mui'/>
        </div>
      </div>
      <div className="sidebar__menu">
          {
            sidebarNav.map((nav, index) => (
              <Link to={nav.link} key={`nav-${index}`} className={`sidebar__menu__item ${activeIndex === index && 'active'}`} onClick={closeSidebar}>
                <div className='sidebar__menu__item__icon'>
                  {nav.icon}
                </div>
                <div className="sidebar__menu__item__txt">
                  {nav.text}
                </div>
              </Link>
            ))
          }

          <div className="sidebar__menu__item">
            <div className="sidebar__menu__item__icon">
              <LogoutOutlinedIcon/>
            </div>
            <div className="sidebar__menu__item__txt">
              Logout
            </div>
          </div>
        </div>
    </div>
  )
}

export default Sidebar