import React, { useState } from "react";

function Todo() {
  const [input, setInput] = useState("Aman");
  const[itemList,setItemList] = useState([]);

  return (
    <div className="todo">
        <h1>Todo App</h1>
        <br />

        <input
          type="text"
          placeholder="Add a item"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={() => {
            setItemList(itemList => [...itemList, input])
        }}> + </button>
            <ol>
                {itemList.map((item, index) => (
                <li>{item}
                    <button
                        onClick = {() => {
                            itemList.splice(index, 1);
                            setItemList([...itemList]);
                        }}
                    >X</button>
                </li>
                ))}
            </ol>
    </div>
  );
}

export default Todo;
