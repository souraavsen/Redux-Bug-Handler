import * as actions from "./ActionTypes";

let id = 1;

const initialBugs = [];

export default function reducer(state = initialBugs, action) {
  switch (action.type) {
    case actions.ADD_BUG:
      if (action.payload.des === "") {
        return state;
      }
      return [
        ...state,
        {
          id: ++id,
          des: action.payload.des,
          resolved: false,
        },
      ];

    case actions.REMOVE_BUG:
      console.log(action.payload.id);
      console.log(state);
      return state.filter((bug) => bug.id !== action.payload.id);

    default:
      return state;
  }
}
