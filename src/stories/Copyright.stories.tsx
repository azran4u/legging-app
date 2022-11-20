import { ComponentStory, ComponentMeta } from '@storybook/react';
import Copyright from '../components/Copyright';

export default {
  title: 'Copyright',
  component: Copyright,
} as ComponentMeta<typeof Copyright>;

export const Primary: ComponentStory<typeof Copyright> = () => <Copyright />;
