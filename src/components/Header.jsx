import React from 'react';

function Header() {
    return (
        <header className="bg-gradient-to-r from-[#0f0f0f] via-[#1c1c1e] to-[#121212] text-gray-200 shadow-md">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-bold text-white tracking-wide">
                    BlogSphere
                </div>

                {/* Navigation */}
                <nav className="hidden md:flex space-x-8 text-sm font-medium">
                    <a href="#" className="hover:text-white transition">Home</a>
                    <a href="#" className="hover:text-white transition">Blogs</a>
                    <a href="#" className="hover:text-white transition">Write</a>
                    <a href="#" className="hover:text-white transition">About</a>
                </nav>

                {/* Buttons */}
                <div className="hidden md:flex space-x-4">
                    <button className="bg-transparent border border-gray-400 px-4 py-1 rounded hover:border-white hover:text-white transition text-sm">
                        Login
                    </button>
                    <button className="bg-white text-black font-semibold px-4 py-1 rounded hover:bg-gray-300 transition text-sm">
                        Sign Up
                    </button>
                </div>

                {/* Mobile Menu Icon (Optional future enhancement) */}
                <div className="md:hidden">
                    {/* You can add a hamburger icon here later if needed */}
                </div>
            </div>
        </header>
    );
}

export default Header;