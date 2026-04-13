'use client'
import { useEffect, useState } from "react";
import Link from "next/link";

const Page = () => { // কম্পোনেন্টের নাম Capital দিয়ে শুরু করা ভালো
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('/friends.json')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, []);

    return (
        <div className="bg-slate-50 p-10 font-sans min-h-screen">
            {/* Header Section */}
            <div className="text-center mb-10">
                <h1 className="text-4xl font-extrabold text-[#1a2b3c] mb-4">
                    Friends to keep close in your life
                </h1>
                <p className="text-gray-500 text-sm max-w-md mx-auto mb-6">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                </p>
                <button className="btn bg-[#1e3d33] hover:bg-[#162e26] text-white border-none px-6">
                    + Add a Friend
                </button>
            </div>

            {/* Stats Cards */}
            <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white shadow-sm border border-gray-100 rounded-lg p-8 w-64 text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-1">{users.length}</h2>
                    <p className="text-gray-400 text-sm">Total Friends</p>
                </div>
                {/* ... বাকি স্ট্যাটাস কার্ডগুলো আগের মতোই থাকবে ... */}
            </div>

            {/* Friends Cards Grid */}
            <div className="flex flex-wrap gap-6 mt-10 justify-center">
                {users.map(user => (
                    // Link-টি map এর ভেতরে থাকবে যেন প্রতিজন ইউজারের জন্য আলাদা আইডি পায়
                    <Link href={`/home/${user.id}`} key={user.id}>
                        <div className="card w-72 bg-white shadow-xl border border-gray-100 p-8 rounded-2xl flex flex-col items-center cursor-pointer hover:scale-105 transition">
                            
                            {/* Avatar Image */}
                            <div className="avatar mb-4">
                                <div className="w-24 rounded-full overflow-hidden">
                                    <img src={user.picture} alt={user.name} />
                                </div>
                            </div>

                            {/* Name and Time */}
                            <div className="text-center">
                                <h2 className="text-2xl font-bold text-slate-800">
                                    {user.name}
                                </h2>
                                <p className="text-slate-400 text-sm mt-1 mb-4">
                                    {user.days_since_contact}d ago
                                </p>
                            </div>

                            {/* Badges Section */}
                            <div className="flex flex-col items-center gap-2">
                                {user.tags?.map((tag, i) => (
                                    <div key={i} className="badge bg-[#D1FAE5] text-[#065F46] border-none font-medium px-4 py-3">
                                        {tag.toUpperCase()}
                                    </div>
                                ))}

                                <div className={`badge text-white border-none font-medium px-6 py-4 rounded-full ${
                                    user.status === "overdue" ? "bg-red-500" : 
                                    user.status === "on track" ? "bg-green-500" : "bg-yellow-500"
                                }`}>
                                    {user.status}
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Page;
