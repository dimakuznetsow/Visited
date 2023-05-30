import { useCountriesContext } from "../hooks/useCountriesContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { TiDelete } from "react-icons/ti";

const CountryDetails = ({ country }) => {
  const { dispatch } = useCountriesContext();
  const { user } = useAuthContext();

  const countryFlagUrls = {
    Afghanistan: "https://hatscripts.github.io/circle-flags/flags/af.svg",
    Albania: "https://hatscripts.github.io/circle-flags/flags/al.svg",
    Algeria: "https://hatscripts.github.io/circle-flags/flags/dz.svg",

    AntiguaandBarbuda: "https://hatscripts.github.io/circle-flags/flags/ag.svg",
    Andorra: "https://hatscripts.github.io/circle-flags/flags/ad.svg",
    Angola: "https://hatscripts.github.io/circle-flags/flags/ao.svg",
    Argentina: "https://hatscripts.github.io/circle-flags/flags/ar.svg",
    Armenia: "https://hatscripts.github.io/circle-flags/flags/am.svg",
    Australia: "https://hatscripts.github.io/circle-flags/flags/au.svg",
    Austria: "https://hatscripts.github.io/circle-flags/flags/at.svg",
    Azerbaijan: "https://hatscripts.github.io/circle-flags/flags/az.svg",
    Bahamas: "https://hatscripts.github.io/circle-flags/flags/bs.svg",
    Bahrain: "https://hatscripts.github.io/circle-flags/flags/bh.svg",
    Bangladesh: "https://hatscripts.github.io/circle-flags/flags/bd.svg",
    Barbados: "https://hatscripts.github.io/circle-flags/flags/bb.svg",
    Belarus: "https://hatscripts.github.io/circle-flags/flags/by.svg",
    Belgium: "https://hatscripts.github.io/circle-flags/flags/be.svg",
    Belize: "https://hatscripts.github.io/circle-flags/flags/bz.svg",
    Benin: "https://hatscripts.github.io/circle-flags/flags/bj.svg",
    Bhutan: "https://hatscripts.github.io/circle-flags/flags/bt.svg",
    Bolivia: "https://hatscripts.github.io/circle-flags/flags/bo.svg",
    BosniaandHerzegovina:
      "https://hatscripts.github.io/circle-flags/flags/ba.svg",
    Botswana: "https://hatscripts.github.io/circle-flags/flags/bw.svg",
    Brazil: "https://hatscripts.github.io/circle-flags/flags/br.svg",
    Brunei: "https://hatscripts.github.io/circle-flags/flags/bn.svg",
    BurkinaFaso: "https://hatscripts.github.io/circle-flags/flags/bf.svg",
    Bulgaria: "https://hatscripts.github.io/circle-flags/flags/bg.svg",
    Burundi: "https://hatscripts.github.io/circle-flags/flags/bi.svg",
    Cambodia: "https://hatscripts.github.io/circle-flags/flags/kh.svg",
    Cameroon: "https://hatscripts.github.io/circle-flags/flags/cm.svg",
    Canada: "https://hatscripts.github.io/circle-flags/flags/ca.svg",
    CapeVerde: "https://hatscripts.github.io/circle-flags/flags/cv.svg",
    CentralAfricanRepublic:
      "https://hatscripts.github.io/circle-flags/flags/cf.svg",
    Chad: "https://hatscripts.github.io/circle-flags/flags/td.svg",
    Chile: "https://hatscripts.github.io/circle-flags/flags/cl.svg",
    China: "https://hatscripts.github.io/circle-flags/flags/cn.svg",
    Comoros: "https://hatscripts.github.io/circle-flags/flags/km.svg",
    CostaRica: "https://hatscripts.github.io/circle-flags/flags/cr.svg",
    Colombia: "https://hatscripts.github.io/circle-flags/flags/co.svg",
    Croatia: "https://hatscripts.github.io/circle-flags/flags/hr.svg",
    Cuba: "https://hatscripts.github.io/circle-flags/flags/cu.svg",
    Cyprus: "https://hatscripts.github.io/circle-flags/flags/cy.svg",
    CzechRepublic: "https://hatscripts.github.io/circle-flags/flags/cz.svg",
    DemocraticRepublicoftheCongo:
      "https://hatscripts.github.io/circle-flags/flags/cd.svg",
    Denmark: "https://hatscripts.github.io/circle-flags/flags/dk.svg",
    Djibouti: "https://hatscripts.github.io/circle-flags/flags/dj.svg",
    Dominica: "https://hatscripts.github.io/circle-flags/flags/dm.svg",
    DominicanRepublic: "https://hatscripts.github.io/circle-flags/flags/do.svg",
    Ecuador: "https://hatscripts.github.io/circle-flags/flags/ec.svg",
    Egypt: "https://hatscripts.github.io/circle-flags/flags/eg.svg",
    ElSalvador: "https://hatscripts.github.io/circle-flags/flags/sv.svg",
    EquatorialGuinea: "https://hatscripts.github.io/circle-flags/flags/gq.svg",
    Eritrea: "https://hatscripts.github.io/circle-flags/flags/er.svg",
    Estonia: "https://hatscripts.github.io/circle-flags/flags/ee.svg",
    Eswatini: "https://hatscripts.github.io/circle-flags/flags/sz.svg",
    Ethiopia: "https://hatscripts.github.io/circle-flags/flags/et.svg",
    Fiji: "https://hatscripts.github.io/circle-flags/flags/fj.svg",
    Finland: "https://hatscripts.github.io/circle-flags/flags/fi.svg",
    France: "https://hatscripts.github.io/circle-flags/flags/fr.svg",
    FrenchGuiana: "https://hatscripts.github.io/circle-flags/flags/gf.svg",
    Gabon: "https://hatscripts.github.io/circle-flags/flags/ga.svg",
    Gambia: "https://hatscripts.github.io/circle-flags/flags/gm.svg",
    Georgia: "https://hatscripts.github.io/circle-flags/flags/ge.svg",
    Germany: "https://hatscripts.github.io/circle-flags/flags/de.svg",
    Greece: "https://hatscripts.github.io/circle-flags/flags/gr.svg",
    Ghana: "https://hatscripts.github.io/circle-flags/flags/gh.svg",
    Greenland: "https://hatscripts.github.io/circle-flags/flags/gl.svg",
    Grenada: "https://hatscripts.github.io/circle-flags/flags/gd.svg",
    Guatemala: "https://hatscripts.github.io/circle-flags/flags/gt.svg",
    Guinea: "https://hatscripts.github.io/circle-flags/flags/gn.svg",
    GuineaBissau: "https://hatscripts.github.io/circle-flags/flags/gw.svg",
    Guyana: "https://hatscripts.github.io/circle-flags/flags/gy.svg",
    Haiti: "https://hatscripts.github.io/circle-flags/flags/ht.svg",
    Honduras: "https://hatscripts.github.io/circle-flags/flags/hn.svg",
    Hungary: "https://hatscripts.github.io/circle-flags/flags/hu.svg",
    Iceland: "https://hatscripts.github.io/circle-flags/flags/is.svg",
    India: "https://hatscripts.github.io/circle-flags/flags/in.svg",
    Indonesia: "https://hatscripts.github.io/circle-flags/flags/id.svg",
    Iran: "https://hatscripts.github.io/circle-flags/flags/ir.svg",
    Iraq: "https://hatscripts.github.io/circle-flags/flags/iq.svg",
    Ireland: "https://hatscripts.github.io/circle-flags/flags/ie.svg",
    Israel: "https://hatscripts.github.io/circle-flags/flags/il.svg",
    Italy: "https://hatscripts.github.io/circle-flags/flags/it.svg",
    IvoryCoast: "https://hatscripts.github.io/circle-flags/flags/ci.svg",
    Jamaica: "https://hatscripts.github.io/circle-flags/flags/jm.svg",
    Japan: "https://hatscripts.github.io/circle-flags/flags/jp.svg",
    Jordan: "https://hatscripts.github.io/circle-flags/flags/jo.svg",
    Kenya: "https://hatscripts.github.io/circle-flags/flags/ke.svg",
    Kazakhstan: "https://hatscripts.github.io/circle-flags/flags/kz.svg",
    Kiribati: "https://hatscripts.github.io/circle-flags/flags/ki.svg",
    Kosovo: "https://hatscripts.github.io/circle-flags/flags/xk.svg",
    Kuwait: "https://hatscripts.github.io/circle-flags/flags/kw.svg",
    Kyrgyzstan: "https://hatscripts.github.io/circle-flags/flags/kg.svg",
    Laos: "https://hatscripts.github.io/circle-flags/flags/la.svg",
    Latvia: "https://hatscripts.github.io/circle-flags/flags/lv.svg",
    Lebanon: "https://hatscripts.github.io/circle-flags/flags/lb.svg",
    Lesotho: "https://hatscripts.github.io/circle-flags/flags/ls.svg",
    Liberia: "https://hatscripts.github.io/circle-flags/flags/lr.svg",
    Libya: "https://hatscripts.github.io/circle-flags/flags/ly.svg",
    Liechtenstein: "https://hatscripts.github.io/circle-flags/flags/li.svg",
    Lithuania: "https://hatscripts.github.io/circle-flags/flags/lt.svg",
    Luxembourg: "https://hatscripts.github.io/circle-flags/flags/lx.svg",
    Macedonia: "https://hatscripts.github.io/circle-flags/flags/mk.svg",
    Madagascar: "https://hatscripts.github.io/circle-flags/flags/mg.svg",
    Malawi: "https://hatscripts.github.io/circle-flags/flags/mw.svg",
    Maldives: "https://hatscripts.github.io/circle-flags/flags/mv.svg",
    Malaysia: "https://hatscripts.github.io/circle-flags/flags/my.svg",
    Mali: "https://hatscripts.github.io/circle-flags/flags/ml.svg",
    Malta: "https://hatscripts.github.io/circle-flags/flags/mt.svg",
    MarshallIslands: "https://hatscripts.github.io/circle-flags/flags/mh.svg",
    Mauritania: "https://hatscripts.github.io/circle-flags/flags/mr.svg",
    Mauritius: "https://hatscripts.github.io/circle-flags/flags/mu.svg",
    Micronesia: "https://hatscripts.github.io/circle-flags/flags/fm.svg",
    Mexico: "https://hatscripts.github.io/circle-flags/flags/mx.svg",
    Moldova: "https://hatscripts.github.io/circle-flags/flags/md.svg",
    Monaco: "https://hatscripts.github.io/circle-flags/flags/mc.svg",
    Mongolia: "https://hatscripts.github.io/circle-flags/flags/mn.svg",
    Montenegro: "https://hatscripts.github.io/circle-flags/flags/me.svg",
    Morocco: "https://hatscripts.github.io/circle-flags/flags/ma.svg",
    Mozambique: "https://hatscripts.github.io/circle-flags/flags/mz.svg",
    Myanmar: "https://hatscripts.github.io/circle-flags/flags/mm.svg",
    Namibia: "https://hatscripts.github.io/circle-flags/flags/na.svg",
    Nauru: "https://hatscripts.github.io/circle-flags/flags/nr.svg",
    Nepal: "https://hatscripts.github.io/circle-flags/flags/np.svg",
    Netherlands: "https://hatscripts.github.io/circle-flags/flags/nl.svg",
    NewCaledonia: "https://hatscripts.github.io/circle-flags/flags/nc.svg",
    NewZealand: "https://hatscripts.github.io/circle-flags/flags/nz.svg",
    Nicaragua: "https://hatscripts.github.io/circle-flags/flags/ni.svg",
    Niger: "https://hatscripts.github.io/circle-flags/flags/ne.svg",
    Nigeria: "https://hatscripts.github.io/circle-flags/flags/ng.svg",
    NorthKorea: "https://hatscripts.github.io/circle-flags/flags/kp.svg",
    Norway: "https://hatscripts.github.io/circle-flags/flags/no.svg",
    Oman: "https://hatscripts.github.io/circle-flags/flags/om.svg",
    Qatar: "https://hatscripts.github.io/circle-flags/flags/qa.svg",
    Pakistan: "https://hatscripts.github.io/circle-flags/flags/pk.svg",
    Palau: "https://hatscripts.github.io/circle-flags/flags/pw.svg",
    Panama: "https://hatscripts.github.io/circle-flags/flags/pa.svg",
    PapuaNewGuinea: "https://hatscripts.github.io/circle-flags/flags/pg.svg",
    Paraguay: "https://hatscripts.github.io/circle-flags/flags/py.svg",
    Peru: "https://hatscripts.github.io/circle-flags/flags/pe.svg",
    Philippines: "https://hatscripts.github.io/circle-flags/flags/ph.svg",
    Poland: "https://hatscripts.github.io/circle-flags/flags/pl.svg",
    Portugal: "https://hatscripts.github.io/circle-flags/flags/pt.svg",
    PuertoRico: "https://hatscripts.github.io/circle-flags/flags/pr.svg",
    RepublicofSerbia: "https://hatscripts.github.io/circle-flags/flags/rs.svg",
    RepublicoftheCongo:
      "https://hatscripts.github.io/circle-flags/flags/cg.svg",
    Romania: "https://hatscripts.github.io/circle-flags/flags/ro.svg",
    Russia: "https://hatscripts.github.io/circle-flags/flags/ru.svg",
    Rwanda: "https://hatscripts.github.io/circle-flags/flags/rw.svg",
    SaintKittsandNevis:
      "https://hatscripts.github.io/circle-flags/flags/kn.svg",
    SaintLucia: "https://hatscripts.github.io/circle-flags/flags/lc.svg",
    SaintVincentandtheGrenadines:
      "https://hatscripts.github.io/circle-flags/flags/vc.svg",
    Samoa: "https://hatscripts.github.io/circle-flags/flags/ws.svg",
    SanMarino: "https://hatscripts.github.io/circle-flags/flags/sm.svg",
    SaoTomeandPrincipe:
      "https://hatscripts.github.io/circle-flags/flags/st.svg",
    SaudiArabia: "https://hatscripts.github.io/circle-flags/flags/sa.svg",
    Senegal: "https://hatscripts.github.io/circle-flags/flags/sn.svg",
    Seychelles: "https://hatscripts.github.io/circle-flags/flags/sc.svg",
    SierraLeone: "https://hatscripts.github.io/circle-flags/flags/sl.svg",
    Singapore: "https://hatscripts.github.io/circle-flags/flags/sg.svg",
    Slovakia: "https://hatscripts.github.io/circle-flags/flags/sk.svg",
    Slovenia: "https://hatscripts.github.io/circle-flags/flags/si.svg",
    SolomonIslands: "https://hatscripts.github.io/circle-flags/flags/sb.svg",
    Somalia: "https://hatscripts.github.io/circle-flags/flags/so.svg",
    SouthAfrica: "https://hatscripts.github.io/circle-flags/flags/za.svg",
    SouthKorea: "https://hatscripts.github.io/circle-flags/flags/kr.svg",
    SouthSudan: "https://hatscripts.github.io/circle-flags/flags/ss.svg",
    Spain: "https://hatscripts.github.io/circle-flags/flags/es.svg",
    SriLanka: "https://hatscripts.github.io/circle-flags/flags/lk.svg",
    Sudan: "https://hatscripts.github.io/circle-flags/flags/sd.svg",
    Suriname: "https://hatscripts.github.io/circle-flags/flags/sr.svg",
    Sweden: "https://hatscripts.github.io/circle-flags/flags/se.svg",
    Switzerland: "https://hatscripts.github.io/circle-flags/flags/ch.svg",
    Syria: "https://hatscripts.github.io/circle-flags/flags/sy.svg",
    Taiwan: "https://hatscripts.github.io/circle-flags/flags/tw.svg",
    Tajikistan: "https://hatscripts.github.io/circle-flags/flags/tj.svg",
    Thailand: "https://hatscripts.github.io/circle-flags/flags/th.svg",
    EastTimor: "https://hatscripts.github.io/circle-flags/flags/tl.svg",
    Togo: "https://hatscripts.github.io/circle-flags/flags/tg.svg",
    Tonga: "https://hatscripts.github.io/circle-flags/flags/to.svg",
    TrinidadandTobago: "https://hatscripts.github.io/circle-flags/flags/tt.svg",
    Tunisia: "https://hatscripts.github.io/circle-flags/flags/tn.svg",
    Turkmenistan: "https://hatscripts.github.io/circle-flags/flags/tm.svg",
    Turkey: "https://hatscripts.github.io/circle-flags/flags/tr.svg",
    Tuvalu: "https://hatscripts.github.io/circle-flags/flags/tv.svg",
    Uganda: "https://hatscripts.github.io/circle-flags/flags/ug.svg",
    Ukraine: "https://hatscripts.github.io/circle-flags/flags/ua.svg",
    UnitedRepublicofTanzania:
      "https://hatscripts.github.io/circle-flags/flags/tz.svg",
    UnitedKingdom: "https://hatscripts.github.io/circle-flags/flags/gb.svg",
    UnitedArabEmirates:
      "https://hatscripts.github.io/circle-flags/flags/ae.svg",
    UnitedStatesofAmerica:
      "https://hatscripts.github.io/circle-flags/flags/us.svg",
    Uruguay: "https://hatscripts.github.io/circle-flags/flags/uy.svg",
    Uzbekistan: "https://hatscripts.github.io/circle-flags/flags/uz.svg",
    Vanuatu: "https://hatscripts.github.io/circle-flags/flags/vu.svg",
    Vatican: "https://hatscripts.github.io/circle-flags/flags/va.svg",
    Venezuela: "https://hatscripts.github.io/circle-flags/flags/ve.svg",
    Vietnam: "https://hatscripts.github.io/circle-flags/flags/vn.svg",
    Yemen: "https://hatscripts.github.io/circle-flags/flags/ye.svg",
    Zambia: "https://hatscripts.github.io/circle-flags/flags/zm.svg",
    Zimbabwe: "https://hatscripts.github.io/circle-flags/flags/zw.svg",
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
