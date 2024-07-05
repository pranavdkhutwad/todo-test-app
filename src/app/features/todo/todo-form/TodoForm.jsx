import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useForm, Controller } from "react-hook-form";

// How to create a ref in functional component
// React has given useRef hook to create a ref in component
function TodoForm({ onAddTask }) {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      desc: "",
      priority: "",
    },
  });

  const handleAdd = (data) => {
    onAddTask(data);
    reset();
  };

  const validateNumberRange = (value) => {
    return [1, 2, 3].includes(Number(value)) || "Only 1, 2 or 3 is allowed";
  };

  return (
    <Card>
      <Card.Body>
        <Form onSubmit={handleSubmit(handleAdd)}>
          <Form.Group className="mb-3" controlId="taskName">
            <Form.Label>Task name</Form.Label>
            <Controller
              name="name"
              control={control}
              rules={{ required: true, minLength: 3 }}
              render={({ field }) => (
                <Form.Control {...field} type="text" placeholder="Task name" />
              )}
            />
            <small className="text-danger">
              {errors?.name?.type === "required" && "Field is required"}
            </small>
            <small className="text-danger">
              {errors?.name?.type === "minLength" &&
                "At-least 3 characters are required"}
            </small>
          </Form.Group>
          <Form.Group className="mb-3" controlId="taskDesc">
            <Form.Label>Task description</Form.Label>
            <Controller
              name="desc"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Form.Control
                  {...field}
                  as="textarea"
                  placeholder="Task description"
                  rows={3}
                />
              )}
            />
            <small className="text-danger">
              {errors?.desc?.type === "required" && "Field is required"}
            </small>
          </Form.Group>
          <Form.Group className="mb-3" controlId="taskPriority">
            <Form.Label>Task priority</Form.Label>
            <Controller
              name="priority"
              control={control}
              rules={{
                required: true,
                validate: { isNumberRange: validateNumberRange },
              }}
              render={({ field }) => (
                <Form.Control
                  {...field}
                  type="number"
                  placeholder="Task priority"
                />
              )}
            />
            <small className="text-danger">
              {errors?.priority?.type === "required" && "Field is required"}
            </small>
            <small className="text-danger">
              {console.log(errors)}
              {errors?.priority?.type === "isNumberRange" &&
                "Only 1, 2 or 3 is allowed"}
            </small>
          </Form.Group>
          <div className="d-grid">
            <Button type="submit" variant="success">
              Add
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default TodoForm;
