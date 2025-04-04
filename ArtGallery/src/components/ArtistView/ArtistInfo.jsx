const ArtistInfo = (props) => {

    let gender = "null"
    if (props.data.gender === "F") {
        gender = "Female"
    } else if (props.data.gender === "M"){
        gender = "Male"
    } else {
        gender = ""
    }

    const getLink = (link) => {
        if (link){
            return (link)
        } else {
            return ""
        }
            
    }
    

    return (
        <div>
            <h3 className="text-lg font-semibold pt-1">{props.data.firstName} {props.data.lastName}</h3>
            <p className="font-bold pt-1">Nationality: </p> <p>{props.data.nationality}</p>
            <p className="font-bold pt-1">Gender: </p> <p>{gender}</p>
            <p className="font-bold pt-1">Year of Birth: </p> <p>{props.data.yearOfBirth}</p>
            <p className="font-bold pt-1">Year of Death: </p> <p>{props.data.yearOfDeath}</p>
            <h4 className="font-bold py-1">Description</h4>
            <p className="bg-white text-black rounded-2xl p-2 mb-5 max-h-60 overflow-y-auto">{props.data.details}</p>
            <a className="underline"href={props.data.artistLink}>{getLink(props.data.artistLink)}</a>
        </div>
    )
}

export default ArtistInfo