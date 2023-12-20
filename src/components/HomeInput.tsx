import { DatePickerWithRange } from "@/components/DatePicker"
import OptionPop from "@/components/OptionPop"
import { Button } from "@/components/ui/button"
import { IoSearch } from "react-icons/io5";
import InputCombo from "./InputCombo";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useQuery } from "react-query";
import { RotatingLines } from "react-loader-spinner"
import { useContext} from "react";
import { HomeInputContext, HomeInputContextType } from "@/contexts/HomeInputContext";
import api from "@/utils/api";
const HomeInput = () => {
  const navigate = useNavigate();
  const {formData,setFormData}=useContext<HomeInputContextType>(HomeInputContext);
  const onSubmit = async (event: Event) => {
    event.preventDefault();
    if(formData.country && formData.guests.adult>0 && formData.guests.room!=0)
    {
      api.post("/", {
        country:formData.country
      }).then(res => res.data)
        .then((data) => navigate(`/hotels/${data._id}`))
    }
  }
  const { data, isLoading } = useQuery('countrys', async () => {
    const res = await api.get('/getCountries')
    return res.data
  })
  if (isLoading) {
    return <div className="w-full h-screen flex justify-center items-center">
      <RotatingLines
        strokeColor="blue"
        strokeWidth="5"
        animationDuration="0.2"
        width="45"
        visible={true}
      />
    </div>
  }
  return (
    <form onSubmit={onSubmit} className="inputs bg-white rounded-[5rem] w-fit pl-5 p-2 grid grid-cols-5 gap-4 my-5 mx-auto max-md:grid-cols-1 max-md:rounded-[0.4rem] max-sm:mx-3">
      <label className="input-label border-r-2">
        <span>Location</span>
        <InputCombo stateFn={setFormData} countries={data} />
      </label>
      <label className="input-label col-span-2">
        <span>Check in - Check out</span>
        <DatePickerWithRange stateFn={setFormData} className="bg-white outline-none" />
      </label>
      <label className="input-label">
        <span>Guest</span>
        <OptionPop/>
      </label>
      <Button className="bg-blue-500 flex items-center gap-2 hover:bg-blue-500 w-full h-full rounded-[5rem]">
        <IoSearch />
        <span>
          Search
        </span>
      </Button>
    </form>
  )
}

export default HomeInput
