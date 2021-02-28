import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Link from 'next/link';

import { toggleCartSidebar } from '../../../../main/store/modules/cart/action';

import { GrLocation, GrFormSearch } from 'react-icons/gr';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { GiHamburgerMenu } from 'react-icons/gi';

const Header = () => {
    const { isOpen: cartIsOpen, hasNewProducts } = useSelector((state) => state.cart);
    const [headerIsOpen, setHeaderIsOpen] = useState(false);
    const dispatch = useDispatch();

    return (
        <header>
            <div className="container mx-auto px-6 py-3">
                <div className="flex items-center justify-between">
                    <div className="hidden w-full text-gray-600 md:flex md:items-center">
                        <GrLocation className="h-5 w-5" />
                        <span className="mx-1 text-sm">NY</span>
                    </div>
                    <div className="w-full text-gray-700 md:text-center text-2xl font-semibold">
                        Brand
                    </div>
                    <div className="flex items-center justify-end w-full">
                        <div className="flex justify-center md:block">
                            <button
                                onClick={() => dispatch(toggleCartSidebar(!cartIsOpen))}
                                className="relative text-gray-700 hover:text-gray-600">
                                <HiOutlineShoppingCart className="h-5 w-5" />

                                {hasNewProducts && (
                                    <span className="absolute top-0 left-0 rounded-full bg-indigo-500 text-white p-1 text-xs"></span>
                                )}
                            </button>
                        </div>

                        <div className="flex sm:hidden">
                            <button
                                onClick={() => setHeaderIsOpen((prevState) => !prevState)}
                                type="button"
                                className="text-gray-600 hover:text-gray-500 focus:outline-none focus:text-gray-500"
                                aria-label="toggle menu">
                                <GiHamburgerMenu className="h-6 w-6 fill-current" />
                            </button>
                        </div>
                    </div>
                </div>
                <nav
                    className={`${
                        headerIsOpen ? '' : 'hidden'
                    } sm:flex sm:justify-center sm:items-center mt-4`}>
                    <div className="flex flex-col sm:flex-row">
                        <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="/">
                            Home
                        </a>
                        <a
                            className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0"
                            href="/shop">
                            Shop
                        </a>
                        <a
                            className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0"
                            href="/categories">
                            Categories
                        </a>
                        <a
                            className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0"
                            href="/contact">
                            Contact
                        </a>
                        <Link href="/about">
                            <a
                                className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0"
                                href="/about">
                                About
                            </a>
                        </Link>
                    </div>
                </nav>
                <div className="relative mt-6 max-w-lg mx-auto">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                        <GrFormSearch className="h-5 w-5 text-gray-500" />
                    </span>

                    <input
                        className="w-full border rounded-md pl-10 pr-4 py-2 focus:border-blue-500 focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Search"
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;
