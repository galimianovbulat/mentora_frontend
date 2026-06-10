import styles from './SignInForm.module.scss';
import StringInput from 'components/StringInput';
import mentoraLogo from 'assets/mentora-logo.png';
import PasswordInput from './PasswordInput';
import type { FC } from 'react';
import { IProps } from './types';

const SignInForm: FC<IProps> = (props) => {
    return (
        <form className={styles.form}>
            <div className={styles.brand}>
                <img
                    src={mentoraLogo}
                    alt='Mentora'
                    className={styles.logo}
                />

                <h1 className={styles.title}>
                    Mentora
                </h1>
            </div>
            <div
                className={styles.div}
            > 
                Имя пользователя
                <StringInput
                    className={styles.input}
                />
            </div>

            <div
                className={styles.div}
            >
                Пароль
                <PasswordInput
                    className={styles.input}
                />
            </div>

            <button
                className={styles.button}
            >
                Войти
            </button>
        </form>
    )
}

export default SignInForm;
