/* eslint-disable react/prop-types */


export const Modal = ({country,closeModal}) => {
 
  return (
    <div
    onClick={closeModal}
    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div onClick={(e) => e.stopPropagation()} className="relative rounded-lg max-w-md w-full bg-gradient-to-r from-indigo-400 to-teal-300">
            <h2 className=" p-2 text-center text-3xl font-bold mb-4 text-blue-600">{country?.name?.common}</h2>
            <div className="px-8"> <img src={country?.flag} alt={`${country?.name?.common} flag`} className="mb-4" /></div>
            <div className="px-8 pt-4 pb-16 text-lg">
            <p><strong>Population :</strong> {country?.population}</p>
            <p><strong>Region :</strong> {country?.region}</p>
            <p><strong>Capital :</strong> {country?.capital ? country?.capital[0] : <span> No capital exists</span>}</p>
            <p><strong>Currency :</strong> {country?.currency.length > 0 ? country?.currency.map(({code,name, symbol}) =>  <span key={code}> {code}({name})-{symbol} </span>):<span>No Currency available</span>}</p>
            <p><strong>Language:</strong> {country?.languages ? country?.languages[0] : <span>No Language</span>}</p>
            <button
              className=" bg-red-500 text-white px-4 py-2 rounded absolute bottom-4 right-5"
              onClick={closeModal}
            >
              Close
            </button>
            </div>
          </div>
        </div>
  )
}
