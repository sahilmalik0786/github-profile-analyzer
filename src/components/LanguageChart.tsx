import { Card, CardHeader, CardTitle, CardContent } from './ui/card'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts'


interface LanguageChartProps {
  data: Record<string, number>
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D']

export default function LanguageChart({ data }: LanguageChartProps) {
 
  const chartData = Object.entries(data).map(([name, value]) => ({ name, value }))

  return (
    <Card>
      <CardHeader>
        <CardTitle>Language Distribution</CardTitle>
      </CardHeader>
      <CardContent className="h-96">
        {chartData.length > 0 ? (
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {/* we are maaping on chartData for only getting the indexes for cell keys to filling the color */}
                
                {chartData.map((entry, index) => (
                    
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                 
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  borderColor: '#000',
                  borderRadius: '0.9rem',
                }}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        ) : (
          <div className="flex h-full items-center justify-center text-muted-foreground">
            No language data available
          </div>
        )}
      </CardContent>
    </Card>
  )
}
