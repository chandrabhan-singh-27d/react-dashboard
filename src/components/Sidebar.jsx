import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <>
            <aside>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/">Stocks</Link>
                        </li>
                        <li>
                            <Link to="/">Intelligence</Link>
                        </li>
                        <li>
                            <Link to="/">Fundamental Data</Link>
                        </li>
                        <li>
                            <Link to="/">Forex Data</Link>
                        </li>
                        <li>
                            <Link to="/">Cryptocurrency Data</Link>
                        </li>
                        <li>
                            <Link to="/">Commodities Data</Link>
                        </li>
                        <li>
                            <Link to="/">Economic Indicators</Link>
                        </li>
                    </ul>
                </nav>
            </aside>
        </>
    );
}

export default Sidebar;