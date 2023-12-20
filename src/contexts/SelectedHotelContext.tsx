import { hotelType } from "@/components/HotelCard";
import React, { createContext, useState } from "react";
export type hotelType = {
    name: string;
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
    selectedRoom: {
      roomType: string;
      priceforFiveNights: number;
      _id: string;
    };
    _id: string;
    createdAt: string;
    updatedAt: string;
  }
export type selectedHotelContextType={
    hotel:hotelType,
    setHotel:React.Dispatch<React.SetStateAction<hotelType | undefined>>
}
export const SelectedHotelContext=createContext<selectedHotelContextType|null>(null)

export const SelectedHotelContextProvider=({children}:{children:React.ReactNode})=>{
    const [selectedHotel,setSelectedHotel]=useState<hotelType>();
    return <SelectedHotelContext.Provider value={{selectedHotel,setSelectedHotel}}>
        {children}
    </SelectedHotelContext.Provider>
}