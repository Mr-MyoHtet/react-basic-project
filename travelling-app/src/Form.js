import { useState } from "react";
export default function Form({ addItem }) {
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
