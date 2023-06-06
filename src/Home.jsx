import { useGlobalContext } from "./context"
import { FaBars } from "react-icons/fa"

const Home = () => {
    const { openSidebar, openModal } = useGlobalContext();
    console.log(openSidebar)

    return (
        <main>
            <button className="sidebar-toggle" type="button" onClick={openSidebar}><FaBars /></button>
            <button type="button" className="btn btn-modal" onClick={openModal}>show modal</button>
        </main>
    )
}
export default Home