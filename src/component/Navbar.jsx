'use client';


import Link from 'next/link';
const Navbar = () => {
    const links = <>
    <li><Link href="/home">HOME</Link></li>
    </>
    return (
        <nav className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between sticky top-0 z-50">
      
      
      <div className="flex items-center">
        <Link href="/" className="text-xl font-extrabold tracking-tight text-gray-900 group">
          <span className="text-slate-800">Keen</span>
          <span className="text-emerald-600">Keeper</span>
        </Link>
      </div>

      
      <div className="flex items-center gap-2">
        <ul className="flex items-center gap-1 bg-gray-50 p-1 rounded-xl border border-gray-100">
         {links}
        </ul>
      </div>

    </nav>
    );
};

export default Navbar;