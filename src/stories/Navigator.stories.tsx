import { ComponentStory, ComponentMeta } from '@storybook/react';
import Navigator from '../layout/Navigator';

export default {
  title: 'Navigator',
  component: Navigator,
} as ComponentMeta<typeof Navigator>;

export const Primary: ComponentStory<typeof Navigator> = () => <Navigator />;
