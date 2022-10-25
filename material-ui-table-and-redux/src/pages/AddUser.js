import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/action";

const AddUser = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
  });

  const [error, setError] = useState("");

  let history = useHistory();
  let dispatch = useDispatch();
  const { name, email, contact, address } = state;

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !address || !contact) {
      setError("please enter all input");
    } else {
      dispatch(addUser(state));
      history.push("/");
      setError("");
    }
  };

  return (
    <div>
      <Button
        style={{ width: "100px", marginTop: "50px", marginBottom: "50px" }}
        color="primary"
        variant="contained"
        onClick={() => history.push("/")}
      >
        Back
      </Button>
      <h2>Add New User</h2>
      {error && <h3 style={{ color: "red" }}>{error}</h3>}
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch", marginTop: "30px" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          id="standard-basic"
          label="Name"
          name="name"
          variant="standard"
          value={name}
          type="text"
          onChange={handleInputChange}
        /> 
        <br />
        <TextField
          id="standard-basic"
          label="Email"
          name="email"
          variant="standard"
          value={email}
          type="email"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="standard-basic"
          name="contact"
          label="Contact"
          variant="standard"
          value={contact}
          type="number"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="standard-basic"
          name="address"
          label="Address"
          variant="standard"
          value={address}
          type="text"
          onChange={handleInputChange}
        />
        <br />
        <Button
          style={{ width: "100px" }}
          color="success"
          variant="contained"
          type="submit"
          onChange={handleInputChange}
        >
          Submit
        </Button>
      </Box>
    </div>
  );
};

export default AddUser;
