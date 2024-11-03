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
          <Hog key={hog.name} hog={hog} onSelectHog={onSelectHog} onHideHog={onHideHog} />
        ))}
      </div>
    </div>
  );
}


