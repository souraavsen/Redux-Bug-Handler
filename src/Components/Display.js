import React from "react";
import { useSelector } from "react-redux";
import store from "../Functions/Store";

const Display = () => {
  // To read data
  // 1.
  // useSelector;
  // 2.
  // store.getState()

  const bugs = useSelector((state) => state);

  console.log("BUGSS", bugs);

  return (
    <div>
      <h3>Active Bugs</h3>
      <div>Total {store.getState().length} <br /><br /></div>
      {/* {bugs.map((bug,id) => (
        <li key={id}>{bug.des}</li>
      ))} */}
      {store.getState().map((bug, id) => (
        <div>
          <li key={id}>
            {bug.id} --- {bug.des} <button>Edit</button> <button>x</button>
          </li>
          <br />
        </div>
      ))}
    </div>
  );
};

export default Display;
