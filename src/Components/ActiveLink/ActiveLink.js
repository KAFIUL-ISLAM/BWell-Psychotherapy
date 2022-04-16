import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';


function ActiveLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link
                style={{ color: match ? '#04514B' : 'white', textDecoration: match ? "none" : "none" }}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    );
}

export default ActiveLink;