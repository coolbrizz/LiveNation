import React from 'react'
import SideMenu from 'react-native-side-menu'

import Homescreen from './Homescreen';
import Faq from './Faq';


const menu = () =>{
    const menu = <menu navigator={navigator}/>;
    return(
<SideMenu menu={menu}>
    <Homescreen />
    <Faq />
    </SideMenu>
    )
  };
  export default menu;