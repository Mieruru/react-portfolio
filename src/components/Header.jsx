import * as React from 'react';
import { Link } from 'react-router-dom';

function Header() {

  return (
    <div id="header">
      <h2 id='logo'>
      <Link to='/'>
        Welcome to Cassidy's Portfolio!
      </Link>
      </h2>
      <div id="nav">
        <Link to='/AboutMe'><button>About Me</button></Link>
        <Link to='/Portfolio'><button>Portfolio</button></Link>
        <Link to='/Resume'><button>Resume</button></Link>
      </div>
    </div>
  );
}

export default Header;
