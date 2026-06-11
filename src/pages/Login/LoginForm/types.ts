export interface IProps {
    username: string;
    password: string;
    error: string;

    onChangeUsername(value: string): void;
    onChangePassword(value: string): void;
    onSubmit(): Promise<void>;
}
