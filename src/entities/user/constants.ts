export const USER_ROLE = {
    ADMIN: 'ADMIN',
    TEACHER: 'TEACHER',
    STUDENT: 'STUDENT',
} as const;

export type UserRole = typeof USER_ROLE[keyof typeof USER_ROLE];
