import React from 'React';
import Icon from '../components/icon';
import Logo from '../components/logo';
import Menu from '../components/menu';
import Like from '../components/like';

class About extends React.Component{
  render(){
      return(
        <div className="container">
        <header className="header">
          picogram
          <Icon />
          <Logo />
        </header>
        <nav className="navigation">
          <Menu />


        </nav>
        <main className="content">
          <img className="picogram-image" src="https://source.unsplash.com/random" alt="unsplash" />




        </main>
        <footer className="footer">
          <p>&copy; 2017 Rihards</p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

        </footer>
        </div>

      );

  }


}
export default About;
