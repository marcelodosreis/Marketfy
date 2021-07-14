// Core
import React from 'react';
import PropTypes from 'prop-types';

const Badge = ({ children, icon }) => (
    <div className="hidden w-full text-gray-600 md:flex md:items-center">
        {icon}
        <span className="mx-1 text-sm">{children}</span>
    </div>
);

export default Badge;

Badge.propTypes = {
    children: PropTypes.node.isRequired,
    icon: PropTypes.node.isRequired
};
