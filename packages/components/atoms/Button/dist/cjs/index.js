'use strict';

var Button = require('@mui/material/Button');
var styles = require('@mui/material/styles');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var Button__default = /*#__PURE__*/_interopDefaultLegacy(Button);

const AirMilesButton = styles.styled(Button__default["default"])({
    minWidth: 190,
    boxShadow: 'none',
});

module.exports = AirMilesButton;
