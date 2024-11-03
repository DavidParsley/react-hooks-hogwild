import React from "react";

export default function HogInfo({ hog }) {
  if (!hog) {
    return null;
  }

  return (
    <div>
      <h2>{hog.name}</h2>
      <p>Specialty: {hog.specialty}</p>
      <p>Weight: {hog.weight}</p>
      <p>Greased: {hog.greased ? "Yes" : "No"}</p>
      <p>Highest Medal Achieved: {hog["highest medal achieved"]}</p>
    </div>
  );
};

 