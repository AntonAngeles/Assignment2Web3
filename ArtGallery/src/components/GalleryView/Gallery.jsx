// This is the Gallery View component
import { useEffect, useState } from "react"
import Header from "../Header"
import GalleryListItems from "./GalleryListItem.jsx"
import GalleryInfo from "./GalleryInfo.jsx"

const Gallery = () => {

    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [galleryInfo, setGalleryInfo] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = import.meta.env.VITE_URL + "/galleries"
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

    const displayGalleryInfo = (id) => {
        const galleryToDisplay = data.find((g) => g.galleryId === id)

        setGalleryInfo(galleryToDisplay)
    }

    return (
        <div>
            <Header />
            <main className="pt-40 min-h-screen">
                <div className="container mx-auto h-full w-full px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full w-full">
                        <div className="bg-blue-500 p-4 text-white rounded-lg h-full flex flex-col max-h-175">
                            <h2 className="text-lg font-bold">Select Gallery</h2>
                            <div className="overflow-y-auto">
                                {data.map(g => <GalleryListItems
                                    key={g.galleryId}
                                    id={g.galleryId}
                                    galleryName={g.galleryName}
                                    display={displayGalleryInfo}
                                />)}
                            </div>
                        </div>

                        <div className="bg-blue-500 p-4 text-white rounded-lg">
                            <h2 className="text-lg font-bold">Gallery Info</h2>
                            <GalleryInfo 
                                data = {galleryInfo}
                            />
                        </div>

                        <div className="bg-blue-500 p-4 text-white rounded-lg">
                            <h2 className="text-lg font-bold">Paintings in Gallery</h2>
                            <button className="bg-white p-2 text-black rounded-lg">artist</button>
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

export default Gallery