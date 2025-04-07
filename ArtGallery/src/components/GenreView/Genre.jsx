import { useEffect, useState } from 'react';
import Header from '../Header';
import GenreListItem from './GenreListItem';
import GenreInfo from './GenreInfo';
import GenrePaint from './GenrePaint';

const Genre = (props) => {
  const [error, setError] = useState(null);
  const [genreInfo, setGenreInfo] = useState([]);

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const displayGenreInfo = (id) => {
    const genreToDisplay = props.data.find((a) => a.genreId === id);
    setGenreInfo(genreToDisplay);
    props.fetchPaintings(id);
  };

  return (
    <div>
      <Header />
      <main className="pt-50 h-screen">
        <div className="h-full w-full px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full px-6 -mt-3">
            <div className="bg-blue-500 p-4 text-white rounded-lg md:col-span-1 md:row-span-4 flex flex-col max-h-171">
              <h2 className="text-lg font-bold">Select Genre</h2>
              <hr className="m-2" />
              <div className="overflow-y-auto">
                {props.data.map((a) => (
                  <GenreListItem
                    key={a.genreId}
                    id={a.genreId}
                    genreName={a.genreName}
                    display={displayGenreInfo}
                  />
                ))}
              </div>
            </div>

            <div className="bg-blue-500 p-4 text-white rounded-lg md:col-span-3 md:row-span-1 flex flex-col max-h-50">
              <h2 className="text-lg font-bold">Genre Info</h2>
              <hr className="m-2" />
              <div className="overflow-y-auto flex-1 h-96">
                <GenreInfo data={genreInfo} />
              </div>
            </div>

            <div className="bg-blue-500 p-4 text-white rounded-lg md:col-span-3 md:row-span-3 max-h-121">
              <h2 className="text-lg font-bold">Genre Painting</h2>
              <hr className="m-2 "></hr>
              <GenrePaint paintings={props.paintings} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Genre;