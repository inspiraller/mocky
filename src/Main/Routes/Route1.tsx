import React from 'react';
import LinkStyle from 'src/Components/Common/Link/LinkStyle';

const Link = LinkStyle();
const Route1 = () => (
  <section>
    hello world - route 1 <Link to={`/Route2`}>Go to route 2</Link>{' '}
  </section>
);
export default Route1;
