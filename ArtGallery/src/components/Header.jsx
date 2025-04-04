import React from 'react';
import { Link, useLocation } from 'react-router';

const Header = () => {
    const location = useLocation();
    const current = location.pathname; // Corrected variable name

    const getButton = (path) => {
        return current === path ? 'bg-green-400' : 'bg-blue-900'; // Using 'current'
    };

    return (
        <div>
            <header className="fixed top-0 left-0 w-full shadow-sm z-10 bg-blue-500 text-white">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight mb-5">Art Dashboard Project</h1>
                    <a href='./Artist'>
                        <button className={`text-white mr-2 p-2 px-4 rounded-xl ${getButton('/Artist')}`}>Artists</button>
                    </a>
                    <a href='./Painting'>
                        <button className={`text-white mx-2 p-2 px-4 rounded-xl ${getButton('/Painting')}`}>Paintings</button>
                    </a>
                    <a href='./Gallery'>
                        <button className={`text-white mx-2 p-2 px-4 rounded-xl ${getButton('/Gallery')}`}>Galleries</button>
                    </a>
                    <a href='./Genre'>
                        <button className={`text-white mx-2 p-2 px-4 rounded-xl ${getButton('/Genre')}`}>Genres</button>
                    </a>
                    <a href='./Favorites'>
                        <button className={`text-white mx-2 p-2 px-4 rounded-xl ${getButton('/Favorites')}`}>Favorites</button>
                    </a>
                    <a>
                        <button className={`text-white mx-2 p-2 px-4 rounded-xl ${getButton('/')}`}>About</button>
                    </a>
                </div>
            </header>
        </div>
    );
};

export default Header;