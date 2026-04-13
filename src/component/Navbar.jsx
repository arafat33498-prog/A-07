'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathname = usePathname();

    const getLinkClass = (path) => {
        const baseClass = "flex items-center gap-2 px-4 py-2 rounded-lg transition-all text-sm font-medium";
        
        // যদি ওই পেজটি অ্যাক্টিভ থাকে (যেমন স্ক্রিনশটে Home দেখাচ্ছে)
        if (pathname === path) {
            return `${baseClass} bg-[#2D4F3F] text-white`; // ফিগমার গাঢ় সবুজ রঙ
        }
        
        // ইন-অ্যাক্টিভ লিংকগুলোর জন্য
        return `${baseClass} text-slate-500 hover:bg-gray-100`;
    };

    return (
        <nav className="bg-white border-b border-gray-100 px-10 py-4 flex items-center justify-between sticky top-0 z-50">
            
            {/* Logo Section */}
            <div className="flex items-center">
                <Link href="/" className="text-2xl font-bold tracking-tight">
                    <span className="text-slate-800 font-extrabold">Keen</span>
                    <span className="text-[#2D4F3F]">Keeper</span>
                </Link>
            </div>

            {/* Navigation Links */}
            <div className="flex items-center">
                <ul className="flex items-center gap-2">
                    <li>
                        <Link href="/home" className={getLinkClass('/home')}>
                            <Image 
                                src="/home.png" 
                                alt="Home" 
                                width={18} height={18} 
                                className={pathname === '/home' ? 'brightness-0 invert' : ''} 
                            />
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/timeline" className={getLinkClass('/timeline')}>
                            <Image 
                                src="/time.png" 
                                alt="Timeline" 
                                width={18} height={18} 
                                className={pathname === '/timeline' ? 'brightness-0 invert' : ''}
                            />
                            Timeline
                        </Link>
                    </li>
                    <li>
                        <Link href="/stats" className={getLinkClass('/stats')}>
                            <Image 
                                src="/status.png" 
                                alt="Stats" 
                                width={18} height={18} 
                                className={pathname === '/stats' ? 'brightness-0 invert' : ''}
                            />
                            Stats
                        </Link>
                    </li>
                </ul>
            </div>

        </nav>
    );
};

export default Navbar;