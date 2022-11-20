import { ComponentStory, ComponentMeta } from '@storybook/react';
import Header from '../layout/Header';

export default {
  title: 'header',
  component: Header,
} as ComponentMeta<typeof Header>;

export const Primary: ComponentStory<typeof Header> = () => (
  <Header onDrawerToggle={() => {}} />
);
