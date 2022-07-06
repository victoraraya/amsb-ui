/// <reference types="react" />
declare const AirMilesTypography: import("@emotion/styled").StyledComponent<import("@mui/system").SystemProps<import("@mui/material/styles").Theme> & {
    align?: "right" | "left" | "inherit" | "center" | "justify" | undefined;
    children?: import("react").ReactNode;
    classes?: Partial<import("@mui/material/Typography").TypographyClasses> | undefined;
    gutterBottom?: boolean | undefined;
    noWrap?: boolean | undefined;
    paragraph?: boolean | undefined;
    sx?: import("@mui/material/styles").SxProps<import("@mui/material/styles").Theme> | undefined;
    variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2" | "body1" | "body2" | "caption" | "button" | "overline" | "inherit" | undefined;
    variantMapping?: Partial<Record<"h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2" | "body1" | "body2" | "caption" | "button" | "overline" | "inherit", string>> | undefined;
} & import("@mui/material/OverridableComponent").CommonProps & Omit<Pick<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "key" | keyof import("react").HTMLAttributes<HTMLSpanElement>> & {
    ref?: ((instance: HTMLSpanElement | null) => void) | import("react").RefObject<HTMLSpanElement> | null | undefined;
}, keyof import("@mui/material/OverridableComponent").CommonProps | ("border" | "borderTop" | "borderRight" | "borderBottom" | "borderLeft" | "borderColor" | "borderRadius" | "display" | "displayPrint" | "overflow" | "textOverflow" | "visibility" | "whiteSpace" | "flexBasis" | "flexDirection" | "flexWrap" | "justifyContent" | "alignItems" | "alignContent" | "order" | "flex" | "flexGrow" | "flexShrink" | "alignSelf" | "justifyItems" | "justifySelf" | "gap" | "columnGap" | "rowGap" | "gridColumn" | "gridRow" | "gridAutoFlow" | "gridAutoColumns" | "gridAutoRows" | "gridTemplateColumns" | "gridTemplateRows" | "gridTemplateAreas" | "gridArea" | "bgcolor" | "color" | "zIndex" | "position" | "top" | "right" | "bottom" | "left" | "boxShadow" | "width" | "maxWidth" | "minWidth" | "height" | "maxHeight" | "minHeight" | "boxSizing" | "m" | "mt" | "mr" | "mb" | "ml" | "mx" | "my" | "p" | "pt" | "pr" | "pb" | "pl" | "px" | "py" | "margin" | "marginTop" | "marginRight" | "marginBottom" | "marginLeft" | "marginX" | "marginY" | "padding" | "paddingTop" | "paddingRight" | "paddingBottom" | "paddingLeft" | "paddingX" | "paddingY" | "typography" | "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "letterSpacing" | "lineHeight" | "textAlign" | "textTransform") | "children" | "align" | "gutterBottom" | "noWrap" | "paragraph" | "sx" | "variant" | "variantMapping"> & import("@mui/system").MUIStyledCommonProps<import("@mui/material/styles").Theme>, {}, {}>;
export default AirMilesTypography;
