import {
    useState,
} from 'react';
import type { FC } from 'react';

import {
    Eye,
    EyeOff,
} from 'lucide-react';
import classNames from 'classnames';

import StringInput from 'components/StringInput';

import styles from './PasswordInput.module.scss';
import type { IProps } from './types';

const PasswordInput: FC<IProps> = (props) => {
    const [isVisible, setIsVisible] = useState(false);

    const onToggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className={styles.container}>
            <StringInput
                {...props}
                type={isVisible ? 'text' : 'password'}
                className={classNames(
                    styles.input,
                    props.className,
                )}
            />

            <button
                type='button'
                className={styles.eyeButton}
                onClick={onToggleVisibility}
            >
                {isVisible
                    ? <EyeOff size={20}/>
                    : <Eye size={20}/>}
            </button>
        </div>
    );
};

export default PasswordInput;
