import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { Link, useLocation } from 'react-router-dom';
import React, { useCallback, useEffect, useState } from 'react';
import 'aos/dist/aos.css';
import { FaFacebook, FaYoutube, FaTelegram, FaTwitter, FaMapMarkerAlt } from 'react-icons/fa';

const cx = classNames.bind(styles);

function Header(props) {
    const [isTop, toggleTop] = useState(true);
    const [y, setY] = useState(window.scrollY);
    const [isScrollUp, toggleScroll] = useState(true);
    const [toggle, changeToggle] = useState(false);

    const location = useLocation();

    useEffect(() => {
        changeToggle(false);
    }, [location]);

    const isScroll2Top = useCallback(
        (e) => {
            var is = y > window.scrollY;
            setY(window.scrollY);
            return is;
        },
        [y],
    );

    useEffect(() => {
        const handleScroll = (event) => {
            toggleTop(window.scrollY === 0);
            setY(window.screenY);
            toggleScroll(isScroll2Top());
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isScroll2Top]);

    const contactButton = props.disableContact ? (
        ''
    ) : (
        <Link to="/contact" className={cx('header__bar__cta', 'button--primary')}>
            <span>Contact Us</span>
        </Link>
    );

    console.log(contactButton);

    return (
        <div className={cx('header', toggle ? 'header--active' : '')}>
            <div
                className={cx(
                    'header__bar',
                    isTop ? 'header__bar--transparent' : '',
                    isScrollUp ? 'header__bar--down' : '',
                )}
            >
                <label
                    htmlFor="header-checkbox"
                    className={cx('header__bar__toggle')}
                    onClick={(e) => changeToggle(!toggle)}
                >
                    <div className={cx('header__bar__toggle__line')}></div>
                </label>
                <div className={cx('header__bar__logo')}>
                    <Link to="/">
                        <span>Everyday epic!</span>
                    </Link>
                </div>
                {contactButton}
                {/* <RippleButton onClick={(e) => console.log(e)}>Contact Us</RippleButton> */}
            </div>
            <div className={cx('header__dialog')}>
                <div className={cx('header__dialog__menu')}>
                    <ul className={cx('header__dialog__menu--primary')}>
                        <li>
                            <Link className={cx('header__dialog__menu--primary__link')} to="/about">
                                <span>About Us</span>
                            </Link>
                        </li>
                        <li>
                            <Link className={cx('header__dialog__menu--primary__link')} to="/service">
                                <span>Services</span>
                            </Link>
                        </li>
                        <li>
                            <Link className={cx('header__dialog__menu--primary__link')} to="/project">
                                <span>Our projects</span>
                            </Link>
                        </li>
                        <li>
                            <Link className={cx('header__dialog__menu--primary__link')} to="/contact">
                                <span>Contact Us</span>
                            </Link>
                        </li>
                    </ul>

                    <div className={cx('header__dialog__menu--secondary')}>
                        <ul className={cx('header__dialog__menu--secondary__menu')}>
                            <li>
                                <Link className={cx('header__dialog__menu--secondary__menu__link')} to="#">
                                    <span>Blogs</span>
                                </Link>
                            </li>
                            <li>
                                <Link className={cx('header__dialog__menu--secondary__menu__link')} to="#">
                                    <span>Recruitment</span>
                                </Link>
                            </li>
                        </ul>

                        <ul className={cx('header__dialog__menu--secondary__social')}>
                            <li>
                                <Link className={cx('header__dialog__menu--secondary__social__link')} to="#">
                                    <FaFacebook />
                                </Link>
                            </li>
                            <li>
                                <Link className={cx('header__dialog__menu--secondary__social__link')} to="#">
                                    <FaYoutube />
                                </Link>
                            </li>
                            <li>
                                <Link className={cx('header__dialog__menu--secondary__social__link')} to="#">
                                    <FaTelegram />
                                </Link>
                            </li>
                            <li>
                                <Link className={cx('header__dialog__menu--secondary__social__link')} to="#">
                                    <FaTwitter />
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className={cx('header__dialog__menu--contact')}>
                        <ul className={cx('header__dialog__menu--contact__location')}>
                            <label>Offices</label>
                            <li>
                                <p>
                                    <FaMapMarkerAlt /> 5th Floor, 539 Vu Tong Phan Street, Thanh Xuan District, Ha Noi.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <FaMapMarkerAlt /> A-0508, 5th Floor, Millennium, 132 Ben Van Don Street, District
                                    4. Ho Chi Minh.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <FaMapMarkerAlt /> 4th Floor, 168 - 170 Xo Viet Nghe Tinh Street, Hai Chau District,
                                    Da Nang.
                                </p>
                            </li>
                        </ul>

                        <ul className={cx('header__dialog__menu--contact__office')}>
                            <Link to="#" className={cx('header__dialog__menu--contact__office__link')}>
                                <p>info@everydayepic.com</p>
                            </Link>
                            <Link to="#" className={cx('header__dialog__menu--contact__office__link')}>
                                <p>+84 123 456 789</p>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
