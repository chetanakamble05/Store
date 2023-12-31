import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Form, Button, Card } from 'react-bootstrap';
import toast from 'react-hot-toast';
import '../App.css';

const Register = () => {
const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
    role: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("formdata: ", formData)
    try {
      // Send the form data to the backend
      const response = await axios.post('http://localhost:3040/api/registeruser', formData);

      console.log(response.data);

      toast.success("Registration successful!");
      navigate("/"); // Redirect to login page after successful registration
    } catch (error) {
      console.error(error);
      toast.error("Registration failed. Please try again.");
    }
  };

  return (
    <div>
      <div className="company-name">
        <h1 id="Precious">Precious Purse</h1>
      </div>
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
        <Card className="form-container" style={{ width: "400px", marginTop: "20px" }} >
          <Card.Body>
            <Card.Title>
              Register
            </Card.Title>
            <div className="form1">
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formFirstName">
                  <Form.Label className="d-flex ">Name:</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                  />
                </Form.Group>
                <br />
                <Form.Group controlId="formEmail">
                  <Form.Label className="d-flex">Email:</Form.Label>
                  <Form.Control
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />
                </Form.Group>
                <br />
                <Form.Group controlId="formPassword">
                  <Form.Label className=" d-flex">Password:</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    required
                  />
                </Form.Group>
                <br />

                <Form.Group controlId="formConfirmPassword">
                  <Form.Label className="d-flex">Confirm Password:</Form.Label>
                  <Form.Control
                    type="password"
                    name="confirmpassword"
                    value={formData.confirmpassword}
                    onChange={handleChange}
                    placeholder="Confirm your password"
                    required
                  />
                </Form.Group>
                <br />
                <Form.Group controlId="formRole">
                  <div className="d-flex justify-content-between">
                    <Form.Label className="d-flex">Select Role:</Form.Label>
                    <Form.Check
                      type="radio"
                      label="User"
                      name="role"
                      value="user"
                      checked={formData.role === "user"}
                      onChange={handleChange}
                      required
                    />
                    <Form.Check
                      type="radio"
                      label="Admin"
                      name="role"
                      value="admin"
                      checked={formData.role === "admin"}
                      onChange={handleChange}
                      style={{ marginRight: "120px" }}
                      required
                    />
                  </div>
                </Form.Group>

                <br />

                <Button variant="secondary" type="submit" style={{ width: "100%" }}>Submit</Button>
              </Form>
              <p className="p-2">
                Click here for{" "}
                <span
                  className="LoginNav"
                  onClick={() => {
                    navigate("/");
                  }}
                  style={{ color: "blue" }}
                >
                  <u>Login</u>
                </span>
              </p>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Register;
