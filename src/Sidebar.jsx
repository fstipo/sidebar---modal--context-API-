import logo from "./logo.svg";
import { links, socialLinks } from "./data.jsx";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Sidebar = () => {
    const { isSidebarOpen, closeSidebar } = useGlobalContext();
    return (
        <aside className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"} >
            <div className="sidebar-header">
                <img className="logo" src={logo} alt="codding addict" />
                <button className="close-btn" type="button" onClick={closeSidebar}><FaTimes /></button>
            </div>
            <ul className="links">
                {links.map(link => {
                    const { id, url, text, icon } = link;
                    return <li key={id}><a href={url}>{icon}{text}</a></li>
                })}
            </ul>
            <ul className="social-links">
                {socialLinks.map(socialLink => {
                    const { id, url, icon } = socialLink;
                    return <li key={id}><a href={url}>{icon}</a></li>
                })}
            </ul>
        </aside>
    )
}
export default Sidebar