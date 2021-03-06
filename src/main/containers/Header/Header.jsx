// Core
import React, { useState } from 'react';
import PropTypes from 'prop-types';
// Next
import Link from 'next/link';
import { useRouter } from 'next/router';

// Redux
import { useDispatch, useSelector } from 'react-redux';

// Library
import useAuth from 'library/utilities/hooks/useAuth/useAuth';
import { withLang } from 'library/utilities/providers/LanguageProvider/LanguageProvider';
import { NavbarListConstants } from 'library/common/constants/NavbarConstants';

// Components
import Badge from 'components/Badge/Badge';
import Select from 'components/Select/Select';

// Store
import { toggleCartSidebar } from 'store/modules/cart/action';

// Icons
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrFormSearch, GrLocation } from 'react-icons/gr';
import { HiOutlineShoppingCart } from 'react-icons/hi';

// Locales
import locales from './_locales/locales.json';

const langOptions = [
    { value: 'pt-BR', icon: '/images/svg/brIcon.svg' },
    { value: 'en-US', icon: '/images/svg/enIcon.svg' },
    { value: 'es-ES', icon: '/images/svg/esIcon.svg' }
];

const Header = ({ langProvider: { lang, updateLang } }) => {
    const { isOpen: cartIsOpen, hasNewProducts } = useSelector((state) => state.cart);
    const { user } = useAuth();
    const [headerIsOpen, setHeaderIsOpen] = useState(false);
    const dispatch = useDispatch();
    const router = useRouter();

    return (
        <header>
            <div className="container mx-auto px-6 py-3">
                <div className="flex items-center justify-between">
                    <div className="sm:w-full sm:mr-0 mr-4 text-gray-600 md:flex md:items-center">
                        <Select
                            options={langOptions}
                            selected={langOptions.find((c) => c.value === lang)}
                            onSelect={(value) => updateLang(value)}
                        />
                        <Badge icon={<GrLocation className="ml-14 h-5 w-5" />}>
                            <span className="mx-1 text-sm">NY</span>
                        </Badge>
                    </div>

                    <div className="w-full text-gray-700 md:text-center text-2xl font-semibold">
                        {locales[lang]['default-brand-name']}
                    </div>

                    <div className="flex items-center justify-end w-full">
                        <div className="justify-center hidden md:block">
                            <button
                                className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0"
                                onClick={() =>
                                    user?.token ? router.push('/profile') : router.push('/login')
                                }>
                                {user?.token ? user?.name?.split(' ')[0] : 'Login'}
                            </button>
                        </div>

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
                        <a
                            className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0 md:hidden"
                            onClick={() =>
                                user?.token ? router.push('/profile') : router.push('/login')
                            }>
                            {user?.token ? user?.name?.split(' ')[0] : 'Login'}
                        </a>
                        {NavbarListConstants.map(({ id, name, pathname }) => (
                            <Link key={id} href={pathname}>
                                <a
                                    className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0"
                                    href="/">
                                    {name}
                                </a>
                            </Link>
                        ))}
                    </div>
                </nav>
                <div className="relative mt-6 max-w-lg mx-auto">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                        <GrFormSearch className="h-5 w-5 text-gray-500" />
                    </span>

                    <input
                        className="w-full border rounded-md pl-10 pr-4 py-2 focus:border-blue-500 focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder={locales[lang]['search-input']}
                    />
                </div>
            </div>
        </header>
    );
};

export default withLang(Header);

Header.propTypes = {
    langProvider: PropTypes.shape({
        lang: PropTypes.string.isRequired,
        updateLang: PropTypes.func.isRequired
    }).isRequired
};
