import { getMe,login } from 'entities/user/fetches';
import { saveTokens } from 'helpers/tokens';
import { useState } from 'react';

import styles from './Login.module.scss';
import LoginForm from './LoginForm';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const onSubmit = async () => {
        setError('');

        if (username.trim() === '') {
            return;
        }

        if (password.trim() === '') {
            return;
        }

        try {
            const tokens = await login({ username, password });
            saveTokens(tokens);
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);

                return;
            }

            setError('Неизвестная ошибка');
        }

        try {
            await getMe();
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);

                return;
            }

            setError('Неизвестная ошибка');
        }
    };

    return (
        <div className={styles.signIn}>
            <LoginForm
                username={username}
                password={password}
                error={error}
                onChangeUsername={setUsername}
                onChangePassword={setPassword}
                onSubmit={onSubmit}
            ></LoginForm>
        </div>
    );
};

export default Login;
