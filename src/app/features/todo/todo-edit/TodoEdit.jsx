import { useState } from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function TodoEdit({ show, onClose, todoItem, onEditTask }) {
  const [task, setTask] = useState({
    name: todoItem?.name,
    desc: todoItem?.desc,
    priority: todoItem?.priority,
  });

  const handleNameChange = (e) => {
    setTask({ ...task, name: e.target.value });
  };

  const handleDescChange = (e) => {
    setTask({ ...task, desc: e.target.value });
  };

  const handlePriorityChange = (e) => {
    setTask({ ...task, priority: e.target.value });
  };
  const handleEdit = () => {
    onEditTask(task, todoItem.id);
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Todo edit</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="taskName">
            <Form.Label>Task name</Form.Label>
            <Form.Control
              value={task.name}
              onChange={handleNameChange}
              type="text"
              placeholder="Task name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="taskDesc">
            <Form.Label>Task description</Form.Label>
            <Form.Control
              value={task.desc}
              onChange={handleDescChange}
              as="textarea"
              placeholder="Task description"
              rows={3}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="taskPriority">
            <Form.Label>Task priority</Form.Label>
            <Form.Control
              value={task.priority}
              onChange={handlePriorityChange}
              type="number"
              placeholder="Task priority"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleEdit}>
          Edit
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default TodoEdit;
