import type { Meta, StoryObj } from '@storybook/react';
import { Text, TextSize, TextTheme } from './Text';

const meta: Meta<typeof Text> = {
    title: 'shared/Text',
    component: Text,
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
    args: {
        title: 'Title test',
        text: 'Text test',
    },
};

export const onlyTitle: Story = {
    args: {
        title: 'Title test',
    },
};

export const onlyText: Story = {
    args: {
        text: 'Text test',
    },
};

export const Error: Story = {
    args: {
        title: 'Title test',
        text: 'Text test',
        theme: TextTheme.ERROR,
    },
};

export const SizeL: Story = {
    args: {
        title: 'Title test',
        text: 'Text test',
        size: TextSize.L,
    },
};
