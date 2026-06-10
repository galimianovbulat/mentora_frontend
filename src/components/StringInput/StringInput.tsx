import styles from './StringInput.module.scss';
import type { IProps } from './types';
import type { FC } from 'react';
import classNames from 'classnames';

const StringInput: FC<IProps> = (props) => {
    return (
        <input
            type={props.type}
            className={classNames(
                styles.input,
                props.className,
            )}
        />
    )
}

export default StringInput;
