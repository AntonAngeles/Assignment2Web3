// This will be the favorites page
import { useState } from "react";
import { useNavigate } from "react-router";

const Favorites = (props) => {
  // Local state for galleries, artists, and paintings
  const [galleries, setGalleries] = useState(props.galleries);
  const [artists, setArtists] = useState(props.artists);
  const [paintings, setPaintings] = useState(props.paintings);
  const navigate = useNavigate();

  // This will handle emptying the favorites buttons
  const handleEmptyFavorites = () => {
    setGalleries([]);
    setArtists([]);
    setPaintings([]);
  };

  // This will handle deleting an individual gallery from favorites
  const handleDeleteGallery = (id) => {
    const updatedGalleries = galleries.filter((g) => g.id !== id);
    setGalleries(updatedGalleries);

    if (props.onUpdateFavorites) {
      props.onUpdateFavorites({ galleries: updatedGalleries, artists, paintings });
    }
  };

  // This will handle deleting an individual artist from favorites
  const handleDeleteArtist = (id) => {
    const updatedArtists = artists.filter((a) => a.id !== id);
    setArtists(updatedArtists);

    if (props.onUpdateFavorites) {
      props.onUpdateFavorites({ galleries, artists: updatedArtists, paintings });
    }
  };

  // This will handle deleting an individual painting from favorites
  const handleDeletePainting = (id) => {
    const updatedPaintings = paintings.filter((p) => p.id !== id);
    setPaintings(updatedPaintings);

    if (props.onUpdateFavorites) {
      props.onUpdateFavorites({ galleries, artists, paintings: updatedPaintings });
    }
  };

  const handleClose = () => {
    navigate(-1);
  };

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="h-3/4 w-3/4 px-4 py-4 flex flex-col bg-white overflow-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Favorites</h2>
          <div className="space-x-2">
            <button
              onClick={handleEmptyFavorites}
              className="px-4 py-2 bg-gray-200 rounded border border-gray-300 hover:bg-red-300 cursor-pointer"
            >
              Empty Favorites
            </button>
            <button onClick={handleClose} className="px-4 py-2 bg-gray-200 rounded border border-gray-300 hover:bg-red-300 cursor-pointer">
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
                  <div key={g.id} className="flex justify-between items-center mb-2">
                    <p>{g.name}</p>
                    <button
                      onClick={() => handleDeleteGallery(g.id)}
                      className="text-red-500 hover:text-red-700 cursor-pointer"
                    >
                      Delete
                    </button>
                  </div>
                ))
              ) : (
                <p>No Galleries in favorites.</p>
              )}
            </div>
          </div>
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold mb-2">Artists</h2>
            <div className="border p-4 flex-grow overflow-auto">
              {artists.length > 0 ? ( //If the list contains information, dispay the information. If non, display message
                artists.map((a) => (
                  <div key={a.id} className="flex justify-between items-center mb-2">
                    <p>{a.firstName} {a.lastName}</p>
                    <button
                      onClick={() => handleDeleteArtist(a.id)}
                      className="text-red-500 hover:text-red-700 cursor-pointer"
                    >
                      Delete
                    </button>
                  </div>
                ))
              ) : (
                <p>No Artists in favorites.</p>
              )}
            </div>
          </div>
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold mb-2">Paintings</h2>
            <div className="border p-4 flex-grow overflow-auto">
              {paintings.length > 0 ? ( //If the list contains information, display the information. If non, display message
                paintings.map((p) => (
                  <div key={p.id} className="flex justify-between items-center mb-2">
                    <p>{p.title}</p>
                    <button
                      onClick={() => handleDeletePainting(p.id)}
                      className="text-red-500 hover:text-red-700 cursor-pointer"
                    >
                      Delete
                    </button>
                  </div>
                ))
              ) : (
                <p>No Paintings in favorites.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorites;