const GalleryPaintings = (props) => {

    const [paintings, setPaintings] = useState([])
    const [error, setError] = useState(null)
    const [sortOption, setSortOption] = useState("year")

    useEffect(() => {
        const fetchPaintings = async () => {
            if (props.data && props.data.galleryId) {
                try {
                    const url =
                        import.meta.env.VITE_URL + "/paintings/galleries/" + props.data.galleryId
                    const resp = await fetch(url, {
                        headers: {
                            APIKEY: import.meta.env.VITE_API_KEY,
                        },
                    })

                    if (!resp.ok) {
                        throw new Error(`HTTP error! status: ${resp.status}`)
                    }

                    const fetchedData = await resp.json()
                    setPaintings(fetchedData)
                } catch (err) {
                    setError(err)
                    console.error("Error fetching paintings: ", err)
                }
            } else {
                setPaintings([])
            }
        }
        fetchPaintings()
    }, [props.data])

}

export default GalleryPaintings