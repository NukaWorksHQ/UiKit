import React from 'react'

import { Link } from './Link'

export default {
  title: 'Base/Link',
  component: Link,
  argTypes: {
    href: { control: 'text' },
    disabled: { control: 'boolean' }
  }
}

const Template = args => <Link {...args}>Hello World !</Link>

export const Default = Template.bind({})
Default.args = {
  href: 'https://nuka.works/',
  disabled: false
}
