import type { Preview } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../src/app/providers/ThemeProvider';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';

const preview: Preview = {
    // parameters: {
    //     actions: { argTypesRegex: '^on[A-Z].*' },
    //     controls: {
    //         matchers: {
    //             color: /(background|color)$/i,
    //             date: /Date$/,
    //         },
    //     },
    // },
    decorators: [
        StyleDecorator,
        ThemeDecorator(),
        RouterDecorator,
    ],
    globalTypes: {
        theme: {
            description: 'Global theme for components',
            defaultValue: 'light',
            toolbar: {
                title: 'Theme',
                icon: 'circlehollow',
                items: ['light', 'dark'],
                dynamicTitle: true,
            },
        },
    },
    parameters: {
        backgrounds: {
            default: 'light',
            values: [
                { name: 'light', value: 'rgb(199 199 199)' },
                { name: 'dark', value: 'rgb(44 44 44)' },
            ],
        },
    },
};

export default preview;
