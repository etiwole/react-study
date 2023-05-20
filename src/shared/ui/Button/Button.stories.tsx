import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ThemeButton } from './Button';

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        children: 'Test',
    },
};

export const Clear: Story = {
    args: {
        children: 'Test',
        theme: ThemeButton.CLEAR,
    },
};

export const Outline: Story = {
    args: {
        children: 'Test',
        theme: ThemeButton.OUTLINE,
    },
};

export const OutlineDark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
    args: {
        children: 'Test',
        theme: ThemeButton.OUTLINE,
    },
};
