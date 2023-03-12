import DropdownMenu from "./Dropdown";
import { menu } from "./SidebarItems.json"
const SidebarMenu = () => {
    
    return (
        <>
            <nav>
                <ul>
                    {Object.values(menu).map(menuItem => (
                        <li key={menuItem.name}>
                            <DropdownMenu name={menuItem.name} submenu={menuItem.items} />
                        </li>)
                    )}                    
                </ul>
            </nav>
        </>
    );
}

export default SidebarMenu;