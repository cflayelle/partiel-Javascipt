import './App.css';
import { useState } from 'react'

function App() {
  const [items,setItems] = useState(["Pain", "Steak", "Tomate", "Sauce burger", "Frites"])
  const [addItem, setAddItem] = useState("")
  
  const lists = 
    items.map((item, index) => (
      <div key={index}>
        <input type="checkbox" id={index} name={index}/>
        <label htmlFor={index}>{item}</label>
      </div>
    ))
  
   const handleChange = (e) => {
     setAddItem(e.target.value)
   }

   const handleSubmit = (e) => {
      setItems(
        [...items,
          addItem]
      )
     e.preventDefault()
   }
  
  return (
    <div class="list">
      <h1>Liste</h1>
       <form onSubmit={handleSubmit}>
        {lists}
        <div>
           <p>Ajouter un élément à la liste (🍕 ou 🍪) : </p>
           <textarea onChange={handleChange} id="addItem" name="addItem" value={addItem} onChange={handleChange}/>
          </div>
         <div>
           <button type="submit">Ajouter</button>
         </div>
       </form>
    </div>
  )
}

export default App;