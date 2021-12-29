import { FunctionComponent } from 'react';
import styled from 'styled-components';

const Icon = styled.img`
    max-width: 100%;
`;
const MenuItemDiv = styled.a``;

interface MenuItemInterface {
    type: string;
    value: string;
    action?: string;
};
const MenuItem: FunctionComponent<MenuItemInterface> = ({
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