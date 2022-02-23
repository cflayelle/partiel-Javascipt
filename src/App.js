import './App.css';

function App() {
  const items = ["Pain", "Steak", "Tomate", "Sauce burger", "Frites"]
  const lists = 
    items.map((item, index) => (
      <div key={index}>
        <input type="checkbox" id={index} name={index}/>
        <label htmlFor={index}>{item}</label>
      </div>
    ))

  return (
    <div class="list">
      <h1>Liste</h1>
      <form>
         {lists}
         
       </form>
    </div>
  )
}

export default App;