import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import React, { useCallback, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaFacebook, FaYoutube, FaTelegram, FaTwitter, FaMapMarkerAlt } from 'react-icons/fa';

const cx = classNames.bind(styles);

const AOS_DURATION = 2000;
function Header() {
    const [isTop, toggleTop] = useState(true);
    const [y, setY] = useState(window.scrollY);
    const [isScrollUp, toggleScroll] = useState(true);

    useEffect(() => {
        AOS.init({
            duration: AOS_DURATION,
        });
        AOS.refresh();
    }, []);

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

    const [toggle, changeToggle] = useState(false);
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
                <Link to="#" className={cx('header__bar__cta button--primary')}>
                    <span>Contact Us</span>
                </Link>
                {/* <RippleButton onClick={(e) => console.log(e)}>Contact Us</RippleButton> */}
            </div>
            <div className={cx('header__dialog')}>
                <div className={cx('header__dialog__menu')}>
                    <ul className={cx('header__dialog__menu--primary')} data-aos="fade-right">
                        <li>
                            <Link className={cx('header__dialog__menu--primary__link')} to="#">
                                <span>About Us</span>
                            </Link>
                        </li>
                        <li>
                            <Link className={cx('header__dialog__menu--primary__link')} to="#">
                                <span>Services</span>
                            </Link>
                        </li>
                        <li>
                            <Link className={cx('header__dialog__menu--primary__link')} to="#">
                                <span>Our works</span>
                            </Link>
                        </li>
                        <li>
                            <Link className={cx('header__dialog__menu--primary__link')} to="#">
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
                            <label>TAC Worldwide</label>
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
                                <p>tacworldwide@gmail.com </p>
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