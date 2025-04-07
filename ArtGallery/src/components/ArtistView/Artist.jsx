import { useState } from "react"
import Header from "../Header"
import ArtistListItem from "./ArtistListItem"
import ArtistInfo from "./ArtistInfo"
import ArtistPaint from "./ArtistPaint"

const Artist = (props) => {
  const [error, setError] = useState(null)
  const [artInfo, setArtInfo] = useState([])
  const [selectedArtistId, setSelectedArtistId] = useState(null);

  const displayArtistInfo = (id) => {
    const artistToDisplay = props.data.find((a) => a.artistId === id)
    setArtInfo(artistToDisplay)
    setSelectedArtistId(id);
    props.fetchPaintings(id);
  }

  return (
    <div>
      <Header />
      <main className="pt-50 min-h-screen">
        <div className="container mx-auto h-5 w-full px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            <div className="bg-blue-500 p-4 text-white rounded-lg max-h-175 flex flex-col">
              <h2 className="text-lg font-bold text-center">Select Artist</h2>
              <hr className="m-2"></hr>
              <div className="overflow-y-auto">
                {props.data.map(a => <ArtistListItem
                  key={a.artistId}
                  id={a.artistId}
                  lastName={a.lastName}
                  firstName={a.firstName}
                  display={displayArtistInfo}
                />)}
              </div>
            </div>

            <div className="bg-blue-500 p-4 text-white rounded-lg max-h-175 flex flex-col">
              <h2 className="text-lg font-bold text-center">Artist Info</h2>
              <hr className="m-2"></hr>
              <ArtistInfo data={artInfo} />
            </div>

            <div className="bg-blue-500 p-4 text-white rounded-lg max-h-175 flex flex-col -mr-20">
              <h2 className="text-lg font-bold text-center">Artist Painting</h2>
              <hr className="m-2"></hr>
              <ArtistPaint paintings={props.paintings} />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Artist