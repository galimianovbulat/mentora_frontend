import classNames from 'classnames';
import type { FC } from 'react';

import styles from './StringInput.module.scss';
import type { IProps } from './types';

const StringInput: FC<IProps> = (props) => {
    return (
        <input {...props} type={props.type} className={classNames(styles.input, props.className)} />
    );
};

export default StringInput;
