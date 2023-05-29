import { useState } from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

import Map from "../components/maps/VisasMap";

function Visas() {
  const [content, setContent] = useState("");
  return (
    <>
      <Map setTooltipContent={setContent} />
      <Tooltip
        className="px-3 py-3 bg-slate-800"
        anchorId="map"
        content={content}
        multiline={true}
        float
      />
    </>
  );
}

export default Visas;
