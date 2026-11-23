import React from 'react'
import { LineChart,Line,XAxis,YAxis,CartesianGrid,Tooltip,ResponsiveContainer,Area ,ComposedChart} from 'recharts'
import './card.css'

const MonthlyChartExpense = ({data}) => {
  return (
   // <div>MonthlyChartExpense</div>
   <div className='monthchart'><h4><i class="fa-solid fa-chart-line">  </i>   Expense by Month</h4>
   <ResponsiveContainer width={500} height={300} >
   <ComposedChart data={data}>
   <CartesianGrid vertical={false} horizontal={false}/>
   <XAxis dataKey="month" interval={0} angle={-20} stroke='#333' tick={{
    fontSize:12,
    fontWeight:600,
    fontFamily:"inherit"
   }
  }/>
   <YAxis stroke='#333' tick={{ fill:"#333", fontFamily:"Arial",fontSize:13,fontWeight:600}}/>
   <Tooltip/>
   <Area 
   type="monotone" dataKey="amount" stroke="none" fill="#3155E7" fillOpacity={0.12}
   />

   <Line type="monotone" dataKey="amount" stroke='#3155E7' strokeWidth={2}/>
</ComposedChart>
   </ResponsiveContainer></div>
  )
}

export default MonthlyChartExpense