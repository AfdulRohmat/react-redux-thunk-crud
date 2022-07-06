import AddContact from "./componenst/AddContact";
import Dialog from "./componenst/Dialog";
import ListContacts from "./componenst/ListContacts";
function App() {
  return (
    <>
      <div className="container mb-16">
        <h1 className="text-2xl font-bold uppercase flex justify-center my-4">
          Contacts Apps
        </h1>
        <AddContact />
        <ListContacts />
      </div>
    </>
  );
}

export default App;
