import { createContext, useContext, useState } from "react"

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const openSidebar = () => setIsSidebarOpen(true);
    const closeSidebar = () => setIsSidebarOpen(false);

    return (

        <GlobalContext.Provider value={{ isSidebarOpen, isModalOpen, openModal, closeModal, openSidebar, closeSidebar }}>
            {children}
        </GlobalContext.Provider>
    )
}
export default AppContext