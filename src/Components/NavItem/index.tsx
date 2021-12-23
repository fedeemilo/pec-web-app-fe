const NavItem = ({icon, linkTo} : { icon: string, linkTo: string}) => {
    console.log(icon, 'el icon')
    return (
        <div>
            <a href={linkTo}><img width="50" src={icon} alt="logo"/></a>
        </div>
    )
}

export default NavItem;