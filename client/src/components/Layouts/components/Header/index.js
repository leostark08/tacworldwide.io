import styles from "./Header.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
function Header() {
    return (
        <div className={cx("header")}>
            <div className={cx("header__image")}>TAC Worldwide</div>
            <div className={cx("header__link")}>Contact us</div>
        </div>
    );
}

export default Header;
