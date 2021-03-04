/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

// import PropTypes from 'prop-types';

const Footer = () => {
    function toggleFooterSection(e) {
        const list = e.target.parentElement.parentElement.querySelector('article');
        if (list.classList.contains('h-0')) {
            list.classList.remove('h-0');
        } else {
            list.classList.add('h-0');
        }
    }

    return (
        <footer className="mt-16">
            <div className="border-t md:px-4 md:pt-10 md:pb-5">
                <div className="flex flex-wrap md:max-w-screen-lg mx-auto">
                    <section className="relative text-gray-700 font-light font-light border-b px-4 pb-4 md:py-3 w-full md:border-none md:w-1/4">
                        <div className="md:hidden">
                            <button
                                onClick={(event) => toggleFooterSection(event)}
                                className="uppercase text-xs font-bold tracking-wider text-blue-500 focus:outline-none border-t border-white py-4 w-full text-left"
                                type="button">
                                Lorem ipsum dolor sit amet consectetur adipiscing elit maecenas
                                mattis
                            </button>
                        </div>
                        <a
                            className="uppercase text-xs font-bold tracking-wider text-blue-500 hidden md:block"
                            href="#">
                            Lorem ipsum dolor sit amet consectetur adipiscing elit maecenas mattis
                        </a>
                        <article className="h-0 md:h-auto -mt-4 md:mt-0 overflow-hidden">
                            <ul className="my-5 text-sm tracking-wide">
                                <li className="my-3 tracking-wide">
                                    <a href="#">Fusce vel sem</a>
                                </li>
                                <li className="my-3 tracking-wide">
                                    <a href="#">Ut venenatis tellus</a>
                                </li>
                                <li className="my-3 tracking-wide">
                                    <a href="#">Vestibulum</a>
                                </li>
                                <li className="my-3 tracking-wide">
                                    <a href="#">Nunc at ipsum</a>
                                </li>
                            </ul>
                        </article>
                    </section>
                    <section className="relative text-gray-700 font-light font-light border-b px-4 pb-4 md:py-3 w-full md:border-none md:w-1/4">
                        <div className="md:hidden">
                            <button
                                onClick={(event) => toggleFooterSection(event)}
                                className="uppercase text-xs font-bold tracking-wider text-blue-500 focus:outline-none border-t border-white py-4 w-full text-left"
                                type="button">
                                Ut porta
                            </button>
                        </div>
                        <a
                            className="uppercase text-xs font-bold tracking-wider text-blue-500 hidden md:block"
                            href="#">
                            Ut porta
                        </a>
                        <article className="h-0 md:h-auto -mt-4 md:mt-0 overflow-hidden">
                            <ul className="my-5 text-sm tracking-wide">
                                <li className="my-3 tracking-wide">
                                    <a href="#">Pellentesque rhoncus</a>
                                </li>
                                <li className="my-3 tracking-wide">
                                    <a href="#">Aenean</a>
                                </li>
                                <li className="my-3 tracking-wide">
                                    <a href="#">Curabitur bibendum</a>
                                </li>
                                <li className="my-3 tracking-wide">
                                    <a href="#">Phasellus non mi</a>
                                </li>
                                <li className="my-3 tracking-wide">
                                    <a href="#">Duis accumsa</a>
                                </li>
                                <li className="my-3 tracking-wide">
                                    <a href="#">Curabitur nec enim</a>
                                </li>
                                <li className="my-3 tracking-wide">
                                    <a href="#">Fusce ut augue</a>
                                </li>
                            </ul>
                        </article>
                    </section>
                    <section className="relative text-gray-700 font-light font-light border-b px-4 pb-4 md:py-3 w-full md:border-none md:w-1/4">
                        <div className="md:hidden">
                            <button
                                onClick={(event) => toggleFooterSection(event)}
                                className="uppercase text-xs font-bold tracking-wider text-blue-500 focus:outline-none border-t border-white py-4 w-full text-left"
                                type="button">
                                Praesent elementum
                            </button>
                        </div>
                        <a
                            className="uppercase text-xs font-bold tracking-wider text-blue-500 hidden md:block"
                            href="#">
                            Praesent elementum
                        </a>
                        <article className="h-0 md:h-auto -mt-4 md:mt-0 overflow-hidden">
                            <ul className="my-5 text-sm tracking-wide">
                                <li className="my-3 tracking-wide">
                                    <a href="#">Mauris mattis nunc</a>
                                </li>
                                <li className="my-3 tracking-wide">
                                    <a href="#">Nunc viverra risus</a>
                                </li>
                                <li className="my-3 tracking-wide">
                                    <a href="#">Etiam a libero</a>
                                </li>
                            </ul>
                        </article>
                    </section>
                    <section className="relative text-gray-700 font-light font-light border-b px-4 pb-4 md:py-3 w-full md:border-none md:w-1/4">
                        <div className="md:hidden">
                            <button
                                onClick={(event) => toggleFooterSection(event)}
                                className="uppercase text-xs font-bold tracking-wider text-blue-500 focus:outline-none border-t border-white py-4 w-full text-left"
                                type="button">
                                Aenean gravida orci in sem varius
                            </button>
                        </div>
                        <a
                            className="uppercase text-xs font-bold tracking-wider text-blue-500 hidden md:block"
                            href="#">
                            Aenean gravida orci in sem varius
                        </a>
                        <article className="h-0 md:h-auto -mt-4 md:mt-0 overflow-hidden">
                            <ul className="my-5 text-sm tracking-wide">
                                <li className="my-3 tracking-wide">
                                    <a href="#">Cras id ipsum</a>
                                </li>
                            </ul>
                        </article>
                    </section>
                    <section className="relative text-gray-700 font-light font-light border-b px-4 pb-4 md:py-3 w-full md:border-none md:w-1/4">
                        <div className="md:hidden">
                            <button
                                onClick={(event) => toggleFooterSection(event)}
                                className="uppercase text-xs font-bold tracking-wider text-blue-500 focus:outline-none border-t border-white py-4 w-full text-left"
                                type="button">
                                Donec a lorem
                            </button>
                        </div>
                        <a
                            className="uppercase text-xs font-bold tracking-wider text-blue-500 hidden md:block"
                            href="#">
                            Donec a lorem
                        </a>
                        <article className="h-0 md:h-auto -mt-4 md:mt-0 overflow-hidden">
                            <ul className="my-5 text-sm tracking-wide">
                                <li className="my-3 tracking-wide">
                                    <a href="#">Sed a diam</a>
                                </li>
                                <li className="my-3 tracking-wide">
                                    <a href="#">Nullam luctus felis</a>
                                </li>
                                <li className="my-3 tracking-wide">
                                    <a href="#">Sed euismod</a>
                                </li>
                            </ul>
                        </article>
                    </section>
                    <section className="relative text-gray-700 font-light font-light border-b px-4 pb-4 md:py-3 w-full md:border-none md:w-1/4">
                        <div className="md:hidden">
                            <button
                                onClick={(event) => toggleFooterSection(event)}
                                className="uppercase text-xs font-bold tracking-wider text-blue-500 focus:outline-none border-t border-white py-4 w-full text-left"
                                type="button">
                                Integer interdum
                            </button>
                        </div>
                        <a
                            className="uppercase text-xs font-bold tracking-wider text-blue-500 hidden md:block"
                            href="#">
                            Integer interdum
                        </a>
                        <article className="h-0 md:h-auto -mt-4 md:mt-0 overflow-hidden">
                            <ul className="my-5 text-sm tracking-wide">
                                <li className="my-3 tracking-wide">
                                    <a href="#">Dignissim gravida</a>
                                </li>
                                <li className="my-3 tracking-wide">
                                    <a href="#">Eu mollis elit</a>
                                </li>
                                <li className="my-3 tracking-wide">
                                    <a href="#">Hendrerit purus id</a>
                                </li>
                                <li className="my-3 tracking-wide">
                                    <a href="#">Ut luctus dui tincidunt</a>
                                </li>
                                <li className="my-3 tracking-wide">
                                    <a href="#">Pellentesque at ligula</a>
                                </li>
                            </ul>
                        </article>
                    </section>
                    <section className="relative text-gray-700 font-light font-light border-b px-4 pb-4 md:py-3 w-full md:border-none md:w-1/4">
                        <div className="md:hidden">
                            <button
                                onClick={(event) => toggleFooterSection(event)}
                                className="uppercase text-xs font-bold tracking-wider text-blue-500 focus:outline-none border-t border-white py-4 w-full text-left"
                                type="button">
                                Quisque
                            </button>
                        </div>
                        <a
                            className="uppercase text-xs font-bold tracking-wider text-blue-500 hidden md:block"
                            href="#">
                            Quisque
                        </a>
                        <article className="h-0 md:h-auto -mt-4 md:mt-0 overflow-hidden">
                            <ul className="my-5 text-sm tracking-wide">
                                <li className="my-3 tracking-wide">
                                    <a href="#">Finibus nulla eget</a>
                                </li>
                                <li className="my-3 tracking-wide">
                                    <a href="#">Pellentesque</a>
                                </li>
                                <li className="my-3 tracking-wide">
                                    <a href="#">Duis efficitur</a>
                                </li>
                                <li className="my-3 tracking-wide">
                                    <a href="#">Cras at lacus</a>
                                </li>
                            </ul>
                        </article>
                    </section>
                </div>
            </div>
            <div className="max-w-screen-lg mx-auto border-none px-4">
                <section className="flex flex-col md:flex-row md:justify-between md:border-solid md:border-t text-gray-700 font-light text-sm pt-4 pb-6 md:pt-5 md:pb-6 w-full">
                    <div>
                        <p className="leading-8 tracking-wide">
                            &copy; Lorem Ipsum Co., 123 Lorem Street, New York, NY
                        </p>
                    </div>
                    <div>
                        <p className="leading-8 tracking-wide">Privacy Policy</p>
                    </div>
                </section>
            </div>
        </footer>
    );
};
export default Footer;

Footer.propTypes = {};
