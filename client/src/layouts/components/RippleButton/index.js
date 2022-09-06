import styles from './RippleButton.module.scss';
import classNames from 'classnames/bind';
import React, { useState, useEffect } from 'react';

const cx = classNames.bind(styles);

function RippleButton({ children, onClick }) {
    const [coords, setCoords] = useState({ x: -1, y: -1 });
    const [isRippling, setIsRippling] = useState(false);

    useEffect(() => {
        if (coords.x !== -1 && coords.y !== -1) {
            setIsRippling(true);
            setTimeout(() => setIsRippling(false), 1000);
        } else setIsRippling(false);
    }, [coords]);

    useEffect(() => {
        if (!isRippling) setCoords({ x: -1, y: -1 });
    }, [isRippling]);

    return (
        <button
            className={cx('ripple-button')}
            onClick={(e) => {
                setCoords({ x: e.clientX - e.target.offsetLeft, y: e.clientY - e.target.offsetTop });
                onClick && onClick(e);
            }}
        >
            {isRippling ? (
                <span
                    className={cx('ripple-button__ripple')}
                    style={{
                        left: coords.x,
                        top: coords.y,
                    }}
                />
            ) : (
                ''
            )}
            <span className={cx('ripple-button__children')}>{children}</span>
        </button>
    );
}

export default RippleButton;
