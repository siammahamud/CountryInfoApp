import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";
import { Modal } from "./Modal";

const Countries = () => {
  const [countries, setcountries] = useState([]);
  const  [country, setcountry] = useState({});
  const [isModalOpen, setisModalOpen] = useState(false);
  // const [country, setcountry] = useState({});  
//  function for filtering data from Europe,America region countries and india, israel also 
  const filterFunc = (data) => {
    const filterData = data.filter(
      (country) =>
        country?.region !== "Europe" &&
        country?.region !== "Americas" &&
        country?.name?.common !== "India" &&
        country?.name?.common !== "Israel"
    );
    return filterData;
  };
  // data fetching from rest countries api
  useEffect(() => {
    const fetchData = async () => {
      const countriesData = await fetch("https://restcountries.com/v3.1/all");
      const data = await countriesData.json();
      const filterdData = filterFunc(data);
      setcountries(filterdData);
      console.log(filterdData);
    };
    fetchData();
  }, []);
 
  const handleDetails = (country) => {
    const currency = Object.entries(country?.currencies || {}).map((crncy) => {
      const [code, {name, symbol}] = crncy;
      return {code, name, symbol}
    })
    const language = Object.entries(country?.language || {})[1];
    

    setcountry({
      ...country,
      flag: country?.flags?.svg,
      population:country?.population,
      region:country?.region,
      capital:country?.capital,
      currency: currency,
      language:language

    })
  setisModalOpen(true)
  }
const closeModal = () => {
  setisModalOpen(false)
}
  return (
    <> 
   {/* Modal */}
   {isModalOpen && <Modal country={country} closeModal={closeModal}/>}
  {/* main content all countries */}
    <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4  gap-12 w-[100%] py-10 bg-slate-200 px-8">
      {countries.map((country) => (
        <Country key={country?.cca3} country={country}
        handleDetails={handleDetails} />
      ))}
    </div>
     </>
  );
  
};

export default Countries;
