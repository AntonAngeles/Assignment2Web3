import { useState } from "react"
import PaintingDetails from "../PaintingModal/PaintingDetails";

const ArtistPaint = (props) => {
  const [sortOption, setSortOption] = useState("year")
  const [selectedPainting, setSelectedPainting] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sortedPaintings = [...props.paintings].sort((a, b) => {
    if (sortOption === "year") {
      return a.yearOfWork - b.yearOfWork
    } else if (sortOption === "title") {
      return a.title.localeCompare(b.title)
    }
  })

  // This is for the modal box that will open when you click on a painting
  const handlePaintingClick = (painting) => {
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
        </select>
      </div>
      {sortedPaintings.length > 0 && (
        <div className="grid grid-cols-3 grid-flow-row py-2 gap-2 max-h-145 overflow-x-hidden overflow-y-scrolls">
          {sortedPaintings.map((p) => {
            const paddedFilename = String(p.imageFileName).padStart(6, "0")
            return (
              <div className="bg-blue-600 rounded-2xl p-1.5 text-center justify-items-center"
                    onClick={() => handlePaintingClick(p)}
              >
                <img
                  className="max-w-40 rounded-2xl border-2 border-gray-700"
                  key={p.paintingId}
                  src={`/paintings/square/` + paddedFilename + ".jpg"}
                  alt={p.title}
                />
                <p>{p.title} ({p.yearOfWork})</p>
              </div>
            )
          })}
        </div>
      )}
      <PaintingDetails isOpen={isModalOpen} onClose={closeModal} painting={selectedPainting} update={props.update} />
    </div>
  )
}

export default ArtistPaint