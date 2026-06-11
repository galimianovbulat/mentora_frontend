import type { ILoginResponse } from 'entities/user/types';

export const saveTokens = (tokens: ILoginResponse): void => {
    const { accessToken, refreshToken } = tokens;

    localStorage.setItem('accessToken', accessToken);

    localStorage.setItem('refreshToken', refreshToken);
};
