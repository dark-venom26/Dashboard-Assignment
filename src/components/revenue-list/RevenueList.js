import ProgressBar from '../progressbar/ProgressBar';
import './revenue-list.scss';

function RevenueList({revenueByChannel}) {
  return (
    <ul className='revenue-list'>
        <li className='revenue-list__item'>
            <div className="revenue-list__item__title">
                Direct
                <span className={
                    `${revenueByChannel?.direct < 50 ? 'txt-success' : 'txt-danger'}`
                }>
                    {revenueByChannel?.direct}%
                </span>
            </div>
            <div>
                <ProgressBar value={revenueByChannel?.direct}/>
            </div>
        </li>
        <li className='revenue-list__item'>
            <div className="revenue-list__item__title">
                External search
                <span className={
                    `${revenueByChannel?.externalSearch < 50 ? 'txt-success' : 'txt-danger'}`
                }>
                    {revenueByChannel?.externalSearch}%
                </span>
            </div>
            <div>
                <ProgressBar value={revenueByChannel?.externalSearch}/>
            </div>
        </li>
        <li className='revenue-list__item'>
            <div className="revenue-list__item__title">
                Referal
                <span className={
                    `${revenueByChannel?.referal < 50 ? 'txt-success' : 'txt-danger'}`
                }>
                    {revenueByChannel?.referal}%
                </span>
            </div>
            <div>
                <ProgressBar value={revenueByChannel?.referal}/>
            </div>
        </li>
        <li className='revenue-list__item'>
            <div className="revenue-list__item__title">
                Social
                <span className={
                    `${revenueByChannel?.social < 50 ? 'txt-success' : 'txt-danger'}`
                }>
                    {revenueByChannel?.social }%
                </span>
            </div>
            <div>
                <ProgressBar value={revenueByChannel?.social}/>
            </div>
        </li>
    </ul>
  )
}

export default RevenueList