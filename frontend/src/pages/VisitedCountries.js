import { useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

import CountryForm from "../components/CountryForm";
import CountryDetails from "../components/CountryDetails";
import Map from "../components/VisitedMap";

import { useAuthContext } from "../hooks/useAuthContext";
import { useCountriesContext } from "../hooks/useCountriesContext";

const VisitedCountries = () => {
  const { countries, dispatch } = useCountriesContext();
  const { user } = useAuthContext();

  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch("/api/countries", {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "GET_COUNTRIES", payload: json });
      }
    };
    if (user) {
      fetchCountries();
    }
  }, [dispatch, user]);

  const africa =
    countries &&
    countries.filter((country) =>
      [
        "Algeria",
        "Angola",
        "Benin",
        "Botswana",
        "Burkina Faso",
        "Burundi",
        "Cameroon",
        "Cape Verde",
        "Central African Republic",
        "Chad",
        "Comoros",
        "Democratic Republic of the Congo",
        "Djibouti",
        "Egypt",
        "Equatorial Guinea",
        "Eritrea",
        "Eswatini",
        "Ethiopia",
        "Gabon",
        "Gambia",
        "Ghana",
        "Guinea",
        "Guinea-Bissau",
        "Ivory Coast",
        "Kenya",
        "Lesotho",
        "Liberia",
        "Libya",
        "Madagascar",
        "Malawi",
        "Mali",
        "Mauritania",
        "Mauritius",
        "Morocco",
        "Mozambique",
        "Namibia",
        "Niger",
        "Nigeria",
        "Republic of Congo",
        "Rwanda",
        "Sao Tome and Principe",
        "Senegal",
        "Seychelles",
        "Sierra Leone",
        "Somalia",
        "South Africa",
        "South Sudan",
        "Sudan",
        "Tanzania",
        "Togo",
        "Tunisia",
        "Uganda",
        "Zambia",
        "Zimbabwe",
      ].includes(country.name)
    );

  const australiaOceania =
    countries &&
    countries.filter((country) =>
      [
        "Australia",
        "Fiji",
        "Kiribati",
        "Marshall Islands",
        "Micronesia",
        "Nauru",
        "New Caledonia",
        "New Zealand",
        "Palau",
        "Papua New Guinea",
        "Samoa",
        "Solomon Islands",
        "Tonga",
        "Tuvalu",
        "Vanuatu",
      ].includes(country.name)
    );

  const centralAmerica =
    countries &&
    countries.filter((country) =>
      [
        "Antigua and Barbuda",
        "Bahamas",
        "Barbados",
        "Belize",
        "Costa Rica",
        "Cuba",
        "Dominica",
        "Dominican Republic",
        "El Salvador",
        "Grenada",
        "Guatemala",
        "Haiti",
        "Honduras",
        "Jamaica",
        "Nicaragua",
        "Panama",
        "Puerto Rico",
        "Saint Kitts and Nevis",
        "Saint Lucia",
        "Saint Vincent and the Grenadines",
        "Trinidad and Tobago",
      ].includes(country.name)
    );

  const centralAsia =
    countries &&
    countries.filter((country) =>
      [
        "Kazakhstan",
        "Kyrgyzstan",
        "Russia",
        "Tajikistan",
        "Turkmenistan",
        "Uzbekistan",
      ].includes(country.name)
    );

  const eastSouthAsia =
    countries &&
    countries.filter((country) =>
      [
        "Brunei",
        "Myanmar",
        "Cambodia",
        "China",
        "Indonesia",
        "Japan",
        "Laos",
        "Malaysia",
        "Mongolia",
        "North Korea",
        "Philippines",
        "Taiwan",
        "Singapore",
        "South Korea",
        "Thailand",
        "Timor-Leste",
        "Vietnam",
      ].includes(country.name)
    );

  const europe =
    countries &&
    countries.filter((country) =>
      [
        "Albania",
        "Andorra",
        "Austria",
        "Belarus",
        "Belgium",
        "Bosnia and Herzegovina",
        "Bulgaria",
        "Croatia",
        "Cyprus",
        "Czech Republic",
        "Denmark",
        "United Kingdom",
        "Estonia",
        "Finland",
        "France",
        "Germany",
        "Greece",
        "Vatican",
        "Hungary",
        "Iceland",
        "Ireland",
        "Italy",
        "Kosovo",
        "Latvia",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Malta",
        "Moldova",
        "Monaco",
        "Montenegro",
        "Netherlands",
        "Macedonia",
        "Norway",
        "Poland",
        "Portugal",
        "Romania",
        "San Marino",
        "Republic of Serbia",
        "Slovakia",
        "Slovenia",
        "Spain",
        "Sweden",
        "Switzerland",
        "Ukraine",
      ].includes(country.name)
    );

  const middleEast =
    countries &&
    countries.filter((country) =>
      [
        "Armenia",
        "Azerbaijan",
        "Bahrain",
        "Georgia",
        "Iran",
        "Iraq",
        "Israel",
        "Jordan",
        "Kuwait",
        "Lebanon",
        "Oman",
        "Qatar",
        "Saudi Arabia",
        "Syria",
        "Turkey",
        "United Arab Emirates",
        "Yemen",
      ].includes(country.name)
    );

  const northAmerica =
    countries &&
    countries.filter((country) =>
      ["Canada", "Mexico", "United States of America", "Greenland"].includes(
        country.name
      )
    );

  const southAmerica =
    countries &&
    countries.filter((country) =>
      [
        "Argentina",
        "Bolivia",
        "Brazil",
        "Chile",
        "Colombia",
        "Ecuador",
        "French Guiana",
        "Guyana",
        "Paraguay",
        "Peru",
        "Suriname",
        "Uruguay",
        "Venezuela",
      ].includes(country.name)
    );

  const southAsia =
    countries &&
    countries.filter((country) =>
      [
        "Afghanistan",
        "Bangladesh",
        "Bhutan",
        "India",
        "Maldives",
        "Nepal",
        "Pakistan",
        "Sri Lanka",
      ].includes(country.name)
    );

  return (
    <>
      <div className="">
        <CountryForm content={content} />

        <Map setTooltipContent={setContent} countries={countries} />
        <Tooltip
          className="px-3 py-3 bg-slate-800"
          anchorId="map"
          content={content}
          multiline={true}
          float
        />
        <h1 className="text-2xl text-center mb-4">
          Visited countries ({countries && countries.length} of 200):
        </h1>

        <div className="m-6">
          <div
            className={`text-lg font-medium mb-4 md:w-1/5  rounded-lg ${
              africa && africa.length === 54
                ? "bg-green-500 text-white p-2"
                : ""
            }`}
          >
            Africa: {africa && africa.length}/54{" "}
            {africa &&
              africa.length !== 0 &&
              (africa.length / 54) * 100 !== 100 && (
                <span className="bg-yellow-500 text-white px-2 rounded-lg">
                  {((africa.length / 54) * 100).toFixed(0)}%
                </span>
              )}
          </div>
          <div className="md:flex flex-wrap justify-center">
            {africa &&
              africa
                .sort((a, b) => (a.name > b.name ? 1 : -1))
                .map((country) => (
                  <div
                    key={country._id}
                    className="md:w-1/4 mx-2 md:mx-4 my-2 border border-sky-500 dark:border-slate-600 rounded-lg py-2"
                  >
                    <CountryDetails key={country._id} country={country} />
                  </div>
                ))}
          </div>
        </div>
        <div className="m-6">
          <div
            className={`text-lg font-medium mb-4 md:w-1/5  rounded-lg ${
              australiaOceania && australiaOceania.length === 15
                ? "bg-green-500 text-white p-2"
                : ""
            }`}
          >
            Australia & Oceania: {australiaOceania && australiaOceania.length}
            /15{" "}
            {australiaOceania &&
              australiaOceania.length !== 0 &&
              (australiaOceania.length / 15) * 100 !== 100 && (
                <span className="bg-yellow-500 text-white px-2 rounded-lg">
                  {((australiaOceania.length / 15) * 100).toFixed(0)}%
                </span>
              )}
          </div>
          <div className="md:flex flex-wrap justify-center">
            {australiaOceania &&
              australiaOceania
                .sort((a, b) => (a.name > b.name ? 1 : -1))
                .map((country) => (
                  <div
                    key={country._id}
                    className="md:w-1/4 mx-2 md:mx-4 my-2 border border-sky-500 dark:border-slate-600 rounded-lg py-2"
                  >
                    <CountryDetails key={country._id} country={country} />
                  </div>
                ))}
          </div>
        </div>
        <div className="m-6">
          <div
            className={`text-lg font-medium mb-4 md:w-1/5  rounded-lg ${
              centralAmerica && centralAmerica.length === 21
                ? "bg-green-500 text-white p-2"
                : ""
            }`}
          >
            Central America: {centralAmerica && centralAmerica.length}/21{" "}
            {centralAmerica &&
              centralAmerica.length !== 0 &&
              (centralAmerica.length / 21) * 100 !== 100 && (
                <span className="bg-yellow-500 text-white px-2 rounded-lg">
                  {((centralAmerica.length / 21) * 100).toFixed(0)}%
                </span>
              )}
          </div>
          <div className="md:flex flex-wrap justify-center">
            {centralAmerica &&
              centralAmerica
                .sort((a, b) => (a.name > b.name ? 1 : -1))
                .map((country) => (
                  <div
                    key={country._id}
                    className="md:w-1/4 mx-2 md:mx-4 my-2 border border-sky-500 dark:border-slate-600 rounded-lg py-2"
                  >
                    <CountryDetails key={country._id} country={country} />
                  </div>
                ))}
          </div>
        </div>
        <div className="m-6">
          <div
            className={`text-lg font-medium mb-4 md:w-1/5 rounded-lg ${
              centralAsia && centralAsia.length === 6
                ? "bg-green-500 text-white p-2"
                : ""
            }`}
          >
            Central Asia: {centralAsia && centralAsia.length}/6{" "}
            {centralAsia &&
              centralAsia.length !== 0 &&
              (centralAsia.length / 6) * 100 !== 100 && (
                <span className="bg-yellow-500 text-white px-2 rounded-lg">
                  {((centralAsia.length / 6) * 100).toFixed(0)}%
                </span>
              )}
          </div>
          <div className="md:flex flex-wrap justify-center">
            {centralAsia &&
              centralAsia
                .sort((a, b) => (a.name > b.name ? 1 : -1))
                .map((country) => (
                  <div
                    key={country._id}
                    className="md:w-1/4 mx-2 md:mx-4 my-2 border border-sky-500 dark:border-slate-600 rounded-lg py-2"
                  >
                    <CountryDetails key={country._id} country={country} />
                  </div>
                ))}
          </div>
        </div>
        <div className="m-6">
          <div
            className={`text-lg font-medium mb-4 md:w-1/5  rounded-lg ${
              eastSouthAsia && eastSouthAsia.length === 17
                ? "bg-green-500 text-white p-2"
                : ""
            }`}
          >
            East and South Asia: {eastSouthAsia && eastSouthAsia.length}/17{" "}
            {eastSouthAsia &&
              eastSouthAsia.length !== 0 &&
              (eastSouthAsia.length / 17) * 100 !== 100 && (
                <span className="bg-yellow-500 text-white px-2 rounded-lg">
                  {((eastSouthAsia.length / 17) * 100).toFixed(0)}%
                </span>
              )}
          </div>
          <div className="md:flex flex-wrap justify-center">
            {eastSouthAsia &&
              eastSouthAsia
                .sort((a, b) => (a.name > b.name ? 1 : -1))
                .map((country) => (
                  <div
                    key={country._id}
                    className="md:w-1/4 mx-2 md:mx-4 my-2 border border-sky-500 dark:border-slate-600 rounded-lg py-2"
                  >
                    <CountryDetails key={country._id} country={country} />
                  </div>
                ))}
          </div>
        </div>
        <div className="m-6">
          <div
            className={`text-lg font-medium mb-4 md:w-1/5  rounded-lg ${
              europe && europe.length === 45
                ? "bg-green-500 text-white p-2"
                : ""
            }`}
          >
            Europe: {europe && europe.length}/45{" "}
            {europe &&
              europe.length !== 0 &&
              (europe.length / 45) * 100 !== 100 && (
                <span className="bg-yellow-500 text-white px-2 rounded-lg">
                  {((europe.length / 45) * 100).toFixed(0)}%
                </span>
              )}
          </div>
          <div className="md:flex flex-wrap justify-center">
            {europe &&
              europe
                .sort((a, b) => (a.name > b.name ? 1 : -1))
                .map((country) => (
                  <div
                    key={country._id}
                    className="md:w-1/4 mx-2 md:mx-4 my-2 border border-sky-500 dark:border-slate-600 rounded-lg py-2"
                  >
                    <CountryDetails key={country._id} country={country} />
                  </div>
                ))}
          </div>
        </div>
        <div className="m-6">
          <div
            className={`text-lg font-medium mb-4 md:w-1/5  rounded-lg ${
              middleEast && middleEast.length === 17
                ? "bg-green-500 text-white p-2"
                : ""
            }`}
          >
            Middle East: {middleEast && middleEast.length}/17{" "}
            {middleEast &&
              middleEast.length !== 0 &&
              (middleEast.length / 17) * 100 !== 100 && (
                <span className="bg-yellow-500 text-white px-2 rounded-lg">
                  {((middleEast.length / 17) * 100).toFixed(0)}%
                </span>
              )}
          </div>
          <div className="md:flex flex-wrap justify-center">
            {middleEast &&
              middleEast
                .sort((a, b) => (a.name > b.name ? 1 : -1))
                .map((country) => (
                  <div
                    key={country._id}
                    className="md:w-1/4 mx-2 md:mx-4 my-2 border border-sky-500 dark:border-slate-600 rounded-lg py-2"
                  >
                    <CountryDetails key={country._id} country={country} />
                  </div>
                ))}
          </div>
        </div>
        <div className="m-6">
          <div
            className={`text-lg font-medium mb-4 md:w-1/5  rounded-lg ${
              northAmerica && northAmerica.length === 4
                ? "bg-green-500 text-white p-2"
                : ""
            }`}
          >
            North America: {northAmerica && northAmerica.length}/4{" "}
            {northAmerica &&
              northAmerica.length !== 0 &&
              (northAmerica.length / 4) * 100 !== 100 && (
                <span className="bg-yellow-500 text-white px-2 rounded-lg">
                  {((northAmerica.length / 4) * 100).toFixed(0)}%
                </span>
              )}
          </div>
          <div className="md:flex flex-wrap justify-center">
            {northAmerica &&
              northAmerica
                .sort((a, b) => (a.name > b.name ? 1 : -1))
                .map((country) => (
                  <div
                    key={country._id}
                    className="md:w-1/4 mx-2 md:mx-4 my-2 border border-sky-500 dark:border-slate-600 rounded-lg py-2"
                  >
                    <CountryDetails key={country._id} country={country} />
                  </div>
                ))}
          </div>
        </div>
        <div className="m-6">
          <div
            className={`text-lg font-medium mb-4 md:w-1/5  rounded-lg ${
              southAmerica && southAmerica.length === 13
                ? "bg-green-500 text-white p-2"
                : ""
            }`}
          >
            South America: {southAmerica && southAmerica.length}/13{" "}
            {southAmerica &&
              southAmerica.length !== 0 &&
              (southAmerica.length / 13) * 100 !== 100 && (
                <span className="bg-yellow-500 text-white px-2 rounded-lg">
                  {((southAmerica.length / 13) * 100).toFixed(0)}%
                </span>
              )}
          </div>
          <div className="md:flex flex-wrap justify-center">
            {southAmerica &&
              southAmerica
                .sort((a, b) => (a.name > b.name ? 1 : -1))
                .map((country) => (
                  <div
                    key={country._id}
                    className="md:w-1/4 mx-2 md:mx-4 my-2 border border-sky-500 dark:border-slate-600 rounded-lg py-2"
                  >
                    <CountryDetails key={country._id} country={country} />
                  </div>
                ))}
          </div>
        </div>

        <div className="m-6">
          <div
            className={`text-lg font-medium mb-4 md:w-1/5  rounded-lg ${
              southAsia && southAsia.length === 8
                ? "bg-green-500 text-white p-2"
                : ""
            }`}
          >
            South Asia: {southAsia && southAsia.length}/8{" "}
            {southAsia &&
              southAsia.length !== 0 &&
              (southAsia.length / 8) * 100 !== 100 && (
                <span className="bg-yellow-500 text-white px-2 rounded-lg">
                  {((southAsia.length / 8) * 100).toFixed(0)}%
                </span>
              )}
          </div>
          <div className="md:flex flex-wrap justify-center">
            {southAsia &&
              southAsia
                .sort((a, b) => (a.name > b.name ? 1 : -1))
                .map((country) => (
                  <div
                    key={country._id}
                    className="md:w-1/4 mx-2 md:mx-4 my-2 border border-sky-500 dark:border-slate-600 rounded-lg py-2"
                  >
                    <CountryDetails key={country._id} country={country} />
                  </div>
                ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default VisitedCountries;
