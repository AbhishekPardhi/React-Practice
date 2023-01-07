// import React from "react";
// import ReactDom from "react-dom";
import { createRoot } from "react-dom/client";

// CSS
import "./index.css";

import { data } from "./books";
import Book from "./Book";

function BookList() {
  return (
    <section className="booklist">
      {data.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

// ReactDom.render(<BookList />, document.getElementById("root"));
const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<BookList />);
