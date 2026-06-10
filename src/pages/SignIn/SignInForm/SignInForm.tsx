import styles from './SignInForm.module.scss';
import StringInput from 'components/StringInput';
import mentoraLogo from 'assets/mentora-logo.png';
import PasswordInput from './PasswordInput';
import type { FC } from 'react';
import type { IProps } from './types';

const SignInForm: FC<IProps> = (props) => {
    return (
        <form 
            className={styles.form}
            onSubmit={(event) => {
                event.preventDefault();
                props.onSubmit();
            }}
        >
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
                    value={props.username}
                    onChange={(event) => {
                        props.onChangeUsername(event.target.value);
                    }}
                    className={styles.input}
                />
            </div>

            <div
                className={styles.div}
            >
                Пароль
                <PasswordInput
                    value={props.password}
                    className={styles.input}
                    onChange={(event) => {
                        props.onChangePassword(event.target.value);
                    }}
                />
            </div>

            <button
                type='submit'
                className={styles.button}
            >
                Войти
            </button>
        </form>
    )
}

export default SignInForm;
