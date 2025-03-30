
const ArtistListItem = (props) => {
    return (
        <div>
            <p className="font-bold bg-blue-900 p-0.5 m-0.5 rounded-md">{props.lastName} {props.firstName}</p>
        </div>
    )
}

export default ArtistListItem