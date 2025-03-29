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
            <header className="fixed top-0 left-0 w-full bg-gray-800 shadow-sm z-10">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    {/* Header will have to change names depending on which page we're in */}
                    <h1 className="text-3xl font-bold tracking-tight text-white mb-5">Art Dashboard Project Gallery View</h1>
                        <a href='./Artist'>
                            <button className='text-white'>Artists</button>
                        </a>
                        <a href='./Painting'>
                            <button className='text-white'>Paintings</button>
                        </a>
                        <a href='./Gallery'>
                            <button className='text-white'>Galleries</button>
                        </a>
                        <a href='./Genre'>
                            <button className='text-white'>Genres</button>
                        </a>                        
                        <a href='./Favorites'>
                            <button className='text-white'>Favorites</button>
                        </a>                       
                        <a>
                            <button className='text-white'>About</button>
                        </a>
                </div>
            </header>
        </div>
    )
}

export default Header