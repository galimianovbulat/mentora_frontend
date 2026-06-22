import { jwtDecode } from 'jwt-decode';

import type { UserRole } from './constants';

interface IUser {
    id: number;
    role: UserRole;
}

export function getCurrentUser(): IUser | null {
    const accessToken = localStorage.getItem(
        'accessToken',
    );

    if (accessToken === null) {
        return null;
    }

    return jwtDecode<IUser>(
        accessToken,
    )
};
