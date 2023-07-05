import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
    title: 'shared/Modal',
    component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
    args: {
        isOpen: true,
        children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n'
            + 'A adipisci aperiam assumenda debitis delectus, distinctio ea eum labore,\n'
            + 'praesentium quos recusandae, sed similique voluptate!\n'
            + 'Adipisci, aut autem blanditiis culpa deserunt dolorem ea earum esse eveniet,',
    },
};

export const Dark: Story = {
    args: {
        isOpen: true,
        children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n'
            + 'A adipisci aperiam assumenda debitis delectus, distinctio ea eum labore,\n'
            + 'praesentium quos recusandae, sed similique voluptate!\n'
            + 'Adipisci, aut autem blanditiis culpa deserunt dolorem ea earum esse eveniet,',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
