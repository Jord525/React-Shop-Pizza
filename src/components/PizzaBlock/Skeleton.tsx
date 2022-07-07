import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="139" cy="120" r="120" />
    <rect x="0" y="265" rx="0" ry="0" width="280" height="19" />
    <rect x="1" y="297" rx="0" ry="0" width="280" height="88" />
    <rect x="0" y="409" rx="0" ry="0" width="95" height="27" />
    <rect x="132" y="398" rx="30" ry="30" width="145" height="50" />
    <rect x="242" y="418" rx="0" ry="0" width="3" height="10" />
  </ContentLoader>
);

export default Skeleton;
