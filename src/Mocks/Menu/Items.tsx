import {ItemType} from '../../Components/Menu/index';
import logo1 from '../../img/award.svg';
import logo2 from '../../img/badge-ar.svg';
import logo3 from '../../img/search.svg';


export const MenuMock : ItemType[] = [
    {
        type: 'Icon',
        value: logo1,
        action: '/',
    },
    {
        type: 'Icon',
        value: logo2,
        action: '/pag-1',
    },
    {
        type: 'Icon',
        value: logo3,
        action: '/pag-2',
    },
    
];
