import { Story, Meta } from '@storybook/react';
import { Button5, Button5Props } from './button5';

export default {
  component: Button5,
  title: 'Button5',
} as Meta;

const Template: Story<Button5Props> = (args) => <Button5 {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
