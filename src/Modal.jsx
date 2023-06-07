import { FaTimes } from "react-icons/fa"
import { useGlobalContext } from "./context"

const Modal = () => {
    const { isModalOpen, closeModal } = useGlobalContext();
    return (
        (<div className={isModalOpen ? "modal-overlay show-modal" : "modal-overlay"}>
            <div className="modal-container">
                <h4>Modal Content</h4>

                <button className="close-modal-btn" type="button" onClick={closeModal}><FaTimes className="icon" /></button>
            </div>
        </div>)
    )
}
export default Modal