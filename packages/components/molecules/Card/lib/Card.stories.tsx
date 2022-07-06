import { ComponentStory, ComponentMeta } from '@storybook/react';
import AirMilesThemeProvider from '@amsb-ui/theme';
import Card from './Card';
import imagenSnow from '../../../../assets/images/logo-snow.png';
import imagenLooker from '../../../../assets/images/logo-looker.png';
import { AirMilesMediaCardProps } from './types';

export default {
    title: 'Design System/Molecules/Card',
    component: Card,
} as ComponentMeta<typeof Card>;

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

const Template: ComponentStory<typeof Card> = ({
    image,
    imageAlt,
    content,
    link,
    linkText,
    id,
}: AirMilesMediaCardProps) => (
    <AirMilesThemeProvider>
        <Card
            image={image}
            imageAlt={imageAlt}
            content={content}
            link={link}
            linkText={linkText}
            id={id}
        />
    </AirMilesThemeProvider>
);

const [data1, data2] = cardMockData;

export const Snowflake = Template.bind({});
Snowflake.args = data1;
export const Looker = Template.bind({});
Looker.args = data2;
