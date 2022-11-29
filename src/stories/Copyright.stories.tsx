import { ComponentStory, ComponentMeta } from '@storybook/react';
import Copyright from '../components/CopyrightComponent';

export default {
  title: 'Copyright',
  component: Copyright,
} as ComponentMeta<typeof Copyright>;

export const Primary: ComponentStory<typeof Copyright> = () => <Copyright />;
