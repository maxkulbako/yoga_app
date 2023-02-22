import { createStore } from "redux";

const initialState = {
  activeMenuButton: ""
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_TITLE":
      return {
        ...state,
        activeMenuButton: action.payload
      }

    default:
      return state;
  }

}

export const store = createStore(rootReducer);
