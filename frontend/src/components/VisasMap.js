import { useState, useEffect } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
  Sphere,
} from "react-simple-maps";
import VisasDetails from "./VisasDetails";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

export default function Map({ setTooltipContent }) {
  const [country, setCountry] = useState("Blank");
  const [selectCountry, setSelectCountry] = useState(null);

  const [info, setInfo] = useState(null);

  useEffect(() => {
    const fetchVisas = async () => {
      try {
        const response = await fetch(`/api/visas/${country}`);
        const data = await response.json();
        setSelectCountry(data.countries);
      } catch (error) {
        console.error(error);
      }
    };

    fetchVisas();
  }, [country]);

  return (
    <>
      <div className="flex justify-center">
        <select
          defaultValue={"Blank"}
          className="border border-sky-500 dark:border-slate-600 py-2 px-4 mt-2 rounded-lg"
          onChange={(event) => setCountry(event.target.value)}
        >
          <option value="Blank" disabled>
            Select country
          </option>
          <option value="Germany">Germany</option>
          <option value="India">India</option>
          <option value="Israel">Israel</option>
          <option value="Japan">Japan</option>
          <option value="Russia">Russia</option>
          <option value="UAE">United Arab Emirates</option>
          <option value="USA">United States of America</option>
        </select>
      </div>

      {country !== "Blank" && (
        <div className="flex justify-center mt-2">
          You can visit without visa:{" "}
          {selectCountry &&
            selectCountry.filter((entry) =>
              [
                "Freedom of movement",
                "Visa not required",
                "Visa on arrival",
              ].includes(entry.visaRequirement)
            ).length}{" "}
          countries and territories.
        </div>
      )}
      {info && (
        <div className="absolute bg-slate-800 text-white p-10 md:top-80 my-10 mx-20 rounded-lg">
          {info}
        </div>
      )}

      <div id="map" className="block m-0">
        <ComposableMap className="m-0" width={950} height={500}>
          <Graticule stroke="#ebe8eb" strokeWidth={0.5} />
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const d =
                  selectCountry && selectCountry.find((c) => c.id === geo.id);
                const countryColor = () => {
                  switch (d.visaRequirement) {
                    case "Freedom of movement":
                      return "green";
                    case "Visa not required":
                    case "Visa on arrival":
                      return "#50C878";
                    case "eVisa":
                      return "#fef08a";
                    case "Visa required":
                      return "#eb4b4b";
                    case "Admission refused":
                      return "#333333";
                    case "Travel restricted":
                      return "#333333";
                    case "Selected":
                      return "#5038eb";
                    case "":
                      return "#f5f4f6";
                    default:
                      return;
                  }
                };
                return (
                  <>
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={d ? countryColor() : "#f5f4f6"}
                      stroke="#cdd2d5"
                      onMouseEnter={() => {
                        const toolContent = () => {
                          return (
                            <p>
                              <strong className="text-lg">Country: </strong>
                              <span className="text-lg">{d.country} </span>
                              <br />
                              <em>
                                <strong>
                                  {d.visaRequirement === "Admission refused"
                                    ? "Admission refused"
                                    : d.visaRequirement === "Travel restricted"
                                    ? "Travel restricted"
                                    : d.visaRequirement === "Visa required"
                                    ? "Visa required"
                                    : d.visaRequirement === "eVisa"
                                    ? "eVisa required"
                                    : d.visaRequirement === "Visa not required"
                                    ? "Visa not required"
                                    : d.visaRequirement === "Visa on arrival"
                                    ? "Visa on arrival"
                                    : d.visaRequirement ===
                                      "Freedom of movement"
                                    ? "Freedom of movement"
                                    : ""}
                                </strong>
                              </em>
                              <br />
                              {d.allowedStay && <strong>Allowed stay: </strong>}
                              {d.allowedStay}
                              <br />
                              <br />
                              <strong className="text-sky-500">
                                Click for more info
                              </strong>
                            </p>
                          );
                        };
                        setTooltipContent(toolContent());
                      }}
                      onMouseLeave={() => {
                        setTooltipContent("");
                      }}
                      onClick={() => {
                        const infoContent = () => {
                          return (
                            <>
                              {d.unesco && (
                                <>
                                  <div className="absolute top-5 right-5 text-sky-500 font-bold">
                                    <button
                                      onClick={() => setInfo(null)}
                                      className="bg-white rounded-lg py-1 px-3"
                                    >
                                      x
                                    </button>
                                  </div>
                                  <div className="text-center text-3xl font-bold">
                                    {d.country}
                                  </div>
                                  <div>
                                    <p className="">Capital: {d.capital}</p>
                                    <p className="">
                                      Population:{" "}
                                      {d.population.toLocaleString("il-IL")}
                                    </p>
                                    <p>
                                      Languages:{" "}
                                      {d.languages.map((language, index) => {
                                        return (
                                          <>
                                            <span>{language}</span>
                                            {index !== d.languages.length - 1
                                              ? ", "
                                              : ""}
                                          </>
                                        );
                                      })}
                                    </p>
                                    <p className="">
                                      Currencies: {d.currencies.name},{" "}
                                      {d.currencies.code}
                                    </p>
                                  </div>
                                  <div className="flex ">
                                    {d.unesco &&
                                      d.unesco.map((site, index) => (
                                        <section
                                          key={index}
                                          className="border-4 border-white my-4 mx-2 rounded-lg p-4"
                                        >
                                          <br />
                                          <p className="font-bold">
                                            {site.name_en}
                                          </p>
                                          <br />
                                          {site.short_description_en}
                                        </section>
                                      ))}
                                  </div>
                                </>
                              )}
                            </>
                          );
                        };
                        setInfo(infoContent);
                      }}
                      strokeWidth={0.5}
                      style={{
                        default: {
                          outline: "none",
                        },
                        hover: {
                          outline: "none",
                        },
                        pressed: {
                          outline: "none",
                        },
                      }}
                    />
                  </>
                );
              })
            }
          </Geographies>
          <Sphere stroke="#ebe8eb" strokeWidth={0.5} />
        </ComposableMap>
      </div>

      {country !== "Blank" && (
        <VisasDetails country={country} selectCountry={selectCountry} />
      )}
    </>
  );
}
