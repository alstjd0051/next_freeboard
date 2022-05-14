import { connect } from "react-redux";
import TodoList from "../todolist/index";

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default TodoListContainer;
