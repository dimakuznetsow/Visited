import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function VisasDetails({
  country,

  selectCountry,
}) {
  const [activeSection, setActiveSection] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = (index) => {
    setActiveSection(index === activeSection ? null : index);
  };
  return (
    <>
      {country !== "NNN" && (
        <div className="md:flex flex-col border border-sky-500 dark:border-slate-800 mx-4 mb-14 rounded-lg">
          <section className="p-4 border-b border-gray-200">
            <button
              onClick={() => {
                handleClick(0);
                setIsOpen(!isOpen);
              }}
              className="w-full flex justify-between text-left text-lg font-medium text-center text-2xl"
            >
              Visa requirements per country
              {isOpen ? (
                <IoIosArrowUp className="self-center ml-2" />
              ) : (
                <IoIosArrowDown className="self-center ml-2" />
              )}
            </button>
            {activeSection === 0 && (
              <>
                <div className="md:flex justify-evenly ">
                  <div className="p-4">
                    {selectCountry.filter(
                      (country) =>
                        country.visaRequirement === "Freedom of movement"
                    ).length === 0 ? null : (
                      <div>
                        <div className="mb-2 text-white bg-green-800 p-2 rounded-lg">
                          Freedom of movement
                        </div>
                        <div className="flex-column">
                          {selectCountry
                            .filter((country) =>
                              ["Freedom of movement"].includes(
                                country.visaRequirement
                              )
                            )
                            .reduce((acc, curr) => {
                              // add only one country to 'map' if there is more than one in 'selectCountry'
                              if (!acc.includes(curr.country)) {
                                acc.push(curr.country);
                              }
                              return acc;
                            }, [])
                            .map((country, index) => (
                              <div key={index + 1}>{country}</div>
                            ))}
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <div className="mb-2 text-white bg-green-600 p-2 rounded-lg">
                      {" "}
                      No visa required or visa on arrival
                    </div>
                    <div className="flex-column">
                      {selectCountry
                        .filter((country) =>
                          ["Visa not required", "Visa on arrival"].includes(
                            country.visaRequirement
                          )
                        )
                        .reduce((acc, curr) => {
                          if (!acc.includes(curr.country)) {
                            acc.push(curr.country);
                          }
                          return acc;
                        }, [])
                        .map((country, index) => (
                          <div key={index + 1}>{country}</div>
                        ))}
                    </div>
                  </div>
                  <div className="p-4 ">
                    <div className="mb-2 text-white bg-yellow-400 p-2 rounded-lg">
                      Electronic visa required
                    </div>
                    <div className="flex-column">
                      {selectCountry
                        .filter((country) =>
                          ["eVisa"].includes(country.visaRequirement)
                        )
                        .reduce((acc, curr) => {
                          if (!acc.includes(curr.country)) {
                            acc.push(curr.country);
                          }
                          return acc;
                        }, [])
                        .map((country, index) => (
                          <div key={index + 1}>{country}</div>
                        ))}
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="mb-2 text-white bg-red-400 p-2 rounded-lg">
                      Visa required
                    </div>
                    <div className="flex-column">
                      {selectCountry
                        .filter((country) =>
                          ["Visa required"].includes(country.visaRequirement)
                        )
                        .reduce((acc, curr) => {
                          if (!acc.includes(curr.country)) {
                            acc.push(curr.country);
                          }
                          return acc;
                        }, [])
                        .map((country, index) => (
                          <div key={index + 1}>{country}</div>
                        ))}
                    </div>
                  </div>
                  <div className="p-4">
                    {selectCountry.filter((country) =>
                      ["Admission refused"].includes(country.visaRequirement)
                    ).length === 0 ? null : (
                      <div>
                        <div className="mb-2 text-white bg-black p-2 rounded-lg">
                          Entry prohibited
                        </div>
                        <div className="flex-column">
                          {selectCountry
                            .filter((country) =>
                              ["Admission refused"].includes(
                                country.visaRequirement
                              )
                            )
                            .reduce((acc, curr) => {
                              if (!acc.includes(curr.country)) {
                                acc.push(curr.country);
                              }
                              return acc;
                            }, [])
                            .map((country, index) => (
                              <div key={index + 1}>{country}</div>
                            ))}
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    {selectCountry.filter((country) =>
                      ["Travel restricted"].includes(country.visaRequirement)
                    ).length === 0 ? null : (
                      <div>
                        <div className="mb-2 text-white bg-black p-2 rounded-lg">
                          Travel restricted
                        </div>
                        <div className="flex-column">
                          {selectCountry
                            .filter((country) =>
                              ["Travel restricted"].includes(
                                country.visaRequirement
                              )
                            )
                            .reduce((acc, curr) => {
                              if (!acc.includes(curr.country)) {
                                acc.push(curr.country);
                              }
                              return acc;
                            }, [])
                            .map((country, index) => (
                              <div key={index + 1}>{country}</div>
                            ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </>
            )}
          </section>
        </div>
      )}
    </>
  );
}

export default VisasDetails;
