import React, {useState} from 'react';
import { Table, Button, Container, Modal, Form } from 'react-bootstrap';


export default function CheckoutModal({ cart, onClose }) {
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    shippingAddress: '',
    mobileNumber: '',
    cardName: '',
    cardNumber: '',
    cvv: '',
    expiryDate: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  
  if (!Array.isArray(cart) || cart.length === 0) {
    return (
      <div className="checkout-modal">
        <h2>Checkout Summary</h2>
        <p>No items in the cart.</p>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </div>
    );
  }

  const handleProceedToPayment = () => {
    setShowPaymentForm(true);
  };

  const handlePaymentClose = () => {
    setShowPaymentForm(false);
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle payment submission (e.g., send data to backend)
    console.log('Payment submitted:', formData);
    // Close the payment form modal
    setShowPaymentForm(false);
  };


  return (
    <Container className="checkout-modal">
      <h2 className="text-center mb-3">Checkout Summary</h2>
      <Table striped bordered hover size="sm" className="text-center custom-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.quantity}</td>
              <td>₹{item.price * item.quantity}</td>
            </tr>
          ))}
          <tr className="table-info">
            <td colSpan="3" className="text-right"><strong>Total Cart Price:</strong></td>
            <td><strong>₹
              {cart
                .map((item) => item.price * item.quantity)
                .reduce((total, value) => total + value, 0)}
            </strong></td>
          </tr>
        </tbody>
      </Table>
      <div className="d-flex justify-content-between mt-3">
        <Button variant="secondary" onClick={handleProceedToPayment}>
          Proceed to Payment
        </Button>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </div>

      {/* Payment Form Modal */}
      <Modal show={showPaymentForm} onHide={handlePaymentClose}>
        <Modal.Header closeButton>
          <Modal.Title>Payment Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handlePaymentSubmit}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <div className="mt-2">
            <Form.Group controlId="formShippingAddress">
              <Form.Label>Shipping Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter shipping address"
                name="shippingAddress"
                value={formData.shippingAddress}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            </div>
            <div className="mt-2">
            <Form.Group controlId="formMobileNumber">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter mobile number"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            </div>
            <div className="mt-2">
            <Form.Group controlId="formCardName">
              <Form.Label>Name on Card</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name on card"
                name="cardName"
                value={formData.cardName}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            </div>

            <div className="mt-2">
            <Form.Group controlId="formCardNumber">
              <Form.Label>Card Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter card number"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            </div>
            <Form.Group controlId="formExpiryDate" className="d-flex">
  <div className="mt-2" style={{width: '250px'}}>
    <Form.Label>Expiry Date</Form.Label>
    <Form.Control
      type="text"
      placeholder="MM/YY"
      name="expiryDate"
      value={formData.expiryDate}
      onChange={handleInputChange}
      required
    />
  </div>
  <div className="mt-2" style={{marginLeft: '15px', width: '250px'}}>
    <Form.Label>CVV</Form.Label>
    <Form.Control
      type="text"
      placeholder="CVV"
      name="cvv"
      value={formData.cvv}
      onChange={handleInputChange}
      required
    />
  </div>
</Form.Group>

    <Button variant="secondary" type="submit" className="mt-3 ml-auto">
              Pay ₹
              {cart
                .map((item) => item.price * item.quantity)
                .reduce((total, value) => total + value, 0)}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );

}
