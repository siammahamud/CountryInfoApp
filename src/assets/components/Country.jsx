/* eslint-disable react/prop-types */


const Country = ({country, handleDetails}) => {

  return (
    <div className="w-fit shadow-lg  h-auto p-4 bg-white rounded-lg flex flex-col justify-between">
     <div className="space-y-2 text-center">
     <h3 className="text-2xl font-bold text-indigo-500">{country?.name?.common}</h3>
     <img className='w-60' src={country?.flags?.svg}/>
     </div>
      <div className="space-y-2">
      <h3><strong>Capital</strong> : {country?.capital}</h3>
      <h3><strong>Population</strong> : {country?.population}</h3>
      <h3><strong>Currency</strong> :</h3>
      <button 
       onClick={() => handleDetails(country)}
       className="w-full text-center mx-auto p-2 bg-cyan-300  rounded-md ">Show Details</button>
      </div>
     
    </div>
  )
}

export default Country
