import { Story, Meta } from '@storybook/react';
import { SharedButton, SharedButtonProps } from './shared-button';

export default {
  component: SharedButton,
  title: 'SharedButton',
} as Meta;

const Template: Story<SharedButtonProps> = (args) => <SharedButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
