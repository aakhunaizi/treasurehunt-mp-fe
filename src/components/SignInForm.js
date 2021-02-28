import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { signin } from "../store/actions/authActions";
import { useState } from "react";

export default function Signin() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const [password, setPassword] = useState(true);

  const history = useHistory();

  const onSubmit = (data) => {
    dispatch(signin(data, history));
  };

  return (
    <div
      className="container"
      style={{
        marginTop: "10%",

        width: "20%",
      }}
    >
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h1>Sign In</h1>
        <br />
        <label for="inputPassword5" class="form-label">
          Username
        </label>
        <input
          type="text"
          name="username"
          className="form-control mb-2"
          ref={register({ required: true })}
        />
        <label for="inputPassword5" className="form-label">
          Password
        </label>

        <input
          type={password ? "password" : "text"}
          name="password"
          className="form-control mb-2"
          ref={register({ required: true })}
        />
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
          value="Sign In"
        />
      </form>
    </div>
  );
}
