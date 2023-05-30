import { useEffect } from "react";
import { useCountriesContext } from "../hooks/useCountriesContext";
import CountryDetails from "./CountryDetails";
import { useAuthContext } from "../hooks/useAuthContext";

function VisitedDetails() {
  const { countries, dispatch } = useCountriesContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch(
        "https://visited-api.onrender.com/api/countries",
        {
          headers: { Authorization: `Bearer ${user.token}` },
        }
      );
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
        "Republic of the Congo",
        "Rwanda",
        "Sao Tome and Principe",
        "Senegal",
        "Seychelles",
        "Sierra Leone",
        "Somalia",
        "South Africa",
        "South Sudan",
        "Sudan",
        "United Republic of Tanzania",
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
        "East Timor",
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

  if (!countries) {
    return (
      <>
        <div className="bg-sky-400 dark:bg-slate-700 text-white">
          <div className="font-bold text-2xl pl-4 md:pl-6 py-6">
            Visited countries ({countries && countries.length} of 200):
          </div>
          <div className="bg-sky-400 dark:bg-slate-700 text-white pl-4 pr-2 pb-10 md:grid grid-cols-2 text-lg">
            <div className="font-bold pb-2 md:text-right md:mr-8 text-lg">
              ADD COUNTRIES TO YOUR LIST!
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="bg-sky-400 dark:bg-slate-700 text-white">
        <div className="font-bold text-2xl pl-4 md:pl-6 py-6">
          Visited countries ({countries && countries.length} of 200):
        </div>
        <div className="bg-sky-400 dark:bg-slate-700 text-white pl-4 pr-2 pb-10 md:grid grid-cols-2 text-lg">
          {countries.length < 1 && (
            <div className="font-bold pb-2 md:text-right md:mr-8 text-lg">
              ADD COUNTRIES TO YOUR LIST!
            </div>
          )}
          {africa.length > 0 && (
            <>
              <h1 className="font-bold pb-2 md:text-right md:mr-8 text-lg">
                AFRICA:
              </h1>
              <div className="font-light pb-4 md:pb-8 pt-2 md:pt-8 md:ml-0 items-center">
                {africa
                  .sort((a, b) => a.name.localeCompare(b.name)) // sort the countries alphabetically
                  .map((country, index) => (
                    <ul key={index + 1}>
                      <li className="pb-6 flex items-center justify-between">
                        <CountryDetails key={country._id} country={country} />
                      </li>
                    </ul>
                  ))}
              </div>
            </>
          )}
          {australiaOceania.length > 0 && (
            <>
              <h1 className="font-bold pb-2 md:text-right md:mr-8 text-lg">
                AUSTRALIA AND OCEANIA:
              </h1>
              <div className="font-light pb-4 md:pb-8 pt-2 md:pt-8 md:ml-0 items-center">
                {australiaOceania
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((country, index) => (
                    <ul key={index + 1}>
                      <li className="pb-6 flex items-center justify-between">
                        <CountryDetails key={country._id} country={country} />
                      </li>
                    </ul>
                  ))}
              </div>
            </>
          )}
          {centralAmerica.length > 0 && (
            <>
              <h1 className="font-bold pb-2 md:text-right md:mr-8 text-lg">
                CENTRAL AMERICA:
              </h1>
              <div className="font-light pb-4 md:pb-8 pt-2 md:pt-8 md:ml-0 items-center">
                {centralAmerica
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((country, index) => (
                    <ul key={index + 1}>
                      <li className="pb-6 flex items-center justify-between">
                        <CountryDetails key={country._id} country={country} />
                      </li>
                    </ul>
                  ))}
              </div>
            </>
          )}
          {centralAsia.length > 0 && (
            <>
              <h1 className="font-bold pb-2 md:text-right md:mr-8 text-lg">
                CENTRAL ASIA:
              </h1>
              <div className="font-light pb-4 md:pb-8 pt-2 md:pt-8 md:ml-0 items-center">
                {centralAsia
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((country, index) => (
                    <ul key={index + 1}>
                      <li className="pb-6 flex items-center justify-between">
                        <CountryDetails key={country._id} country={country} />
                      </li>
                    </ul>
                  ))}
              </div>
            </>
          )}
          {eastSouthAsia.length > 0 && (
            <>
              <h1 className="font-bold pb-2 md:text-right md:mr-8 text-lg">
                EAST AND SOUTHEAST ASIA:
              </h1>
              <div className="font-light pb-4 md:pb-8 pt-2 md:pt-8 md:ml-0 items-center">
                {eastSouthAsia
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((country, index) => (
                    <ul key={index + 1}>
                      <li className="pb-6 flex items-center justify-between">
                        <CountryDetails key={country._id} country={country} />
                      </li>
                    </ul>
                  ))}
              </div>
            </>
          )}
          {europe.length > 0 && (
            <>
              <h1 className="font-bold pb-2 md:text-right md:mr-8 text-lg">
                EUROPE:
              </h1>
              <div className="font-light pb-4 md:pb-8 pt-2 md:pt-8 md:ml-0 items-center">
                {europe
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((country, index) => (
                    <ul key={index + 1}>
                      <li className="pb-6 flex items-center justify-between">
                        <CountryDetails key={country._id} country={country} />
                      </li>
                    </ul>
                  ))}
              </div>
            </>
          )}
          {middleEast.length > 0 && (
            <>
              <h1 className="font-bold pb-2 md:text-right md:mr-8 text-lg">
                MIDDLE EAST:
              </h1>
              <div className="font-light pb-4 md:pb-8 pt-2 md:pt-8 md:ml-0 items-center">
                {middleEast
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((country, index) => (
                    <ul key={index + 1}>
                      <li className="pb-6 flex items-center justify-between">
                        <CountryDetails key={country._id} country={country} />
                      </li>
                    </ul>
                  ))}
              </div>
            </>
          )}
          {northAmerica.length > 0 && (
            <>
              <h1 className="font-bold pb-2 md:text-right md:mr-8 text-lg">
                NORTH AMERICA:
              </h1>
              <div className="font-light pb-4 md:pb-8 pt-2 md:pt-8 md:ml-0 items-center">
                {northAmerica
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((country, index) => (
                    <ul key={index + 1}>
                      <li className="pb-6 flex items-center justify-between">
                        <CountryDetails key={country._id} country={country} />
                      </li>
                    </ul>
                  ))}
              </div>
            </>
          )}
          {southAmerica.length > 0 && (
            <>
              <h1 className="font-bold pb-2 md:text-right md:mr-8 text-lg">
                SOUTH AMERICA:
              </h1>
              <div className="font-light pb-4 md:pb-8 pt-2 md:pt-8 md:ml-0 items-center">
                {southAmerica
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((country, index) => (
                    <ul key={index + 1}>
                      <li className="pb-6 flex items-center justify-between">
                        <CountryDetails key={country._id} country={country} />
                      </li>
                    </ul>
                  ))}
              </div>
            </>
          )}
          {southAsia.length > 0 && (
            <>
              <h1 className="font-bold pb-2 md:text-right md:mr-8 text-lg">
                SOUTH ASIA:
              </h1>
              <div className="font-light pb-4 md:pb-8 pt-2 md:pt-8 md:ml-0 items-center">
                {southAsia
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((country, index) => (
                    <ul key={index + 1}>
                      <li className="pb-6 flex items-center justify-between">
                        <CountryDetails key={country._id} country={country} />
                      </li>
                    </ul>
                  ))}
              </div>
            </>
          )}
        </div>

        {/* <h1 className="text-2xl text-center mb-4">
          Visited countries ({countries && countries.length} of 200):
        </h1> */}

        {/* <div className="bg-sky-400 dark:bg-slate-700 text-white pl-4 pr-2 pb-10 md:grid grid-cols-2 text-lg">
           <div className="">
            <div className="font-bold pb-2 md:text-right md:mr-8 text-lg">
              AFRICA: {africa && africa.length}/54{" "}
            </div>
            <div className="font-light md:grid grid-cols-2 pb-4 md:pb-8 pt-2 md:pt-8 md:ml-0 items-center">
              {africa &&
                africa
                  .sort((a, b) => (a.name > b.name ? 1 : -1))
                  .map((country) => (
                    <div
                      key={country._id}
                      className="pb-6 md:w-52 flex items-center text-md"
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
                      className="lg:w-1/4 mx-2 md:mx-4 my-2  rounded-lg py-2"
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
                      className="lg:w-1/4 mx-2 md:mx-4 my-2 border border-sky-500 dark:border-slate-600 rounded-lg py-2"
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
                      className="lg:w-1/4 mx-2 md:mx-4 my-2 border border-sky-500 dark:border-slate-600 rounded-lg py-2"
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
                      className="lg:w-1/4 mx-2 md:mx-4 my-2 border border-sky-500 dark:border-slate-600 rounded-lg py-2"
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
                      className="lg:w-1/4 mx-2 md:mx-4 my-2 border border-sky-500 dark:border-slate-600 rounded-lg py-2"
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
                      className="lg:w-1/4 mx-2 md:mx-4 my-2 border border-sky-500 dark:border-slate-600 rounded-lg py-2"
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
                      className="lg:w-1/4 mx-2 md:mx-4 my-2 border border-sky-500 dark:border-slate-600 rounded-lg py-2"
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
                      className="lg:w-1/4 mx-2 md:mx-4 my-2 border border-sky-500 dark:border-slate-600 rounded-lg py-2"
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
                      className="lg:w-1/4 mx-2 md:mx-4 my-2 border border-sky-500 dark:border-slate-600 rounded-lg py-2"
                    >
                      <CountryDetails key={country._id} country={country} />
                    </div>
                  ))}
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default VisitedDetails;
