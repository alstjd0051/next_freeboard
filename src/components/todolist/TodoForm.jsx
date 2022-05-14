import { useRef } from "react";

export default function TodoForm({ add }) {
  const inputRef = useRef();
  function click() {
    // dispatch(addTodo(inputRef.current.value));
    add(inputRef.current.value);
  }
  return (
    <div>
      <input ref={inputRef} />
      <button onClick={click}>추가</button>
    </div>
  );
}
