import React from 'react';

// import PropTypes from 'prop-types';

const PromoteCode = () => (
    <div className="mt-8">
        <form className="flex items-center justify-center">
            <input className="form-input w-48" type="text" placeholder="Add promocode" />
            <button className="ml-3 flex items-center px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                <span>Apply</span>
            </button>
        </form>
    </div>
);

export default PromoteCode;

PromoteCode.propTypes = {};
