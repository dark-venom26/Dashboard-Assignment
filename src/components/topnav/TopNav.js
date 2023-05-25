import "./topnav.scss";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import UserInfo from "../user-info/UserInfo";
import {data} from '../../constants';

function TopNav() {
  const openSidebar = () => {
      document.body.classList.add('sidebar-open');
  }

  return (
    <div className="topnav">
      <UserInfo user={data.user}/>
      <div className="sidebar-toggle" onClick={openSidebar}>
        <MenuOutlinedIcon className="mui"/>
      </div>
    </div>
  )
}

export default TopNav