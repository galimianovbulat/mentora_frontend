import config from 'config';

import type { ILoginErrorResponse, ILoginParams, ILoginResponse, IPayload } from './types';

export async function login(body: ILoginParams): Promise<ILoginResponse> {
    const response = await fetch(`${config.URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: body.username,
            password: body.password,
        }),
    });

    if (!response.ok) {
        const error = (await response.json()) as ILoginErrorResponse;

        throw new Error(error.message ?? error.error ?? 'Ошибка авторизации');
    }

    const data = (await response.json()) as ILoginResponse;

    return data;
}
