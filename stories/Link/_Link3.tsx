import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import LinkStyle from 'src/Components/Common/Link/LinkStyle';

const Link = LinkStyle();

const LinkSimple = () => (
  <BrowserRouter>
    <Link to="/link1">Link 1</Link> <Link to="/link2">Link 2</Link> <Link to="/link3">Link 3</Link>
  </BrowserRouter>
);
export default LinkSimple;
