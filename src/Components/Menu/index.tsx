import { FunctionComponent } from 'react'
import MenuItem from './MenuItem';
import styled from 'styled-components';

export type ItemType = {
    type: string;
    value: string;
    action?: string;
};
interface MenuInterface {
    item: ItemType[];
};

const MenuContainer = styled.div`
    background: #FFF;
    box-sizing: border-box;
    height: 98vh;
    margin-top: -8px;
    position: relative;
`;

const Menu: FunctionComponent<MenuInterface> = ({ item }) => {

    return (
        <MenuContainer>
            {item.map(({
                type,
                value,
                action,
            }) => (
                <MenuItem
                    type={type}
                    value={value}
                    action={action}
                />
            ))}
            <div style={{
                position: 'absolute',
                bottom: 0,
            }}>
                lorem
            </div>
        </MenuContainer>
    )

}

export default Menu;