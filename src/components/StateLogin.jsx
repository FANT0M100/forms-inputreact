import { useState } from "react";

export default function Login() {
  // const [entereEmail, setEnteredEmal] = useState("");
  // const [enterePassword, setEnteredPassword] = useState("");
  // function handleEmailChange(e) {
  //   setEnteredEmal(e.target.value);
  // }

  // function handlePassworChange(e) {
  //   setEnteredPassword(e.target.value);
  // }

  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const emailisInvalid = didEdit.email && !enteredValues.email.includes("@");

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleInputChange(identifier, value) {
    setEnteredValues((prevastate) => ({
      ...prevastate,
      [identifier]: value,
    }));
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: false,
    }));
  }

  function handleInputBlur(identifier) {
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: true,
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={enteredValues.email}
            onChange={(event) => handleInputChange("email", event.target.value)}
            onBlur={() => handleInputBlur("email")}
          />
          <div className="control-error">
            {emailisInvalid && <p>Pleaseenter a valid email address</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={enteredValues.password}
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
            onBlur={() => handleInputBlur("password")}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
