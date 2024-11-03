import React, { useState } from "react";
import Nav from "./Nav";
import HogCollection from "./HogCollection";
import HogInfo from "./HogInfo";
import hogs from "../porkers_data";

function App() {
  
  const [selectedHog, setSelectedHog] = useState(null)

  const [hogsData, setHogsData] = useState(hogs)

  const handleHideHog = (hogToHide) => {
    setHogsData(hogsData.filter(hog => hog !== hogToHide))
  }

  const [isGreasedVisible, setIsGreasedVisible] = useState(false)
  const [sortingCriteria, setSortingCriteria] = useState("name")


  const availableHogs = isGreasedVisible ? hogsData.filter(hog => hog.greased) : hogsData
  
  const sortedHogsList = [...availableHogs].sort((a, b) => {
    if (sortingCriteria === "name") {
      return a.name > b.name ? 1 : -1
    } else {
      return a.weight - b.weight
    }
  })
  return (
    <div className="App">
      <Nav onAddHog={(newHog)=>setHogsData([...hogsData, newHog])} setSortingCriteria={setSortingCriteria} />
      <br />
      <br />
      <HogInfo hog={selectedHog} /> 
      <br />
      <br />
      <div className="ui grid container">
        <HogCollection 
          hogs={sortedHogsList} 
          onSelectHog={(hog)=>setSelectedHog(hog)} 
          onHideHog={handleHideHog}
          setIsGreasedVisible={setIsGreasedVisible} 
          isGreasedVisible={isGreasedVisible} 
        />
      </div>
    </div>
  )
}

export default App