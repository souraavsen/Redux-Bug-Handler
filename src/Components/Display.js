import React from "react";
import { useSelector } from "react-redux";
import store from "../Functions/Store";

const Display = ({ removeBug }) => {
  return (
    <div>
      <h3>Active Bugs</h3>
      <div>
        Total {store.getState().length} <br />
        <br />
      </div>
      {store.getState().map((bug, id) => (
        <li key={id}>
          {bug.id} --- {bug.des} <button>Edit</button>{" "}
          <button
            onClick={() => {
              removeBug(bug.id);
            }}
          >
            x
          </button>
        </li>
      ))}
    </div>
  );
};

export default Display;
