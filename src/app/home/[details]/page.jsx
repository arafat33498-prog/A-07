
import Image from 'next/image';
export default async function Page({ params }) {
    const { details } = await params;

    const res = await fetch('http://localhost:3000/friends.json');
    const friends = await res.json();


    console.log("URL ID:", details);


    const user = friends.find((f) => f.id == details);

    if (!user) {
        return (
            <div className="p-20 text-center">
                <h1 className="text-red-500 text-2xl font-bold">User Not Found!</h1>
                <p>ID searched: {details}</p>
            </div>
        );
    }

    return (
        <div className="bg-slate-50 p-6 flex flex-col md:flex-row gap-6 font-sans min-h-screen">

            {/* LEFT COLUMN: Profile and Actions */}
            <div className="w-full md:w-80 flex flex-col gap-4">
                {/* Profile Card */}
                <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 flex flex-col items-center text-center">
                    <div className="avatar mb-4">
                        <div className="w-24 rounded-full ring ring-slate-100 ring-offset-base-100 ring-offset-2">
                            <img src={user.picture} alt={user.name} />
                        </div>
                    </div>
                    <h2 className="text-xl font-bold text-slate-800">{user.name}</h2>

                    <div className="flex flex-col gap-1 mt-2">
                        {/* Status Badge */}
                        <span className={`badge text-white text-[10px] h-5 border-none uppercase ${user.status === 'overdue' ? 'bg-red-500' : 'bg-green-500'
                            }`}>
                            {user.status}
                        </span>

                        {/* Tags Mapping */}
                        <div className="flex flex-wrap gap-1 justify-center mt-1">
                            {user.tags?.map((tag, index) => (
                                <span key={index} className="badge bg-green-100 text-green-700 border-none text-[10px] h-5 uppercase">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <p className="italic text-slate-400 text-sm mt-4">"{user.bio}"</p>
                    <p className="text-xs text-slate-400 mt-2">Preferred: {user.email}</p>
                </div>

                {/* Action Buttons */}
                <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                    <button className="w-full flex items-center justify-center gap-2 py-3 border-b border-slate-50 text-slate-600 hover:bg-slate-50 text-sm">
                        <span><Image
                            src="/vector.png"
                            alt="User Profile"
                            width={10}
                            height={10}
                        /></span> Snooze 2 Weeks
                    </button>
                    <button className="w-full flex items-center justify-center gap-2 py-3 border-b border-slate-50 text-slate-600 hover:bg-slate-50 text-sm">
                        <span><Image
                            src="/archive.png"
                            alt="User Profile"
                            width={10}
                            height={10}
                        /></span> Archive
                    </button>
                    <button className="w-full flex items-center justify-center gap-2 py-3 text-red-500 hover:bg-red-50 text-sm">
                        <span><Image
                            src="/delete.png"
                            alt="User Profile"
                            width={10}
                            height={10}
                        /></span> Delete
                    </button>
                </div>
            </div>

            {/* RIGHT COLUMN: Stats and Goals */}
            <div className="flex-1 flex flex-col gap-4">

                {/* Top Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center">
                        <h3 className="text-2xl font-bold text-slate-800">{user.days_since_contact}</h3>
                        <p className="text-xs text-slate-400">Days Since Contact</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center">
                        <h3 className="text-2xl font-bold text-slate-800">{user.goal}</h3>
                        <p className="text-xs text-slate-400">Goal (Days)</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center">
                        <h3 className="text-2xl font-bold text-slate-800">{user.next_due_date}</h3>
                        <p className="text-xs text-slate-400">Next Due</p>
                    </div>
                </div>

                {/* Relationship Goal Card */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex justify-between items-center">
                    <div>
                        <h4 className="text-slate-700 font-semibold mb-2">Relationship Goal</h4>
                        <p className="text-slate-400 text-sm">Connect every <span className="font-bold text-slate-800">{user.goal} days</span></p>
                    </div>
                    <button className="btn btn-sm btn-ghost bg-slate-50 text-slate-500 border border-slate-200 hover:bg-slate-100">Edit</button>
                </div>

                {/* Quick Check-In Card */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex-1">
                    <h4 className="text-slate-700 font-semibold mb-4">Quick Check-In</h4>
                    <div className="grid grid-cols-3 gap-4">
                        <button className="flex flex-col items-center justify-center gap-2 p-6 bg-slate-50 rounded-lg hover:bg-slate-100 border border-slate-100">
                            <span className="text-xl"><Image
                                src="/call.png"
                                alt="User Profile"
                                width={30}
                                height={30}
                            /></span>
                            <span className="text-xs font-medium text-slate-600">Call</span>
                        </button>
                        <button className="flex flex-col items-center justify-center gap-2 p-6 bg-slate-50 rounded-lg hover:bg-slate-100 border border-slate-100">
                            <span className="text-xl"><Image
                                src="/text.png"
                                alt="User Profile"
                                width={30}
                                height={30}
                            /></span>
                            <span className="text-xs font-medium text-slate-600">Text</span>
                        </button>
                        <button className="flex flex-col items-center justify-center gap-2 p-6 bg-slate-50 rounded-lg hover:bg-slate-100 border border-slate-100">
                            <span className="text-xl"><Image
                                src="/video.png"
                                alt="User Profile"
                                width={30}
                                height={30}
                            /></span>
                            <span className="text-xs font-medium text-slate-600">Video</span>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}