import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./assets/scss/index.scss";
import Routes from "./routes/routes";
function App() {
  return (
    <>
      <ToastContainer />
      <Routes />
    </>
  );
}

export default App;
