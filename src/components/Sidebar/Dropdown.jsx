import { Link } from "react-router-dom";
const DropdownMenu = ({ name, submenu }) => {
    
    return (
        <>
            <div>
                {submenu.length <= 1 && <div className="py-2"><Link to={submenu[0].path}>{name}</Link></div>}
                {submenu.length > 1 && <div>
                    <div className="py-2">{name}</div>
                    {submenu.map(submenuItem => {
                        return <div key={submenuItem.key} className="ml-4 py-2"><Link to={submenuItem.path}>{submenuItem.name}</Link></div>
                    })}
                    </div>}
            </div>
        </>
    );
}

export default DropdownMenu;