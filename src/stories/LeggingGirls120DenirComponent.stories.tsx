import { ComponentStory, ComponentMeta } from '@storybook/react';
import { catalog } from '../model/catalog';
import LeggingGirls120DenirComponent from '../molecules/LeggingGirls120DenirComponent';

export default {
  title: 'LeggingGirls120DenirComponent',
  component: LeggingGirls120DenirComponent,
} as ComponentMeta<typeof LeggingGirls120DenirComponent>;

export const Primary: ComponentStory<typeof LeggingGirls120DenirComponent> =
  () => (
    <LeggingGirls120DenirComponent
      leggingGirls120denir={catalog.leggingGirls120Denir}
    />
  );
