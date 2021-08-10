import { Story, Meta } from '@storybook/react';
import { Button2, Button2Props } from './button2';

export default {
  component: Button2,
  title: 'Button2',
} as Meta;

const Template: Story<Button2Props> = (args) => <Button2 {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
