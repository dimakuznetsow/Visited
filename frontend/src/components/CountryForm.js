import { useEffect, useState } from "react";
import { useCountriesContext } from "../hooks/useCountriesContext";
import { useAuthContext } from "../hooks/useAuthContext";

export default function CountryForm() {
  const { countries, dispatch } = useCountriesContext();
  const { user } = useAuthContext();

  const allCountries = [
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
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Democratic Republic of the Congo",
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
    "French Guiana",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Greenland",
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
    "Ivory Coast",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kosovo",
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
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Korea",
    "Macedonia",
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
    "Puerto Rico",
    "Qatar",
    "Republic of Congo",
    "Republic of Serbia",
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
    "Vatican",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];

  const [name, setName] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);

  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch("visited-api.onrender.com/api/countries", {
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

  useEffect(() => {
    setFilteredCountries(
      allCountries.filter(
        (country) =>
          countries &&
          !countries.map((country) => country.name).includes(country)
      )
    );
  }, [name, countries]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError("You must be logged in");
      return;
    }

    if (!filteredCountries.includes(name)) {
      setError("Please select a valid country from the list.");
      return;
    }

    const country = {
      name,
    };

    const response = await fetch("visited-api.onrender.com/api/countries", {
      method: "POST",
      body: JSON.stringify(country),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }

    if (response.ok) {
      setName("");
      setError(null);
      dispatch({ type: "ADD_COUNTRY", payload: json });
    } else {
      setError("Please select a valid country from the list.");
    }
  };

  return (
    <div className="">
      <form
        className="bg-white px-6 py-4 rounded-lg shadow-md"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label className="block font-medium mb-2">Country:</label>
          <input
            className="border rounded-lg py-2 px-4 w-full focus:outline-none focus:shadow-outline"
            list="countries"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <datalist id="countries">
            {filteredCountries.map((country) => (
              <option key={country} value={country} />
            ))}
          </datalist>
        </div>
        <button
          className="bg-sky-500 dark:bg-slate-800 hover:bg-sky-600 dark:hover:bg-slate-600 text-white font-medium py-2 px-4 rounded-lg"
          type="submit"
        >
          Add Country
        </button>
        {error && (
          <div className="mt-3 w-full border border-red-500 bg-red-50 text-red-500 py-2 px-3 rounded-lg">
            {error}
          </div>
        )}
      </form>
    </div>
  );
}
