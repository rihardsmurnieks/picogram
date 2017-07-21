import React from 'react';
import {Router,Route,Link,IndexRoute,hashHistory} from 'react-router'

import Main from './pages/main';
import Shop from './pages/shop';
import Err from './pages/error';
import Setup from './pages/setup'
import Signin from './pages/signin'
import Application from './components/application'
import Buynow from './pages/buynow'
import Contacts from './pages/contactsm'

class Picogram extends React.Component{
  render(){
    return (
      <Router history={hashHistory}>
      <Route path='/' component={Main}/>
        <Route path='/shop' component={Shop}/>
          <Route path='/setup' component={Setup}/>
            <Route path='/signin' component={Signin}/>
              <Route path='/application' component={Application}/>
                <Route path='/buynow' component={Buynow}/>
                <Route path='/contacts' component={Contacts}/>
          <Route path='/*' component={Err}/>

      </Router>


    );


  }




}
export default Picogram;
