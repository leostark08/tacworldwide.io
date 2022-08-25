import React, { useState } from 'react';
import styles from './Offcanvas.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FaFacebook, FaYoutube, FaTelegram, FaTwitter, FaMapMarkerAlt } from 'react-icons/fa';

const cx = classNames.bind(styles);

function Offcanvas() {
    const [toggle, changeToggle] = useState(false);

    return (
        <div className={cx('offcanvas', toggle ? 'offcanvas--active' : '')}>
            <input
                className={cx('offcanvas__checkbox')}
                type="checkbox"
                id="toggle-checkbox"
                name=""
                onChange={() => changeToggle(!toggle)}
            />
            <label for="toggle-checkbox" className={cx('offcanvas__toggle')}>
                <div className={cx('offcanvas__toggle__line')}></div>
            </label>
            <label for="toggle-checkbox" className={cx('offcanvas__overlay')}></label>
            <div className={cx('offcanvas__dialog')}>
                <div className={cx('offcanvas__dialog__menu')}>
                    <ul className={cx('offcanvas__dialog__menu--primary')}>
                        <li>
                            <Link className={cx('offcanvas__dialog__menu--primary__link')} to="#">
                                <span>About Us</span>
                            </Link>
                        </li>
                        <li>
                            <Link className={cx('offcanvas__dialog__menu--primary__link')} to="#">
                                <span>Services</span>
                            </Link>
                        </li>
                        <li>
                            <Link className={cx('offcanvas__dialog__menu--primary__link')} to="#">
                                <span>Our works</span>
                            </Link>
                        </li>
                        <li>
                            <Link className={cx('offcanvas__dialog__menu--primary__link')} to="#">
                                <span>Contact Us</span>
                            </Link>
                        </li>
                    </ul>

                    <div className={cx('offcanvas__dialog__menu--secondary')}>
                        <ul className={cx('offcanvas__dialog__menu--secondary__menu')}>
                            <li>
                                <Link className={cx('offcanvas__dialog__menu--secondary__menu__link')} to="#">
                                    <span>Blogs</span>
                                </Link>
                            </li>
                            <li>
                                <Link className={cx('offcanvas__dialog__menu--secondary__menu__link')} to="#">
                                    <span>Recruitment</span>
                                </Link>
                            </li>
                        </ul>

                        <ul className={cx('offcanvas__dialog__menu--secondary__social')}>
                            <li>
                                <Link className={cx('offcanvas__dialog__menu--secondary__social__link')} to="#">
                                    <FaFacebook />
                                </Link>
                            </li>
                            <li>
                                <Link className={cx('offcanvas__dialog__menu--secondary__social__link')} to="#">
                                    <FaYoutube />
                                </Link>
                            </li>
                            <li>
                                <Link className={cx('offcanvas__dialog__menu--secondary__social__link')} to="#">
                                    <FaTelegram />
                                </Link>
                            </li>
                            <li>
                                <Link className={cx('offcanvas__dialog__menu--secondary__social__link')} to="#">
                                    <FaTwitter />
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className={cx('offcanvas__dialog__menu--contact')}>
                        <ul className={cx('offcanvas__dialog__menu--contact__location')}>
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

                        <ul className={cx('offcanvas__dialog__menu--contact__office')}>
                            <Link to="#" className={cx('offcanvas__dialog__menu--contact__office__link')}>
                                <p>tacworldwide@gmail.com </p>
                            </Link>
                            <Link to="#" className={cx('offcanvas__dialog__menu--contact__office__link')}>
                                <p>+84 123 456 789</p>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Offcanvas;
