import { GET_LIST_CONTACTS } from "../../actions/contactActions";
import { ADD_CONTACT } from "../../actions/contactActions";
import { DELETE_CONTACT } from "../../actions/contactActions";

const initialState = {
  // GET LIST CONTACT STATE
  getListContactData: false,
  getListContactLoading: false,
  getListContactError: false,

  // ADD CONTACT STATE
  addContactData: false,
  addContactLoading: false,
  addContactError: false,

  // DELETE CONTACT STATE
  deleteContactData: false,
  deleteContactLoading: false,
  deleteContactError: false,
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

    case ADD_CONTACT:
      return {
        ...state,
        addContactData: action.payload.data,
        addContactLoading: action.payload.loading,
        addContactError: action.payload.errorMessage,
      };

    case DELETE_CONTACT:
      return {
        ...state,
        deleteContactData: action.payload.data,
        deleteContactLoading: action.payload.loading,
        deleteContactError: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default contactReducer;
