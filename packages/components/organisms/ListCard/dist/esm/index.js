import { jsx, jsxs } from 'react/jsx-runtime';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, Link, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const AirMilesGrid = Grid;

const AirMilesTypography = styled(Typography)({});

const StyledCard = styled(Card) `
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
const StyledCardActionArea = styled(CardActionArea) `
    .MuiCardActionArea-focusHighlight {
        background: transparent;
    }
`;
const AirMilesMediaCard = ({ image, imageAlt, content, link, linkText, target = '_blank', }) => (jsx(StyledCard, { children: jsx(Link, Object.assign({ href: link, target: target, color: "text.secondary", underline: "none" }, { children: jsxs(StyledCardActionArea, { children: [jsx(CardMedia, { component: "img", height: "68", image: image, alt: imageAlt, sx: { objectFit: 'none', pt: '1rem', pb: '0.25rem' } }), jsxs(CardContent, { children: [jsx(AirMilesTypography, Object.assign({ sx: { mb: '1rem', minHeight: '90px', width: '95%' }, variant: "body1" }, { children: content })), jsx(Divider, {}), jsx(CardActions, Object.assign({ sx: { mt: '0.5rem' } }, { children: jsx(AirMilesTypography, Object.assign({ variant: "subtitle2", color: "text.secondary" }, { children: linkText })) }))] })] }) })) }));

const ListCard = ({ data }) => {
    const sizeValue = data.length <= 2 ? 6 : 4;
    return (jsx(AirMilesGrid, Object.assign({ container: true, justifyContent: "space-between", spacing: 4.5 }, { children: data.map((card) => (jsx(AirMilesGrid, Object.assign({ item: true, xs: 12, sm: sizeValue }, { children: jsx(AirMilesMediaCard, { image: card.image, imageAlt: card.imageAlt, content: card.content, link: card.link, linkText: card.linkText, id: card.id }) }), card.id))) })));
};

export { ListCard as default };
