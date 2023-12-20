// import ImageCorousal from "./ImageCorousal";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "./ui/button";
import { useContext } from "react";
import { SelectedHotelContext, selectedHotelContextType } from '../contexts/SelectedHotelContext';

export type hotelType = {
hotel:{  name: string;
  country: string;
  state: string;
  rating: number;
  distance: number;
  amenities: string[];
  reviews: {
    name: string;
    email: string;
    review: string;
    _id: string;
  }[];
  freeCancellation: boolean;
  offers: boolean;
  price: number;
  facilities: string[];
  image: string;
  rooms: {
    roomType: string;
    priceforFiveNights: number;
    _id: string;
  }[];
  _id: string;
  createdAt: string;
  updatedAt: string;
},
  layout?:string,
}
const HotelCard = ({ hotel,layout}: hotelType) => {
  const navigate=useNavigate();
  const location=useLocation();
  const currentUrl=location.pathname;
  const {selectedHotel,setSelectedHotel}=useContext<selectedHotelContextType>(SelectedHotelContext);
  const handleSubmit=()=>{
    setSelectedHotel(hotel)
    navigate(`${currentUrl}/${hotel._id}`)
  }
  return (
    <div className={`h-80 flex gap-2 p-3 max-md:flex-col`+`${layout==='horizontal'?" payment":""}`}>
      <img className="h-full w-96 rounded-[1rem] max-md:w-full" src="https://thumbs.dreamstime.com/b/luxury-beach-resort-bungalow-near-endless-pool-over-sea-sunset-evening-tropical-island-summer-vacation-concept-39672543.jpg" alt="img" />
      <div className="w-full grid grid-cols-[70%_auto] max-md:grid-cols-1">
        <div className="max-md:col-span-2">
          <h3 className="text-2xl font-bold">{hotel.name}</h3>
          <h3 className="font-semibold">{hotel.state},{hotel.country}</h3>
        </div>
        <div className="grid grid-row-2 justify-self-end font-semibold grid-cols-[auto_3rem] gap-x-1 grid-rows-[2rem,1rem]  w-[8rem] justify-center items-center">
          <span className="text-sm max-md:hidden">Exceptional</span>
          <span className="col-start-1 text-gray-500 font-normal text-sm max-md:hidden">{hotel.reviews.length} reviews</span>
          <span className="p-3 rounded-xl text-white col-start-2 row-start-1 row-end-3 bg-blue-500">{hotel.rating}</span>
        </div>
        <div className="col-span-2 text-gray-500">
          <p>{hotel.state},{hotel.country},{hotel.distance}kms from city centre</p>
        </div>
        <div className="">
          <span className="font-semibold">{hotel.rooms[0].roomType}</span>
          <p className="font-semibold text-xs text-orange-700">Free cancellation</p>
          <p className="text-orange-700 text-[.8rem] max-md:hidden">You can cancel later, so lock in this great price today.</p>
        </div>
        <div className="flex flex-col items-end gap-2 max-md:hidden">
          <span className="text-sm font-medium text-gray-500">8 nights,2 adults</span>
          <span className="font-bold text-xl">US${hotel.rooms[0].priceforFiveNights}</span>
          <span className="text-gray-500 font-medium text-sm">+US$282 taxes and charges</span>
        </div>
        <div>
          <div className="flex gap-1">
            {hotel.amenities.map((item: string) => {
              return <span className="border-2 border-gray-300 p-1 text-xs rounded-lg">{item}</span>
            })}
          </div>
        </div>
        <Button onClick={handleSubmit} className="bg-blue-600 rounded-[0.2rem] hover:bg-blue-500 text-white font-semibold max-sm:w-full">See Availability</Button>
      </div>
    </div>
  )
}

export default HotelCard
