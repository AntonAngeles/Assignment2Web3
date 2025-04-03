const ArtistInfo = (props) => {
    return (
        <div>
            <p>{props.data.firstName} {props.data.lastName}</p>
            <p>{props.data.nationality}</p>
            <p>{props.data.gender}</p>
            <p>Year of Birth: {props.data.yearOfBirth}</p>
            <p>Year of Death: {props.data.yearOfDeath}</p>
            <p>{props.data.details}</p>
        </div>
    )
}

export default ArtistInfo