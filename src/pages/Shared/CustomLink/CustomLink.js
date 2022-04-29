import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CustomLink = ({ children, to, ...props }) => {
    const resolved = useResolvedPath(to);
    const match = useMatch({ path: resolved.pathname, end: true });
    return (
        <>
            <Link
                // style={{ color: match ? "#b91e1f" : "#fff" }}
                className={match?'active':'menu-link'}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </>
    );
};

export default CustomLink;