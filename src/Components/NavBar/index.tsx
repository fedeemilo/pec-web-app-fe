import { useContext } from "react";
import { CONTEXT } from "../../context";
import styled from 'styled-components'
import NavItem from '../NavItem';
import { Col, Container } from "../../Common/Grid/Index";

const NavBar = () => {
    const CTX: any = useContext(CONTEXT);
    let {
        data,
        setData
    } = CTX;

    const { logoUri, lastItem, items } = data;
    console.log(data);
    // setData((prevState: any) => ({
    //     ...prevState,
    //     logoUri: 'lololo',
    //   }));

    const NavRoot = styled.div`
        background-color: grey;
        height: 650px;
        a {
            color: black;
            text-transform: capitalize;
            text-decoration: unset;
        }
    `;
    const NavLogo = styled.div`
        border-radius: 3px;
    `;

    const NavItems = styled.div`
        border-radius: 3px; 
    `;

    const NavLast = styled.div`
        bottom: 0;
        position: absolute;
    `;

    return (
        <Container>
            <Col size={1}>
                <NavRoot>
                    <NavLogo>
                        <a href="/">
                        <img width="69" src={logoUri} alt="logo"/>
                        </a>
                    </NavLogo>
                    <hr/>
                    <NavItems>
                        {items.map((item: any) => (
                            <>
                            <NavItem icon={item.icon} linkTo={item.linkTo}/>
                            <hr/>
                            </> 
                        ))}
                    </NavItems>
                    <hr/>
                    <NavLast><NavItem icon={lastItem.icon} linkTo={lastItem.linkTo}/></NavLast>
                </NavRoot>
            </Col>
        </Container>
    )
}

export default NavBar;