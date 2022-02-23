import './App.css';

function App() {
  const items = ["Pain", "Steak", "Tomate", "Sauce burger", "Frites"]
  const lists = items.map((item,index) => (
    <div key={index}>
      {item}
    </div>
  ))
  return (
    <div>
      <h1>Liste</h1>
      <div>
        {lists}
      </div>
    </div>
  )
}

export default App;