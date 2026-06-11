export interface IProps { 
    username: string;
    password: string;

    onChangeUsername(value: string): void;
    onChangePassword(value: string): void;
    onSubmit(): void;
}
