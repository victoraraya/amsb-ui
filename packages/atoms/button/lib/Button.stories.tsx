import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./Button";
import AirMilesThemeProvider from "@amsb-ui/theme";

export default {
  title: "Design System/Atoms/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = () => (
  <AirMilesThemeProvider>
    <Button variant="contained">Button</Button>
  </AirMilesThemeProvider>
);

export const Primary = Template.bind({});
