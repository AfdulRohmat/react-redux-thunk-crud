import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, getListContacts } from "../actions/contactActions";
import Loading from "./Loading";
import { MdDelete } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ListContacts = () => {
  const dispacth = useDispatch();
  const notify = () =>
    toast.success("Contact Deleted Successfully", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  //   CALL STATE FROM REDUCERS
  const {
    getListContactData,
    getListContactLoading,
    getListContactError,
    deleteContactData,
  } = useSelector((state) => state.ContactReducer); // STATE NAME FROM COMBINE REDUCER

  const deleteData = (id) => {
    dispacth(deleteContact(id));
  };

  useEffect(() => {
    // CALL ACTION GET LIST CONTACT
    dispacth(getListContacts());

    //
  }, [dispacth]);

  useEffect(() => {
    if (deleteContactData) {
      // CALL ACTION GET LIST CONTACT
      dispacth(getListContacts());
      notify();
    }
  }, [dispacth, deleteContactData]);

  return (
    <>
      <div className="flex flex-col">
        <h2 className="text-xl font-semibold mb-4">List Of Contacts</h2>
        {getListContactData ? (
          getListContactData.map((contact, index) => {
            return (
              <div
                key={contact.id}
                className="flex justify-between items-center gap-2  text-base my-1 bg-white p-3 rounded-md shadow-md border-2"
              >
                <div className="flex gap-1">
                  <p>{index + 1}.</p>
                  <p className="font-semibold">{contact.name}</p>
                  <p> - {contact.noHp} </p>
                </div>

                <div
                  onClick={() => deleteData(contact.id)}
                  className="cursor-pointer "
                >
                  <MdDelete />
                </div>
              </div>
            );
          })
        ) : getListContactLoading ? (
          <Loading />
        ) : getListContactError ? (
          <p>Error</p>
        ) : getListContactData.length === 0 ? (
          <p>No data available</p>
        ) : (
          "something wrong :("
        )}
      </div>

      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default ListContacts;
