const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];
function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}
function Logo() {
  return <h1>💖 Far Way Travelling 🧳</h1>;
}
function handleSubmit(e) {
  e.preventDefault();
  console.log(e);
}
function Form() {
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 🥰 trip?</h3>
      <select>
        {Array.from({ length: 10 }, (v, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input type="text" placeholder="Item..."></input>
      <button>Add</button>
    </form>
  );
}
function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((items) => (
          <Items itemsObj={items} key={items.id} />
        ))}
      </ul>
    </div>
  );
}
function Items({ itemsObj }) {
  return (
    <li>
      <span style={itemsObj.packed ? { textDecoration: "line-through" } : {}}>
        {itemsObj.quantity} {itemsObj.description}
      </span>
    </li>
  );
}
function Stats() {
  return (
    <footer className="stats">
      <em>You have X items on your list, and you already packed X (X%)</em>
    </footer>
  );
}
export default App;
