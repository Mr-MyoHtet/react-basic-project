import { useState } from "react";
import "./styles.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion />
    </div>
  );
}

function Accordion() {
  const [currentOpen, setCurrentOpen] = useState(null);
  return (
    <div>
      {faqs.map((faq, i) => (
        <Items
          item={faq}
          num={i}
          currentOpen={currentOpen}
          onOpen={setCurrentOpen}
        ></Items>
      ))}
    </div>
  );
}

function Items({ item, num, currentOpen, onOpen }) {
  //const [isOpen, setisOpen] = useState(false);
  const isOpen = num === currentOpen;
  function openToogle() {
    //setisOpen((isOpen) => !isOpen);
    onOpen(isOpen ? null : num);
  }
  return (
    <div className="accordion" onClick={openToogle}>
      <div className={`item ${isOpen ? "open" : ""}`}>
        <p className="number">{num < 9 ? `0${num + 1}` : `${num + 1}`}</p>
        <p className="title">{item.title}</p>
        <p className="icon">{isOpen ? `-` : `+`}</p>
        {isOpen && <div className="content-box">{item.text}</div>}
      </div>
    </div>
  );
}
