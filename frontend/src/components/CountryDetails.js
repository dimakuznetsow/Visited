import { useCountriesContext } from "../hooks/useCountriesContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { TiDelete } from "react-icons/ti";

const CountryDetails = ({ country }) => {
  const { dispatch } = useCountriesContext();
  const { user } = useAuthContext();

  const countryFlagUrls = {
    Afghanistan: "https://hatscripts.github.io/circle-flags/flags/af.svg",
    Algeria: "https://hatscripts.github.io/circle-flags/flags/dz.svg",
    Angola: "https://hatscripts.github.io/circle-flags/flags/ao.svg",
    Argentina: "https://hatscripts.github.io/circle-flags/flags/ar.svg",
    Belize: "https://hatscripts.github.io/circle-flags/flags/bz.svg",
    Benin: "https://hatscripts.github.io/circle-flags/flags/bj.svg",
    Bolivia: "https://hatscripts.github.io/circle-flags/flags/bo.svg",
    Botswana: "https://hatscripts.github.io/circle-flags/flags/bw.svg",
    Brazil: "https://hatscripts.github.io/circle-flags/flags/br.svg",
    BurkinaFaso: "https://hatscripts.github.io/circle-flags/flags/bf.svg",
    Burundi: "https://hatscripts.github.io/circle-flags/flags/bi.svg",
    Cameroon: "https://hatscripts.github.io/circle-flags/flags/cm.svg",
    Canada: "https://hatscripts.github.io/circle-flags/flags/ca.svg",
    CapeVerde: "https://hatscripts.github.io/circle-flags/flags/cv.svg",
    CentralAfricanRepublic:
      "https://hatscripts.github.io/circle-flags/flags/cf.svg",
    Chad: "https://hatscripts.github.io/circle-flags/flags/td.svg",
    Chile: "https://hatscripts.github.io/circle-flags/flags/cl.svg",
    Comoros: "https://hatscripts.github.io/circle-flags/flags/km.svg",
    CostaRica: "https://hatscripts.github.io/circle-flags/flags/cr.svg",
    Colombia: "https://hatscripts.github.io/circle-flags/flags/co.svg",
    Cuba: "https://hatscripts.github.io/circle-flags/flags/cu.svg",
    DemocraticRepublicoftheCongo:
      "https://hatscripts.github.io/circle-flags/flags/cd.svg",
    Djibouti: "https://hatscripts.github.io/circle-flags/flags/dj.svg",
    Ecuador: "https://hatscripts.github.io/circle-flags/flags/ec.svg",
    Egypt: "https://hatscripts.github.io/circle-flags/flags/eg.svg",
    ElSalvador: "https://hatscripts.github.io/circle-flags/flags/sv.svg",
    EquatorialGuinea: "https://hatscripts.github.io/circle-flags/flags/gq.svg",
    Eritrea: "https://hatscripts.github.io/circle-flags/flags/er.svg",
    Eswatini: "https://hatscripts.github.io/circle-flags/flags/sz.svg",
    Ethiopia: "https://hatscripts.github.io/circle-flags/flags/et.svg",
    France: "https://hatscripts.github.io/circle-flags/flags/fr.svg",
    FrenchGuiana: "https://hatscripts.github.io/circle-flags/flags/gf.svg",
    Gabon: "https://hatscripts.github.io/circle-flags/flags/ga.svg",
    Gambia: "https://hatscripts.github.io/circle-flags/flags/gm.svg",
    Germany: "https://hatscripts.github.io/circle-flags/flags/de.svg",
    Ghana: "https://hatscripts.github.io/circle-flags/flags/gh.svg",
    Greenland: "https://hatscripts.github.io/circle-flags/flags/gl.svg",
    Guatemala: "https://hatscripts.github.io/circle-flags/flags/gt.svg",
    Guinea: "https://hatscripts.github.io/circle-flags/flags/gn.svg",
    GuineaBissau: "https://hatscripts.github.io/circle-flags/flags/gw.svg",
    Guyana: "https://hatscripts.github.io/circle-flags/flags/gy.svg",
    Honduras: "https://hatscripts.github.io/circle-flags/flags/hn.svg",
    Israel: "https://hatscripts.github.io/circle-flags/flags/il.svg",
    IvoryCoast: "https://hatscripts.github.io/circle-flags/flags/ci.svg",
    Kenya: "https://hatscripts.github.io/circle-flags/flags/ke.svg",
    Kazakhstan: "https://hatscripts.github.io/circle-flags/flags/kz.svg",
    Lesotho: "https://hatscripts.github.io/circle-flags/flags/ls.svg",
    Liberia: "https://hatscripts.github.io/circle-flags/flags/lr.svg",
    Libya: "https://hatscripts.github.io/circle-flags/flags/ly.svg",

    Mexico: "https://hatscripts.github.io/circle-flags/flags/mx.svg",
    Nicaragua: "https://hatscripts.github.io/circle-flags/flags/ni.svg",
    Panama: "https://hatscripts.github.io/circle-flags/flags/pa.svg",
    Paraguay: "https://hatscripts.github.io/circle-flags/flags/py.svg",
    Peru: "https://hatscripts.github.io/circle-flags/flags/pe.svg",
    Russia: "https://hatscripts.github.io/circle-flags/flags/ru.svg",
    SaintVincentandtheGrenadines:
      "https://hatscripts.github.io/circle-flags/flags/vc.svg",
    Suriname: "https://hatscripts.github.io/circle-flags/flags/sr.svg",
    Uruguay: "https://hatscripts.github.io/circle-flags/flags/uy.svg",
    UnitedKingdom: "https://hatscripts.github.io/circle-flags/flags/gb.svg",
    UnitedStatesofAmerica:
      "https://hatscripts.github.io/circle-flags/flags/us.svg",
    Venezuela: "https://hatscripts.github.io/circle-flags/flags/ve.svg",
  };

  const handleClick = async () => {
    if (!user) {
      return;
    }

    const response = await fetch(
      "https://visited-api.onrender.com/api/countries/" + country._id,
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
    <>
      <div className="flex items-center">
        <img
          className="mr-4"
          srcSet={countryFlagUrls[country.name.replace(/[\s-']/g, "")] || ""}
          alt={country.name}
          width="38"
        />
        <h4>{country.name}</h4>
      </div>
      <button
        className="xs:mr-4 sm:mr-52 md:mr-10 lg:mr-28 xl:mr-52 text-white font-medium bg-red-600 text-sm rounded-full px-2"
        onClick={handleClick}
      >
        delete
        {/* <TiDelete className="" /> */}
      </button>
    </>
  );
};

export default CountryDetails;
