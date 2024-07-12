import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetUpPage() {
  function addMeetupHandler(enteredData) {}

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

export default NewMeetUpPage;
