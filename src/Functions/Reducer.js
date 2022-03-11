import * as actions from "./ActionTypes";

let id = 1;

const initial = [
  {
    accounts: {},
    quizes: [],
  },
];

export default function reducer(state = initial, action) {
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
      return state.filter((bug) => bug.id !== action.payload.id);

    default:
      return state;
  }
  
  // if (action.type === 'AddBug') {
  //     return [
  //         ...state, {
  //             des: action.payload.des,

  //         }
  //     ]
  // }
}
