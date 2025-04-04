import { useEffect, useState } from "react"

const ArtistPaint = (props) => {
  const [paintings, setPaintings] = useState([])
  const [error, setError] = useState(null)
  const [sortOption, setSortOption] = useState("year")

  useEffect(() => {
    const fetchPaintings = async () => {
      if (props.data && props.data.artistId) {
        try {
          const url =
            import.meta.env.VITE_URL + "/paintings/artist/" + props.data.artistId
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
    }
    return 0
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
        </select>
      </div>
      {sortedPaintings.length > 0 && ( // Conditionally render the grid
        <div className="grid grid-cols-3 grid-flow-row py-2 gap-0.5">
          {sortedPaintings.map((p) => {
            const paddedFilename = String(p.imageFileName).padStart(6, "0")
            return (
              <img
                className="max-w-40 rounded-2xl border-2 border-gray-700"
                key={p.paintingId}
                src={`/paintings/square/` + paddedFilename + ".jpg"}
                alt={p.title}
              />
            )
          })}
        </div>
      )}
    </div>
  )
}

export default ArtistPaint