import React, { useState } from "react";
import "./home.css";
import Form from "react-bootstrap/Form";

import { Row, Col, Button } from "react-bootstrap";

const Home = () => {
  return (
    <div className="topic">
      <h1>Prediction mortality in patients infected with the COVID-19 virus</h1>
      <div>
        <Form>
          {/* -------------Age----------------------- */}
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Age
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="number" placeholder="Age" min={1} max={120} />
            </Col>
          </Form.Group>

          {/* -------------Sex----------------------- */}
          <fieldset>
            <Form.Group as={Row}>
              <Form.Label as="legend" column sm={2}>
                Sex
              </Form.Label>
              <Col sm={10}>
                <Form.Check
                  type="radio"
                  label="Male"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                />
                <Form.Check
                  type="radio"
                  label="Female"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                />
              </Col>
            </Form.Group>
          </fieldset>
          {/* -------------City----------------------- */}
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              City
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" placeholder="City" />
            </Col>
          </Form.Group>
          {/* -------------Province----------------------- */}
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Province
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" placeholder="Province" />
            </Col>
          </Form.Group>
          {/* -------------Country----------------------- */}
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Country
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" placeholder="Country" />
            </Col>
          </Form.Group>
          {/* -------------travel_history_location----------------------- */}
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Travel history location
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" placeholder="Travel history location" />
            </Col>
          </Form.Group>

          {/* -------------โรค----------------------- */}
          
          {["checkbox"].map((type) => (
              
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                label="Binary"
                name="group1"
                type={type}
                id={`inline-${type}-1`}
              />
              <Form.Check
                inline
                label="Hypertension"
                name="group1"
                type={type}
                id={`inline-${type}-2`}
              />
              <Form.Check
                inline
                label="Diabetes"
                name="group1"
                type={type}
                id={`inline-${type}-3`}
              />
              <Form.Check
                inline
                label=" Kidney"
                name="group1"
                type={type}
                id={`inline-${type}-4`}
              />
              <Form.Check
                inline
                label=" COPD"
                name="group1"
                type={type}
                id={`inline-${type}-5`}
              />
               <Form.Check
                inline
                label=" Heart"
                name="group1"
                type={type}
                id={`inline-${type}-6`}
              />
              <Form.Check
                inline
                label=" Asthma"
                name="group1"
                type={type}
                id={`inline-${type}-7`}
              />
              <Form.Check
                inline
                label=" Prostate"
                name="group1"
                type={type}
                id={`inline-${type}-8`}
              />
              <Form.Check
                inline
                label=" Cancer"
                name="group1"
                type={type}
                id={`inline-${type}-9`}
              />
              <Form.Check
                inline
                label="Tuberculosis"
                name="group1"
                type={type}
                id={`inline-${type}-10`}
              />
              <Form.Check
                inline
                label=" Hepatitis"
                name="group1"
                type={type}
                id={`inline-${type}-11`}
              />
              <Form.Check
                inline
                label=" HIV"
                name="group1"
                type={type}
                id={`inline-${type}-12`}
              />
              <Form.Check
                inline
                label=" Cereberal"
                name="group1"
                type={type}
                id={`inline-${type}-13`}
              />
              <Form.Check
                inline
                label=" Parkinson"
                name="group1"
                type={type}
                id={`inline-${type}-14`}
              />
              <Form.Check
                inline
                label=" Bronchitis"
                name="group1"
                type={type}
                id={`inline-${type}-15`}
              />
              <Form.Check
                inline
                label=" Hypothyroidism"
                name="group1"
                type={type}
                id={`inline-${type}-15`}
              />
              <Form.Check
                inline
                label=" Dyslipidemia"
                name="group1"
                type={type}
                id={`inline-${type}-15`}
              />
            </div>
          ))}

          <Form.Group as={Row} controlId="formHorizontalCheck">
            <Col sm={{ span: 10, offset: 2 }}>
              <Form.Check label="Remember me" />
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Col sm={{ span: 10, offset: 2 }}>
              <Button type="submit">Sign in</Button>
            </Col>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default Home;
