import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function ReferralList() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col className="h2" style={{ textAlign: "left" }}>
            Referrals Sent
          </Col>
        </Row>
        <Row>
          <ListGroup as="ul">
            {Array.from({ length: 4 }).map((_, idx) => (
              <ListGroup.Item key={idx} as="li" className="border-0 rounded">
                <Card
                  style={{ width: "100%" }}
                  className="border-1 p-0"
                  border="success"
                  text="dark"
                >
                  <Card.Header
                    style={{
                      textAlign: "left",
                      fontWeight: "bold",
                      backgroundColor: "darkgray",
                    }}
                    className="border-0 m-0"
                  >
                    {idx}: Jane Smith to ABC
                  </Card.Header>
                  <Card.Body
                    style={{
                      textAlign: "left",
                    }}
                  >
                    <Card.Subtitle className="mb-2">
                      Subject: Design
                    </Card.Subtitle>
                    <Card.Text>
                      People at ABC are good at design, Jane Smith looking for
                      help with website
                    </Card.Text>
                    <Card.Link href="#referral-id">View Referral</Card.Link>
                  </Card.Body>
                  <Card.Footer
                    style={{
                      textAlign: "right",
                      backgroundColor: "white",
                    }}
                    className="text-muted border-0 rounded"
                  >
                    <div>Sent on 06/06/2024</div>
                  </Card.Footer>
                </Card>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Row>
      </Container>
    </>
  );
}

export default ReferralList;
