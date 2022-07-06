import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addContact,
  getListContacts,
  updateContact,
} from "../actions/contactActions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddContact = () => {
  const [name, setName] = useState("");
  const [noHp, setNoHp] = useState("");
  const [id, setId] = useState(false);

  const notify = (successInfo) =>
    toast.success(successInfo, {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const dispacth = useDispatch();

  const handleSubmitOrEdit = (e) => {
    e.preventDefault();

    if (name === "" || noHp === "") {
      alert("name or phone number cannot be empty !");
      return;
    }

    if (id) {
      // do edit
      dispacth(updateContact({ name: name, noHp: noHp, id: id }));
      notify("contact edit successful");
    } else {
      // do submit
      // CALL ACTION ADD LIST CONTACT
      dispacth(addContact({ name: name, noHp: noHp }));
      notify("added contact successful");
    }
  };

  //   CALL STATE FROM REDUCERS
  const { addContactData, detailContactData, updateContactData } = useSelector(
    (state) => state.ContactReducer
  ); // STATE NAME FROM COMBINE REDUCER

  useEffect(() => {
    if (addContactData) {
      // CALL ACTION
      dispacth(getListContacts());

      setName("");
      setNoHp("");
    }
    //
  }, [dispacth, addContactData]);

  // PASSING DETAIL DATA FROM REDUCER TO STATE
  useEffect(() => {
    if (detailContactData) {
      setName(detailContactData.name);
      setNoHp(detailContactData.noHp);
      setId(detailContactData.id);
    }
    //
  }, [dispacth, detailContactData]);

  // REFRESH AFTER SUCCESS EDIT
  useEffect(() => {
    if (updateContactData) {
      // CALL ACTION
      dispacth(getListContacts());

      setName("");
      setNoHp("");
      setId("");
    }
    //
  }, [dispacth, updateContactData]);

  //
  return (
    <>
      <div className="flex flex-col gap-2 mb-6">
        <h1 className="font-semibold text-xl">
          {id ? "Edit Contact" : "Add Contact"}
        </h1>
        <div>
          <form
            className="flex flex-col gap-4"
            onSubmit={(e) => handleSubmitOrEdit(e)}
          >
            <div className="flex flex-col gap-1">
              <label>Name</label>
              <input
                placeholder="Enter your name"
                value={name}
                type="text"
                onChange={(e) => setName(e.target.value)}
                className="border-solid border-gray-300 border rounded-md  p-2 text-gray-600 leading-tight"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label>Phone Number</label>
              <input
                placeholder="Enter your phone Number"
                value={noHp}
                type="number"
                onChange={(e) => setNoHp(e.target.value)}
                className="border-solid border-gray-300 border rounded-md  p-2 text-gray-600 leading-tight"
              />
            </div>

            <button className="bg-blue-600 text-white w-[200px] hover:opacity-90 cursor-pointer rounded-md shadow-md py-2 font-semibold">
              {id ? "Edit" : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddContact;
