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
        <li><Link to="/"><Icon /> setup <Sortsign /></Link></li>


      <li><Link to="/about"><Folder /> Sections <Sortsign /></Link></li>
      <li><Link to="/about"><Shopbag /> Shop </Link></li>
      <li><Link to="/about"><List /> blog </Link></li>
      <li><Link to="/about"><Envelope /> contact </Link></li>
      <li id="lired"><Link to="/about"><Shopcart /> buy now </Link></li>
    </ul>
  
  );

}

}
export default Menu;
