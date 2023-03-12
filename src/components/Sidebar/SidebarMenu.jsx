import DropdownMenu from "./Dropdown";
import { menu } from "./SidebarItems.json"
const SidebarMenu = () => {
    
    return (
        <>
            <nav>
                <ul>
                    {Object.values(menu).map(menuItem => {
                        return <div key={menuItem.name}><DropdownMenu name={menuItem.name} submenu={menuItem.items} /></div>
                    })}                    
                </ul>
            </nav>
        </>
    );
}

export default SidebarMenu;