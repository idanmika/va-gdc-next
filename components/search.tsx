'use client'
import React, { useState } from 'react'

const Searchbar = () => {
    const [searchPrompt, setSearchPrompt] = useState("");
  return (
    <div className ="flex flex-col lg:flex-row w-full item-left gap-3">
        <input className='w-full p-3 border-4 border-neutral-200 rounded-lg text-gray-500' 
        type='text' 
        placeholder='input court house' 
        value={searchPrompt}
        onChange={(e) => setSearchPrompt(e.target.value)}
        />
        <div>
            <button
                className={'cursor-pointer bg-gray-800'}
            />
        </div>
    </div>
  )
}
export default Searchbar
