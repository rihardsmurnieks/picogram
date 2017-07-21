  import React from 'React';
import Icon from '../components/icon';
import Logo from '../components/logo';
import Menu from '../components/menu';
import Like from '../components/like';
import List from '../components/list'
import Bars from '../components/bars'
import Slider from '../components/slider'
import Link from 'react-router'

class Main extends React.Component{
  render(){
      return(
        <div id="container">
          <main className="main">
          <nav>
          <Menu />
          </nav>


            <h1 id="firsth1">Choose Your Next Home</h1>
            <p id="firstp">Beautiful, Elegantly styled appartments exactly for You</p>

          <button>See more</button>
  </main>

          <footer>
            <h1 id="footerh1">What we stand for</h1>
            <div id="responsive">
              <Slider />
              <h3>Responsibility</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
            <div id="quality">
                <List />
              <h3 id="footp">Quality</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
            <div id="quality">
              <Bars />
              <h3>Support</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </footer>
        </div>

      );

  }


}
export default Main;
