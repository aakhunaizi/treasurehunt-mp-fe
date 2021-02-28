import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { signup } from "../store/actions/authActions";
import { useState } from "react";
export default function Signin() {
  const { register, handleSubmit, errors } = useForm();
  const [password, setPassword] = useState(true);
  const dispatch = useDispatch();
  const history = useHistory();
  const onSubmit = (data) => {
    dispatch(signup(data, history));
  };

  return (
    <div
      className="container"
      style={{
        marginTop: "5%",

        width: "20%",
      }}
    >
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h1>Sign Up</h1>
        <br />
        <label for="inputPassword5" className="form-label">
          Email
        </label>
        <input
          type="text"
          name="email"
          className="form-control mb-2"
          ref={register({ required: true })}
        />
        <div style={{ color: "red" }}>
          {errors.email && "Email is required"}
        </div>
        <br />
        <label for="inputPassword5" className="form-label">
          First Name
        </label>
        <input
          type="text"
          name="firstName"
          className="form-control mb-2"
          ref={register({ required: true })}
        />
        <div style={{ color: "red" }}>
          {errors.firstName && "First Name is required"}
        </div>
        <br />
        <label for="inputPassword5" className="form-label">
          Last Name
        </label>
        <input
          type="text"
          name="lastName"
          className="form-control mb-2"
          ref={register({ required: true })}
        />
        <div style={{ color: "red" }}>
          {errors.lastName && "Last Name is required"}
        </div>
        <br />

        <label for="inputPassword5" className="form-label">
          Username
        </label>
        <input
          type="text"
          name="username"
          className="form-control mb-2"
          ref={register({ required: true })}
        />
        <div style={{ color: "red" }}>
          {errors.username && "Username is required"}
        </div>
        <br />
        <label for="inputPassword5" className="form-label">
          Password
        </label>
        <input
          type={password ? "password" : "text"}
          name="password"
          className="form-control mb-2"
          ref={register({ required: true })}
        />
        <div style={{ color: "red" }}>
          {errors.password && "Password is required"}
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            onClick={() => setPassword(!password)}
          />
          <label className="form-check-label" for="exampleCheck1">
            Show password
          </label>
        </div>

        <input
          type="submit"
          className="form-control btn btn-success"
          value="Sign Up"
        />
      </form>
    </div>
  );
}
