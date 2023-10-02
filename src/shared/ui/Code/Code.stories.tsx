import type { Meta, StoryObj } from '@storybook/react';
import { Code } from './Code';

const meta: Meta<typeof Code> = {
    title: 'shared/Code',
    component: Code,
};

export default meta;
type Story = StoryObj<typeof Code>;

export const Default: Story = {
    args: {
        text: '<!DOCTYPE html>\n'
            + '<html>\n'
            + '  <body>\n'
            + '    <p id="hello"></p>\n'
            + '\n'
            + '    <script>\n'
            + '      document.getElementById("hello").innerHTML = "Hello, world!";\n'
            + '    </script>\n'
            + '  </body>\n'
            + '</html>;',
    },
};
