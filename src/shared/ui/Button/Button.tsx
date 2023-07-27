import { classNames } from 'shared/lib/classNames/classNames';
import {
    ButtonHTMLAttributes, FC, memo, ReactNode,
} from 'react';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clear_inverted',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'background_inverted',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
    children?: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        theme,
        square,
        size = ButtonSize.M,
        ...otherProps
    } = props;

    return (
        <button
            type="button"
            className={classNames(
                cls.Button,
                { [cls.square]: square },
                [className, cls[theme], cls[size]],
            )}
            {...otherProps}
        >
            {children}
        </button>
    );
});
