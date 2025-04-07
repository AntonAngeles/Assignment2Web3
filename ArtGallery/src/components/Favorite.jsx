import { useState } from "react";
import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";

const Favorites = (props) => {
  const [galleries, setGalleries] = useState(props.galleries);
  const [artists, setArtists] = useState(props.artists);
  const [paintings, setPaintings] = useState(props.paintings);
  const navigate = useNavigate()

  // Delete button component
  const Button = ({ onDelete }) => {
    return (
      <StyledWrapper>
        <button className="btn" onClick={onDelete}>
          <svg
            viewBox="0 0 15 17.5"
            height="17.5"
            width={15}
            xmlns="http://www.w3.org/2000/svg"
            className="icon"
          >
            <path
              transform="translate(-2.5 -1.25)"
              d="M15,18.75H5A1.251,1.251,0,0,1,3.75,17.5V5H2.5V3.75h15V5H16.25V17.5A1.251,1.251,0,0,1,15,18.75ZM5,5V17.5H15V5Zm7.5,10H11.25V7.5H12.5V15ZM8.75,15H7.5V7.5H8.75V15ZM12.5,2.5h-5V1.25h5V2.5Z"
              id="Fill"
            />
          </svg>
        </button>
      </StyledWrapper>
    );
  };

  const StyledWrapper = styled.div`
    .btn {
      background-color: transparent;
      position: relative;
      border: none;
    }

    .btn::after {
      content: "delete";
      position: absolute;
      top: -130%;
      left: 50%;
      transform: translateX(-50%);
      width: fit-content;
      height: fit-content;
      background-color: rgb(168, 7, 7);
      padding: 4px 8px;
      border-radius: 5px;
      transition: 0.2s linear;
      transition-delay: 0.2s;
      color: white;
      text-transform: uppercase;
      font-size: 12px;
      opacity: 0;
      visibility: hidden;
    }

    .icon {
      transform: scale(1.2);
      transition: 0.2s linear;
    }

    .btn:hover > .icon {
      transform: scale(1.5);
      cursor: pointer;
    }

    .btn:hover > .icon path {
      fill: rgb(168, 7, 7);
    }

    .btn:hover::after {
      visibility: visible;
      opacity: 1;
      top: -160%;
    }
  `;

  const handleDeleteGallery = (index) => {
    setGalleries((prevGalleries) =>
      prevGalleries.filter((_, i) => i !== index)
    );
  };

  const handleDeleteArtist = (index) => {
    setArtists((prevArtists) => prevArtists.filter((_, i) => i !== index));
  };

  const handleDeletePainting = (index) => {
    setPaintings((prevPaintings) =>
      prevPaintings.filter((_, i) => i !== index)
    );
  };

  const handleEmptyFavorites = ()=>{
    setGalleries([]);
    setArtists([]);
    setPaintings([]);
  }

  const handleClose = () => {
    navigate(-1)
  }

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="h-3/4 w-3/4 px-4 flex flex-col bg-white rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-4 pt-4">
          <h2 className="text-xl font-semibold">Favorites</h2>
          <div className="space-x-2">
            <button 
              className="px-4 py-2 bg-gray-200 rounded border border-gray-300 hover:bg-red-300 cursor-pointer transition-colors"
              onClick={handleEmptyFavorites}
            >
              Empty Favorites
            </button>
            <button 
              onClick={handleClose} 
              className="px-4 py-2 bg-gray-200 rounded border border-gray-300 hover:bg-red-300 cursor-pointer transition-colors"
            >
              Close
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 flex-grow pb-4">
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold mb-2">Galleries</h2>
            <div className="border p-4 h-full rounded overflow-y-auto">
              {galleries.length > 0 ? (
                galleries.map((g, index) => (
                  <p key={index} className="flex justify-between items-center py-1">
                    {g.name}
                    <Button onDelete={() => handleDeleteGallery(index)} />
                  </p>
                ))
              ) : (
                <p className="text-gray-500">No favorite galleries</p>
              )}
            </div>
          </div>
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold mb-2">Artists</h2>
            <div className="border p-4 h-full rounded overflow-y-auto">
              {artists.length > 0 ? (
                artists.map((a, index) => (
                  <p key={index} className="flex justify-between items-center py-1">
                    {a.firstName} {a.lastName}
                    <Button onDelete={() => handleDeleteArtist(index)} />
                  </p>
                ))
              ) : (
                <p className="text-gray-500">No favorite artists</p>
              )}
            </div>
          </div>
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold mb-2">Paintings</h2>
            <div className="border p-4 h-full rounded overflow-y-auto">
              {paintings.length > 0 ? (
                paintings.map((p, index) => (
                  <p key={index} className="flex justify-between items-center py-1">
                    {p.title}
                    <Button onDelete={() => handleDeletePainting(index)} />
                  </p>
                ))
              ) : (
                <p className="text-gray-500">No favorite paintings</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorites;