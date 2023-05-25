import Box from '../box/Box';
import './summary-box.scss';
import { buildStyles, CircularProgressbarWithChildren } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import { InView } from 'react-intersection-observer';
import { colors } from '../../constants';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

function SummaryBox({item}) {

  return (
    <Box>
        <div className='summary-box'>
            <div className="summary-box__info">
                <div className="summary-box__info__title">
                    <div>{item.title}</div>
                    <span>{item.subtitle}</span>
                </div>
                <div className="summary-box__info__value">
                    {item.value}
                </div>
            </div>
            <div className="summary-box__chart">
                <InView>
                    {({ inView, ref }) =>{
                    
                    let percentage = inView ? item.percent : 0;
                    
                    return (
                        <div ref={ref}>
                            <CircularProgressbarWithChildren value={percentage} strokeWidth={10} styles={
                                buildStyles({
                                    pathColor: percentage < 50 ? colors.red : colors.purple,
                                    trailColor: 'transparent',
                                    strokeLinecap: 'round'
                                })
                            }>
                                <div className="summary-box__chart__value">{percentage}%</div>
                            </CircularProgressbarWithChildren>
                        </div>
                    );
                    }}
                </InView>
            </div>
        </div>
    </Box>
  )
}

export default SummaryBox

export const SummaryBoxSpecial = ({item}) => {
    
    const chartOptions = {
        responsive: true,
        scales: {
            xAxis: {
                display: false
            },
            yAxis: {
                display: false
            },
        },
        plugins: {
            legend: {
                display: false
            }
        },
        elements: {
            point: {
                radius: 0
            }
        }
    }

    const chartData = {
        labels: item.chartData.labels,
        datasets: [
            {
                label: 'Revenue',
                data: item.chartData.data,
                borderColor: '#fff',
                tension: 0.5
            }
        ]
    }

    return (
        <Box purple fullheight>
            <div className="summary-box-special">
                <div className="summary-box-special__title">
                    {item.title}
                </div>
                <div className="summary-box-special__value">
                    {item.value}
                </div>
                <div className="summary-box-special__chart">
                    <Line options={chartOptions} data={chartData} width={`170px`} />
                </div>
            </div>
        </Box>
    )
}