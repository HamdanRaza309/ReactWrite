import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-gradient-to-r from-[#0f0f0f] via-[#1c1c1e] to-[#121212] text-gray-300 py-12 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
                {/* Logo & Tagline */}
                <div>
                    <h1 className="text-2xl font-bold text-white mb-3">BlogSphere</h1>
                    <p className="text-sm">
                        Where ideas meet expression. Share your thoughts, explore others.
                    </p>
                </div>

                {/* About Section */}
                <div>
                    <h2 className="text-white font-semibold text-lg mb-4">About</h2>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-white">Our Mission</a></li>
                        <li><a href="#" className="hover:text-white">Team</a></li>
                        <li><a href="#" className="hover:text-white">Careers</a></li>
                    </ul>
                </div>

                {/* Categories */}
                <div>
                    <h2 className="text-white font-semibold text-lg mb-4">Categories</h2>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-white">Tech</a></li>
                        <li><a href="#" className="hover:text-white">Lifestyle</a></li>
                        <li><a href="#" className="hover:text-white">Travel</a></li>
                        <li><a href="#" className="hover:text-white">Food</a></li>
                    </ul>
                </div>

                {/* Contact & Social */}
                <div>
                    <h2 className="text-white font-semibold text-lg mb-4">Connect</h2>
                    <p className="text-sm mb-3">contact@blogsphere.com</p>
                    <div className="flex space-x-4">
                        <a href="#"><FaFacebookF className="hover:text-white transition" /></a>
                        <a href="#"><FaTwitter className="hover:text-white transition" /></a>
                        <a href="#"><FaInstagram className="hover:text-white transition" /></a>
                        <a href="#"><FaGithub className="hover:text-white transition" /></a>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="text-center text-xs text-gray-500 mt-10 border-t border-gray-700 pt-4">
                © {new Date().getFullYear()} BlogSphere. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;