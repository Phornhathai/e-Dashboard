import { Legend, RadialBar, RadialBarChart, ResponsiveContainer } from 'recharts'
import "./customerchart.scss"

const data = [
    {
      name: '18-29',
      uv: 31.47,
      pv: 24,
      fill: '#8884d8',
    },
    {
      name: '30-39',
      uv: 15.69,
      pv: 39,
      fill: '#8dd1e1',
    },

    {
      name: '40-49',
      uv: 8.63,
      pv: 13,
      fill: '#a4de6c',
    },
    {
      name: '50+',
      uv: 2.63,
      pv: 8,
      fill: '#d0ed57',
    },

  ];
  
  const style = {
    top: '50%',
    right: 0,
    transform: 'translate(0, -50%)',
    lineHeight: '24px',
  };
  
const CustomerChart = () => {
    return (
        <div className="customerchart">
            <h2>New Customer</h2>
            <div className="chart">
                <ResponsiveContainer width="100%">
                    <RadialBarChart cx={100} innerRadius="20%" outerRadius="80%" barSize={10} data={data}>
                        <RadialBar
                            background
                            dataKey="uv"
                        />
                        <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
                    </RadialBarChart>
                </ResponsiveContainer>
            </div>
            <div className="options">
                {data.map((item=>(
                    <div className="option" key={item.name}>
                        <div className="age">
                            <div className="dot" style={{backgroundColor : item.fill}}></div>
                            <span>{item.name}</span>
                        </div>
                        <span>{item.pv}</span>
                    </div>
                )))}
            </div>
        </div>
    )
}

export default CustomerChart