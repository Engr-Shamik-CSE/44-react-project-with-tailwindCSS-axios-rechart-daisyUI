import React from 'react';

const Navlink = ({link}) => {
    return (
        <li key={link.id}>
            <a href={link.path}>{link.name}</a>
        </li>
    );
};

export default Navlink;