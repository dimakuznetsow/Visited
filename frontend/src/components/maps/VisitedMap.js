import { useEffect, useState, useContext } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
  Sphere,
} from "react-simple-maps";
import geoUrl from "../../countriesMap.json";

import { DarkModeContext } from "../../context/DarkModeContext";

// const geoUrl =
//   "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

export default function Map({ setTooltipContent, countries }) {
  const { isDarkMode } = useContext(DarkModeContext);

  const [fillColor, setFillColor] = useState("");

  useEffect(() => {
    if (isDarkMode) {
      setFillColor("#1e293b");
    } else {
      setFillColor("#4ba3e3");
    }
  }, [isDarkMode]);

  return (
    <>
      <div id="map">
        <ComposableMap width={950} height={500}>
          <Graticule stroke="#ebe8eb" strokeWidth={0.5} />
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const d =
                  countries &&
                  countries.find((c) => c.name === geo.properties.name);
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={d ? fillColor : "#f5f4f6"}
                    stroke="#cdd2d5"
                    onMouseEnter={() => {
                      setTooltipContent(`${geo.properties.name}`);
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
                );
              })
            }
          </Geographies>
          <Sphere stroke="#ebe8eb" strokeWidth={0.5} />
        </ComposableMap>
      </div>
    </>
  );
}
