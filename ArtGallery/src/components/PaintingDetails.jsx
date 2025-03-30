// This will be the Circuit Details pop-up page
import { useState } from "react"

const PaintingDetails = () => {

    return(
        <main className="h-screen w-full">
            <div className="h-full w-full px-4 flex flex-col">
                <div className="max-w-4xl mx-auto">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-center text-lg font-semibold">
                            Painting Details
                        </h3>
                    </div>

                    <div className="space-x-2"> 
                        <div className="absolute top-0 right-0 flex flex-col space-y-2 p-2">
                            <button className="bg-white px-3 py-1 text-black rounded-lg text-sm">Close</button>
                            <button className="bg-white px-3 py-1 text-black rounded-lg text-sm">Filter</button>
                        </div>
                    </div>
                </div>

                <div className="flex">
                    <div className="w-1/2 border border-blac p-3">
                        <img alt="Painting image" className="w-full h-full object-cover">
                        </img>
                    </div>

                    <div className="w-1/2 pl-3">
                        <h2 className="text-2xl font-bold mb-2">Painting Title</h2>
                        <h3 className="text-xl mb-4">Artist Name</h3>
                        <p>info</p>

                        <h3 className="font-semibold mb-2">Dominant Colours</h3>
                    </div>
                </div>

            </div>
        </main>
    )
}

export default PaintingDetails