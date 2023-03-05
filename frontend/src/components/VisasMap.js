import { useState, useEffect } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
  Sphere,
} from "react-simple-maps";
import Barloader from "react-spinners/BarLoader";
import VisasDetails from "./VisasDetails";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

export default function Map({ setTooltipContent }) {
  const [country, setCountry] = useState("Blank");
  const [selectCountry, setSelectCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVisas = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://visited-api.onrender.com/api/visas/${country}`
        );
        const data = await response.json();
        setSelectCountry(data.countries);
      } catch (error) {
        console.error(error);
      }

      setLoading(false);
    };

    fetchVisas();
  }, [country]);

  return (
    <>
      <div className="flex justify-center">
        <select
          defaultValue={"Blank"}
          disabled={loading}
          className="border border-sky-500 dark:border-slate-600 py-2 px-4 mt-2 rounded-lg"
          onChange={(event) => setCountry(event.target.value)}
        >
          <option value="Blank" disabled>
            Select country
          </option>
          <option value="Afghanistan">Afghanistan</option>
          <option value="Albania">Albania</option>
          <option value="Algeria">Algeria</option>
          <option value="Andorra">Andorra</option>
          <option value="Angola">Angola</option>
          <option value="Antigua and Barbuda">Antigua and Barbuda</option>
          <option value="Argentina">Argentina</option>
          <option value="Armenia">Armenia</option>
          <option value="Australia">Australia</option>
          <option value="Austria">Austria</option>
          <option value="Azerbaijan">Azerbaijan</option>
          <option value="Bahamas">Bahamas</option>
          <option value="Bahrain">Bahrain</option>
          <option value="Bangladesh">Bangladesh</option>
          <option value="Barbados">Barbados</option>
          <option value="Belarus">Belarus</option>
          <option value="Belgium">Belgium</option>
          <option value="Belize">Belize</option>
          <option value="Benin">Benin</option>
          <option value="Bhutan">Bhutan</option>
          <option value="Bolivia">Bolivia</option>
          <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
          <option value="Botswana">Botswana</option>
          <option value="Brazil">Brazil</option>
          <option value="Brunei">Brunei</option>
          <option value="Bulgaria">Bulgaria</option>
          <option value="Burkina Faso">Burkina Faso</option>
          <option value="Burundi">Burundi</option>
          <option value="Cambodia">Cambodia</option>
          <option value="Cameroon">Cameroon</option>
          <option value="Canada">Canada</option>
          <option value="Cape Verde">Cape Verde</option>
          <option value="Central African Republic">
            Central African Republic
          </option>
          <option value="Chad">Chad</option>
          <option value="Chile">Chile</option>
          <option value="China">China</option>
          <option value="Colombia">Colombia</option>
          <option value="Comoros">Comoros</option>
          <option value="Republic of Congo">Republic of Congo</option>
          <option value="Democratic Republic of the Congo">
            Democratic Republic of the Congo
          </option>
          <option value="Costa Rica">Costa Rica</option>

          <option value="Croatia">Croatia</option>
          <option value="Cuba">Cuba</option>
          <option value="Cyprus">Cyprus</option>
          <option value="Czech Republic">Czech Republic</option>
          <option value="Denmark">Denmark</option>
          <option value="Djibouti">Djibouti</option>
          <option value="Dominica">Dominica</option>
          <option value="Dominican Republic">Dominican Republic</option>
          <option value="Ecuador">Ecuador</option>
          <option value="Egypt">Egypt</option>
          <option value="El Salvador">El Salvador</option>
          <option value="Equatorial Guinea">Equatorial Guinea</option>
          <option value="Eritrea">Eritrea</option>
          <option value="Estonia">Estonia</option>
          <option value="Eswatini">Eswatini</option>
          <option value="Ethiopia">Ethiopia</option>
          <option value="Fiji">Fiji</option>
          <option value="Finland">Finland</option>
          <option value="France">France</option>
          <option value="French Guiana">French Guiana</option>
          <option value="Gabon">Gabon</option>
          <option value="Gambia">Gambia</option>
          <option value="Georgia">Georgia</option>
          <option value="Germany">Germany</option>
          <option value="Ghana">Ghana</option>
          <option value="Greece">Greece</option>
          <option value="Grenada">Grenada</option>
          <option value="Guatemala">Guatemala</option>
          <option value="Guinea">Guinea</option>
          <option value="Guinea-Bissau">Guinea-Bissau</option>
          <option value="Guyana">Guyana</option>
          <option value="Haiti">Haiti</option>
          <option value="Honduras">Honduras</option>
          <option value="Hungary">Hungary</option>
          <option value="Iceland">Iceland</option>
          <option value="India">India</option>
          <option value="Indonesia">Indonesia</option>
          <option value="Iran">Iran</option>
          <option value="Iraq">Iraq</option>
          <option value="Ireland">Ireland</option>
          <option value="Israel">Israel</option>
          <option value="Italy">Italy</option>
          <option value="Ivory Coast">Ivory Coast</option>
          <option value="Jamaica">Jamaica</option>
          <option value="Japan">Japan</option>
          <option value="Jordan">Jordan</option>
          <option value="Kazakhstan">Kazakhstan</option>
          <option value="Kenya">Kenya</option>
          <option value="Kiribati">Kiribati</option>
          <option value="Kosovo">Kosovo</option>
          <option value="Kuwait">Kuwait</option>
          <option value="Kyrgyzstan">Kyrgyzstan</option>
          <option value="Laos">Laos</option>
          <option value="Latvia">Latvia</option>
          <option value="Lebanon">Lebanon</option>
          <option value="Lesotho">Lesotho</option>
          <option value="Liberia">Liberia</option>
          <option value="Libya">Libya</option>
          <option value="Liechtenstein">Liechtenstein</option>
          <option value="Lithuania">Lithuania</option>
          <option value="Luxembourg">Luxembourg</option>
          <option value="Madagascar">Madagascar</option>
          <option value="Malawi">Malawi</option>
          <option value="Malaysia">Malaysia</option>
          <option value="Maldives">Maldives</option>
          <option value="Mali">Mali</option>
          <option value="Malta">Malta</option>
          <option value="Marshall Islands">Marshall Islands</option>
          <option value="Mauritania">Mauritania</option>
          <option value="Mauritius">Mauritius</option>
          <option value="Mexico">Mexico</option>
          <option value="Micronesia">Micronesia</option>
          <option value="Moldova">Moldova</option>
          <option value="Monaco">Monaco</option>
          <option value="Mongolia">Mongolia</option>
          <option value="Montenegro">Montenegro</option>
          <option value="Morocco">Morocco</option>
          <option value="Mozambique">Mozambique</option>
          <option value="Myanmar">Myanmar</option>
          <option value="Namibia">Namibia</option>
          <option value="Nauru">Nauru</option>
          <option value="Nepal">Nepal</option>
          <option value="Netherlands">Netherlands</option>
          <option value="New Zealand">New Zealand</option>
          <option value="Nicaragua">Nicaragua</option>
          <option value="Niger">Niger</option>
          <option value="Nigeria">Nigeria</option>
          <option value="North Korea">North Korea</option>
          <option value="North Macedonia">North Macedonia</option>
          <option value="Norway">Norway</option>
          <option value="Oman">Oman</option>
          <option value="Pakistan">Pakistan</option>
          <option value="Palau">Palau</option>
          <option value="Panama">Panama</option>
          <option value="Papua New Guinea">Papua New Guinea</option>
          <option value="Paraguay">Paraguay</option>
          <option value="Peru">Peru</option>
          <option value="Philippines">Philippines</option>
          <option value="Poland">Poland</option>
          <option value="Portugal">Portugal</option>
          <option value="Qatar">Qatar</option>
          <option value="Romania">Romania</option>
          <option value="Russia">Russia</option>
          <option value="Rwanda">Rwanda</option>
          <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
          <option value="Saint Lucia">Saint Lucia</option>
          <option value="Saint Vincent and the Grenadines">
            Saint Vincent and the Grenadines
          </option>
          <option value="Samoa">Samoa</option>
          <option value="San Marino">San Marino</option>
          <option value="Sao Tome and Principe">Sao Tome and Principe</option>
          <option value="Saudi Arabia">Saudi Arabia</option>
          <option value="Senegal">Senegal</option>
          <option value="Serbia">Serbia</option>
          <option value="Seychelles">Seychelles</option>
          <option value="Sierra Leone">Sierra Leone</option>
          <option value="Singapore">Singapore</option>
          <option value="Slovakia">Slovakia</option>
          <option value="Slovenia">Slovenia</option>
          <option value="Solomon Islands">Solomon Islands</option>
          <option value="Somalia">Somalia</option>
          <option value="South Africa">South Africa</option>
          <option value="South Korea">South Korea</option>
          <option value="South Sudan">South Sudan</option>
          <option value="Spain">Spain</option>
          <option value="Sri Lanka">Sri Lanka</option>
          <option value="Sudan">Sudan</option>
          <option value="Suriname">Suriname</option>
          <option value="Sweden">Sweden</option>
          <option value="Switzerland">Switzerland</option>
          <option value="Syria">Syria</option>
          <option value="Taiwan">Taiwan</option>
          <option value="Tajikistan">Tajikistan</option>
          <option value="Tanzania">Tanzania</option>
          <option value="Thailand">Thailand</option>
          <option value="Timor-Leste">Timor-Leste</option>
          <option value="Togo">Togo</option>
          <option value="Tonga">Tonga</option>
          <option value="Trinidad and Tobago">Trinidad and Tobago</option>
          <option value="Tunisia">Tunisia</option>
          <option value="Turkey">Turkey</option>
          <option value="Turkmenistan">Turkmenistan</option>
          <option value="Tuvalu">Tuvalu</option>
          <option value="Uganda">Uganda</option>
          <option value="Ukraine">Ukraine</option>
          <option value="UAE">United Arab Emirates</option>
          <option value="United Kingdom">United Kingdom</option>
          <option value="USA">United States of America</option>
          <option value="Uruguay">Uruguay</option>
          <option value="Uzbekistan">Uzbekistan</option>
          <option value="Vanuatu">Vanuatu</option>
          <option value="Vatican">Vatican</option>
          <option value="Venezuela">Venezuela</option>
          <option value="Vietnam">Vietnam</option>
          <option value="Yemen">Yemen</option>
          <option value="Zambia">Zambia</option>
          <option value="Zimbabwe">Zimbabwe</option>
        </select>
      </div>

      {loading ? (
        <div className="flex justify-center">
          <Barloader
            className="mt-2"
            loading={loading}
            height={3}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <>
          {selectCountry &&
            selectCountry.filter((entry) =>
              [
                "Freedom of movement",
                "Visa not required",
                "Visa on arrival",
              ].includes(entry.visaRequirement)
            ).length > 0 && (
              <div className="flex justify-center mt-2">
                You can visit without visa:{" "}
                {selectCountry &&
                  selectCountry.filter((entry) =>
                    [
                      "Freedom of movement",
                      "Visa not required",
                      "Visa on arrival",
                    ].includes(entry.visaRequirement)
                  ).length - 2}{" "}
                countries and territories.
              </div>
            )}
        </>
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
                      return "#3c8538";
                    case "Visa not required":
                    case "Visa on arrival":
                      return "#50C878";
                    case "eVisa":
                      return "#fef08a";
                    case "Visa required":
                      return "#eb4b4b";
                    case "Admission refused":
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
                              <span className="text-lg">
                                {d.country && d.country}{" "}
                              </span>
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
                            </p>
                          );
                        };
                        setTooltipContent(toolContent());
                      }}
                      onMouseLeave={() => {
                        setTooltipContent("");
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

      {selectCountry && country !== "Blank" && (
        <VisasDetails country={country} selectCountry={selectCountry} />
      )}
    </>
  );
}
