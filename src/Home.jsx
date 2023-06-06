import { useGlobalContext } from "./context"

const Home = () => {
    const { openSidebar, openModal } = useGlobalContext();
    console.log(openSidebar)

    return (
        <h2>
            <button className="btn" onClick={openModal}>Open Modal</button>
        </h2>
    )
}
export default Home