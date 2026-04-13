'use client'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { useEffect, useState } from 'react';

const StatsPage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {

        const timeline = JSON.parse(localStorage.getItem('activityTimeline')) || [];


        const chartStats = [
            { name: 'Text', value: timeline.filter(t => t.type === 'Text').length },
            { name: 'Call', value: timeline.filter(t => t.type === 'Call').length },
            { name: 'Video', value: timeline.filter(t => t.type === 'Video').length },
        ];

        setData(chartStats);

    }, []);

    
    const COLORS = ['#8B5CF6', '#1E3A34', '#22C55E'];

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-8">Friendship Analytics</h1>

            <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 relative">
                <p className="text-slate-500 font-medium mb-4">By Interaction Type</p>

                <div className="h-72 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={data}
                                innerRadius={70} // এটি দিলে পাই চার্টটি ডোনাট হয়ে যাবে
                                outerRadius={90}
                                paddingAngle={5}
                                dataKey="value"
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                {/* Legend: চার্টের নিচের ছোট নামগুলো */}
                <div className="flex justify-center gap-6 mt-6">
                    {data.map((entry, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index] }}></div>
                            <span className="text-sm text-slate-600">{entry.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StatsPage;