import { Link } from "react-router-dom";
const DropdownMenu = ({name, submenu}) => {
    // console.log(name, submenu)
    let menuItem, submenuList
    if(submenu.length <= 1){
        menuItem= <span><Link to={submenu[0].path}>{name}</Link></span>
    } else{
        submenu.map(submenuItem => {
            submenuList = <div><Link to={submenuItem.path}>{submenuItem.name}</Link></div>
            console.log(submenuItem)
        })
        menuItem = <div><span>{name}</span><div>{submenu.map(submenuItem => {
            return <div><Link to={submenuItem.path}>{submenuItem.name}</Link></div>
        })}</div></div>
    }
    return (
        <>
            <div>
                {menuItem}
            </div>
        </>
    );
}

export default DropdownMenu;