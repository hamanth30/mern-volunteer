import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-green-500 p-4">
            <div className="flex items-center justify-between">
                <div className="text-white text-lg font-bold">MySite</div>
                <button onClick={toggleNavbar} className="text-white md:hidden">
                    {isOpen ? '✖' : '☰'}
                </button>
                <div className={`md:flex ${isOpen ? 'block' : 'hidden'} absolute md:static bg-gray-800 w-full md:w-auto`}>
                    <Link to="/" className="block text-white px-4 py-2 md:py-0">Home</Link>
                    <Link to="/about" className="block text-white px-4 py-2 md:py-0">About</Link>
                    <Link to="/contact" className="block text-white px-4 py-2 md:py-0">Contact</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;