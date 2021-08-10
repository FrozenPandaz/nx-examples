import { Story, Meta } from '@storybook/react';
import { Button4, Button4Props } from './button4';

export default {
  component: Button4,
  title: 'Button4',
} as Meta;

const Template: Story<Button4Props> = (args) => <Button4 {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
