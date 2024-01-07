import { useState } from "react";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: true },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
// ];
function App() {
  const [newItems, setNewItems] = useState([]);

  //handleAddItems is function and setNewItems into newItems array
  function handleAddItem(items) {
    console.log("Helo");
    console.log(items);
    console.log("world");
    //push new item with destructre react is alaways inmuttted
    setNewItems((newItems) => [...newItems, items]);
  }

  //delete item
  function handleDeleteItem(id) {
    let x = setNewItems((newItems) => newItems.filter((item) => item.id != id));
    console.log("khant");
    console.log(x);
    console.log("phyo");
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
      <Stats />
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
  return (
    <div className="list">
      <ul>
        {items.map((items) => (
          <Items
            itemsObj={items}
            key={items.id}
            handel={handleDelete}
            checkToogle={handleCheckToogle}
          />
        ))}
      </ul>
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
function Stats() {
  return (
    <footer className="stats">
      <em>You have X items on your list, and you already packed X (X%)</em>
    </footer>
  );
}
export default App;
