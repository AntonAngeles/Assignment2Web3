const GalleryListItem = (props) => {
    const clickHandle = () => {
        props.display(props.id)
    }

    return (
        <p
            onClick={clickHandle}
            className="font-bold text-center bg-blue-900 p-0.5 m-1 rounded-md hover:bg-blue-700 cursor-pointer">

            {props.galleryName}</p>
    )
}

export default GalleryListItem