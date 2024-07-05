import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { LOGIN_ENDPOINT_URL } from "../../constants";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Login() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/todo");
    }
  }, []);
  const handleLogin = async () => {
    const { data } = await axios.get(LOGIN_ENDPOINT_URL);
    localStorage.setItem("token", data.token);
    navigate("/todo");
    // Make API call to login which will return
    // a JWT token, save in local storage
    // navigate to Todo page.
  };
  return (
    <Card className="w-50">
      <Card.Body>
        <Form>
          <Form.Group className="mb-3" controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter username" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="password" placeholder="Enter password" />
          </Form.Group>
          <div>
            <Button onClick={handleLogin} variant="primary">
              Sign In
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default Login;
