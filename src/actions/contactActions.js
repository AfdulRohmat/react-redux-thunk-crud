import axios from "axios";

// CREATE CONSTANT VARIABLE AS A TYPE
export const GET_LIST_CONTACTS = "GET LIST CONTACTS";
export const ADD_CONTACT = "ADD CONTACT";

// CREATE FUNCTION THAT HANDLE ACTION

// ==> GET METHOD FROM API
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
        console.log(response.data);
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

// ADD / POST METHOD TO API
export const addContact = (data) => {
    return (dispacth) => {
        // Loading
        dispacth({
          type: ADD_CONTACT,
          payload: {
            loading: true,
            data: false,
            errorMessage: false,
          },
        });
    
        // GET API
        axios({
          method: "POST",
          url: "http://localhost:3000/contacts",
          timeout: 120000,
          data: data
        })
          .then((response) => {
            // SUCCESS DATA
            console.log(response.data);
            dispacth({
              type: ADD_CONTACT,
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
              type: ADD_CONTACT,
              payload: {
                loading: false,
                data: false,
                errorMessage: error.message,
              },
            });
          });
      };
}
