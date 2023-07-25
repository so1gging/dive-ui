import { Meta, StoryObj } from '@storybook/react'
import Divider from './Divider.tsx'

const meta: Meta<typeof Divider> = {
  title: 'Components/Divider',
  component: Divider,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Divider>

export const Right: Story = {
  args: {
    theme: 'right',
    width: '500px',
  },
}

export const Dark: Story = {
  args: {
    theme: 'dark',
    width: '500px',
  },
}
