import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import Counts from "./Counts";
import { useContext } from "react";
import { HomeInputContext, HomeInputContextType } from "@/contexts/HomeInputContext";

const OptionPop = () => {
  const {formData,setFormData}=useContext<HomeInputContextType>(HomeInputContext)
  const guests=formData?.guests;
  return (
    <div>
      <Popover>
        <PopoverTrigger className="pop-trig text-gray-500">
          {`Adults-${guests?.adult} Children-${guests?.children} Rooms-${guests?.room}`}
        </PopoverTrigger>
        <PopoverContent className="bg-white text-black">
          <Counts />
        </PopoverContent>
      </Popover>
    </div>
  )
}

export default OptionPop
