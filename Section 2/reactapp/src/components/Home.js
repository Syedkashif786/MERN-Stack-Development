// 1. React components are functions. 
// 2. Function name must start with uppercase letter. 
// 3. Function should return atleast single JSX Element. 
// 4. function should be exported.

import React from 'react' ;
import './home.css';
import myimg from '../images/contactus.jpg';

const Home = () => {
  return (
    <div>
        <h1 className='myclass' style = {{color : 'red', backgroundColor : 'yellow'}}>Home Page</h1>
        <hr />
        <img src={myimg} alt="" />
    </div>
  )
}

export default Home;

