import React from 'react';
import { Link } from 'react-router';

const Header = () => {
    return (
        // <header>
        //     <h1>Art Dashboard Project Gallery View</h1>
        //     <button>Artists</button>
        //     <button>Paintings</button>
        //     <button>Galleries</button>
        //     <button>Genres</button>
        //     <button>Favorites</button>
        //     <button>About</button>
        // </header>

        <div>
            <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-10">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    {/* Header will have to change names depending on which page we're in */}
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Art Dashboard Project Gallery View</h1>
                        <a href='./Artist'>
                            <button>Artists</button>
                        </a>
                        <a href='./Painting'>
                            <button>Paintings</button>
                        </a>
                        <a href='./Gallery'>
                            <button>Galleries</button>
                        </a>
                        <a href='./Genre'>
                            <button>Genres</button>
                        </a>                        
                        <a href='./Favorites'>
                            <button>Favorites</button>
                        </a>                       
                        <a>
                            <button>About</button>
                        </a>
                </div>
            </header>
        </div>
    )
}

export default Header