function NewVisaDetails({ country, selectCountry }) {
  const countriesByRegion = new Map([
    [
      "AFRICA",
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
        "Côte d'Ivoire",
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
      ],
    ],
    [
      "AUSTRALIA AND OCEANIA",
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
      ],
    ],
    [
      "CENTRAL AMERICA",
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
      ],
    ],
    [
      "NORTH AMERICA",
      ["Canada", "Mexico", "United States of America", "Greenland"],
    ],
    [
      "SOUTH AMERICA",
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
      ],
    ],
    [
      "CENTRAL ASIA",
      [
        "Kazakhstan",
        "Kyrgyzstan",
        "Russia",
        "Tajikistan",
        "Turkmenistan",
        "Uzbekistan",
      ],
    ],
    [
      "EAST AND SOUTH ASIA",
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
      ],
    ],
    [
      "SOUTH ASIA",
      [
        "Afghanistan",
        "Bangladesh",
        "Bhutan",
        "India",
        "Maldives",
        "Nepal",
        "Pakistan",
        "Sri Lanka",
      ],
    ],
    [
      "EUROPE",
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
        "Vatican City",
      ],
    ],
    [
      "MIDDLE EAST",
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
      ],
    ],
  ]);

  const visaFreeCountriesByRegion = selectCountry
    .filter((country) => {
      const region = [...countriesByRegion.entries()].find(([_, countries]) =>
        countries.includes(country.country)
      );
      return (
        region &&
        [
          "Freedom of movement",
          "Visa not required",
          "Visa on arrival",
        ].includes(country.visaRequirement)
      );
    })
    .reduce((acc, curr) => {
      const region = [...countriesByRegion.entries()].find(([_, countries]) =>
        countries.includes(curr.country)
      )[0];
      if (!acc.has(region)) {
        acc.set(region, []);
      }
      acc.get(region).push({
        country: curr.country,
        flag: curr.flag,
      });
      return acc;
    }, new Map());

  return (
    <>
      {country !== "NNN" && (
        <>
          <div className="bg-sky-400 dark:bg-slate-700 text-white font-bold text-2xl pl-4 md:pl-6 py-6">
            Visa-free access destinations:
          </div>

          <div className="bg-sky-400 dark:bg-slate-700 text-white pl-4 pr-2 pb-10 md:grid grid-cols-2 text-lg">
            {[...visaFreeCountriesByRegion.entries()].map(
              ([region, countries]) => {
                const uniqueCountries = Array.from(
                  new Set(countries.map((country) => country.country))
                );

                return (
                  <>
                    {uniqueCountries.length > 0 && (
                      <>
                        <h1 className="font-bold pb-2 md:text-right md:mr-8 text-lg">
                          {region}:
                        </h1>
                        <div className=" font-light md:grid grid-cols-2 pb-4 md:pb-8 pt-2 md:pt-8 md:ml-0 items-center">
                          {uniqueCountries.map((country, index) => (
                            <ul key={index + 1}>
                              <li className="pb-6 md:w-52 flex items-center text-md">
                                <img
                                  className="mr-4"
                                  srcSet={`https://hatscripts.github.io/circle-flags/flags/${
                                    countries.find((c) => c.country === country)
                                      ?.flag
                                  }.svg`}
                                  alt={country}
                                  width="38"
                                />
                                {country}
                              </li>
                            </ul>
                          ))}
                        </div>
                      </>
                    )}
                  </>
                );
              }
            )}
          </div>
        </>
      )}
    </>
  );
}

export default NewVisaDetails;
