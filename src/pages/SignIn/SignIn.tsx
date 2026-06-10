import SignInForm from './SignInForm';
import styles from './SignIn.module.scss';
import { useState } from 'react';

const SignIn = () => {
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
            <SignInForm
                username={username}
                password={password}
                onChangeUsername={setUsername}
                onChangePassword={setPassword}
                onSubmit={onSubmit}
            ></SignInForm>
        </div>
    )
}

export default SignIn;
