import { FunctionComponent } from 'react';
import styled from 'styled-components';

const Icon = styled.img`
    max-width: 100%;
`;
const MenuItemDiv = styled.div`

`;

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
                type === 'icon' && (<Icon src={value} />) || (
                    <MenuItemDiv onClick={() => alert('HW')}>
                        <Icon src={value} />
                    </MenuItemDiv>
                )
            }
        </>
    )
}

export default MenuItem;