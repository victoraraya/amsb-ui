'use strict';

var jsxRuntime = require('react/jsx-runtime');
var Card = require('@mui/material/Card');
var CardActions = require('@mui/material/CardActions');
var CardContent = require('@mui/material/CardContent');
var CardMedia = require('@mui/material/CardMedia');
var material = require('@mui/material');
var styles = require('@mui/material/styles');
var Typography = require('@mui/material/Typography');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var Card__default = /*#__PURE__*/_interopDefaultLegacy(Card);
var CardActions__default = /*#__PURE__*/_interopDefaultLegacy(CardActions);
var CardContent__default = /*#__PURE__*/_interopDefaultLegacy(CardContent);
var CardMedia__default = /*#__PURE__*/_interopDefaultLegacy(CardMedia);
var Typography__default = /*#__PURE__*/_interopDefaultLegacy(Typography);

const AirMilesTypography = styles.styled(Typography__default["default"])({});

const StyledCard = styles.styled(Card__default["default"]) `
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
const StyledCardActionArea = styles.styled(material.CardActionArea) `
    .MuiCardActionArea-focusHighlight {
        background: transparent;
    }
`;
const AirMilesMediaCard = ({ image, imageAlt, content, link, linkText, target = '_blank', }) => (jsxRuntime.jsx(StyledCard, { children: jsxRuntime.jsx(material.Link, Object.assign({ href: link, target: target, color: "text.secondary", underline: "none" }, { children: jsxRuntime.jsxs(StyledCardActionArea, { children: [jsxRuntime.jsx(CardMedia__default["default"], { component: "img", height: "68", image: image, alt: imageAlt, sx: { objectFit: 'none', pt: '1rem', pb: '0.25rem' } }), jsxRuntime.jsxs(CardContent__default["default"], { children: [jsxRuntime.jsx(AirMilesTypography, Object.assign({ sx: { mb: '1rem', minHeight: '90px', width: '95%' }, variant: "body1" }, { children: content })), jsxRuntime.jsx(material.Divider, {}), jsxRuntime.jsx(CardActions__default["default"], Object.assign({ sx: { mt: '0.5rem' } }, { children: jsxRuntime.jsx(AirMilesTypography, Object.assign({ variant: "subtitle2", color: "text.secondary" }, { children: linkText })) }))] })] }) })) }));

module.exports = AirMilesMediaCard;
