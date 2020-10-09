import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import LinkStyle from 'src/Components/Common/Link/LinkStyle';

const Link = LinkStyle();

const LinkSimple = () => (
  <BrowserRouter>
    <Link to="/linksimple">Link Simple</Link>
  </BrowserRouter>
);
export default LinkSimple;
