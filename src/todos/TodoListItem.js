import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { availablecolors, capital } from "../filters/colors";
const selecttodobyid = (state, todoid) => {
  return state.todos.find((todo) => todo.id === todoid);
};

const TodoListItem = ({ id }) => {
  const todo = useSelector((state) => selecttodobyid(state, id));
//   const { text, completed, color } = todo;
console.log(todo)
  const dispatch = useDispatch();

  const handlecompletedchanged = () => {
    dispatch({
      type: "todos/todoToggled",
      payload: todo.id,
    });
  };
  const ondelete = () => {
    dispatch({
      type: "todos/tododeleted",
      payload: todo.id,
    });
  };
  const handlecolorchange = (e) => {
    const color = e.target.value;
    dispatch({
      type: "todos/colorselected",
      payload: { todoid: todo.id, color },
    });
  };
  const coloroptions = availablecolors.map((c) => (
    <option key={c} value={c}>
      {capital(c)}
    </option>
  ));
  return (
    <div>
      <div>
        <input
          type="checkbox"
          checked={false}
          onChange={handlecompletedchanged}
        />
        <div>{""}</div>
      </div>
      <div>
        {" "}
        <select value={0}  onChange={handlecolorchange}>
          <options value=""> {coloroptions}</options>
        </select>
        <button onClick={ondelete}>cross</button>
      </div>
    </div>
  );
};

export default TodoListItem;
