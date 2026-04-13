'use client'
import { useEffect, useState } from 'react';

const TimelinePage = () => {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        // localStorage থেকে ডাটা নিয়ে আসা
        const data = JSON.parse(localStorage.getItem('activityTimeline')) || [];
        setHistory(data);
    }, []);

    return (
        <div className="bg-slate-50 min-h-screen p-6 font-sans">
            <h1 className="text-2xl font-bold text-slate-800 mb-6 text-center">Timeline </h1>
            
            <div className="max-w-2xl mx-auto flex flex-col gap-4">
                {history.length === 0 ? (
                    <p className="text-center text-slate-400 italic">No activity logged yet.</p>
                ) : (
                    history.map((item) => (
                        <div key={item.id} className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 flex items-center gap-4">
                            <div className="text-2xl">🤝</div>
                            <div>
                                <h4 className="text-slate-800 font-bold">
                                    {item.type} <span className="text-slate-500 font-normal">with {item.person}</span>
                                </h4>
                                <p className="text-slate-400 text-xs mt-1">{item.date}</p>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default TimelinePage;