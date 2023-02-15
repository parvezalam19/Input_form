import React, { useState, useEffect } from "react";
import { Container, Row, Col, Input, Form, FormGroup } from "reactstrap";
import FormData from "./FormData";

const InputForm = () => {
  const [inputData, setInputData] = useState([]);
  const [numLegs, setNumLegs] = useState(1);
  const [showFormData, setShowFormData] = useState(false);

  const [inputVAlue, setInputvalue] = useState({
    lots: 1,
    positionType: "Buy",
    optionType: "Sell",
    ExpiryType: "Weekly",
    selectStrikeCriteria: "strikeType",
    simpleMomentum: {
      type: "",
      Value: "",
    },
    trailSL: {
      Type: "",
      Value: {
        instrumentMove: "",
        stopLossMove: "",
      },
    },
  });
  const inputHanel = (e) => {
    const { name, value } = e.target;
    setInputvalue((prevState) => ({ ...prevState, [name]: value }));
  };

  const submitHandle = (e) => {
    e.preventDefault();
    setInputData((prev) => [...prev, inputVAlue]);
    setInputvalue({
      lots: 1,
      positionType: "Buy",
      optionType: "Sell",
      ExpiryType: "Weekly",
      selectStrikeCriteria: "strikeType",
      simpleMomentum: {
        type: "",
        Value: "",
      },
      trailSL: {
        Type: "",
        Value: {
          instrumentMove: "",
          stopLossMove: "",
        },
      },
    });
    setNumLegs(numLegs + 1);
    setShowFormData(true);
  };


const deleteHandle= (index)=>{
const filter = inputData.filter((elm,i)=> i !== index)
setInputData(filter)
}


  console.log(inputData);
  return (
    <>
      <Container className="form-box">
        <Row className="">
          <Col lg="8">
            <Form className="d-flex justify-content-between">
              <FormGroup className="mx-4">
                <label htmlFor="">Table List</label> <br />
                <select
                  name="lots"
                  id="lots"
                  onChange={inputHanel}
                  value={inputVAlue.lots}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </FormGroup>
              <FormGroup className="mx-4">
                <label htmlFor="">Position</label> <br />
                <select
                  className="classic"
                  name="positionType"
                  onChange={inputHanel}
                  value={inputVAlue.positionType}
                >
                  <option>Buy</option>
                  <option>Sell</option>
                </select>
              </FormGroup>
              <FormGroup className="mx-4">
                <label htmlFor="">Option Type</label> <br />
                <select
                  className="classic"
                  name="optionType"
                  onChange={inputHanel}
                >
                  <option value={inputVAlue.optionType}>Call</option>
                  <option>Put</option>
                </select>
              </FormGroup>
              <FormGroup className="mx-4">
                <label htmlFor="">ExpiryType</label> <br />
                <select
                  className="classic"
                  name="ExpiryType"
                  onChange={inputHanel}
                  value={inputVAlue.ExpiryType}
                >
                  <option>Weekly</option>
                  <option>Monthly</option>
                </select>
              </FormGroup>
              <FormGroup className="mx-4">
                <label htmlFor="">Select Strike Criteria</label> <br />
                <select
                  className="classic"
                  name="selectStrikeCriteria"
                  onChange={inputHanel}
                  value={inputVAlue.selectStrikeCriteria}
                >
                  <option>StrikeType</option>
                  <option>Premimum Range</option>
                </select>
              </FormGroup>
            </Form>
            <button
              className="btn btn-primary add-btn mt-3"
              onClick={submitHandle}
            >
              Add Leg
            </button>
            <button className="btn cancel-btn mt-3 mx-3">Cancel</button>
          </Col>
        </Row>
        {showFormData &&
          [...Array(numLegs)].map((_, i) => (
            <Row key={i} className="InputData">
              <Col lg="8">
                <span className="delete-btn" onClick={()=>deleteHandle(i)}>X</span>
                {inputData[i] && <FormData data={inputData[i]} />}
              </Col>
            </Row>
          ))}
      </Container>
    </>
  );
};

export default InputForm;
