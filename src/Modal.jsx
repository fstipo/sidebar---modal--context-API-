import { IoMdClose } from "react-icons/io"
import { useGlobalContext } from "./context"

const Modal = () => {
    const { closeModal } = useGlobalContext();
    return (
        <section className="modal">
            <span><IoMdClose className="icon" onClick={closeModal} /></span>
            <h4>Modal Content</h4>
        </section>
    )
}
export default Modal