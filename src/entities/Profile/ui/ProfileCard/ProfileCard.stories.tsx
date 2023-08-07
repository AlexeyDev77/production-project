import type { Meta, StoryObj } from '@storybook/react';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import avatar from 'shared/assets/tests/storybook.jpg';
import { ProfileCard } from './ProfileCard';

const meta: Meta<typeof ProfileCard> = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Default: Story = {
    args: {
        data: {
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
};

export const withError: Story = {
    args: {
        error: 'error',
    },
};

export const Loading: Story = {
    args: {
        isLoading: true,
    },
};
