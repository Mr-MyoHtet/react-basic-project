import { useState } from "react";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: true },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
// ];
function App() {
  const [newItems, setNewItems] = useState([]);

  //const numItems = newItems.length;

  //handleAddItems is function and setNewItems into newItems array
  function handleAddItem(items) {
    console.log(items);
    //push new item with destructre react is alaways inmuttted
    setNewItems((newItems) => [...newItems, items]);
  }

  //delete item
  function handleDeleteItem(id) {
    setNewItems((newItems) => newItems.filter((item) => item.id != id));
  }

  //checkbox toogle
  function handleCheckboxToogle(id) {
    setNewItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      {/* addItems is props name and handleAddItems is the function */}
      <Form addItem={handleAddItem} />
      {/* //items is props name //newItems is array object */}
      <PackingList
        items={newItems}
        handleDelete={handleDeleteItem}
        handleCheckToogle={handleCheckboxToogle}
      />
      <Stats items={newItems} />
    </div>
  );
}
function Logo() {
  return <h1>💖 Far Way Travelling 🧳</h1>;
}

function Form({ addItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setquantity] = useState(1);
  const [newItems, setNewItems] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    let items = { id: Date.now(), quantity, description, packed: false };
    //addItem is props name
    addItem(items);

    setDescription("");
    setquantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 🥰 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setquantity(Number(e.target.value))}
      >
        {Array.from({ length: 10 }, (v, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button>Add</button>
    </form>
  );
}
// <PackingList items={newItems} /> get items variable with destructure
function PackingList({ items, handleDelete, handleCheckToogle }) {
  console.log(items);

  //sorted  items
  let [sorted, setSorted] = useState("input");
  let sortedItem;
  if (sorted == "input") sortedItem = items;
  if (sorted == "description")
    sortedItem = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sorted == "packed")
    sortedItem = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {sortedItem.map((items) => (
          <Items
            itemsObj={items}
            key={items.id}
            handel={handleDelete}
            checkToogle={handleCheckToogle}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sorted} onChange={(e) => setSorted(e.target.value)}>
          <option value="input">Sorted by Input Value</option>
          <option value="description">Sorted by Description</option>
          <option value="packed">Sorted by Packed</option>
        </select>
      </div>
    </div>
  );
}
function Items({ itemsObj, handel, checkToogle }) {
  return (
    <li>
      <input type="checkbox" onChange={() => checkToogle(itemsObj.id)}></input>
      <span style={itemsObj.packed ? { textDecoration: "line-through" } : {}}>
        {itemsObj.quantity} {itemsObj.description}
      </span>
      <button onClick={() => handel(itemsObj.id)}>❌</button>
    </li>
  );
}
function Stats({ items }) {
  const numItems = items.length;
  const packed = items.filter((item) => item.packed).length;
  const packedPer = Math.round((packed / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {packedPer === 100
          ? `You have alerdy to go trrip✈️`
          : `You have ${numItems} items on your list, and you already packed ${packed}
        and
        ${packedPer}%`}
      </em>
    </footer>
  );
}
export default App;
