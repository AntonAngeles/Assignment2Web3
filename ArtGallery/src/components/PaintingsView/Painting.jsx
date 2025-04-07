import { useState, useEffect } from "react";
import Header from "../Header";

const Painting = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [selectedPaintings, setSelectedPaintings] = useState([]);
    const [titleInput, setTitleInput] = useState("");
    const [selectedArtist, setSelectedArtist] = useState("");
    const [selectedGallery, setSelectedGallery] = useState("");
    const [yearLess, setYearLess] = useState("");
    const [yearMore, setYearMore] = useState("");
    const [filterType, setFilterType] = useState("");
    const [sortOption, setSortOption] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = import.meta.env.VITE_URL + "/paintings";
                const resp = await fetch(url, {
                    headers: {
                        'APIKEY': import.meta.env.VITE_API_KEY
                    },
                });

                if (!resp.ok) {
                    throw new Error(`HTTP error! status: ${resp.status}`);
                }

                const fetchedData = await resp.json();
                setData(fetchedData);
            } catch (err) {
                setError(err);
            }
        };
        fetchData();
    }, []);

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    //Combine first and last names of the artist
    const artists = [...new Set(data.map(p => `${p.artists.firstName} ${p.artists.lastName}`))];

    const galleries = [...new Set(data.map(p => p.galleries.galleryName))];

    // This will handle title input change
    const handleTitleChange = (e) => {
        setTitleInput(e.target.value);
    };

    // This will handle artist selection change
    const handleArtistChange = (e) => {
        setSelectedArtist(e.target.value);
    };

    // This will handle gallery selection change
    const handleGalleryChange = (e) => {
        setSelectedGallery(e.target.value);
    };

    // This will handle the radio button change to switch filter type
    const handleFilterTypeChange = (filter) => {
        setFilterType(filter);
        setSelectedPaintings([]);
    };

    const handleSortChange = (e) => {
        setSortOption(e.target.value);
    };

    // this will filter the paintings based on title, artist, gallery, and year
    const filteredPaintings = data.filter(p => {
        if (filterType === "title") {
          return p.title.toLowerCase().includes(titleInput.toLowerCase());
        } else if (filterType === "artist" && selectedArtist) {
          return `${p.artists.firstName} ${p.artists.lastName}` === selectedArtist;
        } else if (filterType === "gallery" && selectedGallery) {
          return p.galleries.galleryName === selectedGallery;
        } else if (filterType === "year") {
          const year = parseInt(p.yearOfWork);
          const less = parseInt(yearLess);
          const more = parseInt(yearMore);
          return (
            (!isNaN(less) ? year < less : true) &&
            (!isNaN(more) ? year > more : true)
          );
        }
    });  
      
      
    let sortedPaintings = [...selectedPaintings];

    if (sortOption === "title") {
        sortedPaintings.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOption === "year") {
        sortedPaintings.sort((a, b) => a.yearOfWork - b.yearOfWork);
    } else if (sortOption === "artist") {
        sortedPaintings.sort((a, b) => {
            const nameA = `${a.artists.firstName} ${a.artists.lastName}`;
            const nameB = `${b.artists.firstName} ${b.artists.lastName}`;
            return nameA.localeCompare(nameB);
        });
    }    

    return (
        <div>
            <Header />
            <main className="pt-35 h-screen">
                <div className="h-full w-full px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full w-full">
                        <div className="bg-blue-500 p-4 text-white rounded-lg md:col-span-1 flex flex-col">
                            <h2 className="text-lg font-bold">Select Painting</h2>
                            <hr className="m-2"></hr>
                            {/* Painting Title Filter*/}
                            <div className="pt-4 flex items-center space-x-4 p-7">
                                <input
                                    type="radio"
                                    name="paintingFilter"
                                    value="title"
                                    checked={filterType === "title"}
                                    onChange={() => {
                                        handleFilterTypeChange("title");
                                        setSelectedArtist("");
                                        setSelectedGallery("");
                                        setYearLess("");
                                        setYearMore("");}}
                                    className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white
                                    before:absolute before:inset-1 before:rounded-full before:bg-white
                                    not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600"
                                />
                                <label className="block text-sm font-medium text-white">Title</label>

                                {/* Title Filter Textbox */}
                                <div className="pt-4 flex items-center space-x-4">
                                    <div className="mt-2 flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300">
                                        <input
                                            type="text"
                                            value={titleInput}
                                            onChange={handleTitleChange}
                                            onFocus={() => {
                                                setFilterType("title");
                                                setSelectedArtist("");
                                                setSelectedGallery("");
                                                setYearLess("");
                                                setYearMore("");
                                            }}
                                            className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 focus:outline-none sm:text-sm"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Painting Artist Filter*/}
                            <div className="pt-4 flex items-center space-x-4 p-7">
                                <input
                                    type="radio"
                                    name="paintingFilter"
                                    value="artist"
                                    checked={filterType === "artist"}
                                    onChange={() => {
                                        handleFilterTypeChange("artist");
                                        setTitleInput("");
                                        setSelectedGallery("");
                                        setYearLess("");
                                        setYearMore("");}}
                                    className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white
                                    before:absolute before:inset-1 before:rounded-full before:bg-white
                                    not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600"
                                />
                                <label className="block text-sm font-medium text-white">Artist</label>

                                {/* Artist Filter Dropdown */}
                                <div className="pt-4 flex items-center space-x-4">
                                    <div className="mt-2 flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300">
                                        <select
                                            value={selectedArtist}
                                            onChange={handleArtistChange}
                                            onFocus={() => {
                                                setFilterType("artist");
                                                setTitleInput("");
                                                setSelectedGallery("");
                                                setYearLess("");
                                                setYearMore("");
                                            }}
                                            className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 focus:outline-none sm:text-sm"
                                        >
                                            <option value="">All Artists</option>
                                            {artists.map((artist, index) => (
                                                <option key={index} value={artist}>
                                                    {artist}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Painting Gallery Filter*/}
                            <div className="pt-4 flex items-center space-x-4 p-7">
                                <input
                                    type="radio"
                                    name="paintingFilter"
                                    value="gallery"
                                    checked={filterType === "gallery"}
                                    onChange={() => {
                                        handleFilterTypeChange("gallery");
                                        setTitleInput("");
                                        setSelectedArtist("");
                                        setYearLess("");
                                        setYearMore("");}}
                                    className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white
                                    before:absolute before:inset-1 before:rounded-full before:bg-white
                                    not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600"
                                />
                                <label className="block text-sm font-medium text-white">Gallery</label>

                                {/* Gallery Filter Dropdown */}
                                <div className="pt-4 flex items-center space-x-4">
                                    <div className="mt-2 flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300">
                                        <select
                                            value={selectedGallery}
                                            onChange={handleGalleryChange}
                                            onFocus={() => {
                                                setFilterType("gallery");
                                                setTitleInput("");
                                                setSelectedArtist("");
                                                setYearLess("");
                                                setYearMore("");}}
                                            className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 focus:outline-none sm:text-sm"
                                        >
                                            <option value="">All Galleries</option>
                                            {galleries.map((gallery, index) => (
                                                <option key={index} value={gallery}>
                                                    {gallery}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Year Filter */}
                            <div className="pt-4 flex flex-col space-y-4 border border-white p-4">
                            <div className="flex items-center">
                                <input
                                type="radio"
                                name="paintingFilter"
                                checked={filterType === "year"}
                                onChange={() => 
                                    {setFilterType("year");
                                    setTitleInput("");
                                    setSelectedArtist("");
                                    setSelectedGallery("");
                                    }}
                                onFocus={() => setFilterType("year")}
                                className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white
                                    before:absolute before:inset-1 before:rounded-full before:bg-white
                                    not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600"
                                />
                                <label className="block text-sm font-medium text-white ml-2">Year</label>
                            </div>

                            <div className="flex items-center space-x-2">
                                <label className="block text-sm font-medium text-white">Less</label>
                                <div className="flex items-center rounded-md bg-white pl-3 outline-1 outline-gray-300">
                                <input
                                    type="text"
                                    value={yearLess}
                                    onChange={(e) => {
                                    setYearLess(e.target.value);
                                    setFilterType("year");
                                    }}
                                    onFocus={() => {
                                        setFilterType("year");
                                        setTitleInput("");
                                        setSelectedArtist("");
                                        setSelectedGallery("");}}
                                    className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 focus:outline-none sm:text-sm"
                                />
                                </div>
                            </div>

                            <div className="flex items-center space-x-2">
                                <label className="block text-sm font-medium text-white">More</label>
                                <div className="flex items-center rounded-md bg-white pl-3 outline-1 outline-gray-300">
                                <input
                                    type="text"
                                    value={yearMore}
                                    onChange={(e) => {
                                    setYearMore(e.target.value);
                                    setFilterType("year");
                                    }}
                                    onFocus={() => {
                                        setFilterType("year");
                                        setTitleInput("");
                                        setSelectedArtist("");
                                        setSelectedGallery("");}}
                                    className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 focus:outline-none sm:text-sm"
                                />
                                </div>
                            </div>
                            </div>
                                                        

                            {/*Buttons*/}
                            <div className="flex space-x-2 mt-4 p-4">
                                <button
                                    className="bg-white px-3 py-1 text-black rounded-lg text-sm"
                                    onClick={() => setSelectedPaintings(filteredPaintings)}
                                >
                                    Filter
                                </button>

                                <button
                                    className="bg-gray-300 px-3 py-1 text-black rounded-lg text-sm"
                                    onClick={() => {
                                        setTitleInput("");
                                        setSelectedArtist("");
                                        setSelectedGallery("");
                                        setYearLess("");
                                        setYearMore("");
                                        setFilterType("");
                                        setSelectedPaintings([]);
                                    }}
                                    >
                                    Clear
                                </button>
                            </div>
                        </div>

                        {/* Painting Details Section*/}
                        <div className="bg-blue-500 p-4 text-white rounded-lg md:col-span-2">
                            <h2 className="text-lg font-bold">Painting Details</h2>
                            <hr className="m-2"></hr>

                            <div className="mb-4">
                                <label htmlFor="sortOption" className="text-white font-medium mr-2">Sort By:</label>
                                <select
                                    id="sortOption"
                                    value={sortOption}
                                    onChange={handleSortChange}
                                    className="border p-2 rounded bg-blue-500 text-white"
                                >
                                    <option value="title">Title</option>
                                    <option value="year">Year</option>
                                    <option value="artist">Artist</option>
                                </select>
                            </div>

                            <div className="overflow-y-auto">
                                {selectedPaintings.length === 0 ? (
                                    <p>No paintings found for the selected filters.</p>
                                ) : (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {sortedPaintings.map(p => {
                                        const paddedFilename = String(p.imageFileName).padStart(6, "0");
                                        return (
                                        <div key={p.paintingId} className="bg-blue-600 rounded-2xl p-1.5 text-center justify-items-center">
                                            <img
                                            className="w-full rounded-2xl border-2 border-gray-700 mb-2"
                                            src={`/paintings/square/${paddedFilename}.jpg`}
                                            alt={p.title}
                                            />
                                            <p><strong>Artist: </strong>{p.artists.firstName} {p.artists.lastName}</p>
                                            <p><strong>Title: </strong>{p.title}</p>
                                            <p><strong>Year: </strong>{p.yearOfWork}</p>
                                            <p><strong>Gallery: </strong>{p.galleries.galleryName}</p>
                                            <p><strong>Medium: </strong>{p.medium}</p>
                                            <p><strong>Measurement: </strong>{p.width} x {p.height}</p>
                                        </div>
                                        );
                                    })}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Painting;