import React from 'react'

import { Sidebar } from './Sidebar'
import { SidebarItem } from './SidebarItem'

export default {
  title: 'Base/Sidebar',
  component: Sidebar,
  argTypes: {
    closed: { control: 'boolean' }
  }
}

const Template = args => <Sidebar {...args} />

export const Default = Template.bind({})
Default.args = {
  closed: false
}

const TestTemplate = args => (
  <Sidebar {...args}>
    <SidebarItem icon={'home'} text={'Home'} />
    <SidebarItem icon={'inventory_2'} text={'Packages'} />
    <SidebarItem icon={'terminal'} text={'Console Management'} />
    <SidebarItem icon={'settings'} text={'Settings'} />
    <SidebarItem icon={'info'} text={'About'} />
  </Sidebar>
)

export const Tests = TestTemplate.bind({})
Tests.args = {
  closed: false
}
