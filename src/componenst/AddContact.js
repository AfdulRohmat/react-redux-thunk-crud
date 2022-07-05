import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact, getListContacts } from "../actions/contactActions";

const AddContact = () => {
  const [name, setName] = useState("");
  const [noHp, setNoHp] = useState("");

  const dispacth = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "" || noHp === "") {
      alert("name or phone number cannot be empty !");
      return;
    }

    // CALL ACTION ADD LIST CONTACT
    dispacth(addContact({ name: name, noHp: noHp }));
  };

  //   CALL STATE FROM REDUCERS
  const { addContactData } = useSelector((state) => state.ContactReducer); // STATE NAME FROM COMBINE REDUCER

  useEffect(() => {
    if (addContactData) {
      // CALL ACTION
      dispacth(getListContacts());

      setName("");
      setNoHp("");
    }
    //
  }, [dispacth, addContactData]);

  //
  return (
    <>
      <div className="flex flex-col gap-2 mb-6">
        <h1 className="font-semibold text-xl">Add Contact</h1>
        <div>
          <form
            className="flex flex-col gap-4"
            onSubmit={(e) => handleSubmit(e)}
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
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddContact;
