import Header from '~/components/Layouts/components/Header';
import Offcanvas from '~/components/Layouts/components/Offcanvas';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    return (
        <div>
            <Header></Header>
            <div class={cx('container')}>
                <Offcanvas />
                <div class="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
