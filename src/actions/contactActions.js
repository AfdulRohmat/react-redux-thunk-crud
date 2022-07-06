import axios from "axios";

// CREATE CONSTANT VARIABLE AS A TYPE
export const GET_LIST_CONTACTS = "GET LIST CONTACTS";
export const ADD_CONTACT = "ADD CONTACT";
export const DELETE_CONTACT = "DELETE CONTACT";
export const CATCH_DETAIL_CONTACT = "CATCH DETAIL CONTACT";
export const UPDATE_CONTACT = "UPDATE CONTACT";

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
      data: data,
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
};

// DELETE METHOD FROM API
export const deleteContact = (id) => {
  return (dispacth) => {
    // Loading
    dispacth({
      type: DELETE_CONTACT,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // DELETE API
    axios({
      method: "DELETE",
      url: `http://localhost:3000/contacts/${id}`,
      timeout: 120000,
    })
      .then((response) => {
        // SUCCESS DATA
        console.log(response.data);
        dispacth({
          type: DELETE_CONTACT,
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
          type: DELETE_CONTACT,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

// ==> CATCH DETAIL CONTACT
export const catchDetailContactAction = (data) => {
  return (dispacth) => {
    // Loading
    dispacth({
      type: CATCH_DETAIL_CONTACT,
      payload: {
        data: data,
      },
    });
  };
};

// UPDATE CONTACT/ PUT METHOD
export const updateContact = (data) => {
  return (dispacth) => {
    // Loading
    dispacth({
      type: UPDATE_CONTACT,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // PUT API
    axios({
      method: "PUT",
      url: `http://localhost:3000/contacts/${data.id}`,
      timeout: 120000,
      data: data,
    })
      .then((response) => {
        // SUCCESS DATA
        console.log(response.data);
        dispacth({
          type: UPDATE_CONTACT,
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
          type: UPDATE_CONTACT,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
