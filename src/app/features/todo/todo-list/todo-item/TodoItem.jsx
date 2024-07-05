import Card from "react-bootstrap/Card";
import { getBorderColor } from "../../utils";
import { Pencil, Trash } from "react-bootstrap-icons";

function TodoItem({ task, onDelete, onOpenTodoEditModal }) {
  const handleDeleteTask = () => {
    onDelete(task.id);
  };
  const handleEditTask = () => {
    onOpenTodoEditModal(task);
  };

  return (
    <Card className={`mb-3 ${getBorderColor(task.priority)}`}>
      <Card.Header>
        <div className="d-flex justify-content-between">
          <div>{task.name}</div>
          <div>
            <Pencil onClick={handleEditTask} className="me-3 text-info" />
            <Trash onClick={handleDeleteTask} className="text-danger" />
          </div>
        </div>
      </Card.Header>
      <Card.Body>{task.desc}</Card.Body>
    </Card>
  );
}

export default TodoItem;
