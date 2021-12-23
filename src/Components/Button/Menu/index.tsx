import { FunctionComponent } from 'react';
import styled from 'styled-components';

const Item = styled('div')`
    padding: 10px;
`;
const Container = styled('div')`
    display: flex;
    flex-direction: column;
`;

type MenuList = {
    itemName: string
}
interface MenuInterface {
    item?: MenuList[];
}

const Menu: FunctionComponent<MenuInterface> = ({item}) => {
    return (
        <>
            <div>
                <img src="/images/logo.png" width='100%'/>
            </div>
            <Container>
                {
                    item?.map((menu: MenuList) => {
                        const {itemName} = menu;
                        return (
                            <Item>
                                { itemName }
                            </Item>
                        )
                    })
                }
            </Container>
        </>
    );
}

export default Menu;