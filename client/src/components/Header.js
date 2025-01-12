import React from 'react';
import { Helmet } from 'react-helmet';

function Header() {
    return (
        <div>
          <Helmet>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Document</title>
          </Helmet>
          <nav></nav>
        </div>
      );
}

export default Header;