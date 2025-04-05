const PaintingListItem = ({ id, title, display }) => {
    const handleClick = () => {
        display(id);
    };

    return (
        <p
            onClick={handleClick}
            className="font-bold text-center bg-blue-900 p-1 m-1 rounded-md hover:bg-blue-700 cursor-pointer"
        >
            {title}
        </p>
    );
};

export default PaintingListItem;
