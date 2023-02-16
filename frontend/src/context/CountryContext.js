import { createContext, useReducer } from "react";

export const CountriesContext = createContext();

export const countriesReducer = (state, action) => {
  switch (action.type) {
    case "GET_COUNTRIES":
      return {
        countries: action.payload,
      };
    case "ADD_COUNTRY":
      return {
        countries: [action.payload, ...state.countries],
      };
    case "DELETE_COUNTRY":
      return {
        countries: state.countries.filter((c) => c._id !== action.payload._id),
      };
    default:
      return state;
  }
};

export const CountriesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(countriesReducer, {
    countries: null,
  });

  return (
    <CountriesContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CountriesContext.Provider>
  );
};
