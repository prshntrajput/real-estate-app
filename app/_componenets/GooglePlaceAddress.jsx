"use client"

import { MapPin } from 'lucide-react';
import React from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
const GooglePlaceAddress = () => {
  return (
    <div className='flex w-full items-center '>
        <MapPin className='h-9 w-10 text-purple-800 rounded-l-lg p-2 bg-purple-400'/>
    <GooglePlacesAutocomplete
       apiKey={process.env.NEXT_PUBLIC_GOOGLE_PLACE_API_KEY}
       selectProps={{
        placeholder:"Search for Property",
        isClearable:true,
        className:"w-full",
        onChange:(place)=>{console.log(place)}
       }}
       />
       
    </div>
  )
}

export default GooglePlaceAddress