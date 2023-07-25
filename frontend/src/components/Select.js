import React, { useEffect, useLayoutEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";

function Select({ chooseCountry, loading }) {
  const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cape Verde",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Republic of Congo",
    "Democratic Republic of the Congo",
    "Costa Rica",
    "Côte d'Ivoire",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Korea",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Korea",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States of America",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);
  const [isDivVisible, setDivVisible] = useState(true);
  const [showDiv, setShowDiv] = useState(true);

  const handleSelectChange = () => {
    setDivVisible(false);
    localStorage.setItem("isDivVisible", "false");
  };

  useLayoutEffect(() => {
    const storedIsDivVisible = localStorage.getItem("isDivVisible");
    if (storedIsDivVisible === "false") {
      setDivVisible(false);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowDiv(false); // hide the div when the user starts scrolling
      } else {
        setShowDiv(true); // show the div when the user scrolls back to the top
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isDivVisible && (
        <div className="hidden md:flex relative -mt-10 z-10 w-52 justify-center items-center">
          <span className="absolute top-0 left-0 w-full h-full bg-purple-600 rounded-customRounded1"></span>
          <span className="absolute top-0 left-0 w-full h-full rounded-customRounded1"></span>
          <div className="relative p-4 text-center text-white">
            <h2 className="text-2xl font-bold">Hello!</h2>
            <p>Choose a country from dropdown</p>
          </div>
        </div>
      )}
      {selected && selected !== "Blank" && showDiv && (
        <div className="hidden md:flex relative -mt-10 z-10 w-52 justify-center items-center">
          <span className="absolute top-0 left-0 w-full h-full bg-purple-600 rounded-customRounded1"></span>
          <span className="absolute top-0 left-0 w-full h-full rounded-customRounded1"></span>
          <div className="relative p-4 text-center text-white">
            {loading ? (
              <span className="text-2xl ml-3 mt-2">Loading ...</span>
            ) : (
              <span className="text-2xl ml-3 mt-2">Scroll down</span>
            )}
          </div>
        </div>
      )}
      <div className="relative w-full md:w-1/4 font-medium mt-2 mx-4">
        <div
          onClick={() => {
            if (loading) {
              return;
            }
            setOpen(!open);
            handleSelectChange();
          }}
          className={`
          ${
            open
              ? "bg-white w-full p-2 flex items-center justify-between border border-sky-500  dark:border-slate-800 rounded-t"
              : "bg-white w-full p-2 flex items-center justify-between rounded border border-sky-500  dark:border-slate-800"
          }`}
        >
          {selected ? selected : "Select country"}
          <BiChevronDown
            size={20}
            className={`${
              open && "rotate-180"
            } text-sky-500 dark:text-slate-800`}
          />
        </div>
        <ul
          className={`bg-white overflow-y-auto absolute w-full
           ${
             open
               ? "max-h-60 border border-t-0 rounded-b border-sky-500 dark:border-slate-800"
               : "hidden"
           }
           `}
        >
          <div className="flex items-center px-2 sticky top-0 bg-white">
            <AiOutlineSearch size={18} className="text-gray-500" />
            <input
              value={inputValue}
              onChange={(event) => {
                setInputValue(
                  event.target.value.charAt(0).toUpperCase() +
                    event.target.value.toLowerCase().slice(1)
                );
              }}
              type="text"
              placeholder="Enter country name"
              className="placeholder:text-gray-500 p-2 outline-none"
            />
          </div>
          {countries.map((country) => (
            <li
              key={country.index}
              className={`p-2 text-sm hover:bg-sky-500 dark:hover:bg-slate-800 hover:text-white 
                ${
                  country?.toLowerCase() === selected.toLowerCase() &&
                  "bg-sky-500 dark:bg-slate-800 text-white"
                }
                ${country.startsWith(inputValue) ? "block" : "hidden"}`}
              onClick={() => {
                if (country?.toLowerCase() !== selected.toLowerCase()) {
                  setSelected(country);
                  setOpen(false);
                  setInputValue("");
                }
                chooseCountry(country);
              }}
            >
              {country}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Select;
