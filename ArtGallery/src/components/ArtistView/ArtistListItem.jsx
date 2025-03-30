

const ArtistListItem = (props) => {
    const clickHandle = (e) => {
        
    }
    return (
        <div>
            <p onClick={clickHandle} className="font-bold bg-blue-900 p-0.5 m-0.5 rounded-md hover:bg-blue-700 cursor-pointer">{props.lastName} {props.firstName}</p>
        </div>
    )
}

export default ArtistListItem