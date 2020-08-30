import React, { useState, useContext, useEffect } from "react";
import { Helmet } from "react-helmet";
import { StatusContext } from "./StatusContext";

function Tasks() {
  const TITLE = "ARM Security Tasks";
  const user = useContext(StatusContext);
  const { admin } = user;
  const handleFocus = () => {
    let label = document.querySelector(".label");
    label.style.top = "-23px";
  };

  const handleBlur = () => {
    let label = document.querySelector(".label");
    let input = document.querySelector("#task");
    if (input.value === "") {
      label.style.top = "0px";
    } else {
      label.style.top = "-23px";
    }
  };

  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const [tasks, setTasks] = useState([
    { id: Math.random(), t: "Change UI/UX Design for website" },
    { id: Math.random(), t: "Meeting with the new employee" },
  ]);

  const handleTodo = () => {
    if (!value) return;
    if (admin === true) {
      const newTask = [...tasks, { id: Math.random() * 99.9, t: value }];
      setTasks(newTask);
      setValue("");
      let label = document.querySelector(".label");
      label.style.top = "0px";
    } else {
      return null;
    }
  };
  useEffect(() => {
    if (admin === "guest") {
      let status = document.querySelector(".needAdmin");
      if (status) {
        status.style.display = "block";
      }
    }
  }, [admin]);

  const handleDelete = (index) => {
    if (admin === true) {
      const newTodos = tasks.filter((item) => item.id !== index);
      setTasks(newTodos);
    } else {
      return null;
    }
  };
  return (
    <div className="addTask">
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <label htmlFor="task" className="label">
        New task
      </label>
      <input
        type="text"
        id="task"
        value={value}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={(e) => handleChange(e)}
      />
      <button className="addBtn" onClick={handleTodo}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="plus icon"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#E91E63"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </button>
      <div className="allTasks">
        {tasks.map((t) => (
          <div key={t.id}>
            <p key={t.id} className="taskTitle">
              {t.t}
            </p>
            <button onClick={() => handleDelete(t.id)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="trash"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#E91E63"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="10" y1="11" x2="10" y2="17" />
                <line x1="14" y1="11" x2="14" y2="17" />
                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
              </svg>
            </button>
          </div>
        ))}
        {tasks.length === 0 && (
          <div className="zero">
            <p className="zeroTasks">0 tasks left, congrats.</p>
          </div>
        )}

        <p className="needAdmin">
          You need to be admin to interact with tasks.
        </p>
      </div>
    </div>
  );
}

export default Tasks;
