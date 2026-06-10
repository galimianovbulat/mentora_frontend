import type { InputHTMLAttributes } from 'react';

export interface IProps extends InputHTMLAttributes<HTMLInputElement>{
    value?: string;
    className?: string;
    type?: string;
}
