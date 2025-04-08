import React from 'react';
import { Link, useLocation } from 'react-router';

const Header = () => {
    const location = useLocation();
    const current = location.pathname; // Corrected variable name

    // Button styling
    const getButtonStyle = (path) => {
        return current === path 
        ? 'bg-green-400 opacity-50 cursor-not-allowed'  : 'bg-blue-900 hover:bg-blue-700 cursor-pointer';
    };

    // This is where the header title will change based on which page you are on
    const getTitle = () => {
        switch (current) {
            case '/Artist':
                return 'Artist';
            case '/Painting':
                return 'Painting';
            case '/Gallery':
                return 'Gallery';
            case '/Genre':
                return 'Genre';
            case '/Favorites':
                return 'Your Favorites';
        }
    };

    // This is the navigation button that will either be disabled (if you are on that page) while the other 
    // navigation buttons are enabled
    const navButton = (label, path) => {
        const isCurrent = current === path;
        return isCurrent ? (
            <button
                className={`text-white mx-2 p-2 px-4 rounded-xl ${getButtonStyle(path)}`}
                disabled
            >
                {label}
            </button>
        ) : (
            <Link to={path}>
                <button className={`text-white mx-2 p-2 px-4 rounded-xl ${getButtonStyle(path)}`}>
                    {label}
                </button>
            </Link>
        );
    };

    return (
        <div>
            <header className="fixed top-0 left-0 w-full shadow-sm z-10 bg-blue-500 text-white">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight mb-5">Art Dashboard Project {getTitle()} View</h1>
                    {navButton('Artists', '/Artist')}
                    {navButton('Paintings', '/Painting')}
                    {navButton('Galleries', '/Gallery')}
                    {navButton('Genres', '/Genre')}
                    {navButton('Favorites', '/Favorites')}
                </div>
            </header>
        </div>
    );
};

export default Header;