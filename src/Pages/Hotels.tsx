import HomeInput from "@/components/HomeInput";
import { useParams } from "react-router-dom"
import HotelCard from "../components/HotelCard.tsx"
import FilterBox from "../components/FilterBox.tsx"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet.tsx";
import { useQuery } from "react-query";
import { RotatingLines } from "react-loader-spinner"
import api from "@/utils/api.ts";

const fetchData = async (countryId: string) => {
    const res = await api.get(`/country?countryId=${countryId}`)
    return res.data
}
const Hotels = () => {
    const { countryId } = useParams();
    const { data, isLoading } = useQuery('hotels', () => fetchData(countryId))
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
    return (
        <div className="pt-24 px-20 max-sm:px-2">
            <h2 className="font-bold text-center text-2xl p-3">Find Your Dream Luxury Hotel</h2>
            <HomeInput />
            <div className="grid grid-cols-[20%_auto] gap-2 max-md:grid-cols-1">
                <div className="max-md:hidden">
                    <FilterBox />
                </div>
                <div>
                    <div className="flex w-full justify-between p-5 border-b-2">
                        <p className="font-medium text-base"><span className="font-semibold">{data.hotels.length}</span> in {data.country}</p>
                        <span className="font-semibold text-blue-500 max-md:hidden">Top picks for your search</span>
                        <div className="md:hidden">
                            <Sheet key="top">
                                <SheetTrigger>Filters</SheetTrigger>
                                <SheetContent className="bg-white" side={"top"}>
                                    <FilterBox />
                                </SheetContent>
                            </Sheet>
                        </div>
                    </div>
                    {data.hotels.map((hotel) => {
                        return <HotelCard hotel={hotel} />
                    })}
                </div>
            </div>
        </div>
    )
}
export default Hotels
