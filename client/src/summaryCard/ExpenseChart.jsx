import React from 'react'
import {BarChart,Bar,XAxis,YAxis,CartesianGrid,Tooltip,ResponsiveContainer,Cell,LabelList} from 'recharts'
import './card.css'


const ExpenseChart = ({expense}) => {
    const categoryTotal=expense.reduce((acc,item)=>{
        const category=item.category;
        acc[category]=(acc[category]||0)+Number(item.amount);
        return acc;
    },{})

 // obj array creation
 const chartData=Object.entries(categoryTotal).map(([category,amount])=>({
    category,amount
 }))   
 const categoryColors={
    Food:"#F53E0B",
    Travel:"#3B82F6",
    Shopping:"#8B5CF6",
    Bills:"#EAB308",
    Health:"#EF4444",
    Education:"#06B6D4",
    Entertainment:"#EC4899",
    Others:"#14B8A6"

}

const CustomXAxisTick=({x,y,payload})=>{
    const color=categoryColors[payload.value]||"#999";
    return(
        <g transform={`translate(${x},${y+10}) rotate(-20)`} >
            <circle 
            cx={-28}
            cy={0}
            r={4}
            fill={color}
            />
            <text x={-20}
            y={4}
            fill='#111'
            fontSize={13}
            fontFamily='inherit'
            textAnchor='start'
            >
                {payload.value}
            </text>
            </g>
    );
        };
    
    
  return (
    <div className='expensechart'><h4><i class="fa-solid fa-square-poll-vertical"></i>  Expense By Category</h4>
    <ResponsiveContainer width={500} height={300} >
        <BarChart data={chartData} >
            <CartesianGrid vertical={false} horizontal={false}/>
            <XAxis dataKey="category" interval={0}   tick={<CustomXAxisTick/>} axisLine={{stroke:"#333"}} tickLine={{stroke:"#333"}} height={50}/>
            <YAxis domain={[0,'dataMax+500']} stroke='#333'tick={{fill:"#333", fontFamily:"Arial",fontSize:13,fontWeight:600}}/>
            <Tooltip/>
            <Bar dataKey="amount" radius={[6,6,0,0]} barSize={500} >
                <LabelList dataKey="amount" position="top" offset={8}></LabelList>
{chartData.map((entry,index)=>(
    <Cell key={`cell-${index}`}
    fill={categoryColors[entry.category]}/>
))}

            </Bar>

        </BarChart>
    </ResponsiveContainer>
    
    
    </div>
  )
}

export default ExpenseChart