import { useState, useEffect } from "react"

const GalleryPaintings = (props) => {

    const [paintings, setPaintings] = useState([])
    const [error, setError] = useState(null)
    const [sortOption, setSortOption] = useState("year")

    useEffect(() => {
        const fetchPaintings = async () => {
            if (props.data && props.data.galleryId) {
                try {
                    const url =
                        import.meta.env.VITE_URL + "/paintings/galleries/" + props.data.galleryId
                    const resp = await fetch(url, {
                        headers: {
                            APIKEY: import.meta.env.VITE_API_KEY,
                        },
                    })

                    if (!resp.ok) {
                        throw new Error(`HTTP error! status: ${resp.status}`)
                    }

                    const fetchedData = await resp.json()
                    setPaintings(fetchedData)
                } catch (err) {
                    setError(err)
                    console.error("Error fetching paintings: ", err)
                }
            } else {
                setPaintings([])
            }
        }
        fetchPaintings()
    }, [props.data])

    const sortedPaintings = [...paintings].sort((a, b) => {
        if (sortOption === "year") {
            return a.yearOfWork - b.yearOfWork
        } else if (sortOption === "title") {
            return a.title.localeCompare(b.title)
        } else if (sortOption === "artist") {
            return a.artists.firstName.localeCompare(b.artists.firstName)
        }
    })

    if (error) {
        return <p>Error loading paintings.</p>
    }

    return (
        <div>
            <div className="mb-4">
                <label htmlFor="sortOption" className="mr-2">
                    Sort by:
                </label>
                <select
                    id="sortOption"
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                    className="border p-2 rounded bg-blue-500"
                >
                    <option value="year">Year</option>
                    <option value="title">Title</option>
                    <option value="artist">Artist</option>
                </select>
            </div>
            {sortedPaintings.length > 0 && ( // Conditionally render the grid
                <div className="grid grid-cols-3 grid-flow-row py-2 gap-2 max-h-145 overflow-x-hidden overflow-y-scrolls">
                    {sortedPaintings.map((p) => {
                        const paddedFilename = String(p.imageFileName).padStart(6, "0")
                        return (
                            <div className="bg-blue-600 rounded-2xl p-1.5 text-center justify-items-center">
                                <img
                                    className="max-w-40 rounded-2xl border-2 border-gray-700"
                                    key={p.paintingId}
                                    src={`/paintings/square/` + paddedFilename + ".jpg"}
                                    alt={p.title}
                                />
                                <p>{p.title} ({p.artists.firstName} {p.artists.lastName}) ({p.yearOfWork})</p>
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
}

export default GalleryPaintings