import { Story, Meta } from '@storybook/react'
import Menu, { MenuProps } from '.'

export default {
  title: 'Menu',
  component: Menu,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<MenuProps> = (args) => <Menu {...args} />

export const Logged: Story<MenuProps> = (args) => <Menu {...args} />

Logged.args = {
  username: 'John Doe'
}
