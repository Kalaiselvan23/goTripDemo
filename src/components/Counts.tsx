import { useContext, useState } from "react"
import Counter from "./Counter"
import { HomeInputContext } from "@/contexts/HomeInputContext"
const Counts = () => {
  // const [guestCount,setGuestCount]=useState<guestCountType>({
  //   adult:0,
  //   children:0,
  //   room:0,
  // })
  const {setFormData,formData}=useContext(HomeInputContext);
  return (
    <div>
      <div className="options">
        <span>Adults</span>
        <Counter guestType='adult' setFormData={setFormData} count={formData.guests}/>
      </div> 
      <div className="options">
        <span>Children</span>
        <Counter guestType='children' setFormData={setFormData} count={formData.guests}/>
      </div>  
      <div className="options">
        <span>Room</span>
        <Counter guestType='room' setFormData={setFormData} count={formData.guests}/>
      </div>
    </div>
  )
}

export default Counts
