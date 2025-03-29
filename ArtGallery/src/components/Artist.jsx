// This is the Artist View component
import { useState } from "react"
import Header from "./Header"

const Artist = () => {

    return (
        <div>
            <Header />
            <main className="pt-35 h-screen">
                <div className="container mx-auto h-full w-full px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full w-full">
                    <div className="bg-blue-500 p-4 text-white rounded-lg h-full flex flex-col">
                        <h2 className="text-lg font-bold">Select Artist</h2>
                        <p>artist names</p>
                    </div>

                    <div className="bg-blue-500 p-4 text-white rounded-lg">
                        <h2 className="text-lg font-bold">artist Info</h2>
                        <p>artist info</p>
                        <button className="bg-white p-4 text-black rounded-lg">Add Favorites</button>
                        <div>artist image</div>
                    </div>

                    <div className="bg-blue-500 p-4 text-white rounded-lg">
                        <h2 className="text-lg font-bold">Artist Painting</h2>
                        <button className="bg-white p-2 text-black rounded-lg">painting title</button>
                        <button className="bg-white p-2 text-black rounded-lg">year</button>
                        <p>paintings</p>
                    </div>
                </div>
                </div>
            </main>
        </div>
    )
}

export default Artist