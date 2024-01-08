import { useState } from "react";
export default function PackingList({
  items,
  handleDelete,
  handleCheckToogle,
  clearList,
}) {
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
        <button onClick={() => clearList()}>Clear List</button>
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
