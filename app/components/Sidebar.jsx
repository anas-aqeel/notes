import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AlignJustify, Thermometer, Flame, Atom, Zap, FlaskConical, Activity, Beaker, Lightbulb, BookOpen } from 'lucide-react';

const Sidebar = ({ sidebarOpen, toggleSidebar }) => {
    let pathname = usePathname()

    const sidebarClass = `sidebar fixed left-0 top-0 h-full bg-[#11101d] z-[99] px-3.5 py-1.5 transition-all duration-500 ease-in-out ${sidebarOpen ? 'w-[250px]' : 'w-20'}`;

    const links = [
        { href: '/', text: 'Lecture 1: Heat', icon: Thermometer, tooltip: 'Introduction to Heat' },
        { href: '/lecture-2', text: 'Lecture 2: Thermodynamics', icon: Flame, tooltip: 'Basics of Thermodynamics' },
        { href: '/lecture-3', text: 'Lecture 3: Gas Laws', icon: FlaskConical, tooltip: 'Gas Laws and Their Applications' },
        { href: '/lecture-4', text: 'Lecture 4: Kinetic Theory', icon: Atom, tooltip: 'Kinetic Theory of Gases' },
        { href: '/lecture-5', text: 'Lecture 5: Energy', icon: Zap, tooltip: 'Energy in Thermodynamics' },
        { href: '/lecture-6', text: 'Lecture 6: Advanced Thermodynamics', icon: Activity, tooltip: 'Advanced Concepts in Thermodynamics' },
        { href: '/lecture-7', text: 'Lecture 7: Processes & Heat Capacity', icon: Beaker, tooltip: 'Thermodynamic Processes and Heat Capacity' },
        { href: '/lecture-8', text: 'Lecture 8: Advanced Concepts', icon: Lightbulb, tooltip: 'Advanced Thermodynamics Concepts' },
        { href: '/chapter-1-summary', text: 'Chapter 1 Summary', icon: BookOpen, tooltip: 'Summary of Chapter 1' },
    ];

    return (
        <div className={sidebarClass}>
            <div className="logo-details h-16 flex items-center relative">
                <div className={`logo_name text-green-400 text-[20px] font-semibold ${sidebarOpen ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
                    Physics
                </div>
                <AlignJustify
                    className="bx bx-menu absolute top-1/2 right-3 transform -translate-y-1/2 text-[23px] text-center cursor-pointer transition-all duration-500 ease-in-out text-white"
                    onClick={toggleSidebar}
                />
            </div>
            <ul className="nav-list mt-5 h-full">
                {links.map((link, index) => (
                    <li key={index} className="relative my-2">
                        <Link href={link.href} passHref className={`relative flex h-full py-2.5 w-full rounded-[12px] items-center transition-all duration-400 ease-in-out bg-[#11101d] group hover:bg-white ${pathname == link.href ? 'active-route' : ''}`}>
                            <link.icon
                                className={`absolute -left-0.5 text-[12px] text-white group-hover:text-[#11101d] ml-4`}
                            />
                            <span className={`links_name ml-14 text-white group-hover:text-[#11101d] text-[15px] font-normal whitespace-nowrap truncate ${sidebarOpen ? 'opacity-100' : 'opacity-0'} pointer-events-none transition-opacity duration-500`}>
                                {link.text}
                            </span>
                        </Link>
                        {!sidebarOpen && (
                            <span className="tooltip absolute top-[-20px] left-[calc(100%_+_15px)] z-10 bg-white shadow-md shadow-[rgba(0,_0,_0,_0.3)] px-3 py-1.5 rounded-[4px] text-[15px] font-normal opacity-0 whitespace-nowrap pointer-events-none group-hover:opacity-100 transition-opacity duration-300">
                                {link.tooltip}
                            </span>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;