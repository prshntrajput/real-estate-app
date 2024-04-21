import GooglePlaceAddress from '@/app/_componenets/GooglePlaceAddress'
import { Button } from '@/components/ui/button'
import React from 'react'


const AddNewListing = () => {
  return (
    <div className='flex flex-col  items-center gap-4 p-8'>
        <h2 className='font-bold'>Add New Listing</h2>
        <div className='p-4 rounded-lg border shadow-md flex flex-col gap-4'>
            <h4 className='text-sm text-gray-800'>Enter Address which you want to list</h4>
             <GooglePlaceAddress/>
             <Button className="bg-purple-800">Next</Button>
        </div>
    </div>
  )
}

export default AddNewListing