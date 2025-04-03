// This is the Artist View component
import { useEffect, useState } from "react"
import Header from "../Header"
import ArtistListItem from "./ArtistListItem"
import ArtistInfo from "./ArtistInfo"

const Artist = () => {

    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [artInfo, setArtInfo] = useState([])
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = import.meta.env.VITE_URL + "/artists"
                const resp = await fetch(url, {
                    headers: {
                      'APIKEY': import.meta.env.VITE_API_KEY
                    },
                  });
                
                if (!resp.ok) {
                    throw new Error(`HTTP error! status: ${resp.status}`);
                }

                const fetchedData = await resp.json()
                setData(fetchedData)
            } catch(err) {
                setError(err)
            }
            // possibly set loading screen or icon here?
        }
        fetchData()
    }, [])

    if (error) {
        return <p>Error: {error.message}</p>
    }

    const displayArtistInfo = (id) => {
        const artistToDisplay = data.find((a) => a.artistId === id)
        
        setArtInfo(artistToDisplay)
    }


    return (
        <div>
            <Header />
            <main className="pt-35 h-screen">
                <div className="container mx-auto h-full w-full px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full w-full">
                        <div className="bg-blue-500 p-4 text-white rounded-lg h-full flex flex-col">
                            <h2 className="text-lg font-bold">Select Artist</h2>
                            {data.map( a => <ArtistListItem 
                                key = {a.artistId}
                                id = {a.artistId}
                                lastName = {a.lastName}
                                firstName = {a.firstName}
                                display = {displayArtistInfo}
                            />)}
                        </div>

                        <div className="bg-blue-500 p-4 text-white rounded-lg">
                            <h2 className="text-lg font-bold">Artist Info</h2>
                            <ArtistInfo 
                                data = {artInfo}
                            />
                            <button className="bg-white p-4 text-black rounded-lg">Add Favorites</button>   
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