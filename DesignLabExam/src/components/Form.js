import React, { useState } from "react";
import "../App.css";

const Form = (props) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });
  const [toggleAppData, setToggleAppData] = useState(false);

  const { name, email, password, mobile } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value }); //use event as e
  };

  const showData = () => {
    setToggleAppData(!toggleAppData);
  };

  return (
    <div className="container formContainer">
      <div className="formWrapper">
        <form>
          <div className="form-group text-center">
            <label for="exampleInputEmail1">Name</label>
            <input
              type="text"
              className="form-control inputRound"
              placeholder="Enter your name"
              name="name"
              onChange={handleChange("name")}
              value={name}
            />
          </div>
          <div className="form-group text-center"><hr></hr>
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control inputRound"
              placeholder="Enter your eMail"
              name="email"
              onChange={handleChange("email")}
              value={email}
            />
          </div>
          <div className="form-group text-center"><hr></hr>
            <label for="exampleInputEmail1">Mobile Number</label>
            <input
              type="text"
              className="form-control inputRound"
              placeholder="Enter Mobile Number"
              name="mobile"
              onChange={handleChange("mobile")}
              value={mobile}
            />
          </div>
          <div className="form-group text-center"><hr></hr>
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control inputRound"
              placeholder="Enter Password"
              name="password"
              onChange={handleChange("password")}
              value={password}
            />
          </div>
          <br />
          <div className="form-group text-center">
            <button type="submit" className="btn MyButton">
              Submit
            </button>
          </div>
          <br />
        </form>
        <p className="text-center">{JSON.stringify(values)}</p>
        <div className="form-group text-center">
          {/* <button type="submit" className="btn btn-primary" onClick={showData}>
            Show Props Data
          </button> */}
        </div>
        <br />
        {toggleAppData ? (
          <div className="text-center">
            <b>Props Data From App</b>
            <p>Sample User Name: {props.appName}</p>
            <p>Sample User Email: {props.appEmail}</p>
            <p>Sample User Phone: {props.appPhone}</p>
            <p>Sample User Password: {props.appPassword}</p>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Form;
