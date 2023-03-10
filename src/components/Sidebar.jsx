import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <>
            <aside>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Page1</Link>
                        </li>
                        <li>
                            <Link to="/products">Page2</Link>
                        </li>
                    </ul>
                </nav>
            </aside>
        </>
    );
}

export default Sidebar;