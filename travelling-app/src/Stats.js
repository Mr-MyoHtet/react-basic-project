export default function Stats({ items }) {
  if (!items.length) {
    return (
      <div className="stats">
        <p>Add some items to go to the trip</p>
      </div>
    );
  }
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
