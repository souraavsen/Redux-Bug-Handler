import React, { useState } from "react";
import { AddBug, RemoveBug } from "../Functions/Actions";
import store from "../Functions/Store";
import Display from "./Display";

const Form = () => {
  const initialInputStyle = {
    border: "none",
    outline: "none",
    display: "none",
  };

  const [des, setDes] = useState("");
  const [toggle, setToggle] = useState(initialInputStyle);

  const subscribe = store.subscribe(() => {
    setToggle({ border: "none", outline: "none", display: "inline-block", color:"green", textAlign:"center",margin:"15px", fontSize:"18px"});
    setTimeout(() => {
      setToggle(initialInputStyle);
    }, 2000);
  });

  const addBug = () => {
    store.dispatch(AddBug(des));
    subscribe();
    setDes("");
  };

  const removeBug = (bugId) => {
    store.dispatch(RemoveBug(bugId));
  };

  return (
    <div>
      <div>
        {/* <input type='text' placeholder='Bug Title' name='title' id='title' /> */}
        {/* <br /> */}
        <input
          type='text'
          onChange={(e) => setDes(e.target.value)}
          placeholder='Bug Description'
          name='description'
          id='description'
          value={des}
        />
      </div>

      <br />

      <input type='text' style={toggle} defaultValue='Added' />
      <br />

      <input type='button' onClick={(e) => addBug()} value='Add' />
      <br />
      <br />

      <Display removeBug={removeBug}></Display>
    </div>
  );
};

export default Form;
