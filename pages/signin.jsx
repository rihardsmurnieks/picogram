import React from 'React';
import Icon from '../components/icon';
import Logo from '../components/logo';
import Menu from '../components/menu';
import Like from '../components/like';
import Check from '../components/checkbox'

class Signin extends React.Component{
  render(){
      return(
        <div id="container">
          <nav>
          <Menu />
          </nav>
          <main className="main">
            <h1>Signin</h1>
            <form>
              <label>
              Username:
              <input type="text" name="Name" />
              Password:
              <input type="password" name="pass" />
            </label>
            </form>
          </main>

        </div>

      );

  }


}
export default Signin;
