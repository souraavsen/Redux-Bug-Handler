import * as actions from "./ActionTypes";

export function AddBug(des) {
  return {
    type: actions.ADD_BUG,
    payload: {
      des: des,
    },
  };
}
export function RemoveBug(id) {
  return {
    type: actions.REMOVE_BUG,
    payload: {
      id: 1,
    },
  };
}
