import ListContacts from "./componenst/ListContacts";

function App() {
  return (
    <>
      <div className="container">
        <h1 className="text-2xl font-bold uppercase flex justify-center my-4">
          Contacts Apps
        </h1>

        <ListContacts />
      </div>
    </>
  );
}

export default App;
