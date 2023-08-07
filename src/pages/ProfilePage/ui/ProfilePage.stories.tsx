import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import avatar from 'shared/assets/tests/storybook.jpg';
import ProfilePage from './ProfilePage';

const meta: Meta<typeof ProfilePage> = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const Default: Story = {
    args: {},
    decorators: [StoreDecorator({
        profile: {
            form: {
                first: 'Алексей',
                lastname: 'Аброскин',
                age: 24,
                currency: Currency.RUB,
                country: Country.Russia,
                city: 'Moscow',
                username: 'admin',
                avatar,
            },
        },
    })],
};
