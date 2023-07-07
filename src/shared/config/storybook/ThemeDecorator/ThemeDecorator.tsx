// import { Decorator } from '@storybook/react';
// import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';
//
// export const ThemeDecorator = (theme: Theme): Decorator => (Story) => (
//     <ThemeProvider initialTheme={theme}>
//         <div className={`app ${theme}`}>
//             <Story />
//         </div>
//     </ThemeProvider>
// );

import { Decorator, StoryContext } from '@storybook/react';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import './decorator.scss';
import { classNames } from 'shared/lib/classNames/classNames';

export const ThemeDecorator = (inverted?: boolean):Decorator => (Story, context: StoryContext) => {
    const { globals } = context;

    const mods = {
        inverted,
    };

    return (
        <ThemeProvider initialTheme={globals.theme}>
            <div className={classNames('viewport', mods, [])}>
                <Story />
            </div>
        </ThemeProvider>
    );
};
