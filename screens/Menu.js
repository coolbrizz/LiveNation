import React from 'react'
import SideMenu from 'react-native-side-menu'

import Homescreen from './Homescreen';
import Faq from './Faq';
import Informations from './Informations';
import Maponglet from './Maponglet';
import Partenaires from './Partenaires';
import Reseaux from './Reseaux';
import Programmescreen from './Programmescreen';

const menu = () =>{
    const menu = <Menu navigator={navigator}/>;
    return(
<SideMenu menu={menu}>
    <Homescreen />
    <Faq />
    </SideMenu>
    )
  };
  export default menu;