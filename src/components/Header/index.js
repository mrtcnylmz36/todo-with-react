import React from "react";
import { v4 as uuidv4 } from "uuid";

function Header({ setInputValue, inputValue, setList }) {
  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              if (e.target.value !== "") {
                setList((preValue) => [
                  ...preValue,
                  {
                    id: uuidv4(),
                    todo: inputValue,
                    status: false,
                  },
                ]);
              }
              setInputValue("");
            }
          }}
        />
      </form>
    </header>
  );
}

export default Header;
