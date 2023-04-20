import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Col, Row } from 'antd';

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Welcome to our Medical Booking website</h1>
      <Row gutter={[32, 32]}>
        <Col xs={24} md={8}>
          <Card title="Search for Medical Services">
            <p>Find the right medical services for your needs</p>
            <Button type="primary" size="large" block>
              <Link to="/search">Search Now</Link>
            </Button>
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card title="Book a Doctor for Home Medical Examination">
            <p>Get the medical attention you need at the comfort of your home</p>
            <Button type="primary" size="large" block>
              <Link to="/book-doctor">Book Now</Link>
            </Button>
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card title="Medical Articles and Resources">
            <p>Stay informed with our medical articles and resources</p>
            <Button type="primary" size="large" block>
              <Link to="/articles">Learn More</Link>
            </Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default HomePage;
