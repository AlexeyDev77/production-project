import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import LoginForm from './LoginForm';

const meta: Meta<typeof LoginForm> = {
    title: 'features/LoginForm',
    component: LoginForm,
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Default: Story = {
    args: {},
    decorators: [StoreDecorator()],
};

export const withError: Story = {
    args: {},
    decorators: [StoreDecorator(
        {
            loginForm: {
                username: 'test',
                password: '123',
                error: 'Введён неверный логин или пароль',
            },
        },
    )],
};

export const Loading: Story = {
    args: {},
    decorators: [StoreDecorator(
        {
            loginForm: {
                isLoading: true,
            },
        },
    )],
};
