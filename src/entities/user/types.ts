export interface ILoginParams {
    username: string;
    password: string;
}

export interface ILoginResponse {
    accessToken: string;
    refreshToken: string;
}

export interface ILoginErrorResponse {
    message?: string;
    error?: string;
}
