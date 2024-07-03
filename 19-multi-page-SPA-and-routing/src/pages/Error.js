import MainNav from "../components/MainNav";

function ErrorPage() {
  return (
    <>
      <MainNav />
      <main>
        <h1>An Error Occured!</h1>
        <p>Could not find this page.</p>
      </main>
    </>
  );
}

export default ErrorPage;
