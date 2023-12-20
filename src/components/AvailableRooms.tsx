import RoomSelect from "./RoomSelect"
import { Button } from "./ui/button"
import { IoIosWifi } from "react-icons/io";
import { MdLocalParking } from "react-icons/md";
import { FaSmokingBan } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { SelectedHotelContext, selectedHotelContextType } from '../contexts/SelectedHotelContext';
type roomsType = {
    availableRooms: {
        roomType: string,
        priceforFiveNights: number,
        _id: string,
    },
}
const AvailableRooms = ({ availableRooms }: roomsType[]) => {
    console.log(availableRooms)
    const {selectedHotel,setSelectedHotel}=useContext<selectedHotelContextType>(SelectedHotelContext);
    const navigate=useNavigate();

    const handleReserve=(rooms)=>{
        setSelectedHotel((prev)=>{
            return {...prev,selectedHotel:rooms}
        })
        navigate('/payment');
    }
    return (
        <div className="mx-auto flex flex-col gap-3">
            {availableRooms.map((rooms) => {
                return <div className="border-2 p-4">
                    <h2>{rooms.roomType}</h2>
                    <table className="roomTable">
                        <tr className="bg-blue-600 w-full text-white font-normal">
                            <th>Room Type</th>
                            <th>Benefits</th>
                            <th>Price for 5 nights</th>
                            <th>Select Rooms</th>
                            <th>Book Rooms</th>
                        </tr>
                        <tbody>
                            <tr>
                                <td>
                                    <div>
                                        <img className="h-full w-44 rounded-[0.5rem]" src="https://thumbs.dreamstime.com/b/luxury-beach-resort-bungalow-near-endless-pool-over-sea-sunset-evening-tropical-island-summer-vacation-concept-39672543.jpg" alt="img" />
                                        <ul className="text-sm p-2 amenity">
                                            <li>
                                            <FaSmokingBan />
                                                <span>Non smoking rooms</span></li>
                                            <li><IoIosWifi className="text-black"/><span>
                                                Free wifi
                                            </span></li>
                                            <li>
                                            <MdLocalParking />
                                                <span>Parking</span>
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                                <td>
                                    <ul className="list list-disc flex flex-col gap-2">
                                        <li>Pay at hotel</li>
                                        <li>Pay nothing until March 30,2022</li>
                                        <li>Free cancellation before April 1,2022</li>
                                    </ul>
                                </td>
                                <td>
                                    <span className='font-semibold'>US$72</span>
                                    <p>Includes taxes and charges</p>
                                </td>
                                <td>
                                    <RoomSelect roomPrice={rooms.priceforFiveNights} />
                                </td>
                                <td>
                                    <div className="flex flex-col">
                                        <span className="font-semibold text-xl">US${rooms.priceforFiveNights}</span>
                                        <Button className="bg-blue-600 p-5 rounded-[0.5rem] w-full text-white hover:bg-blue-600" onClick={()=>handleReserve(rooms)}>Reserve</Button>
                                    </div>
                                    <h4 className="mt-5 font-semibold">You'll be taken to the next step</h4>
                                    <ul className="flex flex-col gap-2 my-2 text-xs list-disc">
                                        <li>Cofnirmation is immediate</li>
                                        <li>No registration required</li>
                                        <li>No booking or credit card fee</li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            })}
        </div>
    )
}

export default AvailableRooms
