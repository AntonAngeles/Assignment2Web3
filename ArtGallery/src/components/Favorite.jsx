// // This will be the favorites page
import { useState } from "react"

const Favorites = (props) => {
    // Local state for galleries, artists, and paintings
    const [galleries, setGalleries] = useState(props.galleries)
    const [artists, setArtists] = useState(props.artists)
    const [paintings, setPaintings] = useState(props.paintings)

    // This will handle emptying the favorites buttons
    const handleEmptyFavorites = () => {
        setGalleries([])
        setArtists([])
        setPaintings([])
    }

    // This will handle emptying each individual category when you click their own empty button
    const handleEmptyGalleries = () => {
        setGalleries([])
    }

    const handleEmptyArtists = () => {
        setArtists([])
    }

    const handleEmptyPaintings = () => {
        setPaintings([])
    }

    return(
        <div className="h-screen w-full flex justify-center items-center">
        <div className="h-3/4 w-3/4 px-4 py-4 flex flex-col bg-white overflow-auto">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Favorites</h2>
                <div className="space-x-2">
                    <button 
                        onClick={handleEmptyFavorites}
                        className="px-4 py-2 bg-gray-200 rounded border border-gray-300"
                    >
                        Empty Favorites
                    </button>
                    <button className="px-4 py-2 bg-gray-200 rounded border border-gray-300">
                        Close
                    </button>
                </div>
            </div>
    
            <div className="grid grid-cols-3 gap-4 flex-grow overflow-auto">
                <div className="flex flex-col">
                    <h2 className="text-lg font-semibold mb-2">Galleries</h2>
                    <div className="border p-4 flex-grow overflow-auto">
                    {galleries.length > 0 ? ( //If the list contains information, dispay the information. If non, display message
                                galleries.map((g) => (
                                    <div key={g.id}>
                                        <p>{g.name}</p>
                                    </div>
                                ))
                            ) : (
                                <p>No Galleries in favorites.</p>
                            )}
                    </div>
                    <button 
                        onClick={handleEmptyGalleries}
                        className="px-4 py-2 mt-2 bg-gray-200 rounded border border-gray-300"
                    >
                        Empty Galleries
                    </button>
                </div>
                <div className="flex flex-col">
                    <h2 className="text-lg font-semibold mb-2">Artists</h2>
                    <div className="border p-4 flex-grow overflow-auto">
                        {artists.length > 0 ? ( //If the list contains information, dispay the information. If non, display message
                                artists.map((g) => (
                                    <div key={g.id}>
                                        <p>{g.name}</p>
                                    </div>
                                ))
                            ) : (
                                <p>No Artists in favorites.</p>
                            )}
                    </div>
                    <button 
                        onClick={handleEmptyArtists}
                        className="px-4 py-2 mt-2 bg-gray-200 rounded border border-gray-300"
                    >
                        Empty Artists
                    </button>
                </div>
                <div className="flex flex-col">
                    <h2 className="text-lg font-semibold mb-2">Paintings</h2>
                    <div className="border p-4 flex-grow overflow-auto">
                        {paintings.length > 0 ? ( //If the list contains information, dispay the information. If non, display message
                                paintings.map((g) => (
                                    <div key={g.id}>
                                        <p>{g.name}</p>
                                    </div>
                                ))
                            ) : (
                                <p>No Paintings in favorites.</p>
                        )}
                    </div>
                    <button 
                        onClick={handleEmptyPaintings}
                        className="px-4 py-2 mt-2 bg-gray-200 rounded border border-gray-300"
                    >
                        Empty Paintings
                    </button>
                </div>
            </div>
        </div>
    </div>
    
    )
}

export default Favorites