import { useState, useEffect } from "react";
import List from "./List";
const Form = () => {
  const [list, setList] = useState("");
  const [input, setInput] = useState("");
  const [newData, setNewData] = useState(false);
  useEffect(() => {
    setNewData(false);
  }, [newData]);
  const submitForm = (event) => {
    event.preventDefault();
    const item = { nots: input, status: "panding" };
    setList([...list, item]);
    setInput("");
  };
  const inputHandler = (event) => {
    setInput(event.target.value);
  };

  const removeItemHeader = (id) => {
    const data = list;
    const mydata = data.filter((_, index) => index != id);
    setList(mydata);
  };

  const confirmHandler = (id) => {
    const data = list;
    setNewData(true);
    data[id].status = "success";
    setList(data);
  };
  return (
    <>
      <form className="form-row mb-3" onSubmit={submitForm}>
        <div className="col-6">
          <input
            className="form-control mb-2"
            type="text"
            onChange={inputHandler}
            value={input}
          />
        </div>
        <button className="btn btn-primary col">Add TODO</button>
      </form>
      <ul className="list-group">
        <List
          removeItem={removeItemHeader}
          confirmItem={confirmHandler}
          list={list}
        />
      </ul>
    </>
  );
};

export default Form;
