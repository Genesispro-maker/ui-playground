import { ChartData } from "../utils/mockData";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export function Charts(){
   return (
    <>
    <div style={{width: '100%', maxWidth: '700px', height: '70vh', aspectRatio: 1.618 }}>
      <ResponsiveContainer width="100%" height="100%">
      <BarChart data={ChartData}
       margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
       }}
      >
        <CartesianGrid strokeDasharray="3, 3"/>
        <XAxis dataKey="month"/>
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="desktop" fill="#8884d8" radius={[10, 10, 0, 0]}/>
        <Bar dataKey="mobile" fill="#3f1e74ff" radius={[10, 10, 0, 0]}/>
        <Bar dataKey="tablet" fill="#82ca9d" radius={[10, 10, 0, 0]}/>
      </BarChart>
      </ResponsiveContainer>
      </div>
    </>
   )
}
