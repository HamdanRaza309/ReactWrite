import React from 'react';

function Header() {
    return (
        <header className="bg-gradient-to-r from-[#0f0f0f] via-[#1c1c1e] to-[#121212] text-gray-200 shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="text-3xl font-bold text-white tracking-wider hover:text-[#d4a373] transition">
                    BlogSphere
                </div>

                {/* Navigation */}
                <nav className="hidden md:flex space-x-8 text-sm font-medium">
                    {['Home', 'Blogs', 'Write', 'About'].map((link, i) => (
                        <a
                            key={i}
                            href="#"
                            className="hover:text-[#ffd670] transition duration-200"
                        >
                            {link}
                        </a>
                    ))}
                </nav>

                {/* Buttons */}
                <div className="hidden md:flex space-x-4">
                    <button className="bg-transparent border border-gray-400 text-sm px-4 py-1 rounded hover:border-[#ffd670] hover:text-[#ffd670] transition duration-200">
                        Login
                    </button>
                    <button className="bg-[#ffd670] text-black font-semibold text-sm px-4 py-1 rounded hover:bg-[#e9ff70] transition duration-200">
                        Sign Up
                    </button>
                </div>

                {/* Mobile Icon Placeholder */}
                <div className="md:hidden">
                    {/* Add hamburger menu if needed */}
                </div>
            </div>
        </header>
    );
}

export default Header;
