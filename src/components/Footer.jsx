import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-gradient-to-r from-[#0f0f0f] via-[#1c1c1e] to-[#121212] text-gray-300 py-12 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
                {/* Logo & Tagline */}
                <div>
                    <h1 className="text-2xl font-bold text-white mb-3 tracking-wide">BlogSphere</h1>
                    <p className="text-sm leading-relaxed">
                        Where ideas meet expression. Share your thoughts, explore others.
                    </p>
                </div>

                {/* About */}
                <div>
                    <h2 className="text-white font-semibold text-lg mb-4 border-b border-[#ffd670] w-fit">About</h2>
                    <ul className="space-y-2 text-sm">
                        {['Our Mission', 'Team', 'Careers'].map((item, i) => (
                            <li key={i}>
                                <a href="#" className="hover:text-[#ffd670] transition">{item}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Categories */}
                <div>
                    <h2 className="text-white font-semibold text-lg mb-4 border-b border-[#ffd670] w-fit">Categories</h2>
                    <ul className="space-y-2 text-sm">
                        {['Tech', 'Lifestyle', 'Travel', 'Food'].map((cat, i) => (
                            <li key={i}>
                                <a href="#" className="hover:text-[#ffd670] transition">{cat}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Connect & Social */}
                <div>
                    <h2 className="text-white font-semibold text-lg mb-4 border-b border-[#ffd670] w-fit">Connect</h2>
                    <p className="text-sm mb-3">📧 contact@blogsphere.com</p>
                    <div className="flex space-x-4 text-xl">
                        <a href="#" className="hover:text-[#ffd670] transition"><FaFacebookF /></a>
                        <a href="#" className="hover:text-[#ffd670] transition"><FaTwitter /></a>
                        <a href="#" className="hover:text-[#ffd670] transition"><FaInstagram /></a>
                        <a href="#" className="hover:text-[#ffd670] transition"><FaGithub /></a>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="text-center text-xs text-gray-500 mt-10 border-t border-gray-700 pt-4">
                © {new Date().getFullYear()} <span className="text-white font-semibold">BlogSphere</span>. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
