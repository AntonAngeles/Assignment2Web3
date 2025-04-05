import { useEffect } from 'react'
import Map from "./Map"

const GalleryInfo = (props) => {
    const getLink = (link) => {
        if (link) {
            return (link)
        } else {
            return ""
        }
    }

    if (props.data.galleryId === undefined) {
        return <p>Please click a Gallery</p>
    } else {
        return (
            <div className="">
                <p className="text-3xl" >{props.data.galleryName}</p>
                <h2 className="font-bold pt-1" >Native Name</h2>
                <p className="" >{props.data.galleryNativeName}</p>
                <h2 className="font-bold pt-1" >City</h2>
                <p className="" >{props.data.galleryCity}</p>
                <h2 className="font-bold pt-1" >Address</h2>
                <p className="" >{props.data.galleryAddress}</p>
                <h2 className="font-bold pt-1" >Country</h2>
                <p className="" >{props.data.galleryCountry}</p>
                <p className="underline mb-5">{getLink(props.data.galleryWebSite)}</p>
                <Map 
                    lat = {props.data.latitude}
                    long = {props.data.longitude}
                    location = {props.data.galleryName}
                />

<button className="bg-blue-900 hover:bg-blue-700 cursor-pointer p-4 text-white font-bold rounded-lg mt-4 col-start-1 col-span-2">Add Favorites</button>
            </div>
        )
    }

}

export default GalleryInfo