import React from 'react'

import { Spinner } from './Spinner'

export default {
  title: 'Misc/Spinner',
  component: Spinner,
  argTypes: {
    color: {
      options: ['Default', 'Blue'],
      control: { type: 'select' }
    },
    size: {
      options: ['Small', 'Medium', 'Large'],
      control: { type: 'select' }
    }
  }
}

const Template = args => <Spinner {...args} />

export const Default = Template.bind({})
Default.args = {
  size: 'Medium',
  color: 'Default'
}

export const Blue = Template.bind({})
Blue.args = {
  size: 'Medium',
  color: 'Blue'
}
