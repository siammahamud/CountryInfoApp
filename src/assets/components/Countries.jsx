import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";
import { Modal } from "./Modal";
import { Header } from "./header";
import { CountriesFooter } from "./Footer";
import Loader from "./loader";

const Countries = () => {
  /// states ///
  const [countries, setcountries] = useState([]);
  const [country, setcountry] = useState({});
  const [isModalOpen, setisModalOpen] = useState(false);
  const [loader, setloader] = useState(true);
  const [searchQuary, setsearchQuary] = useState("");
  const [sortQuary, setsortQuary] = useState("");
  const [filteredCountries, setfilteredCountries] = useState([]);
/// function for handle sorting operation 
  const handleSorting = (e) => {
    const value = e.target.value;
    const independent = countries.filter((country) => country.independent);
    const notIndependent = countries.filter((country) => country.independent !== true)
    const sortedCountries = filteredCountries.sort((a,b) => {
      switch(value) {
        case "ascending":
          return a?.name?.common.localeCompare(b?.name?.common);
        case "descending":
          return b?.name?.common.localeCompare(a?.name?.common);
        case "population-ascending":
          return a?.population - b?.population;
        case "population-descending":
            return b?.population - a?.population;         
        default :
          return b?.population - a?.population;
      }
    })
    setsortQuary(value);
    if(value === "independent"){
      setfilteredCountries(independent)
    }else if(value === "notIndependent"){
      setfilteredCountries(notIndependent)
    }else{
      setfilteredCountries(sortedCountries);
    }
  }


  ///function for filtering searched data
  const handleSearch = (e) => {
    const value = e.target.value;
    setsearchQuary(value);
    const fltrCountry = countries.filter((country) =>
      country?.name?.common.toLowerCase().includes(value.toLowerCase())
    );
    setfilteredCountries(fltrCountry);
  };

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
      try {
        const countriesData = await fetch("https://restcountries.com/v3.1/all");
        const data = await countriesData.json();
        const filterdData = filterFunc(data);
        setcountries(filterdData);
        setfilteredCountries(filterdData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setloader(false);
      }
    };
  
    fetchData();
  }, []);
  

  const handleDetails = (country) => {
    const currency = Object.entries(country?.currencies || {}).map((crncy) => {
      const [code, { name, symbol }] = crncy;
      return { code, name, symbol };
    });
    const language = Object.entries(country?.languages || {}).map((l) => {
      const [code, name] = l;
      return code, name;
    });

    setcountry({
      ...country,
      flag: country?.flags?.svg,
      population: country?.population,
      region: country?.region,
      capital: country?.capital,
      currency: currency,
      languages: language,
    });
    setisModalOpen(true);
  };
  const closeModal = () => {
    setisModalOpen(false);
  };
  return (
    <>
    {loader && <Loader/>}
      {/* Header  */}
      <Header searchQuary={searchQuary} handleSearch={handleSearch} sortQuary={sortQuary} handleSorting={handleSorting}/>
      {/* Modal */}
      {isModalOpen && <Modal country={country} closeModal={closeModal} />}
      {/* main content all countries */}
      <div className="pt-24 grid place-items-center grid-cols-1  md:grid-cols-2 lg:grid-cols-4  gap-12 w-[100%] py-10 bg-gradient-to-r bg-gray-200 px-8">
        {filteredCountries
          .map((country) => (
            <Country
              key={country?.cca3}
              country={country}
              handleDetails={handleDetails}
            />
          ))}
      </div>
      {/* Footer  */}
      <CountriesFooter />
    </>
  );
};

export default Countries;
