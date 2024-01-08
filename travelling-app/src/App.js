import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import Stats from "./Stats";
import PackingList from "./PackingList";

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
  //clear item
  function clearList() {
    const confirm = window.confirm("Are you sure to delete this item?");
    if (confirm) setNewItems([]);
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
        clearList={clearList}
      />
      <Stats items={newItems} />
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

export default App;
