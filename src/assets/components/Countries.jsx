import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";
import { Modal } from "./Modal";
import { Header } from "./header";

const Countries = () => {
  const [countries, setcountries] = useState([]);
  const [country, setcountry] = useState({});
  const [isModalOpen, setisModalOpen] = useState(false);
  // const [sortCountry, setsortCountry] = useState({});

 
  
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
      // console.log(filterdData);
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
      <Header/>
      {/* Modal */}
      {isModalOpen && <Modal country={country} closeModal={closeModal} />}
      {/* main content all countries */}
      <div className="pt-24 grid place-items-center grid-cols-1  md:grid-cols-2 lg:grid-cols-4  gap-12 w-[100%] py-10 bg-gradient-to-r bg-gray-200 px-8">
        { countries
          .map((country) => (
            <Country
              key={country?.cca3}
              country={country}
              handleDetails={handleDetails}
            />
          ))}
      </div>
    </>
  );
};

export default Countries;
