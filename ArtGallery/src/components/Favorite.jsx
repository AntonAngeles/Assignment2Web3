// This will be the favorites page
import { useState } from "react"

const Favorites = (props) => {
    return(
        <div className="h-screen w-full">
            <div className="h-3/4 w-3/4 mx-75 px-4 flex flex-col bg-white ">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold">Favorites</h2>
                        <div className="space-x-2">
                            <button className="px-4 py-2 bg-gray-200 rounded border border-gray-300">Empty Favorites</button>
                            <button className="px-4 py-2 bg-gray-200 rounded border border-gray-300">Close</button>
                        </div>
                    </div>

                <div className="grid grid-cols-3 gap-4 flex-grow">
                    <div>
                        <h2 className="text-lg font-semibold mb-2">galleries</h2>
                        <div className="border p-4 h-full">
                            {props.galleries.map(g => 
                                <p>{g.name}</p>
                            )}
                        </div>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold mb-2">artists</h2>
                        <div className="border p-4 h-full">
                            {props.artists.map(a => 
                                <p>{a.firstName} {a.lastName}</p>
                            )}
                        </div>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold mb-2">paintings</h2>
                        <div className="border p-4 h-full">
                            <p>Painting titles</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Favorites