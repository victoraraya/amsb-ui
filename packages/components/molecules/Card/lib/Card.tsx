import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, Divider, Link } from '@mui/material';
import { styled } from '@mui/material/styles';
import Typography from '@amsb-ui/typography';
import { AirMilesMediaCardProps } from './types';

const StyledCard = styled(Card)`
    max-width: 28.5rem;
    box-shadow: 0px 1px 8px 0px rgba(16, 24, 40, 0.06);
    outline: 1px solid white;
    :hover {
        outline: 1px solid #61c1ee;
        transition: all ease-in-out 0.3s;
    }
    :focus {
        outline: 1px solid #61c1ee;
        transition: all ease-in-out 0.3s;
    }
`;

const StyledCardActionArea = styled(CardActionArea)`
    .MuiCardActionArea-focusHighlight {
        background: transparent;
    }
`;

const AirMilesMediaCard = ({
    image,
    imageAlt,
    content,
    link,
    linkText,
    target = '_blank',
}: AirMilesMediaCardProps) => (
    <StyledCard>
        <Link href={link} target={target} color="text.secondary" underline="none">
            <StyledCardActionArea>
                <CardMedia
                    component="img"
                    height="68"
                    image={image}
                    alt={imageAlt}
                    sx={{ objectFit: 'none', pt: '1rem', pb: '0.25rem' }}
                />
                <CardContent>
                    <Typography
                        sx={{ mb: '1rem', minHeight: '90px', width: '95%' }}
                        variant="body1"
                    >
                        {content}
                    </Typography>
                    <Divider />
                    <CardActions sx={{ mt: '0.5rem' }}>
                        <Typography variant="subtitle2" color="text.secondary">
                            {linkText}
                        </Typography>
                    </CardActions>
                </CardContent>
            </StyledCardActionArea>
        </Link>
    </StyledCard>
);

export default AirMilesMediaCard;
