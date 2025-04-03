import React from 'react';
import { Link } from 'react-router';

const Header = () => {
    return (
        <div>
            <header className="fixed top-0 left-0 w-full shadow-sm z-10 bg-blue-500 text-white">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    {/* Header will have to change names depending on which page we're in */}
                    <h1 className="text-3xl font-bold tracking-tight  mb-5">Art Dashboard Project Gallery View</h1>
                        <a href='./Artist'>
                            <button className='text-white mr-2 p-2 px-4 rounded-xl  bg-blue-900'>Artists</button>
                        </a>
                        <a href='./Painting'>
                            <button className='text-white mx-2 p-2 px-4 rounded-xl  bg-blue-900'>Paintings</button>
                        </a>
                        <a href='./Gallery'>
                            <button className='text-white mx-2 p-2 px-4 rounded-xl  bg-blue-900'>Galleries</button>
                        </a>
                        <a href='./Genre'>
                            <button className='text-white mx-2 p-2 px-4 rounded-xl  bg-blue-900'>Genres</button>
                        </a>                        
                        <a href='./Favorites'>
                            <button className='text-white mx-2 p-2 px-4 rounded-xl  bg-blue-900'>Favorites</button>
                        </a>                       
                        <a>
                            <button className='text-white mx-2 p-2 px-4 rounded-xl  bg-blue-900'>About</button>
                        </a>
                </div>
            </header>
        </div>
    )
}

export default Header