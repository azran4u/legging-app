import { ComponentStory, ComponentMeta } from '@storybook/react';
import { catalog } from '../model/catalog';
import Legging200DenirComponent from '../molecules/Legging200DenirComponent';

export default {
  title: 'Legging200DenirComponent',
  component: Legging200DenirComponent,
} as ComponentMeta<typeof Legging200DenirComponent>;

export const Primary: ComponentStory<typeof Legging200DenirComponent> = () => (
  <Legging200DenirComponent legging200denir={catalog.legging200denir} />
);
