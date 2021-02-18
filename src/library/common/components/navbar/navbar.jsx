import React from 'react';

import * as Style from './navbar.style';

// import PropTypes from 'prop-types';

const Navbar = () => {
    return (
        <Style.Header>
            <div>
                <ul>
                    {[1, 2, 3, 4, 5, 6].map((number) => (
                        <li key={number}>Loja numbero: {number}</li>
                    ))}
                </ul>
                <input placeholder="Pesquisar" />
            </div>
        </Style.Header>
    );
};

Navbar.prototype = {};

export default Navbar;
