import Grid from '@amsb-ui/grid';
import Card from '@amsb-ui/card';
import { AirMilesMediaCardProps } from './types';

const ListCard = ({ data }: any) => {
    const sizeValue = data.length <= 2 ? 6 : 4;

    return (
        <Grid container justifyContent="space-between" spacing={4.5}>
            {data.map((card: AirMilesMediaCardProps) => (
                <Grid item xs={12} sm={sizeValue} key={card.id}>
                    <Card
                        image={card.image}
                        imageAlt={card.imageAlt}
                        content={card.content}
                        link={card.link}
                        linkText={card.linkText}
                        id={card.id}
                    />
                </Grid>
            ))}
        </Grid>
    );
};

export default ListCard;
