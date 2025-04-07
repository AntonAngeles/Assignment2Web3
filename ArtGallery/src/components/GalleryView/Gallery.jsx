import { useEffect, useState } from 'react';
import Header from '../Header';
import GalleryListItems from './GalleryListItem.jsx';
import GalleryInfo from './GalleryInfo.jsx';
import GalleryPaintings from './GalleryPaintings.jsx';

const Gallery = (props) => {
  const [galleryInfo, setGalleryInfo] = useState([]);

  const displayGalleryInfo = (id) => {
    const galleryToDisplay = props.data.find((g) => g.galleryId === id);
    setGalleryInfo(galleryToDisplay);
    props.fetchPaintings(id);
  };

  return (
    <div>
      <Header />
      <main className="pt-40 min-h-screen">
        <div className="container mx-auto h-full w-full px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full w-full">
            <div className="bg-blue-500 p-4 text-white rounded-lg h-full flex flex-col max-h-175">
              <h2 className="text-lg font-bold text-center">Select Gallery</h2>
              <hr className="m-2"></hr>
              <div className="overflow-y-auto">
                {props.data.map((g) => (
                  <GalleryListItems
                    key={g.galleryId}
                    id={g.galleryId}
                    galleryName={g.galleryName}
                    display={displayGalleryInfo}
                  />
                ))}
              </div>
            </div>

            <div className="bg-blue-500 p-4 text-white text-center rounded-lg">
              <h2 className="text-lg font-bold text-center">Gallery Info</h2>
              <hr className="m-2"></hr>
              <GalleryInfo data={galleryInfo} update={props.update}/>
            </div>

            <div className="bg-blue-500 p-4 text-white rounded-lg -mr-20">
              <h2 className="text-lg font-bold text-center">
                Paintings in Gallery
              </h2>
              <hr className="m-2"></hr>
              <GalleryPaintings paintings={props.paintings} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Gallery;