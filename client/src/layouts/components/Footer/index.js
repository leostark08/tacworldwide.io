import React, { useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';
import { FaFacebook, FaYoutube, FaTelegram, FaTwitter, FaMapMarkerAlt } from 'react-icons/fa';
import Aos from 'aos';
import 'aos/dist/aos.css';

const cx = classNames.bind(styles);

const locations = [
    '168 - 170 Xo Viet Nghe Tinh, Hai Chau, Danang City, VN.',
    'A-0508 Millennium, 132 Ben Van Don St. District 4. Ho Chi Minh.',
    '5th floor - 539 Vu Tong Phan street, Hanoi, Vietnam.',
];

function Footer() {
    useEffect(() => {
        Aos.init({
            duration: 1000,
        });
    });

    return (
        <div className={cx('footer')}>
            <div className={cx('footer__logo')}>
                <span>Everyday epic!</span>
            </div>
            <div className={cx('footer__menu')} data-aos="zoom-in">
                <ul className={cx('footer__menu--primary')}>
                    <li>
                        <Link to="/about">About us</Link>
                    </li>
                    <li>
                        <Link to="/service">Services</Link>
                    </li>
                    <li>
                        <Link to="/project">Our projects</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact us</Link>
                    </li>
                </ul>
                <ul className={cx('footer__menu--secondary')}>
                    <li>
                        <Link to="#">Blogs</Link>
                    </li>
                    <li>
                        <Link to="#">Recruitment</Link>
                    </li>
                </ul>
            </div>
            <div className={cx('footer__connect')} data-aos="zoom-in">
                <Link to="#" className={cx('connect--underline')}>
                    <span>+84 123 456 789</span>
                </Link>
                <Link to="#" className={cx('connect--underline')}>
                    <span>info@everydayepic.com</span>
                </Link>
                <ul className={cx('footer__connect__socials')}>
                    <li>
                        <Link to="#">
                            <FaFacebook />
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <FaYoutube />
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <FaTelegram />
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <FaTwitter />
                        </Link>
                    </li>
                </ul>
            </div>
            <ul className={cx('footer__location')} data-aos="zoom-in">
                {locations.map((location, i) => (
                    <li key={i}>
                        <span>
                            <FaMapMarkerAlt /> {location}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Footer;
