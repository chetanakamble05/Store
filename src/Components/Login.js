import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { Form, Button, Card} from 'react-bootstrap';
import '../App.css';

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      validateForm();

      const response = await axios.get("http://localhost:3000/users");
      const user = response.data.find((user) => user.email === formData.email);

      if (user) {
        if (user.password === formData.password) {
          toast.success("Login successful");
          navigate("/home");
        } else {
          toast.error("Wrong password");
        }
      } else {
        toast.error("User not found, Please register yourself!");
      }
    } catch (error) {
      console.error("Error while processing the form:", error);
    }
  };

  const validateForm = () => {
    let isValid = true;
    let validationErrors = {};

    if (!formData.email || formData.email.trim() === "") {
      isValid = false;
      validationErrors.email =  toast.error("Email is required");
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      isValid = false;
      validationErrors.email = toast.error("Invalid email address");
    }


    if (!formData.password || formData.password.trim() === "") {
      isValid = false;
      validationErrors.password =  toast.error("Password is required");
    } else if (formData.password.length < 8) {
      isValid = false;
      validationErrors.password =  toast.error("Password should be at least 8 characters");
    }

    setErrors(validationErrors);

    if (!isValid) {
      throw new Error("Form validation failed");
    }
  };

  return (
    <div>
      <div className="company-name">
        <h1 id="Precious2">Precious Purse</h1>
      </div>
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
        <Card className="form-container" style={{ width: "400px", marginTop: "50px" }}>
          <Card.Body>
            <Card.Title>
              Login
            </Card.Title>
            <div className="form1">
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formEmail">
                  <Form.Label className="d-flex">Email:</Form.Label>
                  <Form.Control
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                  />
                </Form.Group>
                <br/>
                <Form.Group controlId="formPassword">
                  <Form.Label className="d-flex">Password:</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                  />
                </Form.Group>
                <br/>
                <div className="inputBox">
                  <Button variant="secondary" type="submit" style={{ width: "100%" }}>Login</Button>
                </div>
                <div className="links">
                  <p className="p-2">
                    Don't have an account?{" "}
                    <span
                      className="RegisterNav"
                      onClick={() => {
                        navigate("/register");
                      }}
                      style={{ color: "blue" }}
                    >
                      Register here
                    </span>
                  </p>
                </div>
              </Form>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Login;
