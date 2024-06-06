import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ReferralForm() {
  return (
    <>
      <Form border="info">
        <Form.Group
          style={{ backgroundColor: "#f0f2f0" }}
          className="rounded p-2 m-2"
        >
          <Form.Label style={{ fontWeight: "bold" }}>Referee</Form.Label>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formGroupRefereeName"
          >
            <Form.Label column sm={2}>
              Name
            </Form.Label>
            <Col sm={10}>
              <Form.Control placeholder="Referee Full Name" />
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formGroupRefereeEmail"
          >
            <Form.Label column sm={2}>
              Email
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="email" placeholder="Referee Email" />
            </Col>
          </Form.Group>
        </Form.Group>

        <Form.Group
          style={{ backgroundColor: "#f0f2f0" }}
          className="rounded p-2 m-2"
        >
          <Form.Label style={{ fontWeight: "bold" }}>Client</Form.Label>
          <Form.Group as={Row} className="mb-3" controlId="formGroupClientName">
            <Form.Label column sm={2}>
              Client Name
            </Form.Label>
            <Col sm={10}>
              <Form.Control placeholder="Client Full Name" />
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formGroupClientEmail"
          >
            <Form.Label column sm={2}>
              Client Email
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="email" placeholder="Client Email" />
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formGroupClientBusiness"
          >
            <Form.Label column sm={2}>
              Client Business
            </Form.Label>
            <Col sm={10}>
              <Form.Select placeholder="Client Business">
                <option>Choose...</option>
                <option>...</option>
              </Form.Select>
            </Col>
          </Form.Group>
        </Form.Group>

        <Form.Group
          style={{ backgroundColor: "#f0f2f0" }}
          className="rounded p-2 m-2"
        >
          <Form.Label style={{ fontWeight: "bold" }}>Details</Form.Label>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formGroupDetailsSubject"
          >
            <Form.Label column sm={2}>
              Subject
            </Form.Label>
            <Col sm={10}>
              <Form.Control placeholder="Subject" />
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formGroupDetailsReason"
          >
            <Form.Label column sm={2}>
              Reason
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                as="textarea"
                placeholder="Reason for the referral"
              />
            </Col>
          </Form.Group>
        </Form.Group>
      </Form>
    </>
  );
}

export default ReferralForm;
