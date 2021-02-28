import React from 'react';

import PropTypes from 'prop-types';

const Button = ({ children, icon }) => (
    <button
        className="flex items-center justify-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500 w-full"
        href="/">
        <span>{children}</span>
        {icon}
    </button>
);

export default Button;

Button.propTypes = {
    children: PropTypes.node.isRequired,
    icon: PropTypes.node
};
