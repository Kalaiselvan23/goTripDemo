import React from 'react'
import { Link } from 'react-router-dom'

const PaymentFailed = () => {
  return (
    <div className='w-full flex flex-col h-screen bg-gray-500 justify-center items-center'>
      <img src='/assets/payment_failed.png' className='w-2/5' alt="payment-failed"/>
      <Link to={"/"} className='text-blue-500 underline'>Redirect to Home page</Link>
    </div>
  )
}

export default PaymentFailed
