import { useState, useEffect } from "react";
import TodoForm from "./todo-form/TodoForm";
import TodoList from "./todo-list/TodoList";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TodoEdit from "./todo-edit/TodoEdit";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchTasks,
  createTask,
  updateTask,
  removeTask,
} from "../../redux/slices/todoSlice";

function Todo() {
  const [show, setShow] = useState(false);
  const [todoItem, setTodoItem] = useState(null);
  const { highPriorityList, mediumPriorityList, lowPriorityList } = useSelector(
    (state) => state.todo
  );

  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchTasks()), [dispatch]);

  const openTodoEditModal = (task) => {
    handleShow();
    setTodoItem(task);
  };

  const handleEditTask = (task, id) => {
    dispatch(updateTask({ task, id }));
    handleClose();
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {show && (
        <TodoEdit
          onEditTask={handleEditTask}
          todoItem={todoItem}
          show={show}
          onClose={handleClose}
        />
      )}
      <Row className="mt-3">
        <Col md={4} lg={4}>
          <TodoForm onAddTask={(task) => dispatch(createTask(task))} />
        </Col>
        <Col md={8} lg={8}>
          <TodoList
            highPriorities={highPriorityList}
            mediumPriorities={mediumPriorityList}
            lowPriorities={lowPriorityList}
            onDelete={(id) => dispatch(removeTask(id))}
            onOpenTodoEditModal={openTodoEditModal}
          />
        </Col>
      </Row>
    </>
  );
}

export default Todo;
