import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Navbar } from './Navbar';

const meta: Meta<typeof Navbar> = {
    title: 'widgets/Navbar',
    component: Navbar,
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
    args: {},
    decorators: [StoreDecorator()],
};

export const AuthData: Story = {
    args: {},
    decorators: [StoreDecorator({
        user: { authData: {} },
    })],
};
