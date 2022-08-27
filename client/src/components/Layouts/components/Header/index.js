import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import RippleButton from '../RippleButton';

const cx = classNames.bind(styles);
function Header() {
    return (
        <div className={cx('header')}>
            <div className={cx('header__logo')}>TAC Worldwide</div>
            <Link to="#" className={cx('header__cta button--primary')}>
                Contact Us
            </Link>
            {/* <RippleButton onClick={(e) => console.log(e)}>Contact Us</RippleButton> */}
        </div>
    );
}

export default Header;
