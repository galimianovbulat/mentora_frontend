import { useState } from 'react';

import styles from './Login.module.scss';
import LoginForm from './LoginForm';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = () => {

        if (username.trim() === '') {
            return;
        }

        if (password.trim() === '') {
            return;
        }

        console.log({
            username,
            password,
        });
    };

    return (
        <div className={styles.signIn}>
            <LoginForm
                username={username}
                password={password}
                onChangeUsername={setUsername}
                onChangePassword={setPassword}
                onSubmit={onSubmit}
            ></LoginForm>
        </div>
    )
}

export default Login;
