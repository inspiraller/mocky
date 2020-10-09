import React from 'react';
import LinkStyle from 'src/Components/Common/Link/LinkStyle';

const Link = LinkStyle();

const Route2 = () => (
  <section>
    hello world - route 2 - <Link to={`/`}>Go back to route 1</Link>
  </section>
);
export default Route2;
