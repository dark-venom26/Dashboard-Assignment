import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import StoreMallDirectoryOutlinedIcon from '@mui/icons-material/StoreMallDirectoryOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined';

const sidebarNav = [
    {
        link: '/',
        section: 'home',
        icon: <HomeOutlinedIcon/>,
        text: 'Home'
    },
    {
        link: '/orders',
        section: 'orders',
        icon: <CreditCardOutlinedIcon/>,
        text: 'Orders'
    },
    {
        link: '/products',
        section: 'products',
        icon: <StoreMallDirectoryOutlinedIcon/>,
        text: 'Products'
    },
    {
        link: '/customers',
        section: 'customers',
        icon: <PersonOutlineOutlinedIcon/>,
        text: 'Customers'
    },
    {
        link: '/stats',
        section: 'stats',
        icon: <InsertChartOutlinedIcon/>,
        text: 'Stats'
    },
    {
        link: '/settings',
        section: 'settings',
        icon: <SettingsApplicationsOutlinedIcon/>,
        text: 'Settings'
    }
]

export default sidebarNav