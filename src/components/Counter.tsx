import React, { Dispatch, useState } from 'react'
import { Button } from './ui/button'
import { guestCountType } from './Counts'
import { formDataType } from '@/contexts/HomeInputContext'
type props={
  count:guestCountType,
  setFormData:Dispatch<formDataType>,
  guest:"adult"|"children"|"room",
}
const Counter = ({setFormData,count,guestType}:props) => {
  const handleSub=()=>{
    // setCount((prev)=>{
    //   return {...prev,guests:{...prev.guests,guest:prev[guest]-=1}}
    // })
    setFormData((prev)=>{
      return { ...prev, guests: { ...prev.guests, [guestType]: prev.guests[guestType] -1 } };
    })
  }
  const handleAdd=()=>{
    setFormData((prev) => {
      return { ...prev, guests: { ...prev.guests, [guestType]: prev.guests[guestType] + 1 } };
    });
  }
  return (
    <div className='flex items-center gap-2'>
      <Button className='counter-btn' onClick={handleSub}>-</Button>
      <span className='w-5 text-center'>{count[guestType]}</span>
      <Button className='counter-btn' onClick={handleAdd}>+</Button>
    </div>
  )
}

export default Counter
