/* eslint-disable react/prop-types */

import { useState } from "react"


const Country = ({country, handleDetails}) => {
const [toggles, setToggles] = useState(false);

const handleBtnClick = () => {
     setToggles(!toggles);
     handleDetails(country);
}
  return (
    <div className="min-h-[22rem] bg-gradient-to-b from-cyan-300 to-indigo-400  w-fit shadow-md hover:shadow-xl  p-4 rounded-lg flex flex-col justify-between ">
     <div className="space-y-2 text-center">
     <h3 className="text-2xl font-bold ">{country?.name?.common}</h3>
     <img onClick={()=>handleDetails(country)} className='w-60 cursor-pointer' src={country?.flags?.svg}/>
     </div>
      <div className="space-y-2">
      <h3><strong>Region </strong>: {country?.region}</h3>
      <h3><strong>Population </strong>: {country?.population}</h3>
      <button 
       onClick={handleBtnClick}
       className="hover:bg-red-500 w-full text-center mx-auto p-2 font-semibold bg-black/50 text-white  rounded-md ">
        {
          setToggles ? "Details" : "Visited"
        }
       </button>
      </div>
     
    </div>
  )
}

export default Country
