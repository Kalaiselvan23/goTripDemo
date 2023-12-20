import ImageGrid from "@/components/ImageGrid"
import AvailableRooms from "@/components/AvailableRooms"
import { NavLink, Link } from 'react-router-dom';
import { useQuery } from "react-query"
import { RotatingLines } from "react-loader-spinner"
import { useParams } from "react-router-dom"
import api from "@/utils/api"
const Hotel = () => {
    const { country, id } = useParams();
    const { data, isLoading, error } = useQuery('hotel', async () => {
        const res = await api.get(`country/hotel?countryId=${country}&hotelId=${id}`)
        return res.data;
    })
    if (isLoading) {
        return <div className="w-full h-screen flex justify-center items-center">
            <RotatingLines
                strokeColor="blue"
                strokeWidth="5"
                animationDuration="0.2"
                width="96"
                visible={true}
            />
        </div>
    }
    if (error) {
        return <div>
            Something went wrong....
        </div>
    }
    return (
        <div className="pt-20 px-20">
            <div className="flex justify-between my-5">
                <h2 className="font-bold text-2xl">{data.name}</h2>
                <div className="flex items-center gap-2">
                    <p className="text-xs text-center">From<span className="text-xl font-bold">US$72</span></p>
                    <Link to={"#rooms"} className="bg-blue-600 p-5 text-white rounded-[0.2rem] hover:bg-blue-600">Select Room</Link>
                </div>
            </div>
            <ImageGrid />
            <div className="property">
                <h2>Property Highlights</h2>
                <ul className="flex gap-2 lists">
                    {data.amenities.map((amenity: string) => {
                        return <li>
                            <span>{amenity}</span>
                        </li>
                    })}
                </ul>
            </div>
            <div className="property">
                <h2>Overview</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, tenetur voluptas facilis enim aliquam asperiores? Obcaecati ex tempora neque ab ullam, tempore earum at libero repudiandae nulla, natus accusantium consectetur.</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, consequatur quisquam. Nulla cupiditate consequatur commodi quis eveniet veritatis eligendi reiciendis ex aspernatur autem, inventore doloremque saepe neque? Enim, repellendus porro!</p>
            </div>
            <div className="property">
                <h2>Most Popular Facilities</h2>
                <ul className="flex gap-2 lists">
                    {data.facilities.map(facility => {
                        return <li>
                            <span>{facility}</span>
                        </li>
                    })}
                </ul>
            </div>
            <div className="property" id="rooms">
                <h2>Available Rooms</h2>
                <AvailableRooms availableRooms={data.rooms} />
            </div>
        </div>
    )
}

export default Hotel
