/* eslint-disable react/prop-types */


export const Modal = ({country,closeModal}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">{country?.name?.common}</h2>
            <img src={country?.flag} alt={`${country?.name?.common} flag`} className="mb-4" />
            <p><strong>Population:</strong> {country?.population}</p>
            <p><strong>Region:</strong> {country?.region}</p>
            <p><strong>Capital:</strong> {country?.capital?.[0]}</p>
            <p><strong>Currency:</strong> {country?.currency.map(({code,name, symbol}) => {
              return (
                <li> {code}({name})-{symbol} </li>
              )
            } )}</p>
            <p><strong>Language:</strong> {country?.language}</p>
            <button
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded float-right"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
  )
}
