import React, { useState } from "react";
import { Container, Row, Col, Input, Form, FormGroup } from "reactstrap";

const FormData = ({ data }) => {
  const [simpleMomentumChecked, setSimpleMomentumChecked] = useState(false);
  const [trailSlChecked, setTrailChecked] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  const {
    lots,
    positionType,
    optionType,
    ExpiryType,
    selectStrikeCriteria,
    simpleMomentum = { type: "PointsUp", Value: "" },
    trailSl = {
      Type: "",
      Value: {
        instrumentMove: "",
        stopLossMove: "",
      },
    },
  } = data || {};

  const inputHanel = (event) => {
    const { name, checked } = event.target;
    if (name === "simpleMomentum") {
      setSimpleMomentumChecked(checked);
      setIsDisabled(!checked);
    } else if (name === "trailSl") {
      setTrailChecked(checked);
      setIsDisabled(!checked);
    }
  };
  return (
    <>
      <Form className=" form-box ">
        <div
          className="d-flex justify-content-between "
          style={{ marginRight: "-13rem" }}
        >
          <FormGroup className="mx-4">
            <label htmlFor="">Table List</label> <br />
            <select name="lots" id="lots" onChange={inputHanel} value={lots}>
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
              value={positionType}
            >
              <option>Buy</option>
              <option>Sell</option>
            </select>
          </FormGroup>
          <FormGroup className="mx-4">
            <label htmlFor="">Option Type</label> <br />
            <select className="classic" name="optionType" onChange={inputHanel}>
              <option value={optionType}>Call</option>
              <option>Put</option>
            </select>
          </FormGroup>
          <FormGroup className="mx-4">
            <label htmlFor="">ExpiryType</label> <br />
            <select
              className="classic"
              name="ExpiryType"
              onChange={inputHanel}
              value={ExpiryType}
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
              value={selectStrikeCriteria}
            >
              <option>StrikeType</option>
              <option>Premimum Range</option>
            </select>
          </FormGroup>
        </div>

        <div
          className="d-flex justify-content-center"
          style={{ marginLeft: "13rem" }}
        >
          <FormGroup className="mx-4">
            <label htmlFor="simpleMomentum.type">
              {" "}
              <input
                className="checkbox"
                type="checkbox"
                name="simpleMomentum"
                checked={simpleMomentumChecked}
                onChange={inputHanel}
              />{" "}
              Simple Momentum
            </label>{" "}
            <br />
            <div className="d-flex">
              <select
                className="classic"
                name="positionType"
                onChange={inputHanel}
                value={data?.simpleMomentum?.type}
                disabled={isDisabled} // disable the select element by default
              >
                <option value="pointsUp">PointsUp</option>
                <option value="pointsDown">PointsDown</option>
              </select>
              <input type="number" name="Value" className="number" />
            </div>
          </FormGroup>
          <FormGroup className="mx-4">
            <label htmlFor="trailSl.Type">
              <input
                className="checkbox"
                type="checkbox"
                name="trailSl"
                checked={trailSlChecked}
                onChange={inputHanel}
              />{" "}
              Trail SL
            </label>{" "}
            <br />
            <div className="d-flex">
              <select
                className="classic"
                name="trailSl"
                onChange={inputHanel}
                value={trailSl.Type}
                disabled={!trailSlChecked}
              >
                <option value="points">Points</option>
                <option value="percentage">Percentage</option>
              </select>
              <input
                className="number"
                type="number"
                name="instrumentMove"
                disabled={!trailSlChecked}
              />
              <input
                className="number"
                type="number"
                name="stopLossMove"
                disabled={!trailSlChecked}
              />
            </div>
          </FormGroup>
        </div>
      </Form>
    </>
  );
};

export default FormData;
