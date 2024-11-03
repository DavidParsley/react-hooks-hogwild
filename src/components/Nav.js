import React from "react";
import HogCreator from "./HogCreator";
import piggy from "../assets/porco.png";

export default function Nav({ onAddHog, setSortingCriteria }) {
  return (
    <div className="navWrapper">
      <span className="headerText">HogWild</span>
      <div className="TwirlyPig">
        <img src={piggy} className="App-logo" alt="piggy" />
      </div>
      <span className="normalText">A React App for County Fair Hog Fans</span>
      <br />
      <br />
      <HogCreator onAddHog={onAddHog} />
      <div className="sortByWrapper">
        <label>
          Sort By:
          <select onChange={(e) => setSortingCriteria(e.target.value)}>
            <option value="name">Name</option>
            <option value="weight">Weight</option>
          </select>
        </label>
      </div>
    </div>
  );
}

