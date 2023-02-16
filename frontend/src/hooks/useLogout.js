import { useAuthContext } from "./useAuthContext";
import { useCountriesContext } from "./useCountriesContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: countriesDispatch } = useCountriesContext();

  const logout = () => {
    localStorage.removeItem("user");

    dispatch({ type: "LOGOUT" });
    countriesDispatch({ type: "GET_COUNTRIES", payload: null });
  };
  return { logout };
};
