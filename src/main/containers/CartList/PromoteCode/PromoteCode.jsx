// Core
import React from 'react';
import PropTypes from 'prop-types';

// Locales
import locales from './_locales/locales.json';

const PromoteCode = ({ lang }) => (
    <div className="mt-8">
        <form className="flex items-center justify-center">
            <input
                className="form-input w-48"
                type="text"
                placeholder={locales[lang]['promocode']}
            />
            <button className="ml-3 flex items-center px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                <span>{locales[lang]['apply']}</span>
            </button>
        </form>
    </div>
);

export default PromoteCode;

PromoteCode.propTypes = {
    lang: PropTypes.string.isRequired
};

PromoteCode.defaultProps = {
    lang: 'pt-BR'
};
