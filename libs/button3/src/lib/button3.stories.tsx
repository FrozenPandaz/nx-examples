import { Story, Meta } from '@storybook/react';
import { Button3, Button3Props } from './button3';

export default {
  component: Button3,
  title: 'Button3',
} as Meta;

const Template: Story<Button3Props> = (args) => <Button3 {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
