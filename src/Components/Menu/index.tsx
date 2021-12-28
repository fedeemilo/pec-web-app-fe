import { FunctionComponent } from 'react'
import MenuItem from './MenuItem';

export type ItemType = {
    type: string;
    value: string;
    action?: string;
};

interface MenuInterface {
    item: ItemType[];
};

const Menu: FunctionComponent<MenuInterface> = ({ item }) => {

    return (
        <>
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
        </>
    )
}

export default Menu;