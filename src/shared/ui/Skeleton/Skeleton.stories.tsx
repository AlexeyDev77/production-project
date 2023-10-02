import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from './Skeleton';

const meta: Meta<typeof Skeleton> = {
    title: 'shared/Skeleton',
    component: Skeleton,
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
    args: {
        height: 200,
        width: '100%',
    },
};

export const Circle: Story = {
    args: {
        border: '50%',
        height: 100,
        width: 100,
    },
};
