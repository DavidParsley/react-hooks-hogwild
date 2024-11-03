import React from "react";

export default function Hog({ hog, onSelectHog, onHideHog }) {
  return (
    <div className="pigTile" onClick={() => onSelectHog(hog)}>
      <h3>{hog.name}</h3>
      <img src={hog.image} alt={hog.name} />
      <button onClick={() => onHideHog(hog)}>Hide</button>
    </div>
  );
}


