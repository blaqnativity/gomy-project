import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Routes from "./routes/appRoutes";

import WhatsappApi from "./components/whatsapp/WhatsappApi";

const App = () => {
  return (
    <>
      <WhatsappApi />
      <Routes />
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default App;
