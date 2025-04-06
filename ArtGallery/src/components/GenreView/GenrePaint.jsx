import { useEffect, useState } from "react"
import PaintingDetails from "../PaintingModal/PaintingDetails"

const GenrePaint = (props) => {
    const [paintings, setPaintings] = useState([])
    const [error, setError] = useState(null)
    const [sortOption, setSortOption] = useState("year")
    const [selectedPainting, setSelectedPainting] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const fetchPaintings = async () => {
            if (props.data && props.data.genreId) {
                try {
                    const url =
                    import.meta.env.VITE_URL + "/paintings/genre/" + props.data.genreId
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
        } else if (sortOption === "artist"){
            return a.artists.firstName.localeCompare(b.artists.firstName)
        }
    })

    if (error) {
        return <p>Error loading paintings.</p>
    }

    // This is for the modal box that will open when you click on a painting
    const handlePaintingClick = (painting) => {
        console.log("selected painting:", painting)
        setSelectedPainting(painting);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedPainting(null);
    };

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
            {   sortedPaintings.length > 0 && (
                <div className="grid grid-cols-3 grid-flow-row py-2 gap-2 max-h-145 overflow-x-hidden overflow-y-scrolls">
                    {sortedPaintings.map((p) => {
                        const paddedFilename = String(p.imageFileName).padStart(6, "0")
                        return (
                            <div className="bg-blue-600 rounded-2xl p-1.5 text-center justify-items-center curser-pointer"
                                onClick={() => handlePaintingClick(p)}
                                key={p.paintingId}
                                >
                                <img
                                    className="max-w-40 rounded-2xl border-2 border-gray-700"
                                    src={`/paintings/square/` + paddedFilename + ".jpg"}
                                    alt={p.title}
                                />
                                <p> {p.title} ({p.yearOfWork})</p>
                            </div>
                        )
                    })}
            </div>
            )}
            <PaintingDetails isOpen={isModalOpen} onClose={closeModal} painting={selectedPainting} />
        </div>
        
    )
}

export default GenrePaint