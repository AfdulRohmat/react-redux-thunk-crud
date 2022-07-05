import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListContacts } from "../actions/contactActions";
import Loading from "./Loading";

const ListContacts = () => {
  const dispacth = useDispatch();

  //   CALL STATE FROM REDUCERS
  const { getListContactData, getListContactLoading, getListContactError } =
    useSelector((state) => state.ContactReducer); // STATE NAME FROM COMBINE REDUCER

  useEffect(() => {
    // CALL ACTION GET LIST CONTACT
    dispacth(getListContacts());

    //
  }, [dispacth]);

  return (
    <>
      <div className="flex flex-col">
        <h2 className="text-xl font-semibold mb-4">List Of Contacts</h2>
        {getListContactData ? (
          getListContactData.map((contact, index) => {
            return (
              <div
                key={contact.id}
                className="flex gap-2  text-base my-1 bg-white p-3 rounded-md shadow-md border-2"
              >
                <p>{index + 1}.</p>
                <p className="font-semibold">{contact.name} -</p>
                <p>{contact.noHp}</p>
              </div>
            );
          })
        ) : getListContactLoading ? (
          <Loading />
        ) : getListContactError ? (
          <p>Error</p>
        ) : (
          "something wrong :("
        )}
      </div>
    </>
  );
};

export default ListContacts;
