import { MainLayout } from "./Layout/MainLayout";
import { HomePage } from "./pages";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <MainLayout>
        <HomePage />
      </MainLayout>
      <ToastContainer />
    </>
  );
}

export default App;
