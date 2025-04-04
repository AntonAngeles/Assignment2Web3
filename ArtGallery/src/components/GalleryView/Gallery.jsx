// This is the Gallery View component
import { useState } from "react"
import Header from "../Header"

const Gallery = () => {

    return (
        <div>
            <Header />
            <main className="pt-40 h-screen">
                <div className="container mx-auto h-full w-full px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full w-full">
                    <div className="bg-blue-500 p-4 text-white rounded-lg h-full flex flex-col">
                        <h2 className="text-lg font-bold">Select Gallery</h2>
                        <p>gallery names</p>
                    </div>

                    <div className="bg-blue-500 p-4 text-white rounded-lg">
                        <h2 className="text-lg font-bold">Gallery Info</h2>
                        <p>gallery info</p>
                        <button className="bg-white p-4 text-white rounded-lg">Add Favorites</button>
                    </div>

                    <div className="bg-blue-500 p-4 text-white rounded-lg">
                        <h2 className="text-lg font-bold">Paintings in Gallery</h2>
                        <button className="bg-white p-2 text-white rounded-lg">artist</button>
                        <button className="bg-white p-2 text-white rounded-lg">painting title</button>
                        <button className="bg-white p-2 text-white rounded-lg">year</button>
                        <p>paintings</p>
                    </div>
                </div>
                </div>
            </main>
        </div>
    )
}

export default Gallery