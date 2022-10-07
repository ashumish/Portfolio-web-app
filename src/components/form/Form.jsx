import React, { useState } from "react";
import "./form.css";
const Form = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredMsg, setEnteredMsg] = useState("");
  const submitHandler = (e) => {
    e.priventDefault();
    console.log("Submitted");
  };
  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="form__input">
        <input
          type="text"
          placeholder="Your Name"
          value={enteredName}
          onChange={(e) => setEnteredName(e.target.value)}
        ></input>
      </div>
      <div className="form__input">
        <input
          type="text"
          placeholder="Your Email"
          value={enteredEmail}
          onChange={(e) => setEnteredEmail(e.target.value)}
        ></input>
      </div>
      <div className="form__input">
        <textarea
          placeholder="Write Message"
          value={enteredMsg}
          onChange={(e) => setEnteredMsg(e.target.value)}
        ></textarea>
      </div>
      <button type="Submit" className="submit__btn">
        Submit
      </button>
    </form>
  );
};

export default Form;
