import React, { useEffect, useState } from "react";

function Footer({ list, setList }) {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{list.length} </strong>
        items
      </span>
      <button className="clear-completed" onClick={() => setList([])}>
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;
