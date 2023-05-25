import './overall-list.scss'
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import StoreMallDirectoryOutlinedIcon from '@mui/icons-material/StoreMallDirectoryOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

const icons = [
    <CreditCardOutlinedIcon className="mui"/>,
    <PersonOutlineOutlinedIcon className="mui"/>,
    <StoreMallDirectoryOutlinedIcon className="mui"/>,
    <MonetizationOnOutlinedIcon className="mui"/>
]

function OverallList({overallData}) {
  return (
    <ul className='overall-list'>
        <li className='overall-list__item'>
            <div className="overall-list__item__icon">
                {icons[0]}
            </div>
            <div className="overall-list__item__info">
                <div className="title">
                    {overallData?.orders}
                </div>
                <span>
                    Orders
                </span>
            </div>
        </li>
        <li className='overall-list__item'>
            <div className="overall-list__item__icon">
                {icons[1]}
            </div>
            <div className="overall-list__item__info">
                <div className="title">
                    {overallData?.customers}
                </div>
                <span>
                    Customers
                </span>
            </div>
        </li>
        <li className='overall-list__item'>
            <div className="overall-list__item__icon">
                {icons[2]}
            </div>
            <div className="overall-list__item__info">
                <div className="title">
                    {overallData?.products}
                </div>
                <span>
                    Products
                </span>
            </div>
        </li>
        <li className='overall-list__item'>
            <div className="overall-list__item__icon">
                {icons[3]}
            </div>
            <div className="overall-list__item__info">
                <div className="title">
                    ${overallData?.revenue}
                </div>
                <span>
                    Revenue
                </span>
            </div>
        </li>
    </ul>
  )
}

export default OverallList