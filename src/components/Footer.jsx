import * as React from 'react';
import { Link } from 'react-router-dom';

function Footer() {

  return (
    <div id="footer">
      <div id="footerContent">
        ©2024 Cassidy Pagels
      </div>
      <div>
        <Link to='/Contact'><button>Contact Me</button></Link>
      </div>
    </div>
  );
}

export default Footer;
