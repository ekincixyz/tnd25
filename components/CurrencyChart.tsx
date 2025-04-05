import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area } from 'recharts';
import { Info } from 'lucide-react';

interface DataPoint {
  date: string;
  value: number;
}

const CurrencyChart = () => {
  const [data, setData] = useState<DataPoint[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showInfo, setShowInfo] = useState(false);
  
  useEffect(() => {
    // Example function to fetch data from an API
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // This is a placeholder. You would use your actual API key and endpoint
        // const response = await fetch('https://api.example.com/historical/usd-ars?apikey=YOUR_API_KEY&days=30');
        
        // For demonstration, using mock data based on the image you shared
        const mockData = generateMockData();
        
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500));
        
        setData(mockData);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch currency data');
        setLoading(false);
        console.error('Error fetching data:', err);
      }
    };
    
    fetchData();
  }, []);
  
  // Generate sample data matching the trend in the screenshot
  const generateMockData = (): DataPoint[] => {
    const today = new Date();
    const mockData: DataPoint[] = [];
    
    // These are approximate values based on your screenshot, showing the upward trend
    const baseValues = [
      1063, 1064, 1065, 1063, 1064, 1065, 1063, 1065, 1064, 1062, 
      1066, 1065, 1063, 1067, 1067, 1068, 1069, 1068, 1069, 1062, 
      1067, 1071, 1072, 1070, 1060, 1068, 1072, 1073, 1072, 1073
    ];
    
    // Generate data points for the last 30 days
    for (let i = 0; i < 30; i++) {
      const date = new Date();
      date.setDate(today.getDate() - (30 - i));
      
      mockData.push({
        date: date.toISOString().slice(0, 10),
        value: baseValues[i]
      });
    }
    
    return mockData;
  };
  
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return `${date.getDate()} ${date.toLocaleString('default', { month: 'short' })}`;
  };
  
  const calculateChangeRate = () => {
    if (data.length < 2) return null;
    
    const oldestRate = data[0].value;
    const newestRate = data[data.length - 1].value;
    const percentChange = ((newestRate - oldestRate) / oldestRate) * 100;
    
    return percentChange.toFixed(2);
  };
  
  if (loading) return <div className="flex items-center justify-center p-8">Loading data...</div>;
  if (error) return <div className="text-red-500 p-4">{error}</div>;
  
  const changeRate = calculateChangeRate();
  const latestValue = data[data.length - 1]?.value.toFixed(4);
  
  return (
    <div className="p-4">
      <div className="mb-4">
        <div className="flex items-center mt-2">
          <span className="text-xl font-bold">USD to ARS</span>
          <span className="ml-4 px-2 py-1 bg-red-100 text-red-800 rounded text-sm">
            ↓ {changeRate}% ARS inflation (30d)
          </span>
        </div>
      </div>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
          >
            {/* Light gray horizontal grid lines */}
            <CartesianGrid horizontal={true} vertical={false} stroke="#e0e0e0" />
            <XAxis 
              dataKey="date" 
              tickFormatter={formatDate}
              tick={{ fontSize: 12 }}
              interval="preserveStartEnd"
            />
            <YAxis 
              domain={[1055, 1080]} 
              tick={{ fontSize: 12 }}
              tickCount={6}
            />
            <Tooltip 
              formatter={(value: number) => [`${value.toFixed(4)} ARS`, 'Exchange Rate']}
              labelFormatter={(label: string) => `Date: ${formatDate(label)}`}
            />
            {/* Area under the line with light green fill */}
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4CAF50" stopOpacity={0.1}/>
                <stop offset="95%" stopColor="#4CAF50" stopOpacity={0.05}/>
              </linearGradient>
            </defs>
            <Area 
              type="linear" 
              dataKey="value" 
              stroke="none" 
              fill="url(#colorValue)" 
              fillOpacity={1} 
            />
            <Line 
              type="linear" 
              dataKey="value" 
              stroke="#4CAF50" 
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 6 }}
              isAnimationActive={true}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CurrencyChart; 