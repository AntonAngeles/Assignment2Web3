// This is where information based on Genre will be displayed
const GenreInfo = (props) => {

    const getLink = (link) => {
        if (link) {
            return (link)
        } else {
            return ""
        }

    }

    return(
        <div>
            <h3 className="text-3xl font-semibold pt-1">{props.data.genreName}</h3>
            <p>{props.data.description}</p>
            <a className="underline" href={props.data.wikiLink}>{getLink(props.data.wikiLink)}</a>
        </div>
    )
}

export default GenreInfo