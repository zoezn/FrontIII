import React from 'react';
import GoTo from './GoTo';

const Header =()=>{
    return (
        <header className="header">
            <nav className="header_nav">
                <ul className="header_ul" type="none">
                    <li><GoTo argumentOne={"Home"} argumentTwo={"/"} /></li>
                    <li><GoTo argumentOne={"About"} argumentTwo={"/about"} /></li>
                    <li><GoTo argumentOne={"Experience"} argumentTwo={"/experience"} /></li>
                    <li><GoTo argumentOne={"Movies"} argumentTwo={"/movies"} /></li>
                </ul>
            </nav>
        </header>
    )
};



/* const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <GoTo argumentOne={"Ir a About"} argumentTwo={"/about"} />
    </div>
  )
} */

/* export default Home */


export default Header;