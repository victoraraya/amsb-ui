import { ComponentStory, ComponentMeta } from "@storybook/react";
import Typography from "./Typography";
import AirMilesThemeProvider from "@amsb-ui/theme";

export default {
  title: "Design System/Atoms/Typography",
  component: Typography,
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = () => (
  <AirMilesThemeProvider>
    <Typography variant="h1">Almost before we knew it, we had...</Typography>
    <Typography variant="h2">Almost before we knew it, we had...</Typography>
    <Typography variant="h3">Almost before we knew it, we had...</Typography>
    <Typography variant="h4">Almost before we knew it, we had...</Typography>
    <Typography variant="h5">Almost before we knew it, we had...</Typography>
    <Typography variant="h6">Almost before we knew it, we had...</Typography>
  </AirMilesThemeProvider>
);

export const Titleh1 = Template.bind({});
Titleh1.storyName = "Titles";
