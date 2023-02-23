import { useCountriesContext } from "../hooks/useCountriesContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { TiDelete } from "react-icons/ti";

const CountryDetails = ({ country }) => {
  const { dispatch } = useCountriesContext();
  const { user } = useAuthContext();

  const handleClick = async () => {
    if (!user) {
      return;
    }

    const response = await fetch(
      `https://visited-api.onrender.com/api/countries/${country._id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_COUNTRY", payload: json });
    }
  };

  return (
    <div className="p-2 flex">
      <button
        className="mr-4 bg-red-500 text-white rounded-full px-1 py-0.5"
        onClick={handleClick}
      >
        <TiDelete />
      </button>
      <h4>{country.name}</h4>
    </div>
  );
};

export default CountryDetails;
