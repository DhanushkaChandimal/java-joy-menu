import Coffees from "./Coffees"
import Pastries from "./Pastries"
import Teas from "./Teas"
import './MenuStyles.css';
import { useState } from "react";

const App = () => {
  const[showCoffees, setShowCoffees] = useState(true)
  const[showTeas, setShowTeas] = useState(true)
  const[showPatries, setShowPatries] = useState(true)
  const coffees = useState(['Espresso ', 'Cappuccino ', 'Latte ', ])
  const teas = useState(['Green Tea ', 'Chamilie Tea ', 'Earl Grey Tea ', ])
  const pastries = useState(['Croissant ', 'Blueberry Mufin ', 'Cinnamon Rolls ', ])

  return (
    <div className="menu-board">
      <h1>Java Joy Menu</h1>
      {showCoffees && <Coffees items={coffees}/>}
      {showTeas && <Teas items={teas}/>}
      {showPatries && <Pastries items={pastries} header="Pastries"/>}
    </div>
  )
}

export default App
