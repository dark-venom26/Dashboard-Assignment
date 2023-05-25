import Box from '../components/box/Box';
import DashboardWrapper, { DashboardWrapperMain, DashboardWrapperRight } from '../components/dashboard-wrapper/DashboardWrapper';
import SummaryBox, { SummaryBoxSpecial } from '../components/summary-box/SummaryBox';
import { colors, data } from '../constants';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar, getElementAtEvent } from 'react-chartjs-2';
import OverallList from '../components/overall-list/OverallList';
import RevenueList from '../components/revenue-list/RevenueList';
import { revenueByMonths } from '../mockData';
import { useState } from 'react';
import { useRef } from 'react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);


function Dashboard() {

  const [filterData, setFilterData] = useState(revenueByMonths.data[0])

  return (
    <DashboardWrapper>
      <DashboardWrapperMain>
        <div className="row">
          <div className="col-8 col-md-12">
            <div className="row">
              {
                data.summary.map((item, index) => (
                  <div key={`summary-${index}`} className="col-6 col-md-6 col-sm-12 mb">
                    <SummaryBox item={item}/>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="col-4 hide-md">
            <SummaryBoxSpecial item={data.revenueSummary} />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Box>
              <RevenueByMonthsChart setFilterData={setFilterData}/>
            </Box>
          </div>
        </div>
      </DashboardWrapperMain>
      <DashboardWrapperRight>
        <div className="title mb">Monthly Overall</div>
        <div className="mb">
          <OverallList overallData={filterData?.overallData}/>
        </div>
        <div className="title mb">Revenue by channel</div>
        <div className="mb">
          <RevenueList revenueByChannel={filterData?.revenueByChannel}/>
        </div>
        
      </DashboardWrapperRight>
    </DashboardWrapper>
  )
}

export default Dashboard

const RevenueByMonthsChart = ({setFilterData}) => {

  const printElementAtEvent = (element) => {
    if (!element.length) return;

    const { index } = element[0];

    return index
  };


  const chartRef = useRef();

  const handleBarClick = (e) => {
    const chart = chartRef.current;

    if (!chart) {
      return;
    }
    const index = printElementAtEvent(getElementAtEvent(chart, e));

    if (!index){
      return;
    }

    setFilterData(revenueByMonths.data[index])
  }


  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: {
        grid: {
          display: false,
          drawBorder: false
        }
      },
      yAxes: {
        grid: {
          display: false,
          drawBorder: false
        }
      }
    },
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: false
      }
    },
    elements: {
      bar: {
        backgroundColor: colors.brown,
        borderRadius: 20,
        borderSkipped: 'bottom'
      }
    }
  }

  const monthRevenue = {
    "months": [],
    "revenues": []
  };
  
  revenueByMonths.data.map((data)=>{
    monthRevenue.months.push(data.month)
    monthRevenue.revenues.push(data.overallData.revenue)
  })

  const chartData = {
    labels: monthRevenue.months,
    datasets: [
      {
        label: 'Revenue',
        data: monthRevenue.revenues
      }
    ]
  }

  return (
    <>
      <div className="title mb">
        Revenue by months
      </div>
      <div>
        <Bar ref={chartRef} onClick= {handleBarClick} options={chartOptions} data={chartData} width={`300px`}/>
      </div>
    </>
  )
}