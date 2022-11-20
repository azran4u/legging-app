import { ComponentStory, ComponentMeta } from '@storybook/react';
import Search from '../components/SearchComponent';

export default {
  title: 'Search',
  component: Search,
} as ComponentMeta<typeof Search>;

export const Primary: ComponentStory<typeof Search> = () => <Search />;
