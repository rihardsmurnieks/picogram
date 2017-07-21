import React from 'react';
import {Link} from 'react-router'
import Icon from './icon'
import List from './list'
import Shopbag from './shopbag'
import Sortsign from './sortsign'
import Envelope from './checksign'
import Folder from './folder'
import Shopcart from './shopcart'

class Menu extends React.Component {
render(){
  return(
  <ul>
        <li><Link to="/"><Icon /> Home <Sortsign /></Link></li>


      <li><Link to="/application"><Folder /> Setup <Sortsign /></Link></li>
      <li><Link to="/shop"><Shopbag /> Shop </Link></li>
      <li><Link to="/signin"><List /> Sign in </Link></li>
      <li><Link to="/contacts"><Envelope /> contacts </Link></li>
      <li id="lired"><Link to="/buynow"><Shopcart /> buy now </Link></li>
    </ul>

  );

}

}
export default Menu;
