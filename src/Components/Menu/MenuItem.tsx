import { FunctionComponent } from 'react';
import styled from 'styled-components';

const Icon = styled.img` 
    max-width: 20px;
    padding: 1rem;


    &:hover{
        fill:white;   //Como atacar fill 
        background: #1F97AE;
        cursor: pointer;
        transition: .2s;
    }
`;
const MenuItemDiv = styled.a``;  //Es para anchors

interface MenuItemInterface {   // No se que es 
    type: string;
    value: string;
    action?: string;
};
const MenuItem: FunctionComponent<MenuItemInterface> = ({  //por que aca? 
    type,
    value,
    action,
}) => {

    return (
        <>
            {
                type === 'Icon' && (<Icon src={value} />) || (
                    <MenuItemDiv href={action}>
                        <Icon src={value} />
                    </MenuItemDiv>
                )
            }
        </>  
    )
}

export default MenuItem;