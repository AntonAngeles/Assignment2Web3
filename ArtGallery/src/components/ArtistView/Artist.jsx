// This is the Artist View component
import { useEffect, useState } from "react"
import Header from "../Header"
import ArtistListItem from "./ArtistListItem"
import ArtistInfo from "./ArtistInfo"
import ArtistPaint from "./ArtistPaint"

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
            } catch (err) {
                setError(err)
            }
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
            <main className="pt-50 min-h-screen">
                <div className="container mx-auto h-5 w-full px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                        <div className="bg-blue-500 p-4 text-white rounded-lg max-h-175 flex flex-col">
                            <h2 className="text-lg font-bold">Select Artist</h2>
                            <div className="overflow-y-auto">
                                {data.map(a => <ArtistListItem
                                    key={a.artistId}
                                    id={a.artistId}
                                    lastName={a.lastName}
                                    firstName={a.firstName}
                                    display={displayArtistInfo}
                                />)}
                            </div>
                        </div>

                        <div className="bg-blue-500 p-4 text-white rounded-lg max-h-175 flex flex-col">
                            <h2 className="text-lg font-bold">Artist Info</h2>
                            <ArtistInfo
                                data = {artInfo}
                            />
                            <button className="bg-blue-900 hover:bg-blue-700 cursor-pointer p-4 text-white font-bold rounded-lg mt-4">Add Favorites</button>
                        </div>

                        <div className="bg-blue-500 p-4 text-white rounded-lg max-h-175 flex flex-col -mr-6">
                            <h2 className="text-lg font-bold">Artist Painting</h2>
                            <ArtistPaint 
                                data = {artInfo}
                            />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Artist