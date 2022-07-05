import { GET_LIST_CONTACTS } from "../../actions/contactActions";

const initialState = {
  // GET LIST CONTACT STATE
  getListContactData: false,
  getListContactLoading: false,
  getListContactError: false,
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_CONTACTS: // TYPE BASED ON ACTION
      return {
        ...state,
        getListContactData: action.payload.data,
        getListContactLoading: action.payload.loading,
        getListContactError: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default contactReducer;
