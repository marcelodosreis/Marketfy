import React, { useState, useEffect } from 'react';

import { HiOutlineSelector, HiCheck } from 'react-icons/hi';
import PropTypes from 'prop-types';

const Select = ({ label, options, onChange }) => {
    const [isSelectOpen, setIsSelectOpen] = useState(false);
    const [stateValue, setStateValue] = useState([]);

    const changeValue = (value) => {
        setIsSelectOpen(() => false);
        const valueWithChange = stateValue.map((state) => {
            if (state.value === value) {
                return { ...state, isSelect: true };
            }
            return { ...state, isSelect: false };
        });
        onChange(value);
        setStateValue(valueWithChange);
    };

    useEffect(() => {
        const optionsObject = options.map((option, index) => {
            if (index === 0) {
                return { ...option, isSelect: true };
            }
            return { ...option, isSelect: false };
        });
        setStateValue(optionsObject);
    }, []);

    return (
        <div>
            {label && (
                <label id="listbox-label" className="block text-sm font-medium text-gray-700">
                    {label}
                </label>
            )}
            <div className="mt-1 relative">
                <button
                    onClick={() => setIsSelectOpen((prevState) => !prevState)}
                    type="button"
                    aria-haspopup="listbox"
                    aria-expanded="true"
                    aria-labelledby="listbox-label"
                    className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-pointer focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <span className="flex items-center">
                        {stateValue.map(({ value, isSelect, label, image }) => (
                            <React.Fragment key={value}>
                                {isSelect && (
                                    <img
                                        src={image}
                                        alt=""
                                        className="flex-shrink-0 h-6 w-6 rounded-full"
                                    />
                                )}
                                {isSelect && <span className="ml-3 block truncate">{label}</span>}
                            </React.Fragment>
                        ))}
                    </span>
                    <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                        <HiOutlineSelector className="h-5 w-5 text-gray-400" />
                    </span>
                </button>
                <div
                    className={`${
                        isSelectOpen ? 'block' : 'hidden'
                    } absolute mt-1 w-full rounded-md bg-white shadow-lg z-10`}>
                    <ul
                        tabIndex={-1}
                        role="listbox"
                        aria-labelledby="listbox-label"
                        aria-activedescendant="listbox-item-3"
                        className="max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                        {stateValue.map(({ value, label, image, isSelect }) => (
                            <li
                                key={value}
                                onClick={() => changeValue(value)}
                                id="listbox-item-0"
                                className="w-full cursor-pointer hover:bg-purple-200 text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9">
                                <button className="w-full flex items-center">
                                    {image && (
                                        <img
                                            src={image}
                                            alt=""
                                            className="flex-shrink-0 h-6 w-6 rounded-full"
                                        />
                                    )}
                                    <span className="ml-3 block font-normal truncate">{label}</span>
                                </button>
                                {isSelect && (
                                    <span className="absolute inset-y-0 right-0 flex items-center pr-4">
                                        <HiCheck className="h-5 w-5" />
                                    </span>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Select;

Select.propTypes = {
    label: PropTypes.string,
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired
};

Select.defaultProps = {
    options: [
        {
            label: 'Default',
            value: 'default',
            image: 'https://picsum.photos/200'
        },
        { label: 'Option One', value: 'one', image: 'https://picsum.photos/200' },
        { label: 'Option Two', value: 'two', image: 'https://picsum.photos/200' }
    ]
};
