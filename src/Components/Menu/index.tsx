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
    last: ItemType;
};

const MenuContainer = styled.div`
    display:flex;
    flex-direction:column;
    height: 90vh;
    margin-top: 1rem;
`;

const Menu: FunctionComponent<MenuInterface> = ({ item, last}) => {

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
                <MenuItem
                    type={last?.type}
                    value={last?.value}
                    action={last?.action}
                />
            </div>
        </MenuContainer>
    )

}

export default Menu;