const ArtistInfo = (props) => {

    let gender = "null"
    if (props.data.gender === "F") {
        gender = "Female"
    } else if (props.data.gender === "M") {
        gender = "Male"
    } else {
        gender = ""
    }

    const getLink = (link) => {
        if (link) {
            return (link)
        } else {
            return ""
        }

    }


    if (props.data.artistId === undefined) {
        return <p className="text-center">Please select an Artist</p>
    } else {
        return (
            <div className="grid grid-cols-2">
                    <h3 className="col-start-1 col-end-1 text-3xl font-semibold pt-1">{props.data.firstName} {props.data.lastName}</h3>
                    <p className="col-start-1 font-bold pt-1">Nationality: </p> 
                        <p className="col-start-1">{props.data.nationality}</p>
                    <p className="col-start-1 font-bold pt-1">Gender: </p> 
                        <p className="col-start-1">{gender}</p>
                    <p className="col-start-1 font-bold pt-1">Year of Birth: </p> 
                        <p className="col-start-1">{props.data.yearOfBirth}</p>
                    <p className="col-start-1 font-bold pt-1">Year of Death: </p> 
                        <p className="col-start-1">{props.data.yearOfDeath}</p>
                    <img className="col-start-2 row-start-1 row-end-7 rounded-2xl border-2 border-gray-700" src={'/artists/square/' + props.data.artistId + '.jpg'} />
                    <h4 className="col-start-1 font-bold py-1">Description</h4>
                    <p className="col-start-1 col-end-3 bg-white text-black rounded-2xl p-2 mb-5 max-h-40 overflow-y-auto">{props.data.details}</p>
                    <a className="underline" href={props.data.artistLink}>{getLink(props.data.artistLink)}</a>

                    <button className="bg-blue-900 hover:bg-blue-700 cursor-pointer p-4 text-white font-bold rounded-lg mt-4 col-start-1 col-span-2">Add Favorites</button>
            </div>
        )
    }

    
}

export default ArtistInfo