import { ComponentStory, ComponentMeta } from '@storybook/react';
import Legging from '../molecules/Legging200DenirComponent';

export default {
  title: 'Legging',
  component: Legging,
} as ComponentMeta<typeof Legging>;

export const Primary: ComponentStory<typeof Legging> = () => <Legging />;
