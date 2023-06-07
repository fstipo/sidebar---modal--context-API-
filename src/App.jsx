import { links } from "./data.jsx";
import Home from "./Home";
import Sidebar from "./Sidebar";
import Modal from "./Modal";
import { useGlobalContext } from "./context.jsx";

const App = () => {
  const { isModalOpen } = useGlobalContext();
  return (
    <>
      <Home />
      <Sidebar />
      {isModalOpen && <Modal />}
    </>
  );
};
export default App;
