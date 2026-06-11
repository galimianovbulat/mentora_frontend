import mentoraLogo from 'assets/mentora-logo.png';
import StringInput from 'components/StringInput';
import type { FC } from 'react';

import { AUTH_ERROR_MESSAGES } from './constants';
import styles from './LoginForm.module.scss';
import PasswordInput from './PasswordInput';
import type { IProps } from './types';

const LoginForm: FC<IProps> = (props) => {
    return (
        <form
            className={styles.form}
            onSubmit={(event) => {
                event.preventDefault();
                void props.onSubmit();
            }}
        >
            <div className={styles.brand}>
                <img src={mentoraLogo} alt="Mentora" className={styles.logo} />

                <h1 className={styles.title}>Mentora</h1>
            </div>
            <div className={styles.div}>
                Имя пользователя
                <StringInput
                    value={props.username}
                    onChange={(event) => {
                        props.onChangeUsername(event.target.value);
                    }}
                    className={styles.input}
                />
            </div>
            <div className={styles.div}>
                Пароль
                <PasswordInput
                    value={props.password}
                    className={styles.input}
                    onChange={(event) => {
                        props.onChangePassword(event.target.value);
                    }}
                />
                {props.error !== '' && (
                    <div className={styles.error}>
                        {AUTH_ERROR_MESSAGES[props.error] ?? 'Ошибка авторизации'}
                    </div>
                )}
            </div>
            <button type="submit" className={styles.button}>
                Войти
            </button>
        </form>
    );
};

export default LoginForm;
