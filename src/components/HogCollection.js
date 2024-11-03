import React from "react";
import Hog from "./Hog";

export default function HogCollection({ hogs, onSelectHog, onHideHog, setIsGreasedVisible, isGreasedVisible }) {
  return (
    <div>
      <label>
        Show Greased:
        <input
          type="checkbox"
          checked={isGreasedVisible}
          onChange={(e) => setIsGreasedVisible(e.target.checked)}
        />
      </label>
      <div className="ui grid">
        {hogs.map((hog) => (
          <div  className="ui eight wide column" key={hog.name} >
          <Hog hog={hog} onSelectHog={onSelectHog} onHideHog={onHideHog} />
          </div>
        ))}
      </div>
    </div>
  );
}


