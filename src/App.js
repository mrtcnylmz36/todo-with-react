import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState([]);
  const [statusList, setStatusList] = useState([]);
  return (
    <div className="App">
      <section className="todoapp">
        <Header
          setInputValue={setInputValue}
          inputValue={inputValue}
          setList={setList}
        />
        <Main
          setList={setList}
          list={list}
          statusList={statusList}
          setStatusList={setStatusList}
        />
      </section>
      <Footer />
    </div>
  );
}

export default App;
