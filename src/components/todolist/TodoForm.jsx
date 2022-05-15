import { useRef } from "react";

export default function TodoForm({ add }) {
  const inputRef = useRef();

  return (
    <div>
      <form>
        <input ref={inputRef} />
        <button onClick={click}>추가</button>
      </form>
    </div>
  );
  function click() {
    add(inputRef.current.value);
  }
}
