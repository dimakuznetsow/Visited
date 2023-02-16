import { CountriesContext } from "../context/CountryContext";
import { useContext } from "react";

export const useCountriesContext = () => {
  const context = useContext(CountriesContext);

  if (!context) {
    throw Error(
      "useCountriesContext must be used inside an CountryContextProvider"
    );
  }

  return context;
};
