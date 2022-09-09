import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={470}
    viewBox="0 0 280 470"
    backgroundColor="#ebebeb"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="125" cy="125" r="125" />
    <rect x="0" y="272" rx="5" ry="5" width="275" height="20" />
    <rect x="0" y="420" rx="7" ry="7" width="125" height="43" />
    <rect x="0" y="317" rx="7" ry="7" width="275" height="88" />
    <rect x="141" y="421" rx="19" ry="19" width="139" height="43" />
  </ContentLoader>
);

export default Skeleton;
