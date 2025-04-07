// // This will be the Circuit Details pop-up page
import { useState } from "react";

const PaintingDetails = ({ painting, onClose, isOpen, update }) => {
    // If there is no painting, it will not render
    if (!isOpen || !painting) return null;

    // This will display a message if you added a painting to your favorites
    const addToFavorites = () => {
        update(painting.title)
        alert(`${painting.title} added to favorites!`)
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full mx-4 p-4">
                <div className="grid grid-cols-3 gap-5 justify-between items-center mb-4">
                    <h3 className="text-center text-lg font-semibold text-black">
                        Painting Details
                    </h3>
                    
                    {/* Adding and close buttons */}
                    <button 
                        onClick={addToFavorites}
                        className="bg-black px-3 py-1 text-white rounded-lg text-sm hover:bg-green-700 cursor-pointer"
                    >Add to Favorites</button>
                    <button
                        className="bg-black px-3 py-1 text-white rounded-lg text-sm hover:bg-red-900 cursor-pointer"
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>

                {/* This will display the necessary information needed for the modal */}
                <div className="flex">
                    <div className="w-1/2 border border-black p-3">
                        <img
                            alt={painting.title}
                            className="w-full h-full object-cover"
                            src={`/paintings/square/${String(painting.imageFileName).padStart(6, "0")}.jpg`}
                        />
                    </div>

                    <div className="w-1/2 pl-3">
                        <h2 className="text-2xl font-bold mb-2 text-black">{painting.title}</h2>
                        <p className="text-black"><strong>Artist: </strong>{painting.artists.firstName} {painting.artists.lastName}</p>
                        <p className="text-black"><strong>Description: </strong>{painting.description}</p>
                        <p className="text-black"><strong>Year: </strong>{painting.yearOfWork}</p>
                        {/* <p className="text-black"><strong>Gallery Name: </strong>{painting.galleries.galleryName}</p> */}
                        {/* <p className="text-black"><strong>Gallery City: </strong>{painting.galleries.galleryCity}</p> */}
                        <a href={painting.museumLink} className="text-black"><strong>Museum Link: </strong><p className="underline">{painting.museumLink}</p></a>
                        <p className="text-black"><strong>Medium: </strong>{painting.medium}</p>
                        <p className="text-black"><strong>Measurement: </strong>{painting.width} x {painting.height}</p>
                        <a href={painting.wikiLink} className="text-black"><strong>WikiLink: </strong><p className="underline">{painting.wikiLink}</p></a>
                        <p className="text-black"><strong>Copyright: </strong>{painting.copyrightText}</p>

                        <br></br>
                        
                        <h3 className="font-semibold mb-2 text-black"><strong>Dominant Colours</strong></h3>
                        <div className="flex gap-2">
                            {(() => {
                                try {
                                const annotations = JSON.parse(painting.jsonAnnotations); //Parsing JSON string 
                                const colors = annotations.dominantColors;

                                return colors.map((colorObj, index) => (
                                    <div
                                    key={index}
                                    title={colorObj.name}
                                    className="w-6 h-6 border border-black"
                                    style={{ backgroundColor: colorObj.web }}
                                    />
                                ));
                                } catch (e) {
                                return <p className="text-black">Error!!</p>;
                                }
                            })()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaintingDetails;