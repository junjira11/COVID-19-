import "./home.css";
import Form from "react-bootstrap/Form";
import { Row, Col, Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import ButterToast, { POS_RIGHT, POS_TOP, Cinnamon } from "butter-toast";
import Axios from "axios";

function Home({ classes }) {
  const [age, setAge] = useState();
  const [city, setCity] = useState();
  const [province, setProvince] = useState();
  const [country, setCountry] = useState();
  const [history, setHistory] = useState();

  const [open, setOpen] = React.useState(false);
  // const handleClickOpen = () => {
  //   setOpen(true);
  // };
  // const handleClose = () => {
  //   setOpen(false);
  // };

  async function sendinformation() {
    const data = { age,city,province,country,history };
    await Axios.post("/Covid-19", data, {});
    // .then(res => {
    //     window.location.reload()
    // }).catch(error => console.log(error))
  }

  return (
    <div className="big-background">
      <h1>Prediction mortality in patients infected</h1>
      <h2>with the COVID-19 virus</h2>
      <div className="box-background">
        <Form>
          {/* -------------Age----------------------- */}
          <Form.Group as={Row} className="age" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Age:
            </Form.Label>
            <Col sm={2}>
              <Form.Control
                type="number"
                placeholder="Age"
                min={1}
                max={120}
                onChange={(event) => {
                  setAge(event.target.value);
                }}
              />
            </Col>
          </Form.Group>

          {/* -------------Sex----------------------- */}
          <fieldset>
            <Form.Group as={Row} className="sex">
              <Form.Label as="legend" column sm={2}>
                Sex:
              </Form.Label>
              <Col sm={2}>
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
          <Form.Group as={Row} controlId="formHorizontalEmail" classname="city">
            <Form.Label column sm={2}>
              City:
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="text"
                placeholder="City"
                onChange={(event) => {
                  setCity(event.target.value);
                }}
              />
            </Col>
          </Form.Group>
          {/* -------------Province----------------------- */}
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Province
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="text"
                placeholder="Province"
                onChange={(event) => {
                  setProvince(event.target.value);
                }}
              />
            </Col>
          </Form.Group>
          {/* -------------Country----------------------- */}
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Country:
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="text"
                placeholder="Country"
                onChange={(event) => {
                  setCountry(event.target.value);
                }}
              />
            </Col>
          </Form.Group>
          {/* -------------travel_history_location----------------------- */}
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              History Location:
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" placeholder="Travel history location" 
               onChange={(event) => {
                setHistory(event.target.value);
              }}
              />
            </Col>
          </Form.Group>

          {/* -------------โรค----------------------- */}
          <Form.Group as={Row} classname="disease">
            <Form.Label as="legend" column sm={2}>
              Disease:
            </Form.Label>
            <Col sm={10}>
              {["checkbox"].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
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
                    id={`inline-${type}-16`}
                  />
                  <Form.Check
                    inline
                    label=" Dyslipidemia"
                    name="group1"
                    type={type}
                    id={`inline-${type}-17`}
                  />
                </div>
              ))}
            </Col>
          </Form.Group>

          {/* -------------อาการ----------------------- */}

          <Form.Group as={Row}>
            <Form.Label as="legend" column sm={2}>
              Symptom:
            </Form.Label>
            <Col sm={9}>
              {["checkbox"].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check
                    inline
                    label="Anorexia"
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
                    label="Chest pain"
                    name="group1"
                    type={type}
                    id={`inline-${type}-3`}
                  />
                  <Form.Check
                    inline
                    label="Chills"
                    name="group1"
                    type={type}
                    id={`inline-${type}-4`}
                  />
                  <Form.Check
                    inline
                    label="Conjunctivitis"
                    name="group1"
                    type={type}
                    id={`inline-${type}-5`}
                  />
                  <Form.Check
                    inline
                    label="Cough"
                    name="group1"
                    type={type}
                    id={`inline-${type}-6`}
                  />
                  <Form.Check
                    inline
                    label="Diarrhea"
                    name="group1"
                    type={type}
                    id={`inline-${type}-7`}
                  />
                  <Form.Check
                    inline
                    label="Dizziness"
                    name="group1"
                    type={type}
                    id={`inline-${type}-8`}
                  />
                  <Form.Check
                    inline
                    label="Dyspnea"
                    name="group1"
                    type={type}
                    id={`inline-${type}-9`}
                  />
                  <Form.Check
                    inline
                    label="Emesis"
                    name="group1"
                    type={type}
                    id={`inline-${type}-10`}
                  />
                  <Form.Check
                    inline
                    label="Expectoration"
                    name="group1"
                    type={type}
                    id={`inline-${type}-11`}
                  />
                  <Form.Check
                    inline
                    label="Eye irritation"
                    name="group1"
                    type={type}
                    id={`inline-${type}-12`}
                  />
                  <Form.Check
                    inline
                    label="Fatigue"
                    name="group1"
                    type={type}
                    id={`inline-${type}-13`}
                  />
                  <Form.Check
                    inline
                    label="Fever"
                    name="group1"
                    type={type}
                    id={`inline-${type}-14`}
                  />
                  <Form.Check
                    inline
                    label="Gasp"
                    name="group1"
                    type={type}
                    id={`inline-${type}-15`}
                  />
                  <Form.Check
                    inline
                    label="Headache"
                    name="group1"
                    type={type}
                    id={`inline-${type}-16`}
                  />
                  <Form.Check
                    inline
                    label="Kidney failure"
                    name="group1"
                    type={type}
                    id={`inline-${type}-17`}
                  />

                  <Form.Check
                    inline
                    label="Hypertension"
                    name="group1"
                    type={type}
                    id={`inline-${type}-19`}
                  />
                  <Form.Check
                    inline
                    label="Myalgia"
                    name="group1"
                    type={type}
                    id={`inline-${type}-20`}
                  />
                  <Form.Check
                    inline
                    label="Obnubilation"
                    name="group1"
                    type={type}
                    id={`inline-${type}-21`}
                  />
                  <Form.Check
                    inline
                    label="Pneumonia"
                    name="group1"
                    type={type}
                    id={`inline-${type}-22`}
                  />
                  <Form.Check
                    inline
                    label="Myelofibrosis"
                    name="group1"
                    type={type}
                    id={`inline-${type}-23`}
                  />
                  <Form.Check
                    inline
                    label="Respiratory distress"
                    name="group1"
                    type={type}
                    id={`inline-${type}-24`}
                  />
                  <Form.Check
                    inline
                    label="Rhinorrhea"
                    name="group1"
                    type={type}
                    id={`inline-${type}-25`}
                  />
                  <Form.Check
                    inline
                    label="Shortness of breath"
                    name="group1"
                    type={type}
                    id={`inline-${type}-26`}
                  />
                  <Form.Check
                    inline
                    label="Somnolence"
                    name="group1"
                    type={type}
                    id={`inline-${type}-27`}
                  />
                  <Form.Check
                    inline
                    label="Sore throat"
                    name="group1"
                    type={type}
                    id={`inline-${type}-28`}
                  />
                  <Form.Check
                    inline
                    label="Sputum"
                    name="group1"
                    type={type}
                    id={`inline-${type}-29`}
                  />
                  <Form.Check
                    inline
                    label="Septic shock"
                    name="group1"
                    type={type}
                    id={`inline-${type}-30`}
                  />
                  <Form.Check
                    inline
                    label="Heart attack"
                    name="group1"
                    type={type}
                    id={`inline-${type}-31`}
                  />
                  <Form.Check
                    inline
                    label="Septic shock"
                    name="Cold"
                    type={type}
                    id={`inline-${type}-32`}
                  />

                  <Form.Check
                    inline
                    label="Hypoxia"
                    name="group1"
                    type={type}
                    id={`inline-${type}-34`}
                    onClick={(evet) => console.log(evet.target.value)}
                  />
                </div>
              ))}
            </Col>
          </Form.Group>
          <center>
            <button class="button" onClick={sendinformation()}>
              predic
            </button>
          </center>

          {/* <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
          >
            <div className="popupdonate">
              <div classname="namefdt">
                <DialogTitle id="responsive-dialog-title">
                  บริจาคให้กับ
                </DialogTitle>
              </div>
              <DialogContent>
                <DialogContentText>
                  <Form />
                  <ButterToast position={{}} />
                </DialogContentText>
              </DialogContent>

              <DialogActions>
                <Button onClick={handleClose}>CLOSE</Button>
              </DialogActions>
            </div>
          </Dialog> */}
        </Form>
      </div>
    </div>
  );
}

export default Home;
