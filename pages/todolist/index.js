import React from "react";
import TodoFormContainer from "../../src/components/containers/TodoFormContainer";
import TodoListContainer from "../../src/components/containers/TodoListContainer";

const TodoListPage = () => {
  return (
    <div>
      <TodoListContainer />
      <TodoFormContainer />
    </div>
  );
};

export default TodoListPage;
