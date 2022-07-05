import axios from "axios";

// CREATE CONSTANT VARIABLE AS A TYPE
export const GET_LIST_CONTACTS = "GET LIST CONTACTS";

// CREATE FUNCTION THAT HANDLE GET METHOD FROM API
export const getListContacts = () => {
  return (dispacth) => {
    // Loading
    dispacth({
      type: GET_LIST_CONTACTS,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // GET API
    axios({
      method: "GET",
      url: "http://localhost:3000/contacts",
      timeout: 120000,
    })
      .then((response) => {
        // SUCCESS DATA
        console.log(response.data)
        dispacth({
          type: GET_LIST_CONTACTS,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        // ERROR
        dispacth({
          type: GET_LIST_CONTACTS,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
