import { Button } from "@/components/ui/button"
import { SelectedHotelContext } from "@/contexts/SelectedHotelContext"
import axios from "axios"
import { useContext } from "react"
import { Resolver, SubmitHandler, useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { selectedHotelContextType } from '../contexts/SelectedHotelContext';
import HomeInput from '@/components/HomeInput';
import { HomeInputContext, HomeInputContextType } from "@/contexts/HomeInputContext"
import HotelCard from "@/components/HotelCard"

type FormValues = {
    name: string,
    email: string,
    number: string,
    address1: string,
    address2: string,
    state: string,
    zipCode: number,
    specialRequest: string,
}

const Payment = () => {
    const { selectedHotel, setSelectedHotel } = useContext<selectedHotelContextType>(SelectedHotelContext)
    const { formData, setFormData } = useContext<HomeInputContextType>(HomeInputContext)
    const { register, handleSubmit, formState: { errors }, watch } = useForm<FormValues>()
    const navigate = useNavigate();
    const FromDate = Date.parse(formData.dates.from);
    const ToDate = Date.parse(formData.dates.to);
    const diffDate = Math.abs(ToDate - FromDate);
    const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
        try {
            const sessionId = await axios.post("http://localhost:8000/api/checkout-session", {
                // roomType: "Standard Room",
                // priceForFiveNights: 900,
                ...selectedHotel,
                roomCount:formData.guests.room,
            })
            window.location.assign(sessionId.data)
        }
        catch (err) {
            console.log(err);
        }
    }
    return (
        <div className="pt-20 px-10 mx-auto grid grid-cols-[70%,auto] gap-10 max-md:grid-cols-1">
            <form onSubmit={handleSubmit(onSubmit)} className="detail-form flex flex-col gap-3">
                <h2 className="text-2xl font-semibold">Let us know who you are</h2>
                <input placeholder="Full name" {...register('name', { required: true })} required />
                {errors.name ? <p>{errors.name.message}</p> : ""}
                <div className="flex gap-2 max-md:flex-col">
                    <input placeholder="Email" {...register('email')} required />
                    <input placeholder="Phone number" {...register('number')} required />
                </div>
                <input placeholder="Address Line 1" {...register('address1')} required />
                <input placeholder="Address Line 2(optional)" {...register('address2')} />
                <div className="flex gap-2">
                    <input placeholder="State/Province/Region" {...register('state')} required />
                    <input placeholder="Zip code/Postal Code" {...register('zipCode')} required />
                </div>
                <textarea placeholder="Special Requests..." className="p-4 border-2" {...register('specialRequest')} />
                <div>
                    <Button className="bg-blue-600 p-7 text-white font-bold rounded-[0.2rem] w-full hover:bg-blue-500" >Pay</Button>
                </div>
            </form>
            <div className="p-4 mt-10 rounded-[0.2rem] summary-div">
                <h3 className="text-2xl font-semibold col-span-2">Your booking details</h3>
                <div className="grid grid-cols-2 gap-x-3 col-span-2">
                    <img alt="hotel-img" src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?cs=srgb&dl=pexels-thorsten-technoman-338504.jpg&fm=jpg" />
                    <div>
                        <h2 className="font-semibold">{selectedHotel.name}</h2>
                        <h3 className="font-medium">{selectedHotel.state},{selectedHotel.country}</h3>
                        <div className="flex items-center gap-1">
                            <span className="bg-blue-500 p-[5px] rounded-[0.2rem] text-white font-semibold">{selectedHotel.rating}</span>
                            <p className="font-semibold text-sm">Exception</p>
                            <span className="text-xs font-semibold text-gray-700 mx-1">{selectedHotel.reviews.length} reviews</span>
                        </div>
                    </div>
                </div>
                <div className="border-r-2 in-div border-gray-200 p-3">
                    <h3>Check in </h3>
                    <p className="font-semibold text-xl">{`${new Date(FromDate).getDate()}/${new Date(FromDate).getMonth()}/${new Date(FromDate).getFullYear()}`}</p>
                    <p className="text-gray-400">15:00 - 23.00</p>
                </div>
                <div className=" border-gray-200 in-div p-3 text-right ">
                    <h3>Check-out</h3>
                    <p className="font-semibold text-xl">
                        {`${new Date(ToDate).getDate()}/${new Date(ToDate).getMonth()}/${new Date(ToDate).getFullYear()}`}
                    </p>
                    <p className="text-gray-400">01:00 - 11:00</p>
                </div>
                <div className="col-span-2 row-span-1 flex flex-col gap-1 border-t-2 p-3 border-gray-200 justify-center">
                    <h3 className="text-base">Total length of the stay</h3>
                    <p className="font-semibold text-xl">{"no of nights"}</p>
                    <Link className="text-blue-400 underline" to={"/"}>Travel on different dates</Link>
                </div>
                <div className="col-span-2 border-t-2 p-3 gap-1 border-gray-200 justify-center">
                    <h3>You selected:</h3>
                    <div className="flex items-center justify-between">
                    <span className="font-semibold text-xl">{selectedHotel.selectedHotel.roomType}</span>
                    <span className="text-gray-500">{`${formData.guests.adult} adults,${formData.guests.children} children`}</span>
                    </div>
                    <Link to="/" className="text-blue-400 underline">Change your location</Link>
                   
                </div>
            </div>
        </div>
    )
}

export default Payment
