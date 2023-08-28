import { useState } from "react";
import Footer from "./MainFooter";

function Main({ setList, list, statusList, setStatusList }) {
  const [onCheck, setOnCheck] = useState(false);

  // delete item
  function deleteItem(id) {
    setList((prevList) =>
      prevList.filter((items) => {
        return items.id !== id;
      })
    );
  }

  // toggle completed class
  function checked(item) {
    item.status = !item.status;
    setList((prev) => {
      let newList = prev.filter((i) => {
        return i.id !== item.id;
      });
      return [
        ...newList,
        {
          id: item.id,
          todo: item.todo,
          status: item.status,
        },
      ];
    });
  }

  // checked toggle all ıtem
  function checkedAll() {
    let newList = list.map((i) => {
      return {
        ...i,
        status: !i.status,
      };
    });

    setList(newList);
    setOnCheck(!onCheck);
  }

  return (
    <section className="main">
      <input
        className="toggle-all"
        type="checkbox"
        checked={onCheck}
        onChange={() => setOnCheck(!checked)}
      />
      <label htmlFor="toggle-all" onClick={() => checkedAll()}>
        Mark all as complete
      </label>

      <ul className="todo-list">
        {list !== [] &&
          list.map((item) => {
            return (
              <li key={item.id} className={item.status ? "completed" : null}>
                <div className="view">
                  <input
                    className="toggle"
                    type="checkbox"
                    onClick={
                      (e) => checked(item)
                      // e.target.parentNode.parentNode.classList.toggle(
                      //   "completed"
                      // );
                    }
                  />
                  <label>{item.todo}</label>
                  <button
                    className="destroy"
                    onClick={() => deleteItem(item.id)}
                  ></button>
                </div>
              </li>
            );
          })}
      </ul>
      {list.length !== 0 && <Footer setList={setList} list={list} />}
    </section>
  );
}

export default Main;
