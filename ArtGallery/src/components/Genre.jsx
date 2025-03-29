// This is the Genre View component
import { useState } from "react"
import Header from "./Header"

const Genre = () => {

    return (
        <div>
            <Header />
            <main className="pt-35 h-screen">
                <div className="h-full w-full px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-4 gap-4 h-full w-full">
                    <div className="bg-blue-500 p-4 text-white rounded-lg md:col-span-1 md:row-span-4 flex flex-col">
                        <h2 className="text-lg font-bold">Select Genre</h2>
                        <p>Genre types</p>
                    </div>

                    <div className="bg-blue-500 p-4 text-white rounded-lg md:col-span-3 md:row-span-1">
                        <h2 className="text-lg font-bold">genre Info</h2>
                        <p>artist info</p>
                    </div>

                    <div className="bg-blue-500 p-4 text-white rounded-lg md:col-span-3 md:row-span-3">
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

export default Genre