// // This will be the Circuit Details pop-up page
// import { useState } from "react"

// const PaintingDetails = ({painting, onClose}) => {

//     // if there is no painting, it will not render
//     if (!painting) return null; 

//     return(
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//             <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full mx-4 p-4">
//                 <div className="flex justify-between items-center mb-4">
//                     <h3 className="text-center text-lg font-semibold">
//                         Painting Details
//                     </h3>
//                 </div>

//                 <div className="space-x-2"> 
//                     <div className="absolute top-0 right-0 flex flex-col space-y-2 p-2">
//                         <button className="bg-white px-3 py-1 text-black rounded-lg text-sm"
//                                 onClick={onClose}
//                         >
//                             Close
//                         </button>
//                         <button className="bg-white px-3 py-1 text-black rounded-lg text-sm">
//                             Favorite
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             <div className="flex">
//                 <div className="w-1/2 border border-blac p-3">
//                     <img 
//                         alt={painting.title} 
//                         className="w-full h-full object-cover" 
//                         src={`/paintings/square/${String(painting.imageFileName).padStart(6, "0")}.jpg`}
//                     />
//                 </div>

//                 <div className="w-1/2 pl-3">
//                     <h2 className="text-2xl font-bold mb-2">{painting.title}</h2>
//                     {/* <h3 className="text-xl mb-4">{painting.artists.firstName}</h3> */}
//                     <p>{painting.description}</p>
//                     <p><strong>Year: </strong>{painting.yearOfWork}</p>
//                     <p><strong>Gallery Name: </strong>{painting.galleries.galleryName}</p>
//                     <p><strong>Gallery City: </strong>{painting.galleries.galleryCity}</p>
//                     <p><strong>Museum Link: </strong>{painting.museumLink}</p>
//                     <p><strong>Medium: </strong>{painting.medium}</p>
//                     <p><strong>Measurement: </strong>{painting.width} x {painting.height}</p>
//                     <p><strong>WikiLink: </strong>{painting.wikiLink}</p>
//                     <p><strong>Copyright: </strong>{painting.copyrightText}</p>

//                     <h3 className="font-semibold mb-2">Dominant Colours</h3>
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default PaintingDetails

import { useState } from "react";

const PaintingDetails = ({ painting, onClose, isOpen }) => {
    // If there is no painting, it will not render
    if (!isOpen || !painting) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full mx-4 p-4">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-center text-lg font-semibold">
                        Painting Details
                    </h3>
                    <button
                        className="bg-black px-3 py-1 text-white rounded-lg text-sm hover:bg-red-900 cursor-pointer"
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>

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
                        <p className="text-black"><strong>Museum Link: </strong>{painting.museumLink}</p>
                        <p className="text-black"><strong>Medium: </strong>{painting.medium}</p>
                        <p className="text-black"><strong>Measurement: </strong>{painting.width} x {painting.height}</p>
                        <p className="text-black"><strong>WikiLink: </strong>{painting.wikiLink}</p>
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