import { ComponentStory, ComponentMeta } from '@storybook/react';
import AirMilesThemeProvider from '@amsb-ui/theme';
import ListCard from './ListCard';
import imagenSnow from '../../../../assets/images/logo-snow.png';
import imagenLooker from '../../../../assets/images/logo-looker.png';
import { AirMilesMediaCardProps } from './types';

export default {
    title: 'Design System/Organism/ListCard',
    component: ListCard,
} as ComponentMeta<typeof ListCard>;

const cardMockData: AirMilesMediaCardProps[] = [
    {
        image: imagenSnow,
        imageAlt: 'Snowflake image',
        content:
            'Access all the information regarding your active offers, their performance and gain valuable insights into customer behavior.',
        link: 'https://www.google.com/',
        linkText: 'Go to the app',
        id: 1,
    },
    {
        image: imagenLooker,
        imageAlt: 'Looker image',
        content:
            'Let your data do the talking. Reveal the true power of your data and bring clarity.',
        link: 'https://www.google.com/',
        linkText: 'Go to the app',
        id: 2,
    },
];

const Template: ComponentStory<typeof ListCard> = () => (
    <AirMilesThemeProvider>
        <ListCard data={cardMockData} />
    </AirMilesThemeProvider>
);

export const Cards = Template.bind({});
