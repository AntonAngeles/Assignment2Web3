// This is the Painting View component
import { useState } from "react"
import Header from "./Header"

const Painting = () => {

    return (
    <div>
    <Header />
    <main className="pt-35 h-screen">
        <div className="h-full w-full px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-full w-full">
            <div className="bg-blue-500 p-4 text-white rounded-lg md:col-span-1 flex flex-col">
                <h2 className="text-lg font-bold">Select Painting</h2>
                
                

            </div>

            <div className="bg-blue-500 p-4 text-white rounded-lg md:col-span-3">
            <h2 className="text-lg font-bold">Artist Painting</h2>
                <button className="bg-white p-2 text-black rounded-lg">artist name</button>
                <button className="bg-white p-2 text-black rounded-lg">painting title</button>
                <button className="bg-white p-2 text-black rounded-lg">gallery name</button>
                <button className="bg-white p-2 text-black rounded-lg">year</button>
                <p>paintings</p>
            </div>
        </div>
        </div>
    </main>
    </div>
    )
}

export default Painting

{/* <h2 className="text-lg font-bold">Painting Filter</h2> */}
                            
{/* This is for the title filter */}
{/* <div className="pt-4 flex items-center space-x-4"> */}
    {/* <label className="block text-sm font-medium text-white">
        Title
    </label>
    <input
        type="radio"
        className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
    />

    
    <div className="mt-2 flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 ">
        <input
            title="title"
            type="text"
            className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 focus:outline-none sm:text-sm/6"
        />
    </div> */}
    


    {/* This is for the artist filter */}
    {/* <div className="pt-4 flex items-center space-x-4">
        <label className="block text-sm font-medium text-white">
            Artist
        </label>
        <input
            type="radio"
            className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
        />

            <div className="mt-2flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 ">
                <select
                    artist="artist"
                    className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 focus:outline-none sm:text-sm/6"
                />
            </div>
        
    </div> */}

    {/* <div className="pt-4 flex items-center space-x-4">
        <label className="block text-sm/6 font-medium text-white">
            Gallery
        </label>
        <input
            type="radio"
            className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
        />

        <div className="mt-2">
            <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 ">
                <select
                    genre="genre"
                    className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 focus:outline-none sm:text-sm/6"
                />
            </div>
        </div>
    </div> */}
// </div>