import { useEffect, useState } from "react";

const ArtistPaint = (props) => {
    const [paintings, setPaintings] = useState([]);
    const [error, setError] = useState(null); // Added error state

    useEffect(() => {
        const fetchPaintings = async () => {
            // Check if props.data exists before making the API call.
            if (props.data && props.data.artistId) {
                try {
                    const url =
                        import.meta.env.VITE_URL + "/paintings/artist/" + props.data.artistId;
                    const resp = await fetch(url, {
                        headers: {
                            APIKEY: import.meta.env.VITE_API_KEY,
                        },
                    });

                    if (!resp.ok) {
                        throw new Error(`HTTP error! status: ${resp.status}`);
                    }

                    const fetchedData = await resp.json();
                    setPaintings(fetchedData);
                } catch (err) {
                    setError(err);
                    console.error("Error fetching paintings: ", err);
                }
            } else {
                setPaintings([]);
            }
        };
        fetchPaintings();
    }, [props.data]);

    if (error) {
        return <p>Error loading paintings.</p>
    }

    return (
        <div className="grid grid-cols-3 grid-flow-row py-2 gap-0.5">
            {paintings.map((p) => {
                const paddedFilename = String(p.imageFileName).padStart(6, '0');
                return (
                    <img
                        className="max-w-40"
                        key={p.paintingId} 
                        src={`/paintings/square/` + paddedFilename + ".jpg"}
                        alt={p.title} 
                    />
                )
            })}
        </div>
    );
};

export default ArtistPaint;