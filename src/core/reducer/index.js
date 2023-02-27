import { createStore } from 'redux';
import { actionChangeMainTitle } from '../../views/components/TitleBlock/actions';

const initialState = {
  activeMenuButton: '',
};

function rootReducer(state = initialState, action = {}) {
  switch (action.type) {
    case actionChangeMainTitle.TYPE:
      return {
        ...state,
        activeMenuButton: action.payload,
      };

    default:
      return state;
  }
}

export const store = createStore(rootReducer);
