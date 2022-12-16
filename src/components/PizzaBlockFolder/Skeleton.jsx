import React from "react";
import ContentLoader from "react-content-loader";

const PizzaSkeleton = (props) => (
    <ContentLoader
        className="pizza-block"
        speed={2}
        width={280}
        height={500}
        viewBox="0 0 280 500"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="140" cy="194" r="125" />
        <rect x="0" y="10" rx="10" ry="10" width="280" height="20" />
        <rect x="0" y="360" rx="10" ry="10" width="288" height="88" />
        <rect x="-1" y="464" rx="10" ry="10" width="112" height="30" />
        <rect x="125" y="463" rx="17" ry="17" width="156" height="35" />
    </ContentLoader>
);

export default PizzaSkeleton;
